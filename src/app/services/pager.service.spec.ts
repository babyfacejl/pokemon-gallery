import { PagerService } from './pager.service';
import { Pokemon } from '../model/pokemon';

describe('PagerService test', () => {
  let pagerService : PagerService;

  beforeEach(() => {
    pagerService = new PagerService();
  });

  it ('should paginate 100 items', () => {
    let results = pagerService.getPager(100, 1);
    expect(results.totalPages).toBe(5);
    expect(results.totalItems).toBe(100);
    expect(results.currentPage).toBe(1);
    expect(results.pageSize).toBe(20);
    expect(results.startPage).toBe(1);
    expect(results.endPage).toBe(5);
    expect(results.startIndex).toBe(0);
    expect(results.endIndex).toBe(19);
    expect(results.pages).toEqual([1,2,3,4,5]);
  });

  it ('should paginate 151 items', () => {
    let results = pagerService.getPager(151, 1);
    expect(results.totalPages).toBe(8);
    expect(results.totalItems).toBe(151);
    expect(results.currentPage).toBe(1);
    expect(results.pageSize).toBe(20);
    expect(results.startPage).toBe(1);
    expect(results.endPage).toBe(8);
    expect(results.startIndex).toBe(0);
    expect(results.endIndex).toBe(19);
    expect(results.pages).toEqual([1,2,3,4,5,6,7,8]);
  });


});
