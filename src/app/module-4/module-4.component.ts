import { Component, OnInit, OnDestroy } from '@angular/core';
import { filter, from, map, of, Subscription, take, tap, timer } from 'rxjs';

@Component({
  selector: 'app-module-4',
  imports: [],
  templateUrl: './module-4.component.html',
  styleUrl: './module-4.component.scss',
})
export class Module4Component implements OnInit, OnDestroy {
  subApples!: Subscription;
  subFilter!: Subscription;
  subTake!: Subscription;

  ngOnInit(): void {
    this.mapAndTapExample();
    this.filterExample();
    this.takeExample();
  }

  mapAndTapExample() {
    const apples$ = from([
      { id: 1, type: 'macintosh' },
      { id: 2, type: 'gala' },
      { id: 3, type: 'fuji' },
    ]);

    this.subApples = apples$
      .pipe(
        map((apple) => ({ ...apple, color: 'red' })),
        tap((a) => console.log('Apple:', a))
      )
      .subscribe();
  }

  filterExample() {
    of(2, 3, 4, 5, 6)
      .pipe(
        filter((num) => num % 2 === 0),
        tap((num) => console.log('Even#: ', num))
      )
      .subscribe();
  }

  takeExample() {
    this.subTake = timer(0, 1000)
      .pipe(take(5))
      .subscribe({
        next: (item) => console.log('Timer: ', item),
        error: (err) => console.error('Timer error occured: ', err),
        complete: () => console.log('No more ticks'),
      });
  }

  ngOnDestroy(): void {
    this.subApples.unsubscribe();
    this.subFilter.unsubscribe();
    this.subTake.unsubscribe();
  }
}
