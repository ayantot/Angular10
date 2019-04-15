import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CocktailService {
  Cocktail = [
    { name: 'cocktail1', price: 8, img: "https://img.freepik.com/free-photo/lemon-cocktail-with-plastic-straw-yellow-background_23-2148102384.jpg?size=626&ext=jpg" },
    { name: 'cocktail2', price: 10, img: "https://image.freepik.com/free-photo/blue-cocktail-splashing-dark-background_72967-8.jpg" },
    { name: 'cocktail3', price: 7, img: "https://image.freepik.com/free-photo/close-up-view-splash-water-with-falling-cherry_60569-94.jpg" },
    { name: 'cocktail4', price: 18, img: "https://image.freepik.com/free-photo/blood-orange-gin-tonic-cocktail-served-with-slices-orange-glass_8353-6099.jpg" },
  ];
  constructor() { }

  public getCocktails() {
    return this.Cocktail;
  }


}
