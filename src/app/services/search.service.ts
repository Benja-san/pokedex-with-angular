import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class SearchService {
  private searchInputSource = new Subject<string>();
  public searchIput$ = this.searchInputSource.asObservable();

  public setSearchInput(searchInput: string): void {
    this.searchInputSource.next(searchInput);
  }
}
