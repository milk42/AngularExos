import { Component } from '@angular/core';
import { CheckboxRequiredValidator } from '@angular/forms';
import { ValueTransformer } from '@angular/compiler/src/util';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  description = 'Bonjour, il fait beau ';
  colornomClass = '';
  inputValue = '';

  userObjet = {
    name: 'Jean-Eud',
    age: '42',
    birthday: new Date('1976/01/02')
  };

  /*   constructor (public title) {
    this.title = 'monTitre défini dans le constructeur';
  } */

  getDescription(): string {
    return this.description.toLocaleUpperCase();
  }

  changeTitle($event) {
    if (this.title === 'Promo La Poste') {
      this.title = 'app';
    } else {
      this.title = 'Promo La Poste';
    }
  }

  changeColor($event) { // change la couleur du titre lors du click sur le bouton de cette methode
    if (this.colornomClass === 'blue') {
      this.colornomClass = 'red';
    } else {
      this.colornomClass = 'blue';
    }
  }

  changeValue($event) { // je récupère une valeur ciblée par l'évènement (change)
     this.colornomClass = $event.target.value;
  }

  textInput (event: any) {
     this.inputValue += event.taget.value;
     console.log(this.inputValue);
  }
}


