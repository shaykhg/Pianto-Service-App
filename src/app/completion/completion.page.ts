import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {ApiServiceService} from '../services/api-service.service';
import {ActivatedRoute, Router} from '@angular/router';
import {AlertController} from '@ionic/angular';
import {UtilService} from '../services/util.service';
import {dashCaseToCamelCase} from '@angular/compiler/src/util';
import {Extra} from '../models/Extras';

@Component({
  selector: 'app-completion',
  templateUrl: './completion.page.html',
  styleUrls: ['./completion.page.scss'],
})
export class CompletionPage implements OnInit {
    completionForm: FormGroup;
    questions: Extra[] = [];
    answers = [];
  private orderId: any;

  constructor(private util: UtilService, private formBuilder: FormBuilder, private api: ApiServiceService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    this.orderId = this.route.snapshot.params.id;
    this.completionForm = this.formBuilder.group({
      q1: ['', Validators.required],
      q2: ['', Validators.required]
    });

    this.getQuestions();
  }

  // Get Questions from extra api type is "question"

  getQuestions() {
    this.api.getQuestionsFromExtras().subscribe( data => {
      this.questions = data.results;
      for (const item of this.questions){
        this.answers.push({
          question: item.name,
          answer: ''
        });
      }
      console.log('these are all questions', this.questions);
    }, error => {
      console.log('an error occurred while getting questions', error);
    });
  }

  submit() {

    const body = {
      id : this.orderId,
      status: 'COMPLETED',
      questions: this.answers
    };
    this.api.updateOrderStat(body).subscribe( data => {
      console.log('this is data after COMPLETED', data);
      this.util.orderUpdate.next(true);
      this.router.navigateByUrl('/tab/tabs/home');
      this.util.openSnackBar('Booking completed', '');
    }, error => {
      this.util.openSnackBar('An error occurred while completing booking', '');
      console.log('this is error occurred', error);
    });
  }


}
