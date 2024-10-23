import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { CompletionPage } from './completion.page';

describe('CompletionPage', () => {
  let component: CompletionPage;
  let fixture: ComponentFixture<CompletionPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CompletionPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(CompletionPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
