import { Injectable, Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Gallery } from '../Models/Gallery';
import { Observable } from 'rxjs';
import { Site } from '../Models/Site';

@Injectable({
  providedIn: 'root'
})
export class SiteService {

  constructor(
    private http: HttpClient,
    @Inject('BASE_URL') private baseUrl: string,
    private galleryService: SiteService) {
  }

  private galleries = [];

  add(gallery) {
    this.galleries.push(gallery);
  }

  get(): Observable<Site[]> {
    return this.http.get<Site[]>(`${this.baseUrl}api/Site`);
  }
}
