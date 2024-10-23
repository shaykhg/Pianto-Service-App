import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {User} from '../models/UserDetail';
import {ApiServiceService} from '../services/api-service.service';
import {LocalStorageService} from '../services/local-storage.service';
import {SessionService} from '../services/session.service';
import {UtilService} from '../services/util.service';
import * as _ from 'lodash';
import {Extra} from '../models/Extras';

@Component({
  selector: 'app-personal-info',
  templateUrl: './personal-info.page.html',
  styleUrls: ['./personal-info.page.scss'],
})
export class PersonalInfoPage implements OnInit {

  profileForm: FormGroup;
  private userData: User;
  city = [];
  post;
  public postcodes: Extra[];
  public postCodeResult: any;
  public postCodeIsValid = false;
  postCodeEnter: any;

  constructor(private formBuilder: FormBuilder, private api: ApiServiceService, private localStorage: LocalStorageService,
              public session: SessionService, private util: UtilService) {}

  ngOnInit(): void {
  this.init();
  }

  async init(){
    this.profileForm = this.formBuilder.group({
      firstName: ['', Validators.required],
      lastName: [''],
      telephone: ['', Validators.required],
      email: ['', Validators.required],
      // address: ['', Validators.required],
      city: [''],
      // postcode: [''],
      newCiy: ['']
    });
    await this.util.checkLogin();
    this.getUserDetails();
  }

  onSearchChange(value) {
    if (value.length === 5) {
      this.checkAvailability(value);
    } else {
      this.postCodeIsValid = false;
      this.post = undefined;
    }
  }

  checkAvailability(postcode) {
    console.log('these are postcodes', postcode);
    const body = [{type: 'postcode'}, {value: postcode}];
    this.api.getAllSearchInExtras(body).subscribe(data => {
      this.postcodes = data;
      console.log('postcodes***********', this.postcodes);

      if (_.find(this.postcodes, {value: postcode})) {
        this.postCodeResult = _.find(this.postcodes, {value: postcode});
        this.postCodeIsValid = true;
        this.post = this.postCodeResult.name;
      } else {
        this.util.openSnackBar('Please enter a valid postcode', '');
        console.log('this postcode is not available');
        this.postCodeIsValid = false;
        this.post = undefined;

      }
    }, error => {
      console.log('An error occurred while fetching postcodes', error);
    });
  }


  async getUserDetails() {
    await this.api.getUser(this.session.getUser().id).subscribe(data => {
      this.userData = data;
      this.profileForm.patchValue({
        firstName: this.userData.name,
        lastName: this.userData.lastName,
        telephone: this.userData.phone,
        email: this.userData.email,
        address: this.userData.city + this.userData.country + this.userData.postcode,
        postcode: this.userData.postcode
      });
      this.city = this.userData.city;
      console.log('This is user data', this.userData);
    }, error => {
      console.log('an error occurred while fetching user data', error);
    });
  }

  updateUser() {
    const body = {
      name: this.profileForm.value.firstName,
      lastName: this.profileForm.value.lastName,
      phone: this.profileForm.value.telephone,
      city: this.profileForm.value.city,
    };
    body.city = this.city;

    if (this.profileForm.valid){
      this.api.updateUser(this.session.getUser().id, body).subscribe(data => {
        console.log('pofile updated', data);
        this.util.openSnackBar('Profile updated successfully', '');
      }, error => {
        console.log('error occurred while updating', error);
      });
    } else {
      this.util.openSnackBar('Please correct form errors first', '');

    }

  }

  addCity(value: string) {
    const lowercaseCity = value.toLowerCase();
    this.city.push({name : lowercaseCity});
  }

  removeCity(name) {
    console.log('these are city before removing', this.city);
    _.remove(this.city, {name : name.name});
    console.log('these are city after removing', this.city);

  }
}
