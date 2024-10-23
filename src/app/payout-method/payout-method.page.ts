import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {ApiServiceService} from '../services/api-service.service';
import {SessionService} from '../services/session.service';

@Component({
  selector: 'app-payout-method',
  templateUrl: './payout-method.page.html',
  styleUrls: ['./payout-method.page.scss'],
})
export class PayoutMethodPage implements OnInit {
  payment: FormGroup;
  payoutData;

  constructor( private formBuilder: FormBuilder, private api: ApiServiceService, private session: SessionService) { }

  exist;

  ngOnInit() {
    this.payment = this.formBuilder.group({
      name: ['', Validators.required],
      account: ['', Validators.required],
      swift: ['', Validators.required]
    });
    this.getPayoutMethod();
  }


  getPayoutMethod() {
    this.api.getPayoutByUser(this.session.getUser().id).subscribe(data => {
      this.payoutData = data.results[0];
      this.payment.patchValue({
        name: data.results[0].name,
        account: data.results[0].bank,
        swift: data.results[0].swift,
      });
      this.exist = true;
      console.log('this is payout method of user', data);
    }, error => {
      console.log('this is payout method of user', error);
      this.exist = false;

    });
  }

  postPayoutMethod() {
    const body = {
      name : this.payment.value.name,
      bank : this.payment.value.account,
      swift : this.payment.value.swift,
      user : this.session.getUser().id,
      enable: true
    };
    this.api.postPayout(body).subscribe( data => {
      console.log('Payout method posted successfully', data);
    }, error => {
      console.log('An error occurred while posting payout method', error);
    });
  }


  updatePayoutMethod() {
    console.log('this is payout data', this.payoutData );
    const body = {
      name : this.payment.value.name,
      bank : this.payment.value.account,
      swift : this.payment.value.swift,
    };
    this.api.updatePayout(this.payoutData._id, body).subscribe( data => {
      console.log('Payout method posted successfully', data);
    }, error => {
      console.log('An error occurred while posting payout method', error);
    });
  }




}
