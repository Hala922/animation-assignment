import { Component, OnInit } from '@angular/core';
import { SERVICES } from '../mocData/services';




@Component({
  selector: 'app-serveses',
  templateUrl: './serveses.component.html',
  styleUrls: ['./serveses.component.css']
})
export class ServesesComponent implements OnInit {
  services = SERVICES; 

  constructor() { }

  ngOnInit() {
  }

}
