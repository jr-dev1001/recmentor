import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.scss']
})
export class CreateComponent implements OnInit {
  likes:number=0;
  dislikes:number=0;
  starRating = 0; 
  Imagepath: string ;
  constructor() {
    this.Imagepath='https://i.ytimg.com/vi/StphRCLkx6Q/maxresdefault.jpg'
   }

  ngOnInit(): void {
  }
 incrementLikes () {  
    this.likes++;  
};  
incrementDislikes(){  
    this.dislikes++;  
};  

}
