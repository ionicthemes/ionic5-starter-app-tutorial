import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { UpdateContactPage } from './update-contact.page';

describe('UpdateContactPage', () => {
  let component: UpdateContactPage;
  let fixture: ComponentFixture<UpdateContactPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UpdateContactPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(UpdateContactPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
