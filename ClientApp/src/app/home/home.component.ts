import { Component } from '@angular/core';
import { UploadImagenService } from '../Service/upload-imagen.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
})
export class HomeComponent {
  imageUrl: string = "/assets/image/default-image.png";
  fileToUpload: File = null;
  constructor(private imageService : UploadImagenService) { }

  ngOnInit() {
  }

  handleFileInput(file: FileList) {
    console.log(file)
    this.fileToUpload = file.item(0);

    //Show image preview
    var reader = new FileReader();
    reader.onload = (event:any) => {
      this.imageUrl = event.target.result;
    }
    reader.readAsDataURL(this.fileToUpload);
  }

  OnSubmit(Caption,Image){
   this.imageService.postFile(Caption.value,this.fileToUpload).subscribe(
     data =>{
       console.log('done');
       Caption.value = null;
       Image.value = null;
       this.imageUrl = "/assets/img/default-image.png";
     }
   );
  }
}
