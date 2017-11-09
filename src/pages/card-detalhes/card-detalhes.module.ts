import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { CardDetalhesPage } from './card-detalhes';

@NgModule({
  declarations: [
    CardDetalhesPage,
  ],
  imports: [
    IonicPageModule.forChild(CardDetalhesPage),
  ],
})
export class CardDetalhesPageModule {}
