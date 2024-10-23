import {Injectable} from '@angular/core';
import {LocalStorageService} from './local-storage.service';
import {BehaviorSubject, Observable, ReplaySubject} from 'rxjs';
import {Router} from '@angular/router';
import {UtilService} from './util.service';
import {MatSnackBar} from "@angular/material/snack-bar";
import {ToastController} from '@ionic/angular';

@Injectable({
    providedIn: 'root'
})

/**
 * This service is used to keep the things related to Auth,
 * so user info, token and things like that can be kept here
 */
export class SessionService {

    private token: string;
    private user: any;
    public isSessionReady = false;
    public isLoggedIn = false;
    // public auth = new BehaviorSubject<boolean>(null);
    public auth = new ReplaySubject(1);

    constructor( private toast: ToastController, private storage: LocalStorageService, public snackBar: MatSnackBar, private router: Router) {
        // Get all info from localstorage
        this.init().then(() => {
            this.isSessionReady = true;
            console.log('Session service is read!');
        }).catch((e) => {
            this.isSessionReady = true;
            console.log('Unable to init session service');
        });
    }

    /**
     * To be used to set token.
     * @param token - The token post received post login.
     */
    async setToken(token: string) {
        this.token = token;
        await this.storage.setString('token', token);
        await this.storage.setBoolean('loggedIn', true);
    }

    /**
     * To be used to set user.
     * @param user - The user object.
     */
    async setUser(user: any) {
        this.user = user;
        this.isLoggedIn = true;
        await this.storage.setObject('user', user);
        console.log('Check usr', user);
        this.auth.next(true);
    }

    /** This function can be used to get token */
    getToken() {
        return this.token;
    }

    /** This function can be used to get user */
    getUser() {
        return this.user;
    }

    /** Logout current user */
    // logout() {
    //     this.isLoggedIn = false;
    //     this.storage.deleteObject('user');
    //     this.storage.deleteObject('token');
    //     this.token = '';
    //     this.isLoggedIn = false;
    //     this.auth.next(false);
    //     this.router.navigateByUrl('/login');
    // }

    public async logout(){
        try {
            await this.storage.removeObject('user');
            await this.storage.removeObject('token');
            await this.storage.removeObject('loggedIn');
            this.token = '';
            this.isLoggedIn = false;
            this.auth.next(false);
            this.router.navigateByUrl('/login');
        } catch (e) {
            console.log('An error occurred while loading user data', e);
        }
    }

    /** This function is private and should not be used for anything else than init of session service */
    private async init() {
        console.log('Init function is called in session');
        this.isLoggedIn = await this.storage.getValue('loggedIn');
        this.user = await this.storage.getObject('user');
        this.token = await this.storage.getValue('token');
        const decoded = atob(this.token.split('.')[1]);
        const d = new Date(0);
        d.setUTCSeconds(JSON.parse(decoded).exp);
        if (new Date() > d){
            // token is expired
            this.openSnackBar('Your session is expired, please login again!');
            this.router.navigate(['/login'], {replaceUrl: true});
            this.auth.next(false);
            // if there is any refresh token api you can call it otherwise user will be logged out
        } else {
            console.log('Auth loaded is ', this.isLoggedIn);
            console.log('User loaded is ', this.user);
            this.isLoggedIn = (!!this.user && this.isLoggedIn);
            // Remove this block if prod
            console.log('Auth is ', this.isLoggedIn);
            this.auth.next(this.isLoggedIn);
        }
    }

    async openSnackBar(message: string, action: string = 'OK') {
        const toast = await this.toast.create({
            message,
            duration: 2000
        });
        await toast.present();
    }
}
