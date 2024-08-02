import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'canFly'
})

export class CanFlyPipe implements PipeTransform {
  transform(value: boolean): string {
    return (value) ? 'This super heroe can Fly' : `this superheroe can't Fly`
  }
}
