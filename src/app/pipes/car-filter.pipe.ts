import { Pipe, PipeTransform } from '@angular/core';
import { CarDetails } from '../models/carDetails';

@Pipe({
  name: 'carFilter'
})
export class CarFilterPipe implements PipeTransform {

  transform(value: CarDetails[], filterText: string): CarDetails[] {
    filterText = filterText ? filterText.toLocaleLowerCase() : '';

    let filteredQuery = (carDetail: CarDetails) =>
       (`${ carDetail.brandName } ${ carDetail.description }`).toLocaleLowerCase()
          .indexOf(filterText) !== -1

    return filterText ? value.filter(filteredQuery) : value;
 }

}
