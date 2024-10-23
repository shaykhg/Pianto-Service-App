import {Component, Inject, OnInit} from '@angular/core';
import {MAT_BOTTOM_SHEET_DATA, MatBottomSheetRef} from '@angular/material/bottom-sheet';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import * as moment from 'moment';
import {UtilService} from '../../services/util.service';
import {SessionService} from '../../services/session.service';
import {ApiServiceService} from '../../services/api-service.service';

@Component({
  selector: 'app-add-time-sheet',
  templateUrl: './add-time-sheet.page.html',
  styleUrls: ['./add-time-sheet.page.scss'],
})
export class AddTimeSheetPage implements OnInit {
  scheduleForm: FormGroup;
  selectedDate;
  previousSlot;
  fromTime;
  tillTime;

  constructor(private bottomSheetRef: MatBottomSheetRef<AddTimeSheetPage>, private formBuilder: FormBuilder, public util: UtilService, private session: SessionService,
              private api: ApiServiceService,  @Inject(MAT_BOTTOM_SHEET_DATA) public data: DialogData) { }

  ngOnInit() {
    this.scheduleForm = this.formBuilder.group({
      from: ['', Validators.required],
      till: ['', Validators.required],
    });

  }

  markAvailable() {
    console.log('this is form data', this.scheduleForm.value);
    const from = this.scheduleForm.value.from;
    const till = this.scheduleForm.value.till;
    const mFrom = moment(this.data.date).toDate();
    mFrom.setHours(Number(from.split(':')[0]));
    mFrom.setMinutes(Number(till.split(':')[1]));

    const mTill = moment(this.data.date).toDate();
    mTill.setHours(Number(from.split(':')[0]));
    mTill.setMinutes(Number(till.split(':')[1]));

    if (this.data.date.isBefore(moment(), 'day') || moment(mTill).isSameOrBefore(mFrom)) {
      this.util.openSnackBar('Enter a valid time', '');
      console.log('this is from value', this.scheduleForm.value.from);
      console.log('this is from value', this.scheduleForm.value.till);
    } else {
      this.api.getUser(this.session.getUser().id).subscribe(data => {
        this.previousSlot = data.slots;
        console.log('this is previous slot', this.previousSlot);
        if (this.scheduleForm.valid) {
          const body = {
            slots: [{
              date: this.data.date.startOf('day').toDate().toISOString(),
              from: this.scheduleForm.value.from,
              till: this.scheduleForm.value.till,
              available: true,
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

  getUserSlots() {
    this.api.getUser(this.session.getUser().id).subscribe(data => {
      this.previousSlot = data.slots;
      // this.getSlotsOnDate();
      console.log('These are previous slots', this.previousSlot);
    }, error => {
      console.log('an error occurred while getting slots', error);
    });
  }
}

export interface DialogData {
  date: any;
}
