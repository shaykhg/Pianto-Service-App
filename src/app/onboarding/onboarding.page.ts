import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {LocalStorageService} from '../services/local-storage.service';

@Component({
  selector: 'app-onboarding',
  templateUrl: './onboarding.page.html',
  styleUrls: ['./onboarding.page.scss'],
})
export class OnboardingPage implements OnInit {

  slideOpts = {
    initialSlide: 0,
    speed: 400,
  };

  constructor(private router: Router, private storage: LocalStorageService) { }

  ngOnInit() {

  }
  onBoardingDone() {
    this.storage.setBoolean('first', true).then((login) => {
      this.router.navigate(['/login'], {replaceUrl: true, queryParams: {first : true}});
    });
  }
}
