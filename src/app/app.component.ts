import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { TimeZoneComponens } from './time-zone/time-zone.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet,TimeZoneComponens],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = `Time Zones- Attila Szegedi`;
  /**Give title and val for html */ 
  ;
  selectedTimezone = 'Europe/Budapest';
  /**set up default value for selected time zone */
  TimezoneChange(timezone: string) {
    this.selectedTimezone = timezone;
    //** From form call the value in function to set time zone from witch componenets */
  }
  
}
