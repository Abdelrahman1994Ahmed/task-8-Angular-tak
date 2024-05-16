import { Component } from '@angular/core';
import { Cardcomps } from '../cardcomps';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrl: './card.component.css'
})
export class CardComponent {
  products : Cardcomps [] = [
    {title: "Camera",img:'https://images.pexels.com/photos/90946/pexels-photo-90946.jpeg?auto=compress&cs=tinysrgb&w=600',price:5689,desc:"a black sony camera",ibuy:'Add to card'},
    {title: "Camera",img:'https://images.pexels.com/photos/20832069/pexels-photo-20832069/free-photo-of-a-narrow-street-with-buildings-and-cars.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load',price:5689,desc:"a black sony camera",ibuy:'Add to card'},
    {title: "Home",img:'https://images.pexels.com/photos/20832069/pexels-photo-20832069/free-photo-of-a-narrow-street-with-buildings-and-cars.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load',price:354,desc:"sony camera",ibuy:'Add to card'},
    {title: "Camera",img:'https://images.pexels.com/photos/90946/pexels-photo-90946.jpeg?auto=compress&cs=tinysrgb&w=600',price:5689,desc:"a black sony camera",ibuy:'Add to card'},

  ]
  textins = this.products[0].ibuy

  changetext (title: string,price : number){
    console.log(title,price);
    
    this.textins = 'done and done'
  }

  
}
