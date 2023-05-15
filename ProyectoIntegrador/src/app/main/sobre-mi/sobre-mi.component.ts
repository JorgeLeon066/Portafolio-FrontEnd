import { Component } from '@angular/core';
import { ApiService } from 'src/app/service/api.service';

@Component({
  selector: 'app-sobre-mi',
  templateUrl: './sobre-mi.component.html',
  styleUrls: ['./sobre-mi.component.css']
})
export class SobreMiComponent {
  data: any[] = [];

  constructor(private apiService: ApiService) {

  }

  ngOnInit(): void {
    //this.llamarData();
  }

  // llamarData() {
  //   this.apiService.getData().subscribe( data => {
  //      this.data = data.data.name
  //      console.log(this.data)
  //    })
  //  }

  llamarName() {
    this.apiService.getData().subscribe( data => {
      this.data = data.data.name;
    })
  }

  llamarLastName() {
    this.apiService.getData().subscribe( data => {
      this.data = data.data.lastName;
    })
  }

}
