import { computed } from '@angular/core';
import { patchState, signalStore, withComputed, withMethods, withState } from '@ngrx/signals';
import {withDevtools} from '@angular-architects/ngrx-toolkit'

export type Book = {
    id: string,
    name: string,
    author: string,
    title: string;
  }

type BooksState = {
  books: Book[];
  isLoading: boolean;
  filter: { query: string; order: 'asc' | 'desc' };
};

const initialState: BooksState = {
  books: [],
  isLoading: false,
  filter: { query: '', order: 'asc' },
};

export const BooksStore = signalStore(
  withState(initialState),
  withDevtools('test'),
  withComputed((store) => ({
    booksCount: computed(() => store.books().length),
  })),
  withMethods((store) => ({
    addBook(book: Book): void {
      patchState(store, (state) => ({ books: [...state.books, book ] }));
    },
  }))
);