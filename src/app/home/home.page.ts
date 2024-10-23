import {Component, OnInit} from '@angular/core';
import {ApiServiceService} from '../services/api-service.service';
import {SessionService} from '../services/session.service';
import {MatDialog} from '@angular/material/dialog';
import {EarningPopupPage} from '../modals/earning-popup/earning-popup.page';
import {AlertController} from '@ionic/angular';
import * as moment from 'moment';
import * as _ from 'lodash';
import {UtilService} from '../services/util.service';
import {Slot} from '../models/UserDetail';
import {MatBottomSheet} from '@angular/material/bottom-sheet';
import {DetailsSheetPage} from '../modals/details-sheet/details-sheet.page';
import {LocalStorageService} from '../services/local-storage.service';
import {EarningSheetPage} from '../modals/earning-sheet/earning-sheet.page';

@Component({
    selector: 'app-home',
    templateUrl: './home.page.html',
    styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {
    public orders: any = [];

    date = moment();
    selectedDay = moment();
    allOrders;
    public days: any;
    slideOpts = {
        initialSlide: 0,
        slidesPerView: 5.5
    };
    public allSlots: Slot[];
    private onCloseData: any;

    constructor(private local: LocalStorageService, public util: UtilService, private api: ApiServiceService, public session: SessionService, public dialog: MatDialog, public alertController: AlertController,
                private bottomSheet: MatBottomSheet) {
    }

    ngOnInit() {
        this.init();
    }

    async init() {
        await this.util.checkLogin();
        this.removePreviousSLots();
        this.util.orderUpdate.subscribe(data => {
            if (data){
                this.getOrdersByDate(moment(), this.session.getUser().id);
                this.getNextDays();
                this.selectedDay = moment();
            }
        });

        // update token
        this.sendFCMToken();
    }

    async sendFCMToken(){
        const fcmToken = await this.local.getValue('fcm_token');

        if (fcmToken){
            try {
                await this.api.setFCMToken(this.session.getUser().id, fcmToken);
            } catch (e) {
                console.log('Err in token submit!');
            }
        }
    }

    ionViewWillEnter() {
        this.getOrdersByDate(moment(), this.session.getUser().id);
        this.getNextDays();
        this.selectedDay = moment();
        console.log('ionViewDidEnter*****************');
        this.getOrders();

    }

    getNextDays() {
        let daysToGet = 35;
        const arrDays = [];
        while (daysToGet) {
            const current = moment(this.date).add(daysToGet, 'day');
            arrDays.push(current);
            daysToGet--;
        }
        return this.days = [moment()].concat(arrDays.reverse());
    }

    getOrdersByDate(start, user) {
        this.selectedDay = start;
        start = moment(start).startOf('day').toDate().toISOString();
        const end = moment(start).endOf('day').toDate().toISOString();
        this.api.getOrdersByDate(start, end, user).subscribe(data => {
            this.allOrders = data;
            this.allOrders = _.filter(this.allOrders, (order) => {
                return order.status === 'PAYMENT_CONFIRMED' || order.status === 'COMPLETED';
            });
        }, error => {
            this.util.openSnackBar('Sorry!! an error occurred while getting orders', '');
        });

    }


    openDialog(order): void {
        console.log('this is order data to be sent', order);
        const dialogRef = this.dialog.open(EarningPopupPage, {
            width: '350px',
            data: {order}
        });
        dialogRef.afterClosed().subscribe(result => {
            console.log('The dialog was closed');
            this.onCloseData = result;
        });
    }

    openDetailBottomSheet(order): void {
        this.bottomSheet.open(DetailsSheetPage, {
            data: {order},

        });
    }

    async presentAlertConfirm(id) {
        const alert = await this.alertController.create({
            cssClass: 'my-custom-class',
            header: 'Confirm!',
            message: 'Cancel this order!!!',
            buttons: [
                {
                    text: 'No',
                    role: 'cancel',
                    cssClass: 'secondary',
                    handler: (blah) => {
                        console.log('Confirm Cancel', blah);
                    }
                }, {
                    text: 'Yes',
                    handler: () => {
                        this.api.updateOrderStatus(id, {status: 'REJECTED'}).subscribe(data => {
                            console.log('Confirm Okay');
                            this.util.openSnackBar('Status Updated to "Cancel', '');
                        });
                    }
                }
            ]
        });
        await alert.present();
    }


    getDaysCss(day: any) {
        if (moment(day).isSame(this.selectedDay, 'day')) {
            return 'days-selected';
        } else {
            return 'days';
        }
    }

    // Remove previous slots before last 7 days

    removePreviousSLots() {
        // get user details
        this.api.getUser(this.session.getUser().id).subscribe(data => {
            this.allSlots = data.slots;
            const slots = [];
            this.allSlots.forEach(item => {
                if (moment(item.date).isBefore(moment().subtract(7, 'day')) && item.available) {
                    slots.push(item);
                } else {
                }
            });

            // get unique slots
            this.allSlots = _.difference(this.allSlots, slots);
            const body = {
                slots: this.allSlots
            };

            // update user if there are slots before 7 days
            if (slots.length > 0) {
                this.api.updateUser(this.session.getUser().id, body).subscribe(resp => {
                    console.log('slots are removed and updated', resp);
                }, error => {
                    console.log('an error occurred while updating slots ', error);
                });
            } else {
                console.log('nothing to do here');
            }
        }, error => {
            console.log('an error occurred while getting user', error);
        });
    }

    getStatusColor(status: string) {
        status = status.toUpperCase();
        console.log('Status', status);
        if (status === 'PAYMENT_CONFIRMED') {
            return '#1E90FF';
        } else if (status === 'COMPLETED') {
            return '#4caf50';
        } else if (status === 'PENDING') {
            return '#4caf50';
        } else if (status === 'CANCELLED') {
            return '#d32f2f';
        }else if (status === 'REJECTED') {
            return '#e74e01';
        } else {
            return '#000000';
        }
    }
    getStatus(status: string) {
        let mWord = status.toLowerCase();
        mWord = mWord.replace('_', ' ');
        return mWord[0].toUpperCase() + mWord.substr(1).toLowerCase();
    }

    getCss(status) {
        status = status.toUpperCase();
        console.log('Status', status);
        if (status === 'PAYMENT_CONFIRMED') {
            return '#c4e1f8';
        } else if (status === 'COMPLETED') {
            return '#f0fdf8';
        } else if (status === 'PENDING') {
            return '#f5fdf8';
        } else if (status === 'CANCELLED') {
            return '#ffe6e6';
        }else if (status === 'REJECTED') {
            return '#FFE6E6';
        } else {
            return '#ffffff';
        }
    }


    getOrders() {
        this.api.getOrdersByDate(moment().startOf('day').toDate().toISOString(), moment().add('365', 'days').toDate().toISOString(), this.session.getUser().id).subscribe(data => {
            // this.weekOrders = data;
            this.orders = _.filter(data, el => (el.status === 'PAYMENT_CONFIRMED' || el.status === 'COMPLETED') );
            this.orders = _.sortBy(this.orders, 'date', 'time');

        }, error => {
            console.log('an error occurred while fetching weekly order data', error);

        });
    }

    // Open Earning Bottom sheet
    openEarningBottomSheet(order): void {
        this.bottomSheet.open(EarningSheetPage, {
            data: {order},

        });
    }


    public getHumanShortDate(date) {
        return moment(date).format('DD-MMM');
    }

}
