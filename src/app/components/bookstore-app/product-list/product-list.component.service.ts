import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { book } from './model/book';
import { Observable, throwError } from 'rxjs';
import { catchError, map, retry } from 'rxjs/operators';

export const books: book[] = [
    { id: '1', name: 'Book1' , price: 10, quantity: 1, category: "Acao", img:"img1"},
    { id: '2', name: 'Book2' , price: 10, quantity: 1, category: "Acao", img:"img2"},
    { id: '3', name: 'Book3' , price: 10, quantity: 1, category: "Acao", img:"img3"},

  ];

@Injectable()

export class BooksService{

    private url = "https://localhost:5001;http://localhost:5000";
    httpOptions ={
        Headers: new HttpHeaders ({'content-type': 'application/json'})
    }
    constructor(private http: HttpClient){}

    getBook(){
        return this.http.get(this.url)
    }


}