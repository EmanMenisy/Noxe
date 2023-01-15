import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'seeMore'
})
export class SeeMorePipe implements PipeTransform {

  transform(overView:string): string {
    return overView.split(' ').slice(0,10).join(' ')
  }

}
