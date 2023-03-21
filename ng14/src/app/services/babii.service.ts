import { /* Host, Inject, */ Injectable } from '@angular/core';
import { LundiakService } from './lundiak.service';
// import { InjectionToken } from '@angular/core';
// export const MY_FLAG = new InjectionToken<string>('myFlag');

@Injectable({
  providedIn: 'root'
})
export class BabiiService {
  constructor(
    // @Host()
    // @Inject(MY_FLAG) public myFlag: boolean // TBD
  ) {
    // console.log('babiiService constructor. FLAG:', myFlag); // TBD
    console.log('babiiService constructor.');

    const lundiakService = new LundiakService(this);
    console.log('LOOP:', lundiakService);

  }
}
