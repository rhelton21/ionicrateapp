import { Platform } from 'ionic-angular';
import { Storage } from '@ionic/storage';
import { Observable } from 'rxjs/Observable';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';



@Injectable()
export class CompanyProvider {

  email: any;

  constructor(
    public http: HttpClient, 
    private storage: Storage,
    private platform: Platform
  ) {
    this.platform.ready().then(() => {
      this.getEmail();

    });
  }

  getUserData(): Observable<any>{
    this.getEmail();

    return this.http
      .get(`https://ratingapi.herokuapp.com/api/home/${this.email}`);
  }


  getEmail(){
    this.storage.get('useremail').then(value => {
      this.email = value;
    });
  }

  createCompany(name, address, city, country, sector, website, userId?): Observable<any> {
    return this.http
      .post('https://ratingapi.herokuapp.com/api/company/create', {
        name,
        address,
        city,
        country,
        sector,
        website,
        userId
      });
  }

  getCompanies(): Observable<any>{
    return this.http
      .get('https://ratingapi.herokuapp.com/api/companies/all');
  }

  addCompanyReview(companyId, culture, benefits, balance, speed, overall, review, userId): Observable<any>{
    return this.http
      .post('https://ratingapi.herokuapp.com/api/company/review', {
        companyId,
        culture,
        benefits,
        balance,
        speed,
        overall,
        review,
        userId
      });
  }

  registerEmployee(company, user, role): Observable<any>{
    return this.http
      .post('https://ratingapi.herokuapp.com/api/register/employee', {
        company: company,
        user: user,
        role: role
      });
  }

  uploadImage(user, image): Observable<any>{
    return this.http  
      .post('https://ratingapi.herokuapp.com/api/v1/profile/upload', {
        user: user,
        image: image
      });
  }

  uploadLogo(id, image): Observable<any>{
    return this.http  
      .post('https://ratingapi.herokuapp.com/api/v1/company/upload', {
        company: id,
        image: image
      });
  }

  searchCompany(company): Observable<any>{
    return this.http
      .post('https://ratingapi.herokuapp.com/api/search-company', {
        company: company
      });
  }

  leaderBoard(): Observable<any>{
    return this.http
      .get('https://ratingapi.herokuapp.com/api/companies/leaderboard');
  }

}














