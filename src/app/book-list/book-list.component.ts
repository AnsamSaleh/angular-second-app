import { Component, OnInit } from '@angular/core';
import { Book } from '../models/book';

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.css']
})
export class BookListComponent implements OnInit {
  bookList: Array<Book>;
  constructor() {
    this.bookList=[
      new Book("AngularJS","angular.com"),
      new Book("React","react.com")
    ];
  }

  ngOnInit() {
  }

  addNewBook(val: Book){
    this.bookList.unshift(val);
  }
  upRate(index: number){
    this.bookList[index].no=this.bookList[index].no+1;
  }
  downRate(index: number){
    this.bookList[index].no=this.bookList[index].no-1;
  }

}
