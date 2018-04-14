import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import * as _ from 'lodash';
import moment from 'moment';



@IonicPage()
@Component({
  selector: 'page-viewreviews',
  templateUrl: 'viewreviews.html',
})
export class ViewreviewsPage {

  company: any;

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    private alertCtrl: AlertController
  ) {
    this.company = this.navParams.get("companyData");
  }

  ionViewDidLoad() {
    
  }

  averageRating(arr){
    if(arr.length <= 0){
      return arr.length;
    } else {
      return _.mean(arr);
    }
  }

  GetReviewTime = (time: number) => {
    return moment(time).fromNow();
  }

  showAlert(rating){
    let alert = this.alertCtrl.create({
      title: 'Review',
      subTitle: rating.review,
      buttons: ['OK']
    });

    alert.present();
  }

}









