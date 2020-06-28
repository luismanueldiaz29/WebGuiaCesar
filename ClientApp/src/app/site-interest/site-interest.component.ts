import { Component, OnInit, Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Gallery } from '../Models/Gallery';
import { SiteService } from '../Services/site.service';

@Component({
  selector: 'app-site-interest',
  templateUrl: './site-interest.component.html',
  styleUrls: ['./site-interest.component.css']
})
export class SiteInterestComponent{

  imageUrl: string = "/assets/image/default-image.png";
  fileToUpload: File = null;

  model: Gallery = new Gallery();
  files: FileList;
  successfulMessage = '';

  constructor(
    private http: HttpClient,
    @Inject('BASE_URL') private baseUrl: string,
    private galleryService: SiteService) {
  }

  handleFileInput(files: FileList) {
    this.files = files;

    //Show image preview
    this.fileToUpload = files.item(0);

    var reader = new FileReader();
    reader.onload = (event:any) => {
      this.imageUrl = event.target.result;
    }
    reader.readAsDataURL(this.fileToUpload);
  }

  onSubmit() {

    const formData: FormData = new FormData();
    formData.append("name", this.model.name);
    formData.append("description", this.model.description);
    formData.append("infoInterest", this.model.infoInterest);

    Array.from(this.files).forEach(file => {
      formData.append('files', file, file.name);
    });

    this.http.post(`${this.baseUrl}api/GalleryImages`, formData).subscribe(result => {
      this.successfulMessage = 'Successful registration';
      this.imageUrl = "/assets/image/default-image.png";
      // this.galleryService.add(result);
      console.log(result)
      setTimeout(() => {
        this.successfulMessage = '';
      }, 5000);
    }, error => console.error(error));

  }

}
