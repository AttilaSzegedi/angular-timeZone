import { CommonModule } from '@angular/common';
import { Component, Input,Output,EventEmitter } from '@angular/core';
import { FormsModule } from '@angular/forms';




@Component({
  selector: 'app-timezone',
  standalone: true,
  imports: [CommonModule,FormsModule],
  templateUrl: './time-zone.component.html',
  styleUrl: './time-zone.component.scss'
})
export class TimeZoneComponens {
  /**
   * Get the Time zone value from component marker
   * */
  @Input() timezone = "Europe/Budapest";
  /**set time default */
  time ='';
  /** make function to button click to get a new time stemp for time zone,
   * timezone make variable zone info
   */

  tName='';
  @Input() selected = false;
   //* Set bollen based upon click*/

  @Output() changeTimezone = new EventEmitter<string>();
  //** watching function eng emitting evet for that push */
   
  constructor(){}

  ngOnInit():void{
    this.refressTimeZone();
    this.tName= this.timezone;
  }


  refressTimeZone() {
    this.time= new Date().toLocaleString("en-US", {timeZone: this.timezone});
   }
   /**set time zone selected, and set up by app timezone */
  
   selectTimezone() {
    this.changeTimezone.emit(this.timezone);
    //* Managed the function of selection of button*/ 
  }

}
