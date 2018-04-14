import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController, ToastController } from 'ionic-angular';
import { CompanyProvider } from './../../providers/company/company';



@IonicPage()
@Component({
  selector: 'page-createcompany',
  templateUrl: 'createcompany.html',
})
export class CreatecompanyPage {

  name: string;
  address: string;
  city: string;
  country: string;
  sector: string;
  website: string;
  userId: any;

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    private company: CompanyProvider,
    private alertCtrl: AlertController,
    private toastCtrl: ToastController
  ) {
  }

  ionViewDidLoad() {
    
  }

  ionViewDidEnter(){
    this.company.getUserData()
      .subscribe(res => {
        if(res.user !== null){
          this.userId = res.user._id;
        }
      });
  }

  register(){
    this.company.createCompany(this.name, this.address, this.city, this.country, this.sector, this.website, this.userId)
      .subscribe(res => {

        if(res.message){
          let toast = this.toastCtrl.create({
            message: res.message,
            duration: 3000,
            position: 'bottom'
          });
          toast.present();
        }

        if(res.error){
          let alert = this.alertCtrl.create({
            title: 'Error',
            subTitle: res.error,
            buttons: ['OK']
          });
          alert.present();
        }
      });

      this.name = '';
      this.address = '';
      this.city = '';
      this.sector = '';
      this.website = '';
      this.country = '';
  }

}
