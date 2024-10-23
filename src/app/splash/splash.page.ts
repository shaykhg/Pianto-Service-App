import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {UtilService} from '../services/util.service';
import {Platform} from '@ionic/angular';
import {StatusBar} from '@ionic-native/status-bar/ngx';
import {LocalStorageService} from '../services/local-storage.service';
import {SessionService} from '../services/session.service';

@Component({
    selector: 'app-splash',
    templateUrl: './splash.page.html',
    styleUrls: ['./splash.page.scss'],
})
export class SplashPage implements OnInit {

    constructor(private session: SessionService, private router: Router, private util: UtilService,
                private platform: Platform, private statusBar: StatusBar, private storage: LocalStorageService) {
    }

    ngOnInit() {
        this.platform.ready().then(() => {
            this.statusBar.styleDefault();
        });

        // we don't need this splash screen but only using it as routing mechanism to handle onboarding and session
        this.storage.getValue('first').then((val) => {
            if (val) {
                this.session.auth.subscribe(data => {
                    if (data) {
                        this.router.navigate(['/tab/tabs/home'], {replaceUrl: true});
                    } else {
                        this.router.navigate(['/login'], {replaceUrl: true});
                    }
                });

            } else {
                console.log('Login', this.storage.getValue('loggedIn').then((login) => {
                    return login;
                }));
                this.router.navigate(['/login'], {replaceUrl: true});

                // this.router.navigate(['/onboarding'], {replaceUrl: true});
            }
        });

    }
}
