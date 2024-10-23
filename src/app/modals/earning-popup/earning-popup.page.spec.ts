import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { EarningPopupPage } from './earning-popup.page';

describe('EarningPopupPage', () => {
  let component: EarningPopupPage;
  let fixture: ComponentFixture<EarningPopupPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EarningPopupPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(EarningPopupPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
