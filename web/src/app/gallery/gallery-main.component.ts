import { Component, Input } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { FileUrl } from '../../models/models';
import { FileService } from '../../services/file.service';

@Component({
    moduleId: module.id,
    selector: 'gallery-main',
    templateUrl: 'gallery-main.component.html',
    styleUrls : ['gallery-main.component.scss'],
})

export class GalleryMainComponent {
    @Input() public image: FileUrl = new FileUrl();
    @Input() public current: number = 0;
    @Input() public count: number = 0;


    public constructor( public filelervice: FileService, public domSanitizer: DomSanitizer) {
        this.filelervice.file.subscribe(this.onValueChanged.bind(this));
    }

    public onValueChanged(): void {
        this.image = this.filelervice.files[this.filelervice.files.length - 1];
    }
}
