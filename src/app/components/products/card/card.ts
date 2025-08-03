import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-card',
  imports: [],
  templateUrl: './card.html',
  styleUrl: './card.css'
})
export class Card {
@Input({required:true})title!:string;
@Input({required:true})description!:string;
@Input({required:true})imageCover!:string;
@Input({required:true})price!:number;
@Input({required:true})quntity!:number;
@Input({required:true})onSale!:boolean;
}
