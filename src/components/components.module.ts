import { FormsModule } from '@angular/forms';
import { Ionic2RatingModule } from 'ionic2-rating';
import { NgModule } from '@angular/core';
import { NewratingComponent } from './newrating/newrating';



@NgModule({
	declarations: [NewratingComponent],
	imports: [Ionic2RatingModule, FormsModule],
	exports: [NewratingComponent]
})
export class ComponentsModule {}
