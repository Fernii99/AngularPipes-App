import { Component } from '@angular/core';
import { Observable, interval, tap } from 'rxjs';

@Component({
  selector: 'app-uncommon-page',
  templateUrl: './uncommon-page.component.html',
  styleUrl: './uncommon-page.component.css'
})
export class UncommonPageComponent {

  // i18nSelect Pipe
  public name: string = 'Asier';
  public gender: 'male'|'female' = 'male';
  public invitationMap = {
    male: 'invitarlo',
    female: 'invitarla '
  }

  changeClient = ():void => {
    this.name = 'Melissa',
    this.gender = 'female';
  }


  //i18nPlural Pipe
  public clients: string[] = ['Maria', 'Pedro', 'Fernando', 'Hernando', 'Eduardo', 'Melissa', 'Natalia'];
  public clientsMap = {
    '=0': 'No more clients waiting ',
    '=1': 'There is one client waiting ',
    '=2': 'there are 2  clients waiting ',
    'other': 'there are # clients waiting ',
  }

  deleteClient = ():void => {
    this.clients.shift()
  }


  //KeyValue Pipe
  public person = {
    name: 'Asier',
    age: '24',
    address: 'San Sebastian, Spain'
  }


  //Async Pipe
  public myObservableTimer: Observable<number> = interval(2000).pipe(
    tap( value => console.log(value))
  );

    public promiseValue: Promise<string> = new Promise( (resolve, reject) => {
      setTimeout( () => {
        resolve( 'We have Data in the promise')
      }, 3500)
    })

}
