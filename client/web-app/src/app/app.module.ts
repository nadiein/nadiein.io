import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule, } from './app-routing.module';
import { RouterModule } from '@angular/router';
import { AppRoutes } from './routes';

// Components here
import { AppComponent } from './app.component';
import { MainContainerComponent } from './components/home/main.container.component';
import { AboutComponent } from './components/about/about.component';
import { PortfolioComponent } from './components/portfolio/portfolio.component';
import { PortfolioProjectComponent } from './components/portfolio/project/project.component';
import { ParallaxComponent } from './common/parallax/parallax.component';
import { PreloadingScreenComponent } from './common/preloading-screen/preloading.screen.component';
//Services here
import { GlobalEventDispatcherService } from './services/global.event.dispatcher.service';
import { RouterEventsService } from './services/router.service';

@NgModule({
    declarations: [
        AppComponent,
        MainContainerComponent,
        AboutComponent,
        PortfolioComponent,
        PortfolioProjectComponent,
        ParallaxComponent,
        PreloadingScreenComponent
    ],
    imports: [
        BrowserModule,
        RouterModule.forRoot(AppRoutes),

    ],
    providers: [
        GlobalEventDispatcherService,
        RouterEventsService
    ],
    bootstrap: [AppComponent]
})
export class AppModule { }
