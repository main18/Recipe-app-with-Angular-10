import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  selected : string = 'recipe';

  onNavigate(feature:string){
    this.selected = feature;
  }

}
