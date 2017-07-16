import { Component } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  form: FormGroup;
  file: fileInterface;
  imageFile: File;

  ngOnInit() {
    this.form = new FormGroup({
      CompanyName: new FormControl(" tata "),
      CompanyID: new FormControl(" 456 "),
      Contact: new FormControl(" 9551302290 "),
      address: new FormControl(" Your address sir ... "),
      pic: new FormControl(""),
      CompanyEmail: new FormControl(" xyz@gmail.com "),
      CompanyCategory: new FormControl(" motors ")
    });

    this.file = {
      CompanyName: [],
      CompanyID: [],
      Contact: [],
      address: [],
      pic:[],
      CompanyCategory: [],
      CompanyEmail: []
    };
  }
  onSubmit(user) {

    this.file.CompanyName.push(user.CompanyName);
    this.file.CompanyID.push(user.CompanyID);
    this.file.Contact.push(user.Contact);
    this.file.address.push(user.address);
    this.file.pic.push(this.imageFile);
    this.file.CompanyCategory.push(user.CompanyCategory);
    this.file.CompanyEmail.push(user.CompanyEmail);

    console.log(this.file);
    this.imageFile = null;
    // console.log(user.firstName + " stop " + user.languages);
  }

  handleFileUpload(event){
    this.imageFile = event.target.files[0];
  }

}

interface fileInterface {
  CompanyName: string[],
  CompanyID: string[],
  Contact: string[],
  address: string[],
  pic: File[],
  CompanyCategory: string[],
  CompanyEmail: string[]
}