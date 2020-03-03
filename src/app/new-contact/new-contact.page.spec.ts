import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { NewContactPage } from './new-contact.page';

describe('NewContactPage', () => {
  let component: NewContactPage;
  let fixture: ComponentFixture<NewContactPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewContactPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(NewContactPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
