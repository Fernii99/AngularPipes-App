import { Component } from '@angular/core';

@Component({
  selector: 'app-basics-page',
  templateUrl: './basics-page.component.html',
})
export class BasicsPageComponent {

  public nameLower: string = 'asier';
  public nameUpper: string = 'ASIER';
  public fullName: string = 'AsIeR FeRnAnDeZ'

  public customDate: Date = new Date();

}
