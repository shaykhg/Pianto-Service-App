import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { AddTimeSheetPage } from './add-time-sheet.page';

describe('AddTimeSheetPage', () => {
  let component: AddTimeSheetPage;
  let fixture: ComponentFixture<AddTimeSheetPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddTimeSheetPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(AddTimeSheetPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
