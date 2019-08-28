import { Component } from '@angular/core';
import { Storage } from '@ionic/storage';
@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  newMatricula: string;
  matricula: string;

  constructor(public storage:Storage) {    
    this.getMatricula();
  }

  setMatricula(){
    this.storage.set('matricula', this.newMatricula);
  }

  getMatricula(){
    this.storage.get('matricula').then( (val) => {
      this.matricula = val;
      this.getMatricula();
    })
  }

  check(){
    if (this.matricula == null) {
      return false;
    } else {
      return true;
    }
  }

}

