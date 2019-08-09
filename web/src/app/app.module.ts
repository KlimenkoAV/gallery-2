import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FileService } from '../services/file.service';
import { AppComponent } from './app.component';
import { LoaderComponent } from './loader/loader.component';


@NgModule({
    bootstrap: [
        AppComponent,
     ],
    declarations: [
        AppComponent, LoaderComponent,
    ],
    providers: [FileService],
    imports: [
        BrowserModule,
    ],
})
export class AppModule { }
