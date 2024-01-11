import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class ApiService {
public apiKey:any='7dab5bd1ea7744379828c4a034f1da7a';

  constructor(public http:HttpClient) { }



  getNews(topic: string) {
    return this.http.get('https://newsapi.org/v2/everything?q=' + topic + '&from=2023-12-14&sortBy=publishedAt&apiKey=' + this.apiKey);
  }
}
