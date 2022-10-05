import { Component, Input, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';

@Component({
  selector: 'app-count',
  templateUrl: './count.component.html',
  styleUrls: ['./count.component.scss']
})
export class CountComponent implements OnInit {

  // @Input() count = 0;
counter: number | undefined;
  constructor(private store: Store<{counter: {counter: number}}>) { }

  ngOnInit(): void {

    this.store.select('counter').subscribe(data => {
      this.counter = data.counter
      console.log('this.counter',this.counter)
    })
  }

}
