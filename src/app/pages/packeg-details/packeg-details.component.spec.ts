import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PackegDetailsComponent } from './packeg-details.component';

describe('PackegDetailsComponent', () => {
  let component: PackegDetailsComponent;
  let fixture: ComponentFixture<PackegDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PackegDetailsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PackegDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
