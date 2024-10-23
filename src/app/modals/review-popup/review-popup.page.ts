import {Component, Inject, OnInit} from '@angular/core';
import {Order} from '../../models/Orders';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';
import {ApiServiceService} from '../../services/api-service.service';
import {EarningPopupPage} from '../earning-popup/earning-popup.page';
import {UtilService} from '../../services/util.service';

@Component({
  selector: 'app-review-popup',
  templateUrl: './review-popup.page.html',
  styleUrls: ['./review-popup.page.scss'],
})
export class ReviewPopupPage implements OnInit {
  reviewData: any;
  reviewArray = Array;

  constructor(  public dialogRef: MatDialogRef<ReviewPopupPage>,
                @Inject(MAT_DIALOG_DATA) public data: DialogData, private api: ApiServiceService, public util: UtilService) { }

  ngOnInit() {
    this.reviewData = this.data.review;
    console.log('this is order data for popup', this.data.review);
  }

  onNoClick(): void {
    this.dialogRef.close();
  }
}

export interface DialogData {
  review: any;
}
