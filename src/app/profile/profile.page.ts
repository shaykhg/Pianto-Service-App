import { Component, OnInit } from '@angular/core';
import {SessionService} from '../services/session.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],
})
export class ProfilePage implements OnInit {

  constructor(public session: SessionService) { }

  ngOnInit() {
  }

}
