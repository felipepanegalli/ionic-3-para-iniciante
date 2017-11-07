import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the FeedPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-feed',
  templateUrl: 'feed.html',
})
export class FeedPage {
  public objeto_feed = {
    nome: "Felipe Panegalli",
    data: "Novembro 1, 2017",
    descricao: "Salve salve galera, saiu novidade no site... Como obter retorno com redes sociais. Clique na imagem acima e veja, te espero lá :).",
    qtd_likes: "12",
    qtd_comentario: "4",
    tempo_comentario: "12min"
  }

  public nomeUsuario:string = "Felipe Panegalli";
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad FeedPage');
  }

}
