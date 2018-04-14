import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { LeaderPage } from './leader';

@NgModule({
  declarations: [
    LeaderPage,
  ],
  imports: [
    IonicPageModule.forChild(LeaderPage),
  ],
})
export class LeaderPageModule {}
