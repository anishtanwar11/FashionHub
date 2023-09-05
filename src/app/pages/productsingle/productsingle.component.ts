import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ServiceService } from 'src/app/services/service.service';

@Component({
  selector: 'app-productsingle',
  templateUrl: './productsingle.component.html',
  styleUrls: ['./productsingle.component.css']
})
export class ProductsingleComponent implements OnInit {

  constructor(private param:ActivatedRoute, private ServiceService:ServiceService) { }
  getMenuId:any;
  menuData:any;
  ngOnInit(): void {
    this.getMenuId = this.param.snapshot.paramMap.get('id');
    console.log(this.getMenuId, 'getmenu');

    if(this.getMenuId){
      this.menuData = this.ServiceService.allProducts.filter((value) => {
        return value.id == this.getMenuId;
      });
      console.log(this.menuData, 'menudata');
    }
  }

}
