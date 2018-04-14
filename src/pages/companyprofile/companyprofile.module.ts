import { ComponentsModule } from './../../components/components.module';
import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { CompanyprofilePage } from './companyprofile';



@NgModule({
  declarations: [
    CompanyprofilePage,
  ],
  imports: [
    IonicPageModule.forChild(CompanyprofilePage),
    ComponentsModule
  ],
})
export class CompanyprofilePageModule {}
