import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { PayoutMethodPage } from './payout-method.page';

describe('PayoutMethodPage', () => {
  let component: PayoutMethodPage;
  let fixture: ComponentFixture<PayoutMethodPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PayoutMethodPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(PayoutMethodPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
