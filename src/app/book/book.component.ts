import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Book } from '../models/book';

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.css']
})
export class BookComponent implements OnInit {
  @Input() book: Book;
  @Input() index: number;
  @Output() up=new EventEmitter<number>();
  @Output() down=new EventEmitter<number>();
  constructor() { }

  ngOnInit() {
  }
  uprate(index: number){
    this.up.emit(index);
  }
  downrate(index: number){
  this.down.emit(index);
}
}
