import {
    Component, Input, ViewChild,
    ElementRef, Renderer2, Output, EventEmitter
} from '@angular/core';
import { FileUrl } from '../../models/models';

@Component({
    moduleId: module.id,
    selector: 'gallery-mini',
    templateUrl: 'gallery-mini.component.html'
})
export class GalleryMiniComponent {
    @Output() public choosenFile= new EventEmitter<FileUrl>();

    @Input() public image: FileUrl= new FileUrl();

    @ViewChild('ref', { static: false }) public containerEltRef: ElementRef;

    public renderer: Renderer2;

    public constructor(renderer: Renderer2) {
        this.renderer = renderer;
    }

    public ngAfterViewInit(): void {
        const elt = this.containerEltRef.nativeElement;
        this.renderer.setAttribute(elt, 'src', this.image.url);
    }

    public choose(): void {
        this.choosenFile.emit(this.image);
    }
}
