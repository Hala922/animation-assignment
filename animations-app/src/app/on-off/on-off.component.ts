import { Component, OnInit } from '@angular/core';
import { trigger, state, style, animate, transition,} 
            from '@angular/animations';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@Component({
  selector: 'app-on-off',
  templateUrl: './on-off.component.html',
  styleUrls: ['./on-off.component.css'],
  animations: [
    // animation triggers go here
    /* state('On', style({
                       height: '200px',
                       opacity: 1,
                       backgroundColor: 'yellow'
                      })
  ),
  state('Off', style({
  height: '100px',
  opacity: 0.5,
  backgroundColor: 'green'
})),
 */
  ]
})

export class OnOffComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

 
}
