import { CompanyProvider } from './../../providers/company/company';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController, ToastController } from 'ionic-angular';
import * as _ from 'lodash';



@IonicPage()
@Component({
  selector: 'page-companyprofile',
  templateUrl: 'companyprofile.html',
})
export class CompanyprofilePage {

  profile: any;
  user: any;

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    private alerCtrl: AlertController,
    private company: CompanyProvider,
    private toastCtrl: ToastController
  ) {
    this.profile = this.navParams.get("data");
  }

  ionViewDidLoad() {
    this.company.getUserData()
      .subscribe(res => {
        this.user = res.user
      });
  }

  reviewPage(profile){
    this.navCtrl.push("ReviewPage", {"data": profile});
  }

  viewReviews(profile){
    this.navCtrl.push("ViewreviewsPage", {"companyData": profile});
  }

  averageRating(arr){
    if(arr.length <= 0){
      return arr.length;
    } else {
      return this.roundValue(_.mean(arr));
    }
  }

  roundValue(value){
    const factor = Math.pow(10, 1);
    return Math.round(value * factor) / factor;
  }

  ratingSum(arr){
    if(arr.length <= 0){
      return arr.length;
    } else {
      return _.sum(arr);
    }
  }

  employeeRegister(profile){
    let alert = this.alerCtrl.create({
      title: 'Register as an employee',
      inputs: [
        {
          name: 'role',
          placeholder: 'Add Role'
        }
      ],
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel'
        },
        {
          text: 'Add',
          cssClass: 'alertCss',
          handler: data => {
            this.company.registerEmployee(profile, this.user, data.role)
              .subscribe(res => {
                if(res.message){
                  let toast = this.toastCtrl.create({
                    message: res.message,
                    duration: 3000,
                    position: "bottom"
                  });

                  toast.present();
                }
              })
          }
        }
      ]
    });

    alert.present();
  }

}





















