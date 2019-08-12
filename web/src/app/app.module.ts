import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { FileService } from '../services/file.service';
import { mainRouting } from './app.routing';
import { GalleryComponent } from './gallery';
import { LoaderComponent } from './gallery/loader/loader.component';
import { FilmComponent, FilmMainComponent, FilmMiniComponent } from './index';
import { AppComponent } from './navigation/app.component';



@NgModule({
    bootstrap: [
        AppComponent,
     ],
    declarations: [
        AppComponent, LoaderComponent, FilmComponent,
        FilmMainComponent, FilmMiniComponent, GalleryComponent,
    ],
    providers: [FileService],
    imports: [
        BrowserModule, RouterModule, mainRouting,
    ],
})
export class AppModule { }
