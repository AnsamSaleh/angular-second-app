import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Book } from '../models/book';

@Component({
  selector: 'app-book-form',
  templateUrl: './book-form.component.html',
  styleUrls: ['./book-form.component.css']
})
export class BookFormComponent implements OnInit {
  @Output() add=new EventEmitter<Book>();
  constructor() { }

  ngOnInit() {
  }
  addBook(name:string, url:string){
    var indexCom=url.indexOf(".com");
    console.log(url.slice(7,indexCom+4));
    var subURL=url.slice(7,indexCom+4);
    this.add.emit(new Book(name, subURL));
  }

}
