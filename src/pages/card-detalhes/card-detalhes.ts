import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

//Providers
import { MagicTheGatheringProvider } from './../../providers/magic-the-gathering/magic-the-gathering';


@IonicPage()
@Component({
  selector: 'page-card-detalhes',
  templateUrl: 'card-detalhes.html',
  providers: [
    MagicTheGatheringProvider
  ]
})
export class CardDetalhesPage {
  public carta;
  public cartaId;

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    public magicTheGatheringProvider: MagicTheGatheringProvider) {
  }

  ionViewDidLoad() {
    this.cartaId = this.navParams.get("id");
    this.magicTheGatheringProvider.getCardsById(this.cartaId).subscribe(
      data => {
        const response = (data as any);
        const objeto_retorno = JSON.parse(response._body);
        //Retorna o card selecionado
        this.carta = objeto_retorno.cards[0];
        console.log(objeto_retorno.cards[0]);
      },
      error => {
        console.log(error);
      });
  }
}