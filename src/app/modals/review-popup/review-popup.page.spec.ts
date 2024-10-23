import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ReviewPopupPage } from './review-popup.page';

describe('ReviewPopupPage', () => {
  let component: ReviewPopupPage;
  let fixture: ComponentFixture<ReviewPopupPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReviewPopupPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ReviewPopupPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
