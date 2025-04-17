import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-blogs-videos',
  standalone: false,
  
  templateUrl: './blogs-videos.component.html',
  styleUrl: './blogs-videos.component.css'
})
export class BlogsVideosComponent {
constructor(private _route: Router){

}

backHome(){
  this._route.navigate(['/home']);
}
}
