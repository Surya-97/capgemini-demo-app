import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'search' })
export class SearchPipe implements PipeTransform {
  transform(items: any[], searchTerm: string): any[] {
    if (!items || !searchTerm) {
      return items;
    }
    return items.filter(
      (item) =>
        item.stdName.toLowerCase().includes(searchTerm.toLowerCase()) ||
        item.stdNo.toLowerCase().includes(searchTerm.toLowerCase()) ||
        item.phoneNo.toString().toLowerCase().includes(searchTerm.toLowerCase())
    );
  }
}
