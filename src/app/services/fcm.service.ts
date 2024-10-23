import { Injectable } from '@angular/core';
import {
  Plugins,
  PushNotification,
  PushNotificationToken,
  PushNotificationActionPerformed,
  Capacitor
} from '@capacitor/core';
import { Router } from '@angular/router';
import {ApiServiceService} from './api-service.service';
import {SessionService} from './session.service';
import {LocalStorageService} from './local-storage.service';

const { PushNotifications } = Plugins;

@Injectable({
  providedIn: 'root'
})
export class FcmService {

  constructor(private local: LocalStorageService, private session: SessionService, private router: Router, private api: ApiServiceService) { }

  initPush() {
    if (Capacitor.platform !== 'web') {
      this.registerPush();
    }
  }

  private registerPush() {
    PushNotifications.requestPermission().then((permission) => {
      if (permission.granted) {
        // Register with Apple / Google to receive push via APNS/FCM
        PushNotifications.register();
      } else {
        // No permission for push granted
      }
    });

    PushNotifications.addListener(
        'registration',
        async (token: PushNotificationToken) => {
          console.log('My token: ' + JSON.stringify(token));
          await this.local.setString('fcm_token', token.value);
          if (this.session.isLoggedIn) {
              this.api.setFCMToken(this.session.getUser()._id, token.value).subscribe(data => {
               console.log('All good', data);
           });
          }
        }
    );

    PushNotifications.addListener('registrationError', (error: any) => {
      console.log('Error: ' + JSON.stringify(error));
    });

    PushNotifications.addListener(
        'pushNotificationReceived',
        async (notification: PushNotification) => {
          console.log('Push received: ' + JSON.stringify(notification));
        }
    );

    PushNotifications.addListener(
        'pushNotificationActionPerformed',
        async (notification: PushNotificationActionPerformed) => {
          const data = notification.notification.data;
          console.log('Action performed: ' + JSON.stringify(notification.notification));
          if (data.detailsId) {
            this.router.navigateByUrl(`/home/${data.detailsId}`);
          }
        }
    );
  }
}
