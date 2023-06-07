import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class SearchService {
  private searchInputSource = new BehaviorSubject<string>('');
  public searchIput$ = this.searchInputSource.asObservable();

  public setSearchInput(searchInput: string): void {
    this.searchInputSource.next(searchInput);
  }
}
