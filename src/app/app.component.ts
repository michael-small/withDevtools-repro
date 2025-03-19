import { Component, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { BooksStore } from './store';

@Component({
  selector: 'app-root',
  template: ``
})
export class AppComponent {
    store = inject(BooksStore);
}
