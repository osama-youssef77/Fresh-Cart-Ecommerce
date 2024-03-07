import { Pipe, PipeTransform } from '@angular/core';
import { product } from '../interfaces/product';

@Pipe({
  name: 'searchPipe'
})
export class SearchPipePipe implements PipeTransform {

  transform(products:product[],searchWord:string): product[] {
    return products.filter((item)=>
      item.title.toLowerCase().includes(searchWord.toLowerCase())
    )
  }

}
