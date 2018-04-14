import { Component, ViewChild, AfterViewInit } from '@angular/core';
import { Nav, Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { Storage } from '@ionic/storage';
import { CompanyProvider } from './../providers/company/company';



@Component({
  templateUrl: 'app.html'
})
export class MyApp implements AfterViewInit {
  @ViewChild(Nav) nav: Nav;

  rootPage: string;
  user: any;

  pages: any[];

  constructor(
    public platform: Platform, 
    public statusBar: StatusBar, 
    public splashScreen: SplashScreen,
    private storage: Storage,
    private company: CompanyProvider
  ) {
    this.initializeApp();

    this.pages = [
      {title: 'Home', component: 'HomePage', icon: 'home'},
      {title: 'Create Company', component: 'CreatecompanyPage', icon: 'create'},
      {title: 'Companies', component: 'CompaniesPage', icon: 'list-box'},
      {title: 'Search', component: 'SearchPage', icon: 'search'},
      {title: 'Leaderboard', component: 'LeaderPage', icon: 'archive'}
    ];

  }

  ngAfterViewInit(){
    
  }

  initializeApp() {
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      this.statusBar.styleDefault();
      this.splashScreen.hide();

      this.storage.get('useremail').then(loggedIn => {
        if(loggedIn === null){
          this.nav.setRoot("LoginPage");
        }

        if(loggedIn !== null){
          this.company.getUserData()
            .subscribe(res => {
              this.user = res.user;
            })
          this.nav.setRoot("HomePage");
        }
      });
    });
  }

  openPage(page) {
    if(page.component === "HomePage"){
      this.nav.setRoot(page.component);
    } else {
      this.nav.push(page.component);
    }
  }

  settings(){
    this.nav.push("SettingsPage");
  }

  logout(){
    this.storage.remove('useremail');
    this.nav.setRoot("LoginPage");
  }

}
