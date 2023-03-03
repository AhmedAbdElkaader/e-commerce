import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PackegsComponent } from './packegs.component';

describe('PackegsComponent', () => {
  let component: PackegsComponent;
  let fixture: ComponentFixture<PackegsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PackegsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PackegsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
