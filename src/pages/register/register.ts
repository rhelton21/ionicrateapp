import { Storage } from '@ionic/storage';
import { Component } from '@angular/core';
import { 
  IonicPage, 
  NavController, 
  NavParams, 
  LoadingController, 
  AlertController 
} from 'ionic-angular';

import { RegisterProvider } from './../../providers/register/register';



@IonicPage()
@Component({
  selector: 'page-register',
  templateUrl: 'register.html',
})
export class RegisterPage {

  fullname: string;
  email: string;
  password: string;

  loading: any;

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    private reg: RegisterProvider,
    private loadingCtrl: LoadingController,
    private alertCtrl: AlertController,
    private storage: Storage
  ) {
  }

  ionViewDidLoad() {
    
  }

  loginPage(){
    this.navCtrl.setRoot("LoginPage");
  }

  userSignup(){
    if(this.fullname !== undefined || this.email !== undefined || this.password !== undefined){
      this.showLoading();
      this.reg.registerUser(this.fullname, this.email, this.password)
        .subscribe(res => {
          this.loading.dismiss();
          if(res.user){
            this.storage.set('useremail', res.user.email);
            this.navCtrl.setRoot("HomePage");
          }

          if(res.error){
            let alert = this.alertCtrl.create({
              title: 'Sign Up Error',
              subTitle: res.error,
              buttons: ['OK']
            });

            alert.present();
          }
        });

        this.fullname = '';
        this.password = '';
        this.email = '';
    } else {
      let alert = this.alertCtrl.create({
        title: 'Sign Up Error',
        subTitle: 'You cannot submit empty fields',
        buttons: ['OK']
      });

      alert.present();
    }
  }

  showLoading(){
    this.loading = this.loadingCtrl.create({
      content: 'Authenticating...',
      duration: 3000
    });

    this.loading.present();
  }

}
