import { Component } from '@angular/core';
import { Route, Router } from '@angular/router';

@Component({
  selector: 'app-reagents',
  standalone: false,
  
  templateUrl: './reagents.component.html',
  styleUrl: './reagents.component.css'
})
export class ReagentsComponent {
constructor(private _route: Router){

}

backHome(){
  this._route.navigate(['/home']);
}
}
