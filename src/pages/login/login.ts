import { RegisterProvider } from './../../providers/register/register';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController, LoadingController } from 'ionic-angular';
import { Storage } from '@ionic/storage';



@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {

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

  registerPage(){
    this.navCtrl.push("RegisterPage");
  }

  login(){
    if(this.email !== undefined || this.password !== undefined){
      this.showLoading();
      this.reg.loginUser(this.email, this.password)
        .subscribe(res => {
          this.loading.dismiss();
          if(res.user){
            this.storage.set('useremail', res.user.email);
            this.navCtrl.setRoot("HomePage");
          }

          if(res.error){
            let alert = this.alertCtrl.create({
              title: 'Login Error',
              subTitle: res.error,
              buttons: ['OK']
            });

            alert.present();
          }
        });
        this.password = '';
        this.email = '';
    } else {
      let alert = this.alertCtrl.create({
        title: 'Login Error',
        subTitle: 'You cannot submit empty fields',
        buttons: ['OK']
      });

      alert.present();
    }
  }

  showLoading(){
    this.loading = this.loadingCtrl.create({
      content: 'Authenticating...'
    });    

    this.loading.present();
  }

}



















