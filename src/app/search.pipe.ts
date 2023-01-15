import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'search'
})
export class SearchPipe implements PipeTransform {

  transform(tendingItems:any[], term:string): any[] {
    return tendingItems.filter((item)=> item.title.toLowerCase().includes(term.toLowerCase())) ;
  }

}
