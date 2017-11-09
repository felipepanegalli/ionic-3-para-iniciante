import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { MovieProvider } from './../../providers/movie/movie';

/**
* Generated class for the FeedDetalhesPage page.
*
* See https://ionicframework.com/docs/components/#navigation for more info on
* Ionic pages and navigation.
*/

@IonicPage()
@Component({
  selector: 'page-feed-detalhes',
  templateUrl: 'feed-detalhes.html',
  providers: [
    MovieProvider
  ]
})
export class FeedDetalhesPage {
  public filme;
  public filmeid;
  
  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    public movieProvider: MovieProvider
  ) {
  }
  
  ionViewDidLoad() {
    this.filmeid = this.navParams.get("id");
    this.movieProvider.getMovieDetails(this.filmeid).subscribe(
      data => {
        const response = (data as any);
        const objeto_retorno = JSON.parse(response._body);
        //Retorna o filme selecionado
        this.filme = objeto_retorno;
        console.log(objeto_retorno);
      },
      error => {
        console.log(error);
      });
    }   
}  