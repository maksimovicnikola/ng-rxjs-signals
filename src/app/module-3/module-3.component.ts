import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription, of, from, fromEvent } from 'rxjs';

@Component({
  selector: 'app-module-3',
  imports: [],
  templateUrl: './module-3.component.html',
  styleUrl: './module-3.component.scss'
})
export class Module3Component implements OnInit, OnDestroy {
  title = 'ng-rxjs-signals';

  sub!: Subscription;
  subArray!: Subscription;
  subFrom!: Subscription;
  subString!: Subscription;
  subEvent!: Subscription;
  subKey!: Subscription;

  ngOnInit(): void {
    
    this.sub = of(2, 4, 6, 8, 10).subscribe(item => console.log("Value from of:", item));
    
    this.subArray = of([2, 4, 6, 8, 10]).subscribe(item => console.log("Value from of array:", item));

    this.subFrom = from([20, 40, 60, 80, 100]).subscribe({
      next: (item) => console.log("Value from from:", item),
      error: (error) => console.log("Error from from:", error),
      complete: () => console.log("Complete from from")
    });
    
    this.subString = of("Apple1", "Apple2", "Apple3", "Apple4", "Apple5").subscribe({
      next: (item) => console.log("Apple value from of:", item),
      error: (error) => console.log("Error from apple of:", error),
      complete: () => console.log("Complete from apple of")
    });


    this.subEvent = fromEvent(document, 'click').subscribe({
      next: (event) => console.log("Event from fromEvent:", event),
      error: (error) => console.log("Error from event:", error),
      complete: () => console.log("Complete from event")
    });

    const keys: string[] = [];

    this.subKey = fromEvent(document, 'keydown').subscribe({
      next: (event) => {
        keys.push((event as KeyboardEvent).key);
        console.log("Keys:", keys);
      },
      error: (error) => console.log("Error from keydown:", error),
      complete: () => console.log("Complete from keydown")
    });
  }

  ngOnDestroy(): void {
    this.sub.unsubscribe();
    this.subArray.unsubscribe();
    this.subFrom.unsubscribe();
    this.subString.unsubscribe();
    this.subEvent.unsubscribe();
  }}