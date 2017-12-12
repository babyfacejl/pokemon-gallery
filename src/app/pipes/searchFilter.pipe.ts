import { Pipe, PipeTransform } from '@angular/core';
import { Pokemon } from '../model/pokemon';

@Pipe({
    name: 'searchFilter'
})
export class SearchFilter implements PipeTransform {
    public transform(items: Pokemon[], filter: string): any {
        if (!filter) {
            return items;
        }
        return items.filter(item => item.name.toLowerCase().indexOf(filter.toLowerCase()) !== -1);
    }
}
