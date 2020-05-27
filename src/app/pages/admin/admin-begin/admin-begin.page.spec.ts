import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { AdminBeginPage } from './admin-begin.page';

describe('AdminBeginPage', () => {
  let component: AdminBeginPage;
  let fixture: ComponentFixture<AdminBeginPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminBeginPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(AdminBeginPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
