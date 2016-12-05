import { Pipe } from '@angular/core';

@Pipe({ name: 'encore-uri' })
export class EncodeURIPipe {
  transform(value) {
    if (!value) return value;

    return encodeURI(value);
  }
}
