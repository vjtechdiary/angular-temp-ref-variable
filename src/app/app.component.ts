import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'templaterefvariable';
  // logMessage will take the parameter value 
  // which is the value of template reference variable
  logMessage(value){
    console.log(value);
  }
}
