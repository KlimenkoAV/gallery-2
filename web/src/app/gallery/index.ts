export { GalleryComponent } from './gallery.component';

export * from './film/film-main.component';
export * from './film/film-mini.component';
export * from './film/film.component';

import { FilmMainComponent } from './film/film-main.component';
import { FilmMiniComponent } from './film/film-mini.component';
import { FilmComponent } from './film/film.component';

const FILM: any [] = [
    FilmMainComponent, FilmMiniComponent, FilmComponent,
];
export{ FILM };
export { LoaderComponent } from './loader/loader.component';




