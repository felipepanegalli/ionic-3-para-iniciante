import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController } from 'ionic-angular';
import { MovieProvider } from './../../providers/movie/movie';

//Page
import { FeedDetalhesPage } from './../feed-detalhes/feed-detalhes';


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
  public loader;
  public refresher;
  public isRefreshing: boolean = false;
  public page = 1;
  public infiniteScroll;
  
  
  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    private movieProvider: MovieProvider,
    public loadingCtrl: LoadingController) {
    }
    
    //Função para carregar o Loading central
    carregaLoading() {
      this.loader = this.loadingCtrl.create({
        content: "Carregando aguarde..."
      });
      this.loader.present();
    }
    //Função para fechar o Loading central
    fechaLoading(){
      this.loader.dismiss();
    }
    
    //Função para carregar o Loading ao arrastar para baixo
    doRefresh(refresher) {
      this.refresher = refresher;
      this.isRefreshing = true;
      this.carregarFilmes();
    }
    
    //Função de carregamento Infiníto
    doInfinite(infiniteScroll) {
      this.page++;
      this.infiniteScroll = infiniteScroll;
      this.carregarFilmes(true);
    }
    
    //Botão de detalhes do filme
    abrirDetalhes(filme){
      this.navCtrl.push(FeedDetalhesPage, {id: filme.id});
    }
    ionViewDidEnter() {
      this.carregarFilmes();
    }
    
    //Função de carregamento de Filmes
    carregarFilmes(newpage: boolean = false){
      this.carregaLoading();
      this.movieProvider.getLatesMovies(this.page).subscribe(
        data => {
          const response = (data as any);
          const objeto_retorno = JSON.parse(response._body);
          
          //Retorna a lista de filmes e coloca na variavel lista_filmes
          if(newpage){ //Se for uma nova página
            this.lista_filmes = this.lista_filmes.concat(objeto_retorno.results);
            this.infiniteScroll.complete();
          } else {
            this.lista_filmes = objeto_retorno.results;
          }         

          console.log(objeto_retorno);
          this.fechaLoading();
          if(this.isRefreshing){
            this.refresher.complete();
            this.isRefreshing = false;
          }
        },
        error => {
          console.log(error);
          this.fechaLoading();
          if(this.isRefreshing){
            this.refresher.complete();
            this.isRefreshing = false;
          }
        });
      }
      
    }
    