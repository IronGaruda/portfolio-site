import { Component, ElementRef, ViewChild } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { fromEvent, Observable, of, BehaviorSubject } from "rxjs";
import { flatMap, debounceTime, map, tap, mergeMap } from "rxjs/operators";

@Component({
  selector: 'app-type-ahead',
  templateUrl: './type-ahead.component.html',
  styleUrls: ['./type-ahead.component.scss']
})
export class TypeAheadComponent {

 //getting input and suggestions fields
 @ViewChild("typeAhead") typeAhead: ElementRef;
 @ViewChild("suggestions") suggestions: ElementRef;

 //delcaring observables
 inputStream$: Observable<any>;
 suggestionsStream$: Observable<any>;

 //declaring global variable
 inputEvent;
 result;
 userInput: string = '';
 searchTerm$ = new BehaviorSubject<string>('');
 input$: Observable<any>;

  constructor(private http: HttpClient) { }

  ngAfterViewInit() {
    //sends http request to library that finds search results and returns them as an observable
    this.input$ = this.searchTerm$
    .pipe(
      debounceTime(350),
      map((event: string) => {
        console.log("Original Event: ", event);
        if(event) {
          return this.makeRequest(event);
        }
        else{
          return of([]);
        }
      }),
      flatMap((resp: any) => {
        return resp;
      }),
      flatMap((resp: any) => {
        console.log("Response after last flatMap: ", resp);
        return of(resp);
      })
    )
  }

  onSearch(e): void {
    this.searchTerm$.next(e.target.value);
    console.log("search term: ", this.searchTerm$.value);
  }

  makeRequest(term: string) {
    const url = this.http.get(`https://api.datamuse.com/sug?s=${term}`);
    return url;
  }
}
