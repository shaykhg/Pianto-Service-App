import { Injectable } from '@angular/core';
import * as moment from 'moment';
import {MatSnackBar} from '@angular/material/snack-bar';
import {ApiServiceService} from './api-service.service';
import {SessionService} from './session.service';
import {BehaviorSubject} from 'rxjs';
import {Router} from '@angular/router';
import {ToastController} from '@ionic/angular';

@Injectable({
  providedIn: 'root'
})
export class UtilService {
  public loading = false;
  public orderUpdate = new BehaviorSubject<boolean>(false);

  constructor(private api: ApiServiceService, private toast: ToastController, private snackBar: MatSnackBar, private session: SessionService, private router: Router) {
  }

  public getHumanShortDate(date) {
    return moment(date).format('DD-MMM-YYYY');
  }

  public getTime(date) {
    return moment(date).format('H:mm');
  }

  async openSnackBar(message: string, action: string = 'OK') {
    const toast = await this.toast.create({
      message,
      duration: 2000
    });
    await toast.present();
  }

  private addDelay(){
    return new Promise((resolve, reject) => {
      setTimeout(() => { resolve(true); }, 300);
    });
  }

  async checkLogin() {
    // show loading
    this.loading = true;

    while (!this.session.isSessionReady){
      await this.addDelay();
    }

    this.loading = false;
    return new Promise((resolve, reject) => { resolve(this.verifyLogin()); });
  }

  private verifyLogin(): boolean {
    if (this.session.isLoggedIn) {
      // this.router.navigate(['tab/tabs/home'], {replaceUrl: true});
      console.log('about to call setheaders function 1', this.session.getToken() );
      this.api.setHeaders();
      return true;
    } else {
      this.router.navigate(['/login'], {replaceUrl: true});
      this.loading = false;
      return false;
    }
  }

// to delete slots before last 7 days

}
