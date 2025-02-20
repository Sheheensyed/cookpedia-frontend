import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'search',
  standalone: true
})
export class SearchPipe implements PipeTransform {

  transform(allRecipe: any[], searchKey: string): any {
    let result: any = []
    if (!allRecipe || searchKey == "") {
      return allRecipe
    } 
      result = allRecipe.filter((item: any) => item.name.toLowerCase().includes(searchKey.toLowerCase()))
      return result
    
  }

}