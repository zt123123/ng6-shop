import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'search'
})
export class FilterPipe implements PipeTransform {

  transform(list: any[], field: any, keword: string): any {
    if (!field || !keword) {
      return list
    }
    return list.filter(item => {
      let fieldVal = item[field]
      return fieldVal.indexOf(keword) >= 0
    });
  }

}
