import { Component, OnInit } from '@angular/core';
import {ApiServiceService} from '../services/api-service.service';
import {UtilService} from '../services/util.service';
import {EarningSheetPage} from '../modals/earning-sheet/earning-sheet.page';
import {SessionService} from '../services/session.service';
import {MatBottomSheet} from '@angular/material/bottom-sheet';
import * as _ from 'lodash';
import * as moment from 'moment';

@Component({
  selector: 'app-order-history',
  templateUrl: './order-history.page.html',
  styleUrls: ['./order-history.page.scss'],
})
export class OrderHistoryPage implements OnInit {
  public orders: any = [];

  constructor(private api: ApiServiceService, private session: SessionService, private bottomSheet: MatBottomSheet, public util: UtilService) {
  }

  ngOnInit() {
    this.getOrders();
  }

  getOrders() {
    this.api.getOrdersByDate(moment().startOf('day').toDate().toISOString(), moment().add('365', 'days').toDate().toISOString(), this.session.getUser().id).subscribe(data => {
      // this.weekOrders = data;
      // this.orders = _.filter(data, {status: 'COMPLETED'});
      this.orders = data;
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
