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
  //private cardteste = "d6901a23503f4953dc3f643b193a7bdb31478fc2";
  //https://api.magicthegathering.io/v1/cards?setName=Aether%20Revolt&&page=2
  private baseApiPath = "https://api.magicthegathering.io/v1/";

  constructor(public http: Http) {
    console.log('provider MTG');
  }

  getAllCards(page = 1){
    console.log(this.baseApiPath + `cards?setName=Aether%20Revolt&page=${page}`);
    return this.http.get(this.baseApiPath + `cards?setName=Aether%20Revolt&page=${page}`);
  }

  getCardsById(cardId){
    return this.http.get(this.baseApiPath + `cards?id=${cardId}`);
  }

}
