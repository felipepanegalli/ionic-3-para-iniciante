import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

//Providers
import { MagicTheGatheringProvider } from './../../providers/magic-the-gathering/magic-the-gathering';

/**
 * Generated class for the ListarCartasPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-listar-cartas',
  templateUrl: 'listar-cartas.html',
  providers: [
    MagicTheGatheringProvider
  ]
})
export class ListarCartasPage {

  public listaDeCartas = new Array<any>();

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    private mtgProvider: MagicTheGatheringProvider) {
  }

  ionViewDidLoad() {
    this.mtgProvider.getAllCards().subscribe(
      data => {
        const response = (data as any);
        const objeto_retorno = JSON.parse(response._body);
        this.listaDeCartas = objeto_retorno.cards;
        console.log(objeto_retorno);
      },
      error => {
        console.log(error);
      });
  }

}
