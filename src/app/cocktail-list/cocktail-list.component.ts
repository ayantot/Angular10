import { Component, OnInit } from '@angular/core';
import { CocktailService } from '../cocktail.service';
import { HttpClient } from '@angular/common/http';



@Component({
  selector: 'app-cocktail-list',
  templateUrl: './cocktail-list.component.html',
  styleUrls: ['./cocktail-list.component.css']
})
export class CocktailListComponent implements OnInit {
  public cocktails:any[] = [];
  public service: CocktailService;


  constructor(public CocktailsService: CocktailService) { 
    this.service=CocktailsService;
  }

  ngOnInit() {
    this.service.getCocktails().subscribe(
      (param_cocktails: any[]) => {
        this.cocktails = param_cocktails;
      },
    )
  }

}



