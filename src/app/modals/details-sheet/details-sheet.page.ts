import {Component, Inject, OnInit} from '@angular/core';
import {MAT_BOTTOM_SHEET_DATA, MatBottomSheetRef} from '@angular/material/bottom-sheet';
import {Order} from '../../models/Orders';
import {UtilService} from '../../services/util.service';
import {AlertController} from '@ionic/angular';
import {ApiServiceService} from '../../services/api-service.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-details-sheet',
  templateUrl: './details-sheet.page.html',
  styleUrls: ['./details-sheet.page.scss'],
})
export class DetailsSheetPage implements OnInit {
  orderData: Order;

  constructor(private api: ApiServiceService, public alertController: AlertController, private bottomSheetRef: MatBottomSheetRef<DetailsSheetPage>,
              @Inject(MAT_BOTTOM_SHEET_DATA) public data: DialogData, public util: UtilService, private router: Router) { }

  ngOnInit() {
    this.orderData = this.data.order;
    console.log('this is order data for popup', this.data.order);
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

  // show alert if service man rejects or cancel booking and change status accordingly

  async presentAlertCancel(status) {
    // close bottom sheet and open alert
    this.bottomSheetRef.dismiss();
    const alert = await this.alertController.create({
      cssClass: 'my-custom-class',
      // header: 'Confirm!',
      message: status === 1 ? 'Are you sure you want to reject this booking!!!' : 'Are you sure you want to cancel this booking!!!',
      buttons: [
        {
          text: 'No',
          role: 'cancel',
          cssClass: 'secondary',
          handler: (blah) => {
            console.log('Cancel: blah***********');
          }
        }, {
          text: 'Yes',
          handler: () => {
            if (status === 1) {
              // add api call to reject booking
              const body = {
                id : this.orderData._id,
                status: 'REJECTED'
              };
              this.api.updateOrderStat(body).subscribe( data => {
                this.util.orderUpdate.next(true);
                console.log('this is data after rejection', data);
                this.util.openSnackBar('Booking was rejected', '');
              }, error => {
                this.util.openSnackBar('An error occurred while rejecting booking', '');
                console.log('this is error occurred', error);
              });

            } else if (status === 3){
              // add api call to cancel booking
              // const body = {
              //   id : this.orderData._id,
              //   status: 'CANCELLED_BY_SERVICE'
              // };
              // this.api.updateOrderStat(body).subscribe( data => {
              //   console.log('this is data after updation', data);
              //   this.util.openSnackBar('Booking was cancelled', '');
              // }, error => {
              //   this.util.openSnackBar('An error occurred while cancelling booking', '');
              //   console.log('this is error occurred', error);
              // });

            }
          }
        }
      ]
    });

    await alert.present();
  }

  // Change status of booking and available slot based on service man response

  changeStatus(status: number) {
    // status 1 means REJECTED
    if (status === 1) {
      this.presentAlertCancel(1);
    }
    // status 2 means BOOKING_CONFIRMED
    else if (status === 2) {
      const body = {
        id : this.orderData._id,
        status: 'BOOKING_CONFIRMED'
      };
      this.api.updateOrderStat(body).subscribe( data => {
        this.util.orderUpdate.next(true);

        console.log('this is data after updation', data);
        this.util.openSnackBar('Booking accepted', '');
      }, error => {
        this.util.openSnackBar('An error occurred while accepting booking', '');
        console.log('this is error occurred', error);
      });
    }
    // status 3 means CANCELLED_BY_SERVICE
    else if (status ===  3) {
      // this.presentAlertCancel(3);
      this.presentAlertPrompt();
    }
    // status 4 means COMPLETED
    else if (status === 4) {
      this.bottomSheetRef.dismiss();
      this.router.navigateByUrl('/completion/' + this.orderData._id);
    } else {

    }

  }
  async presentAlertPrompt() {
    this.bottomSheetRef.dismiss();

    const alert = await this.alertController.create({
      cssClass: 'my-custom-class',
      header: 'Cancellation!',
      inputs: [
        // multiline input.
        {
          name: 'note',
          id: 'note',
          type: 'textarea',
          placeholder: 'Enter Cancellation note'
        },
      ],
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          cssClass: 'secondary',
          handler: () => {
            console.log('Confirm Cancel');
          }
        }, {
          text: 'Ok',
          handler: (alertData) => {
            if (alertData.note === '') {
              this.util.openSnackBar('Please enter cancellation note to cancel', 'ok');

            } else {
              const body = {
                id : this.orderData._id,
                status: 'REJECTED',
                notes: alertData.note
              };
              this.api.updateOrderStat(body).subscribe( data => {
                this.util.orderUpdate.next(true);
                console.log('this is data after updation', data);
                this.util.openSnackBar('Booking was cancelled', '');
              }, error => {
                this.util.openSnackBar('An error occurred while cancelling booking', '');
                console.log('this is error occurred', error);
              });

            }
          }
        }
      ]
    });

    await alert.present();
  }

}




export interface DialogData {
  order: Order;
}
