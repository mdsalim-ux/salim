import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'unique'
})
export class UniquePipe implements PipeTransform {

  transform(items: any[], args: string): any {
    if (items.length > 0) {
      return items.filter((v, i, a) => a.findIndex(t => (t[args] === v[args])) === i)
    }
    else {
      return items;
    }
  }
}