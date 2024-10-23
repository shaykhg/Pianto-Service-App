import {Component, OnInit} from '@angular/core';
import * as moment from 'moment';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {ApiServiceService} from '../services/api-service.service';
import {SessionService} from '../services/session.service';
import {UtilService} from '../services/util.service';
import * as _ from 'lodash';
import {MatBottomSheet} from '@angular/material/bottom-sheet';
import {AddTimeSheetPage} from '../modals/add-time-sheet/add-time-sheet.page';
import {Order} from '../models/Orders';
import {DetailsSheetPage} from '../modals/details-sheet/details-sheet.page';
import {AlertController} from '@ionic/angular';
import {Extra} from '../models/Extras';

@Component({
    selector: 'app-calendar',
    templateUrl: './calendar.page.html',
    styleUrls: ['./calendar.page.scss'],
})
export class CalendarPage implements OnInit {

    currentDate = moment();
    changeDate = moment();
    month;
    currentMonth = moment().add(3, 'day').format('ddd');
    nextMonths = [];
    months = [];
    days = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];
    selectedDate = moment().startOf('day').add(1, 'day');
    scheduleForm: FormGroup;
    previousSlot = [];
    filteredSlots = [];
    public allOrders: Order[] = [];
    public filteredSlotsOnSelected: any;
    purpleTheme = {
        container: {
            bodyBackgroundColor: '#fafafa',
            buttonColor: '#8A2BE2'
        },
        dial: {
            dialBackgroundColor: '#8A2BE2'
        },
        clockFace: {
            clockFaceBackgroundColor: '#f0f0f0',
            clockHandColor: '#8A2BE2',
            clockFaceTimeInactiveColor: '#424242'
        }
    };
    private postcodes: Extra[];
    private postCodeResult: any;
    private postCodeIsValid = false;
    public post: any;
    city = [];
    selectedArea: any;
    panelOpenState = false;

    constructor(private formBuilder: FormBuilder, private api: ApiServiceService, public session: SessionService, public util: UtilService,
                private bottomSheet: MatBottomSheet, public alertController: AlertController) {
    }

    ngOnInit() {
        this.init();
        this.scheduleForm = this.formBuilder.group({
            from: ['', Validators.required],
            till: ['', Validators.required],
            city: ['', Validators.required],
            // postcode: ['', Validators.required],
        });
        console.log('This is city',  this.session.getUser().city);
    }


    async init(){

        await this.util.checkLogin();
        this.getDaysArrayByMonth();

        this.getUserSlots();
        this.getOrdersByDate(this.selectedDate, this.session.getUser().id);
    }


    showNextMonths() {
        let i = 0;
        for (i = 0; i < 6; i--) {
            this.nextMonths.push(moment().add(i, 'month'));
        }
    }

    getDaysArrayByMonth() {
        let daysInMonth = this.currentDate.daysInMonth();
        const arrDays = [];
        while (daysInMonth) {
            const current = moment(this.currentDate).date(daysInMonth);
            arrDays.push(current);
            daysInMonth--;
        }
        const months = [...arrDays];
        const day = months[months.length - 1].day();
        // tslint:disable-next-line:prefer-for-of
        for (let i = 0; i < day; i++) {
            months.push(0);
        }
        return this.months = months.reverse();
    }

    isPassed(day){
        return moment().isAfter(day);
    }

    changeMonth(change) {
        this.month = (change === 1 ? this.currentDate.add(1, 'months') : this.currentDate.subtract(1, 'months'));
        this.getDaysArrayByMonth();
    }

    markAvailable() {
        this.getSlotsOnDate();
        // console.log('this is form data', this.scheduleForm.value);

        // Convert Current Selected timing to moment time for comparison
        const from = this.scheduleForm.value.from;
        const till = this.scheduleForm.value.till;
        const city = this.scheduleForm.value.city.data;
        const mFrom = moment(this.selectedDate).toDate();
        mFrom.setHours(Number(from.split(':')[0]));
        mFrom.setMinutes(Number(from.split(':')[1]));

        const mTill = moment(this.selectedDate).toDate();
        mTill.setHours(Number(till.split(':')[0]));
        mTill.setMinutes(Number(till.split(':')[1]));
        // console.log('these are filtered slots;', this.filteredSlotsOnSelected);
        // console.log('this is mfrom', mFrom);
        // console.log('this is mTill', mTill);
        // console.log('checking validity', moment(mTill).isSameOrBefore(mFrom));
        console.log('This is city from mat opions', city);


        if (this.filteredSlotsOnSelected.length > 0 ) {
            console.log('Isme', this.filteredSlotsOnSelected);

            let validSlot = true;
            for (const item of this.filteredSlotsOnSelected) {
                const fromP = item.from;
                const tillP = item.till;
                const pFrom = moment(this.selectedDate).toDate();

                pFrom.setHours(Number(fromP.split(':')[0]));
                pFrom.setMinutes(Number(fromP.split(':')[1]));
                const pTill = moment(this.selectedDate).toDate();
                pTill.setHours(Number(tillP.split(':')[0]));
                pTill.setMinutes(Number(tillP.split(':')[1]));

                const invalid = (moment(mTill).isSameOrBefore(mFrom) || moment(pTill).isBetween(mFrom, mTill) ||
                    moment(pFrom).isBetween(mFrom, mTill) ||
                    moment(pTill).isSame(mTill) || moment(pTill).isSame(mFrom) ||
                    moment(pFrom).isSame(mFrom) || moment(pFrom).isSame(mTill));
                console.log('This is item of city', item.city);
                console.log('Invalid', invalid);
                if (invalid){
                    this.util.openSnackBar('Your slot overlap with existing slot or time is invalid!', 'ok');
                    validSlot = false;
                    return true;
                }

            }

            if (validSlot) {
                console.log('this is slot schedule', this.scheduleForm);
                this.api.getUser(this.session.getUser().id).subscribe(data => {
                    this.previousSlot = data.slots;
                    console.log('this is previous slot', this.previousSlot);
                    if (this.scheduleForm.valid) {
                        const body = {
                            slots: [{
                                date: this.selectedDate.startOf('day').toDate().toISOString(),
                                from: this.scheduleForm.value.from,
                                till: this.scheduleForm.value.till,
                                available: true,
                                city: this.scheduleForm.value.city.data,
                                area: this.scheduleForm.value.city.name
                            }].concat(this.previousSlot)
                        };
                        console.log('this is body', body);
                        this.api.markAvailable(this.session.getUser().id, body).subscribe(resp => {
                            console.log('this date and time is available', resp);
                            this.getUserSlots();
                            this.util.openSnackBar('Schedule marked available', '');
                        });
                    } else {
                        this.util.openSnackBar('PLease Select Time', '');
                    }
                }, error => {
                    console.log('an error occurred while getting slots', error);
                });
            }
        } else {
            if (moment(mTill).isSameOrBefore(mFrom)) {
                this.util.openSnackBar('Your slot overlap with existing slot or time is invalid!', 'ok');
            } else {
                console.log('usme', this.filteredSlotsOnSelected);
                this.api.getUser(this.session.getUser().id).subscribe(data => {
                    this.previousSlot = data.slots;
                    console.log('this is previous slot', this.previousSlot);
                    if (this.scheduleForm.valid) {
                        const body = {
                            slots: [{
                                date: this.selectedDate.startOf('day').toDate().toISOString(),
                                from: this.scheduleForm.value.from,
                                till: this.scheduleForm.value.till,
                                available: true,
                                city: this.scheduleForm.value.city.data,
                                area: this.scheduleForm.value.city.name
                            }].concat(this.previousSlot)
                        };
                        console.log('this is body', body);
                        this.api.markAvailable(this.session.getUser().id, body).subscribe(resp => {
                            console.log('this date and time is available', resp);
                            this.getUserSlots();
                            this.util.openSnackBar('Schedule marked available', '');
                        });
                    } else {
                        this.util.openSnackBar('PLease Select Time', '');
                    }
                }, error => {
                    console.log('an error occurred while getting slots', error);
                });
            }
        }
    }

    getUserSlots() {
        this.api.getUser(this.session.getUser().id).subscribe(data => {
            this.previousSlot = data.slots;
            this.previousSlot = _.sortBy(this.previousSlot, 'date');
            this.getSlotsOnDate();
            console.log('These are previous slots******************', this.previousSlot);
        }, error => {
            console.log('an error occurred while getting slots', error);
        });
    }

    selectDate(day) {
        this.selectedDate = day;
        this.getSlotsOnDate();
        this.getOrdersByDate(day, this.session.getUser().id);
        console.log('this is selected Date', day);
    }

    getSlotsOnDate() {
            const slotsOnSelectedDate = _.filter(this.previousSlot, {date: this.selectedDate.startOf('day').toDate().toISOString(), available: true});
            const slotsOnDate = _.filter(this.previousSlot, {available: true});
            this.filteredSlots = slotsOnDate;
            this.filteredSlotsOnSelected = slotsOnSelectedDate;
            console.log('this is selected date', this.selectedDate.date());
            console.log('these are slots on selected ***********************', slotsOnDate);
    }


    getDayCss(day: any) {
        if (moment(day).isSame(moment(this.selectedDate))) {
            return 'grid-column-selected';
        } else if (this.getAvailableDay(day)) {
            return 'slot-selected-day';
        } else {
            return 'grid-column';
        }
    }

    getAvailableDay(day: any) {
        if (this.previousSlot.length > 0) {
            const hasSlot = _.filter(this.previousSlot, item => {
                return moment(item.date).isSame(day, 'day');
            });

            return hasSlot.length;

        } else {
            return 0;
        }
    }

    cancelAvailableSlot(slot) {
        _.remove(this.previousSlot, slot);
        const body = {
            slots : this.previousSlot
        };
        this.api.markAvailable(this.session.getUser().id, body).subscribe( data => {
            this.getUserSlots();
            console.log('cancelled successfully', this.previousSlot);
            this.util.openSnackBar('Cancelled Successfully', '');
            }, error => {
            console.log('An error Occurred while cancelling', error);
        });
        console.log('this is slots before@@@', this.previousSlot);
        _.remove(this.previousSlot, slot);
        console.log('this is slots before@@@', this.previousSlot);

    }

    openTimeBottomSheet(): void {
        this.bottomSheet.open(AddTimeSheetPage, {
            data: {date : this.selectedDate},
        });
    }

    openDetailBottomSheet(order): void {
        this.bottomSheet.open(DetailsSheetPage, {
            data: {order},

        });
    }



    getOrdersByDate(start , user) {
        this.selectedDate = start;
        const startDate = start.startOf('day').toDate().toISOString();
        const end   = start.endOf('day').toDate().toISOString();
        this.api.getOrdersByDate(startDate, end, user).subscribe(data => {
            this.allOrders = data;
            console.log('start date for orders', startDate);
            console.log('end date for orders', end);
            console.log('All Orders', this.allOrders);
            // console.log('All Orders', start);

        }, error => {
            console.log('An error occurred while getting Orders', error);
        });

    }

    async cancelSlot(slot) {
        const alert = await this.alertController.create({
            header: 'Confirm!',
            message: 'Are sure to cancel this slot!!!',
            buttons: [
                {
                    text: 'Cancel',
                    role: 'cancel',
                    cssClass: 'secondary',
                    handler: (blah) => {
                        console.log('Confirm Cancel: blah');
                    }
                }, {
                    text: 'Yes',
                    handler: () => {
                        this.cancelAvailableSlot(slot);
                        console.log('Confirm Okay');
                    }
                }
            ]
        });

        await alert.present();
    }

    getStatus(status: string) {
        let mWord = status.toLowerCase();
        mWord = mWord.replace('_', ' ');
        return mWord[0].toUpperCase() + mWord.substr(1).toLowerCase();
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

    onSearchChange(value: any) {
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

    AddCity(post: any) {
        if (this.city.includes(post.toLowerCase())) {
            console.log('This city already exist in array', this.city);
            this.util.openSnackBar('This city already exist');

        } else {
            this.city.push(post.toLowerCase());
            console.log('this is new array', this.city);
            this.util.openSnackBar( post + ' added in area');
        }
    }

    saveArea(value: string) {
        if (value.trim().length > 0) {
            console.log('this is city of user', this.session.getUser().city);
            const currentCities = this.session.getUser().city;
            const similar = _.filter(currentCities, ['name', value.toLowerCase().trim()]);
            if (similar.length === 0) {
                console.log('these are similar area', similar);
                const  areaBody = {name: value.toLowerCase().trim(), data : this.city};
                currentCities.push(areaBody);
                // const currentCities = [];
                this.api.updateUser(this.session.getUser().id, {city: currentCities}).subscribe( data => {
                    this.session.setUser(data);
                    console.log('Area updated in user', data);
                    this.util.openSnackBar('Area added successfully');
                    this.city = [];
                }, error => {
                    this.util.openSnackBar('Error occurred please try again');
                });
            } else {
                console.log('Cannot add same name area');
                this.util.openSnackBar('You cannot add area with same name');

            }

        } else {
            console.log('Cannot add blank name');
            this.util.openSnackBar('You cannot add a blank name');

        }

    }

    deleteArea(area: string) {
        console.log('this is city of user', this.session.getUser().city);
        const currentCities = this.session.getUser().city;
        _.remove(currentCities, area);
        // const currentCities = [];
        this.api.updateUser(this.session.getUser().id, {city: currentCities}).subscribe( data => {
            this.session.setUser(data);
            this.util.openSnackBar('Removed ' + area );

            this.city = [];
        }, error => {
            console.log('An error occrurred while adding area');
        });
    }

    removeCity(town: any) {
        this.city = this.city.filter(e => e !== town); // will return ['A', 'C']
        this.util.openSnackBar('Removed ' + town );
    }
}
