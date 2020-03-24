import { Component, HostBinding } from '@angular/core';
import { trigger, state, style, animate, transition, keyframes,} 
            from '@angular/animations';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  animations: [
    trigger('onOff', [
      // ...
      state('on', style({
        opacity: 1,
         })),
      state('off', style({
         opacity: 0.05,
      })),
      transition('off => on', [
        animate('2s'),
       ]),
       transition('on => off', [
        animate('2s'),
       ]),
       transition('* => *', [
        animate('2s'),
       ]),
    ]),
  ],

})

export class AppComponent {
  title = 'animations-app';
  isOn = true;

  toggle() {
    this.isOn = !this.isOn;
  }
  turnOff() {
    this.isOn = false;
  }
 turnOn() {
     this.isOn = true;
  }
}



