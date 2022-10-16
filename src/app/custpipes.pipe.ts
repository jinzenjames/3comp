import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'custpipes'
})
export class CustpipesPipe implements PipeTransform {

  transform(value: String, name: String): unknown {
    return 'Firstname: '+ name;
  }

}
