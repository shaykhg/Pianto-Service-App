import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {Router} from '@angular/router';
import {ApiServiceService} from '../services/api-service.service';
import {SessionService} from '../services/session.service';
import {UtilService} from '../services/util.service';
import {LocalStorageService} from '../services/local-storage.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  loginForm: FormGroup;
  loading = true;

  constructor(private local: LocalStorageService, private formBuilder: FormBuilder, private api: ApiServiceService, private router: Router, private session: SessionService, public util: UtilService) { }

  ngOnInit(): void {
    this.takeToHome();
    this.loginForm = this.formBuilder.group({
      email: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  takeToHome(){
    this.util.checkLogin().then(() => {
      if (this.session.isLoggedIn){
        this.router.navigate(['/tab/tabs/home'], {replaceUrl: true});
      }
    });
  }

  ionViewDidEnter(){
    this.takeToHome();
  }

  async login() {

    const body = {
      email : this.loginForm.value.email,
      password : this.loginForm.value.password
    };

    try {
      const loginResponse =  await this.api.login(body).toPromise();
      if (loginResponse.user.role !== 'service') {
        this.util.openSnackBar('Please login through Service Man id', '');
      } else {
        if (loginResponse.tokens.access) {
          await this.saveInfo(loginResponse);
        }
        console.log('this is login response', loginResponse.tokens.access.token);
      }
    } catch (e) {
      this.util.openSnackBar(e, '');
      // Now call msg service and there should be an special dialog for error this.msgService.showError(e.msg)
    }
  }


  async saveInfo(data){
    console.log('this is user data from api', data);
    try {
      await this.session.setToken(data.tokens.access.token);
      await this.api.setToken(data.tokens.access.token);
      const fcmToken = await this.local.getValue('fcm_token');
      const fcm = await this.api.setFCMToken(data.user.id, fcmToken).toPromise();
      console.log('FCM TOKEN', fcm, fcmToken);
      await this.api.setHeaders();
      await this.session.setUser(data.user);
      await this.router.navigateByUrl('/tab/tabs/home');
      console.log('It should move');
    } catch (e) {
      console.log('an error occurred in saving info', e);
    }
  }

  // async checkLogin() {
  //   // show loading
  //   this.loading = true;
  //   console.log('this is session login', this.session.isLoggedIn);
  //   if (this.session.isSessionReady){
  //     if (this.session.isLoggedIn) {
  //       this.router.navigate(['tab/tabs/home'], {replaceUrl: true});
  //     }
  //     this.loading = false;
  //   } else {
  //     setTimeout(() => {
  //       this.checkLogin();
  //     }, 300);
  //   }
  // }

}
