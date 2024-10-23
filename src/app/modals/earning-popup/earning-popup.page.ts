import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';
import {ApiServiceService} from '../../services/api-service.service';
import {Order} from '../../models/Orders';
import {UtilService} from '../../services/util.service';

@Component({
  selector: 'app-earning-popup',
  templateUrl: './earning-popup.page.html',
  styleUrls: ['./earning-popup.page.scss'],
})
export class EarningPopupPage implements OnInit {
  orderData: Order;

  constructor(public dialogRef: MatDialogRef<EarningPopupPage>,
                @Inject(MAT_DIALOG_DATA) public data: DialogData, private api: ApiServiceService, public util: UtilService) { }

  ngOnInit() {
    this.orderData = this.data.order;
    console.log('this is order data for popup', this.data.order);
  }

  onNoClick(): void {
    this.dialogRef.close();
  }
}

export interface DialogData {
  order: Order;
}
