import {Component, Inject, OnInit} from '@angular/core';
import {Order} from '../../models/Orders';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';
import {ApiServiceService} from '../../services/api-service.service';
import {UtilService} from '../../services/util.service';
import {MAT_BOTTOM_SHEET_DATA, MatBottomSheetRef} from '@angular/material/bottom-sheet';

@Component({
  selector: 'app-earning-sheet',
  templateUrl: './earning-sheet.page.html',
  styleUrls: ['./earning-sheet.page.scss'],
})
export class EarningSheetPage implements OnInit {
  orderData: Order;

  constructor(  public bottomSheetRef: MatBottomSheetRef<EarningSheetPage>,
                @Inject(MAT_BOTTOM_SHEET_DATA) public data: DialogData, private api: ApiServiceService, public util: UtilService) { }

  ngOnInit() {
    this.orderData = this.data.order;
    console.log('this is order data for popup', this.data.order);
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
}



export interface DialogData {
  order: Order;
}
