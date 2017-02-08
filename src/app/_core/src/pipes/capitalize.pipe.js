import { Pipe } from '@angular/core';

@Pipe({ name: 'capitalize' })
export class CapitalizePipe {
  transform(value) {
    if (!value) return value;

    const rep = (txt) => {
      const char1 = txt.charAt(0).toUpperCase();
      const char2 = txt.substr(1).toLowerCase();
      return char1 + char2;
    };
    return value.replace(/\w\S*/g, rep);
  }
}
