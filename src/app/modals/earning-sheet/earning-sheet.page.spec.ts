import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { EarningSheetPage } from './earning-sheet.page';

describe('EarningSheetPage', () => {
  let component: EarningSheetPage;
  let fixture: ComponentFixture<EarningSheetPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EarningSheetPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(EarningSheetPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
