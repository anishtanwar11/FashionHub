import { Component, OnInit } from '@angular/core';
import { ServiceService } from 'src/app/services/service.service';

@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.css']
})
export class ShopComponent implements OnInit {

  constructor(private service:ServiceService) { }
  productData:any;


  ngOnInit(): void {
    this.productData = this.service.allProducts;
  }

  searchText: string = '';
  onsearchTextEntered(searchValue:string){
     this.searchText = searchValue;
     console.log(this.searchText);
  }


}
