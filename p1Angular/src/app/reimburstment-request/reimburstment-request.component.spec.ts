import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReimburstmentRequestComponent } from './reimburstment-request.component';

describe('ReimburstmentRequestComponent', () => {
  let component: ReimburstmentRequestComponent;
  let fixture: ComponentFixture<ReimburstmentRequestComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReimburstmentRequestComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ReimburstmentRequestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
