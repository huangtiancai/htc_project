import { Component, OnInit } from "@angular/core";
import { Http } from "@angular/http";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {


  allProjects: any[] = [];
  projects: any[] = [];

  hash: number = new Date().getTime();

  constructor(private http: Http) {
 
  }

  ngOnInit(): void {
    this.http.get(`./data/data.json?v=${this.hash}`).subscribe(res => {
      let json = res.json();
      this.allProjects = json;
      this.projects = json;
    }, err => {
      console.log(err);
    })
  }

  navChange($event) {
    console.log($event);
    this.changeData($event);
  }

  changeData(type: string) {
    this.projects = this.filterPro(type);
  }

  filterPro(type: string): any[] {
    if (!type) {
      return this.allProjects;
    }
    return this.allProjects.filter(item => {
      return item.type.includes(type);
    })
  }
}
