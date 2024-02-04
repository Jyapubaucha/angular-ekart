import { Component } from '@angular/core';

@Component({
  selector: 'container',
  templateUrl: './container.component.html',
  styleUrls: ['./container.component.css']
})
export class ContainerComponent {

  listOfString: string[] = ['Ram', 'Harry', 'Potato', 'Haku', 'Deepak'];

  searchText: string = '';

  setSearchText(value: string){
    this.searchText = value;
  }
  

  // // name="Deepak Maharjan"

  // addToCart: number = 0;

  // product = {
  //   name: 'iPhone 13',
  //   price: 999,
  //   color: 'white',
  //   discounted: 7.5, //in percentage
  //   inStock: 5,
  //   pImage: '/assets/image/iphone.jpg'
  // }

  // getDiscountedPrice(){
  //   return this.product.price - (this.product.price * this.product.discounted / 100);
  // }
  
  // onChangeName(event: any){
  //   // this.name = event.target.value;
  //   // console.log(event.target.value);
  // }
 
  // // Event binding for click event  
  // decrementCartValue(){
  //   if(this.addToCart > 0){
  //     this.addToCart--;
  //   }
  // }
  // incrementCartValue(){
  //   if(this.addToCart < this.product.inStock){
  //     this.addToCart++;
  //   }
  // }

  // name: string = 'iPhone 16 pro max';
  // price: number = 999;
  // color: string = 'Red';
  // discounted_price: number = 888;
  

}
