import { ComponentsModule } from './../../components/components.module';
import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ViewreviewsPage } from './viewreviews';


@NgModule({
  declarations: [
    ViewreviewsPage,
  ],
  imports: [
    IonicPageModule.forChild(ViewreviewsPage),
    ComponentsModule
  ],
})
export class ViewreviewsPageModule {}
