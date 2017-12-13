import { Pipe, PipeTransform } from '@angular/core';
import { Pokemon } from '../model/pokemon';

@Pipe({
    name: 'searchFilter'
})
export class SearchFilter implements PipeTransform {
    public transform(items: Pokemon[], filter: string): any {
        if (!filter || filter.trim() == '') {
            return items;
        }
        return items.filter(item => item.name.toLowerCase().indexOf(filter.trim().toLowerCase()) !== -1);
    }
}
