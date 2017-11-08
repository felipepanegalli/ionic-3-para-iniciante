//Core
import { NgModule, ErrorHandler } from '@angular/core';
import { HttpModule } from "@angular/http";
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

//Providers
import { MagicTheGatheringProvider } from '../providers/magic-the-gathering/magic-the-gathering';
import { ConfigProvider } from '../providers/config/config';

//Pages
import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';
import { FeedPageModule } from './../pages/feed/feed.module';
import { IntroPageModule } from './../pages/intro/intro.module';
import { ListarCartasPageModule } from './../pages/listar-cartas/listar-cartas.module';
import { SobrePageModule } from './../pages/sobre/sobre.module';
import { PerfilPageModule } from './../pages/perfil/perfil.module';
import { ConfiguracoesPageModule } from './../pages/configuracoes/configuracoes.module';

//Plugins
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { MovieProvider } from '../providers/movie/movie';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    TabsPage,
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    FeedPageModule,
    IntroPageModule,
    HttpModule,
    ListarCartasPageModule,
    ConfiguracoesPageModule,
    PerfilPageModule,
    SobrePageModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    TabsPage,
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    MovieProvider,
    MagicTheGatheringProvider,
    ConfigProvider,
  ]
})
export class AppModule {}
