import * as _ from 'underscore';
import { Injectable } from '@angular/core';

@Injectable()
export class PagerService {
  getPager(totalItems: number, currentPage: number = 1, pageSize: number = 20) {
        let totalPages = Math.ceil(totalItems / pageSize);
        let startPage : number = 1;
        if (totalItems == 0)
          startPage = 0;

        let endPage: number = totalPages;
        let startIndex = (currentPage - 1) * pageSize;
        let endIndex = Math.min(startIndex + pageSize - 1, totalItems - 1);
        let pages = _.range(startPage, endPage + 1);

        return {
            totalItems: totalItems,
            currentPage: currentPage,
            pageSize: pageSize,
            totalPages: totalPages,
            startPage: startPage,
            endPage: endPage,
            startIndex: startIndex,
            endIndex: endIndex,
            pages: pages
        };
    }
}
