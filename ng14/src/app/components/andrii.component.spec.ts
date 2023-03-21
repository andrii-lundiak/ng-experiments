import { ComponentFixture, TestBed } from '@angular/core/testing';
import { BabiiService } from '../services/babii.service';
import { LundiakService } from '../services/lundiak.service';

import { AndriiComponent } from './andrii.component';

describe('AndriiComponent', () => {
  let service1: LundiakService;
  let service2: BabiiService;

  let component: AndriiComponent;
  let fixture: ComponentFixture<AndriiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AndriiComponent]
    }).compileComponents();

    service1 = TestBed.inject(LundiakService);
    // service1.babiiService = new BabiiService(true); // TBD
    service1.babiiService = new BabiiService();

    // service2 = TestBed.inject(BabiiService);

    fixture = TestBed.createComponent(AndriiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have lundiakService and nested babiiService', () => {
    expect(component.lundiakService).toBeTruthy();
    expect(component.lundiakService.babiiService).toBeTruthy();
  });

  fit('should have REPLACED lundiakService and nested babiiService', () => {
    console.log(service1);
    console.log(service2);

    // expect(component.lundiakService.babiiService.myFlag).toBeTruthy(); // TBD
    expect(component.lundiakService.babiiService).toBeTruthy();
  });
});
