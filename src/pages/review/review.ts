import { CompanyProvider } from './../../providers/company/company';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController } from 'ionic-angular';



@IonicPage()
@Component({
  selector: 'page-review',
  templateUrl: 'review.html',
})
export class ReviewPage {

  culture: number;
  benefits: number;
  balance: number;
  speed: number;
  overall: number;
  review: string;
  userId: any;

  companyProfile: any;
  name: string

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    private company: CompanyProvider,
    private toastCtrl: ToastController
  ) {
    this.companyProfile = this.navParams.get("data");
    this.name = this.companyProfile.companyname
  }

  ionViewDidLoad() {
    this.getData()
  }

  addReview(){
    this.company.addCompanyReview(this.companyProfile._id, this.culture, this.benefits, this.balance, this.speed, this.overall, this.review, this.userId)
      .subscribe(res => {
        if(res.message){
          let toast = this.toastCtrl.create({
            message: res.message,
            duration: 3000,
            position: "bottom"
          });

          toast.present();
        }

        if(res.error){
          let toast = this.toastCtrl.create({
            message: res.error,
            duration: 3000,
            position: "bottom"
          });

          toast.present();
        }
      });

      this.review = '';
  }

  getData(){
    this.company.getUserData()
      .subscribe(res => {
        if(res.user !== null){
          this.userId = res.user._id;
        }
      });
  }

}
