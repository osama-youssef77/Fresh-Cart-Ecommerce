import { Component, OnInit } from '@angular/core';
import { Category } from 'src/app/shared/interfaces/product';
import { EcomApiService } from 'src/app/shared/services/ecom-api.service';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css']
})
export class CategoriesComponent implements OnInit {

  constructor(private _EcomApiService:EcomApiService){}

  categoriesTypes:Category[]=[];

  ngOnInit(): void {
      this._EcomApiService.getCategories().subscribe({
        next:(Response)=>{
          this.categoriesTypes=Response.data;
        },
        
        error:(err)=>{
          console.log(err);
        }
      })
  }

}
