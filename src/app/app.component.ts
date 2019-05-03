import { CocktailService } from './cocktail.service';
import { Component } from '@angular/core';
import {NasaService} from './cocktail-list/nasa.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Cocktail list';

  image:string[];

  constructor(private myService:NasaService){
    this.image = [];

    
  }

  ngOnInit() {
    this.myService.getImage().subscribe(
      (param_image:string[]) => {
        this.image = param_image;
        document.body.style.backgroundImage = 'url("'+param_image[0]+'")';
      }
    );
  }

}


