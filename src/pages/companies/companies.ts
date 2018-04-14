import { CompanyProvider } from './../../providers/company/company';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import * as _ from 'lodash';



@IonicPage()
@Component({
  selector: 'page-companies',
  templateUrl: 'companies.html',
})
export class CompaniesPage {

  companies = [];

  rating: number;

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    private company: CompanyProvider
  ) {
  }

  ionViewDidLoad() {
    this.getAllCompanies();
  }

  getAllCompanies(){
    this.company.getCompanies()
      .subscribe(res => {
        this.companies = res.result;
      });
  }

  companyProfile(company){
    this.navCtrl.push("CompanyprofilePage", {"data": company});
  }

  averageRating(number) {
    if(number.length <= 0){
      this.rating = number.length;
    } else {
      this.rating = _.mean(number);
    }

    return this.roundValue(this.rating);
  }
  
  roundValue(value){
    const factor = Math.pow(10, 1);
    return Math.round(value * factor) / factor;
  }


}
