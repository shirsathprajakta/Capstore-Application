import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'searchCustomer'
})
export class SearchCustomerPipe implements PipeTransform {

  transform(value: any, ...args: any[]): any {
    return null;
  }

}
