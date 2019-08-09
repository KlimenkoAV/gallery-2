import { Component, EventEmitter, Input, Output } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { FileUrl } from '../../models/models';

@Component({
    moduleId: module.id,
    selector: 'gallery-mini',
    templateUrl: 'gallery-mini.component.html',
    styleUrls : ['gallery-mini.component.scss'],
})
export class GalleryMiniComponent {
    @Output() public choosenFile = new EventEmitter<FileUrl>();
    @Input() public image: FileUrl = new FileUrl();

    public constructor( public domSanitizer: DomSanitizer) {}

    public choose(): void {
        this.choosenFile.emit(this.image);
    }
}
