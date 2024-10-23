import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { DetailsSheetPage } from './details-sheet.page';

describe('DetailsSheetPage', () => {
  let component: DetailsSheetPage;
  let fixture: ComponentFixture<DetailsSheetPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DetailsSheetPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(DetailsSheetPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
