import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ListarCartasPage } from './listar-cartas';

@NgModule({
  declarations: [
    ListarCartasPage,
  ],
  imports: [
    IonicPageModule.forChild(ListarCartasPage),
  ],
})
export class ListarCartasPageModule {}
