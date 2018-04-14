import { CompanyProvider } from './../../providers/company/company';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Camera, CameraOptions } from '@ionic-native/camera';




@IonicPage()
@Component({
  selector: 'page-settings',
  templateUrl: 'settings.html',
})
export class SettingsPage {

  user: any;
  imagePath: string;

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    private company: CompanyProvider,
    private camera: Camera
  ) {
    
  }

  ionViewDidLoad() {
    
  }

  ionViewDidEnter(){
    this.company.getUserData()
      .subscribe(res => {
        console.log(res.user)
        this.user = res.user;
      });
  }

  addImage(){
    const options: CameraOptions = {
      quality: 50,
      destinationType: this.camera.DestinationType.DATA_URL,
      sourceType: this.camera.PictureSourceType.PHOTOLIBRARY,
      allowEdit: false,
      correctOrientation: true,
      encodingType: this.camera.EncodingType.JPEG,
      mediaType: this.camera.MediaType.PICTURE,
      targetWidth: 300,
      targetHeight: 300,
    }

    this.camera.getPicture(options).then((imgUrl) => {
      this.imagePath = 'data:image/jpeg;base64,' + imgUrl

      this.company.uploadImage(this.user, this.imagePath)
        .subscribe(res => {
          console.log(res)
        });
    })
  }

  addLogo(name){
    const options: CameraOptions = {
      quality: 50,
      destinationType: this.camera.DestinationType.DATA_URL,
      sourceType: this.camera.PictureSourceType.PHOTOLIBRARY,
      allowEdit: false,
      correctOrientation: true,
      encodingType: this.camera.EncodingType.JPEG,
      mediaType: this.camera.MediaType.PICTURE,
      targetWidth: 300,
      targetHeight: 300,
    }

    this.camera.getPicture(options).then((imgUrl) => {
      this.imagePath = 'data:image/jpeg;base64,' + imgUrl

      this.company.uploadLogo(name._id, this.imagePath)
        .subscribe(res => {
          console.log(res)
        });
    })
  }

  

}
