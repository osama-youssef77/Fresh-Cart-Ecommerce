import { Component, OnInit } from '@angular/core';
import { Brand } from 'src/app/shared/interfaces/product';
import { EcomApiService } from 'src/app/shared/services/ecom-api.service';

@Component({
  selector: 'app-brands',
  templateUrl: './brands.component.html',
  styleUrls: ['./brands.component.css']
})
export class BrandsComponent implements OnInit {

  constructor(private _EcomApiService:EcomApiService){}

  brandsTypes:Brand[]=[]

  //getting dat
  ngOnInit(): void {
      this._EcomApiService.getBrands().subscribe({
        next:(Response)=>{
          this.brandsTypes=Response.data;
        },

        error:(err)=>{
          console.log(err);
        }
        
      })
  }

}
