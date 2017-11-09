import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController } from 'ionic-angular';

//Providers
import { MagicTheGatheringProvider } from './../../providers/magic-the-gathering/magic-the-gathering';

//Pages
import { CardDetalhesPage } from './../card-detalhes/card-detalhes';


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
  public loader;
  public refresher;
  public isRefreshing: boolean = false;
  public page = 1;
  public infiniteScroll;
  
  
  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    private mtgProvider: MagicTheGatheringProvider,
    public loadingCtrl: LoadingController) {}
    
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
      this.carregarCartas();
    }
    
    //Função de carregamento Infiníto
    doInfinite(infiniteScroll) {
      this.page++;
      this.infiniteScroll = infiniteScroll;
      this.carregarCartas(true);
    }
    
    //Ao entrar na página
    ionViewDidEnter() {
      this.carregarCartas();
    }
    
    //abrir page de detalhes
    abrirDetalhes(carta){
      this.navCtrl.push(CardDetalhesPage, {id: carta.id});
    }
    
    carregarCartas(newpage: boolean = false){
      this.carregaLoading();
      this.mtgProvider.getAllCards(this.page).subscribe(
        data => {
          const response = (data as any);
          const objeto_retorno = JSON.parse(response._body);
          
          //Retorna a lista de filmes e coloca na variavel lista_filmes
          if(newpage){ //Se for uma nova página
            this.listaDeCartas = this.listaDeCartas.concat(objeto_retorno.cards);
            this.infiniteScroll.complete();
          } else {
            this.listaDeCartas = objeto_retorno.cards;
            this.page = this.page;
          } 
          
          console.log(objeto_retorno);
          this.fechaLoading();
          if(this.isRefreshing){
            this.refresher.complete();
            this.isRefreshing = false;
          }
        },
        error => {
          //console.log(error);
          this.fechaLoading();
          if(this.isRefreshing){
            this.refresher.complete();
            this.isRefreshing = false;
          }
        });
      }
      
    }
    