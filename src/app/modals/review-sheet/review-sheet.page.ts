import {Component, Inject, OnInit} from '@angular/core';
import {MAT_BOTTOM_SHEET_DATA, MatBottomSheetRef} from '@angular/material/bottom-sheet';
import {ApiServiceService} from '../../services/api-service.service';
import {UtilService} from '../../services/util.service';

@Component({
  selector: 'app-review-sheet',
  templateUrl: './review-sheet.page.html',
  styleUrls: ['./review-sheet.page.scss'],
})
export class ReviewSheetPage implements OnInit {
  reviewData: any;
  reviewArray = Array;

  constructor(  public bottomSheetRef: MatBottomSheetRef<ReviewSheetPage>,
                @Inject(MAT_BOTTOM_SHEET_DATA) public data: ReviewData, private api: ApiServiceService, public util: UtilService) { }

  // get data on initialisation
  ngOnInit() {
    this.reviewData = this.data.review;
    console.log('this is order data for popup', this.data.review);
  }
}

// Data Interface

export interface ReviewData {
  review: any;
}
