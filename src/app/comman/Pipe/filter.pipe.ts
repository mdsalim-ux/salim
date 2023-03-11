import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(items: any[], arg1: any, arg2: any): any {
    if (items.length > 0) {
      let filterdata = items.filter(e => {
         return e[arg1] == arg2;
      });
      return filterdata;
    }
    else{
      return items;
    }
  }

}