import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

/*
  Generated class for the MagicTheGatheringProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class MagicTheGatheringProvider {

  constructor(public http: Http) {
    console.log('provider MTG');
  }

  getAllCards(){
    return this.http.get("https://api.magicthegathering.io/v1/cards?setName=Aether%20Revolt");
  }

}
