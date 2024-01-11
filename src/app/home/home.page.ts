import { Component } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
public topic:any;
public newsData:any;
constructor(public api:ApiService) {}

  search(){
    /*
   this.api.getNews(this.topic).subscribe(result => {
    console.log(result);
    this.newsData=result['articles'];
    */

    
    this.api.getNews(this.topic).subscribe(result => {
      console.log(result);
      
      if ('articles' in result) {
        this.newsData = result.articles;
      } else {
        // Handle chybějící vlastnosti articles
        console.error('Vlastnost "articles" neexistuje v odpovědi.');
      }
    });
    
}
}
