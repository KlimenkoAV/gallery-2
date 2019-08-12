import { RouterModule, Routes } from '@angular/router';
import { GalleryComponent } from './gallery/gallery.component';

const appRoutes: Routes = [
    {path: 'gallery', component: GalleryComponent},
];

export const mainRouting = RouterModule.forRoot(appRoutes);
