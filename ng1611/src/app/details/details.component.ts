import { Component } from '@angular/core';
import { AnimationTriggerMetadata, animate, keyframes, state, style, transition, trigger } from '@angular/animations';

const forAnimate = keyframes([
  style({ background: "blue" }),
  style({ background: "red" })
]);

const triggerData1: AnimationTriggerMetadata = trigger('myAnim', [
  state('1', style({ height: '50px' })),
  state('0', style({ height: '*' })),
  // state('1', style({ height: 0, overflow: 'hidden' })), // yes also causes a warning
  // state('0', style({ height: '*', overflow: 'visible' })), // yes also causes a warning
  transition('* => *', animate(500, forAnimate))
  // transition('* => *', animate('300ms ease-in-out'))
]);

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss'],
  animations: [
    triggerData1
  ]
})
export class DetailsComponent {
  // TBD
}
