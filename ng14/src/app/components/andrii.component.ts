import { Component, OnInit } from '@angular/core';
// import { BabiiService } from '../services/babii.service';
import { LundiakService } from '../services/lundiak.service';

@Component({
  selector: 'app-andrii',
  templateUrl: './andrii.component.html',
  styleUrls: ['./andrii.component.scss'],
  providers: [
    // { provide: BabiiService, useValue: true }
    // { provide: BabiiService, useClass: BabiiService }
  ]
})
export class AndriiComponent implements OnInit {

  constructor(
    public readonly lundiakService: LundiakService
  ) {
    console.log('AndriiComponent constructor', lundiakService);
  }

  ngOnInit(): void {
    console.log('AndriiComponent ngOnInit', this.lundiakService);
  }

}
