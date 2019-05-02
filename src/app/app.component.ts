import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  selectedFile: File = null;


  constructor(private http: HttpClient) {

  }


  onFileSelected(event) {
    //console.log(event);
    this.selectedFile = <File>event.target.file[0];

  }

  onUpload() {
    const fd = new FormData();
    fd.append('image', this.selectedFile, this.selectedFile.name)
    this.http.post('https://us-central1-tester-35558.cloudfunctions.net/uploadFile', fd)
      .subscribe(res => {
        console.log(res);

      })
  }
}
