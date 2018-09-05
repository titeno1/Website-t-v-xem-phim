import { Pipe, PipeTransform } from '@angular/core';
import { DomSanitizer } from '../../../node_modules/@angular/platform-browser';

@Pipe({
  name: 'safe'
})
export class SafePipe implements PipeTransform {
  constructor(private sani: DomSanitizer) { }
  transform(value: any): any {
    return this.sani.bypassSecurityTrustResourceUrl(value);
  }
}
