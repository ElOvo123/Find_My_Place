import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { AuditorioAugustoCabritaPage } from './auditorio-augusto-cabrita.page';

describe('AuditorioAugustoCabritaPage', () => {
  let component: AuditorioAugustoCabritaPage;
  let fixture: ComponentFixture<AuditorioAugustoCabritaPage>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ AuditorioAugustoCabritaPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(AuditorioAugustoCabritaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
