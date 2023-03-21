import { Injectable } from '@angular/core';
import { BabiiService } from './babii.service';

@Injectable({
  providedIn: 'root'
})
export class LundiakService {
  constructor(
    public babiiService: BabiiService
  ) {
    console.log('lundiakService constructor => this.babiiService', this.babiiService);
  }
}
