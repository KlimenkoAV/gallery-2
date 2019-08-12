import { Component, EventEmitter, Input, Output } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { FileUrl } from '../../../models/models';

@Component({
    moduleId: module.id,
    selector: 'film-mini',
    templateUrl: 'film-mini.component.html',
    styleUrls : ['film-mini.component.scss'],
})
export class FilmMiniComponent {
    @Output() public choosenFile = new EventEmitter<FileUrl>();
    @Input() public image: FileUrl = new FileUrl();

    public constructor( public domSanitizer: DomSanitizer) {}

    public choose(): void {
        this.choosenFile.emit(this.image);
    }
}
