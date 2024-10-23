import {Component, OnInit} from '@angular/core';
import {EarningPopupPage} from '../modals/earning-popup/earning-popup.page';
import {MatDialog} from '@angular/material/dialog';
import * as moment from 'moment';
import * as _ from 'lodash';
import {ApiServiceService} from '../services/api-service.service';
import {Order} from '../models/Orders';
import {ModalController} from '@ionic/angular';
import {ReviewPopupPage} from '../modals/review-popup/review-popup.page';
import {SessionService} from '../services/session.service';
import {UtilService} from '../services/util.service';
import {MatBottomSheet} from '@angular/material/bottom-sheet';
import {ReviewSheetPage} from '../modals/review-sheet/review-sheet.page';
import {EarningSheetPage} from '../modals/earning-sheet/earning-sheet.page';

@Component({
    selector: 'app-dashboard',
    templateUrl: './dashboard.page.html',
    styleUrls: ['./dashboard.page.scss'],
})
export class DashboardPage implements OnInit {

    animal: string;
    name: string;
    date = moment();
    weekOrders: Order[] = [];
    monthOrders: Order[] = [];
    yearOrders: Order[] = [];

    weekReviews = [];
    monthReviews = [];
    yearReviews = [];

    reviewArray = Array;
    totalEarning: number;
    avgReview: number;

    type = 1;
    typeOfEarning = 1;
    earningPercentage = 0.7;
    dates = [{start: moment().subtract(7, 'days')},
        {start: moment().subtract(30, 'days'), end: moment()},
        {start: moment().subtract(365, 'days'), end: moment()}];

    constructor(private bottomSheet: MatBottomSheet, public dialog: MatDialog, private api: ApiServiceService, public modalController: ModalController, private session: SessionService, public util: UtilService) {
    }

    ngOnInit() {
        this.init();
    }

    ionViewWillEnter() {
        this.getWeeklyOrder();
        this.getMonthlyOrder();
        this.getAnnualOrder();

        this.getWeeklyReviews();
        this.getMonthlyReviews();
        this.getAnnualReviews();
    }

    async init() {
        await this.util.checkLogin();
        this.getAvgReview(1);
        this.getWeeklyReviews();

    }


    getTotalEarning(type) {

        if (type === 1) {
            this.totalEarning = _.sumBy(this.weekOrders, 'total') + _.sumBy(this.weekOrders, 'discount');
            return (this.totalEarning * this.earningPercentage).toFixed(2);

        } else if (type === 2) {
            this.totalEarning = _.sumBy(this.monthOrders, 'total') + _.sumBy(this.monthOrders, 'discount');
            return (this.totalEarning * this.earningPercentage).toFixed(2);

        } else if (type === 3) {
            this.totalEarning = _.sumBy(this.yearOrders, 'total') +  _.sumBy(this.yearOrders, 'discount');
            return (this.totalEarning * this.earningPercentage).toFixed(2);

        }

    }

    getWeeklyOrder() {
        this.api.getOrdersByDate(moment().subtract(7, 'days').toDate().toISOString(), moment().toDate().toISOString(), this.session.getUser().id).subscribe(data => {
            // this.weekOrders = data;
            this.weekOrders = _.filter(data, {status: 'COMPLETED'});
            console.log('these are week orders', this.weekOrders);

        }, error => {
            console.log('an error occurred while fetching weekly order data', error);

        });
    }

    getMonthlyOrder() {

        this.api.getOrdersByDate(moment().subtract(30, 'days').toDate().toISOString(), moment().toDate().toISOString(), this.session.getUser().id).subscribe(data => {
            // this.monthOrders = data;
            this.monthOrders = _.filter(data, {status: 'COMPLETED'});

        }, error => {
            console.log('an error occurred while fetching monthly data', error);

        });
    }

    getAnnualOrder() {

        this.api.getOrdersByDate(moment().subtract(365, 'days').toDate().toISOString(), moment().toDate().toISOString(), this.session.getUser().id).subscribe(data => {
            // this.yearOrders = data;
            this.yearOrders = _.filter(data, {status: 'COMPLETED'});

            console.log('**************', this.yearOrders);

        }, error => {
            console.log('an error occurred while fetching annual Order data', error);

        });
    }

    getWeeklyReviews() {
        this.type = 1;

        this.api.getReviewsByDate(moment().subtract(7, 'days').toDate().toISOString(), moment().toDate().toISOString(), this.session.getUser().id).subscribe(data => {
            this.weekReviews = data;
            console.log('this review data from week review method ^^^^^^^^', this.weekReviews);
            this.getAvgReview(1);
        }, error => {
            console.log('an error occurred while fetching weekly order data', error);

        });
    }

    getMonthlyReviews() {
        this.type = 2;

        this.api.getReviewsByDate(moment().subtract(30, 'days').toDate().toISOString(), moment().toDate().toISOString(), this.session.getUser().id).subscribe(data => {
            this.monthReviews = data;
            console.log('this review data from week review method ^^^^^^^^', this.monthReviews);
            this.getAvgReview(2);

        }, error => {
            console.log('an error occurred while fetching monthly data', error);

        });
    }

    getAnnualReviews() {
        this.type = 3;

        this.api.getReviewsByDate(moment().subtract(365, 'days').toDate().toISOString(), moment().toDate().toISOString(), this.session.getUser().id).subscribe(data => {
            this.yearReviews = data;
            console.log('this review data from week review method ^^^^^^^^', this.yearReviews);
            this.getAvgReview(3);

        }, error => {
            console.log('an error occurred while fetching annual Order data', error);

        });
    }


    // Open Earning Bottom sheet
    openEarningBottomSheet(order): void {
        this.bottomSheet.open(EarningSheetPage, {
            data: {order},

        });
    }

    // Open review bottom sheet
    openReviewBottomSheet(review): void {
        this.bottomSheet.open(ReviewSheetPage, {
            data: {review},

        });
    }

    public getHumanShortDate(date) {
        return moment(date).format('DD-MMM');
    }

    async presentModal(order) {
        const modal = await this.modalController.create({
            component: EarningPopupPage,
        });
        return await modal.present();
    }


    getAvgReview(type) {
        if (type === 1) {
            this.avgReview = _.sumBy(this.weekReviews, 'rating') / this.weekReviews.length;
            this.avgReview = Number.isNaN(this.avgReview) ? 0 : Math.round(this.avgReview);
            console.log('this is total avgreview type 1', this.avgReview);
            console.log('this is week reviews lenght', this.weekReviews.length);
        } else if (type === 2) {
            this.avgReview = _.sumBy(this.monthReviews, 'rating') / this.monthReviews.length;
            this.avgReview = Number.isNaN(this.avgReview) ? 0 : Math.round(this.avgReview);
            console.log('this is total avgreview type 2', this.avgReview);
        } else if (type === 3) {
            this.avgReview = _.sumBy(this.yearReviews, 'rating') / this.yearReviews.length;
            this.avgReview = Number.isNaN(this.avgReview) ? 0 : Math.round(this.avgReview);
            console.log('this is total avgreview type 3', this.avgReview);
        }
    }

}
