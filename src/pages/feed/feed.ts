import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { MovieProvider } from './../../providers/movie/movie';

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
  providers: [
    MovieProvider
  ]
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
  
  public lista_filmes = new Array<any>();
  
  public nomeUsuario:string = "Felipe Panegalli";
  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    private movieProvider: MovieProvider) {
    }
    
    ionViewDidLoad() {
      this.movieProvider.getLatesMovies().subscribe(
        data => {
          const response = (data as any);
          const objeto_retorno = JSON.parse(response._body);
          //Retorna a lista de filmes e coloca na variavel lista_filmes
          this.lista_filmes = objeto_retorno.results;
          console.log(objeto_retorno);
        },
        error => {
          console.log(error);
        });
      }
      
    }
    