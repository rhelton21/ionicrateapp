import { Component, Input } from '@angular/core';


@Component({
  selector: 'newrating',
  templateUrl: 'newrating.html'
})
export class NewratingComponent {
  @Input() ratenumber: number;

  constructor() {
    
  }

}
