import { Component, OnInit } from '@angular/core';
import { Output, EventEmitter } from '@angular/core';
import { Store } from '@ngrx/store';
import { dec, inc, reset } from '../state/counter.action';
@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss']
})
export class ButtonComponent implements OnInit {

  // @Output() increment = new EventEmitter<[]>();
  // @Output() decrement = new EventEmitter<[]>();
  // @Output() reset = new EventEmitter<[]>();



  constructor(private store: Store<{counter: {counter: number}}>) { }

  ngOnInit(): void {
  }

  public Increment(): void{
    //this.increment.emit()
    console.log('Test')
    this.store.dispatch(inc());
  }

  public Decrement(): void{
    //this.decrement.emit()
    console.log('Test2')
    this.store.dispatch(dec());
  }

  public Reset(): void{
   // this.reset.emit()
   this.store.dispatch(reset())
  }
}
