import { Injectable, Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UploadImagenService {

  constructor(private http: HttpClient, @Inject('BASE_URL') private baseUrl: string) { }

  postFile(caption: string, fileToUpload: File) {

    const endpoint = this.baseUrl+'api/OnPostUploadAsync';
    console.log(endpoint)
    const formData: FormData = new FormData();
    formData.append('Image', fileToUpload, fileToUpload.name);
    formData.append('ImageCaption', caption);

    return this.http.post(endpoint, formData);
  }

}
