import { Component, Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { GalleryService } from '../Services/gallery.service';
import { Gallery } from '../Models/Gallery';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
})
export class HomeComponent {

  model: Gallery = new Gallery();
  files: FileList;
  successfulMessage = '';

  constructor(
    private http: HttpClient,
    @Inject('BASE_URL') private baseUrl: string,
    private galleryService: GalleryService) {
  }

  handleFileInput(files: FileList) {
    this.files = files;
  }

  onSubmit() {
    const formData: FormData = new FormData();
    formData.append("name", this.model.name);
    formData.append("description", this.model.description);
    formData.append("infoInterest", this.model.infoInterest);
    Array.from(this.files).forEach(file => {
      formData.append('files', file, file.name);
    });

    this.http.post(`${this.baseUrl}api/galleryimages`, formData).subscribe(result => {
      this.successfulMessage = 'Successful registration';
      console.log(result)
      this.galleryService.add(result);
      setTimeout(() => {
        this.successfulMessage = '';
      }, 5000);
    }, error => console.error(error));
  }
}


