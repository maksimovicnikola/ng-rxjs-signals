import { Component, OnDestroy, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { from, of, Subscription } from 'rxjs';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit, OnDestroy {
  title = 'ng-rxjs-signals';

  sub!: Subscription;
  subArray!: Subscription;
  subFrom!: Subscription;
  subString!: Subscription;

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
  }

  ngOnDestroy(): void {
    this.sub.unsubscribe();
    this.subArray.unsubscribe();
    this.subFrom.unsubscribe();
    this.subString.unsubscribe();
  }
}
