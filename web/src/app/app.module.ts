import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FileService } from '../services/file.service';
import { AppComponent } from './app.component';
import { GalleryMainComponent } from './gallery/gallery-main.component';
import { GalleryMiniComponent } from './gallery/gallery-mini.component';
import { GalleryComponent } from './gallery/gallery.component';
import { LoaderComponent } from './loader/loader.component';



@NgModule({
    bootstrap: [
        AppComponent,
     ],
    declarations: [
        AppComponent, LoaderComponent, GalleryMainComponent,
        GalleryComponent, GalleryMiniComponent,
    ],
    providers: [FileService],
    imports: [
        BrowserModule,
    ],
})
export class AppModule { }
