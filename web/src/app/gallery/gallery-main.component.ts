import {
    Component, Input, ViewChild, ElementRef, Renderer2
} from '@angular/core';
import { FileUrl } from '../../models/models';
import { FileService } from '../../services/file.service';

@Component({
    moduleId: module.id,
    selector: 'gallery-main',
    templateUrl: 'gallery-main.component.html'
})

export class GalleryMainComponent {
    @Input() public image: FileUrl = new FileUrl();

    @Input() public current: number = 0;

    @Input() public count: number = 0;

    @ViewChild('ref', { static: false }) public containerEltRef: ElementRef;

    public renderer: Renderer2;

    public filelervice: FileService;

    public constructor(renderer: Renderer2, filelervice: FileService) {
        this.renderer = renderer;
        this.filelervice = filelervice;
        this.filelervice.file.subscribe(this.onValueChanged.bind(this));
    }

    public onValueChanged(): void{
        this.image = this.filelervice.files[this.filelervice.files.length - 1];
        this.updateMainImage();
    }

    public ngDoCheck(): void {
        this.updateMainImage();
    }

    public updateMainImage(): void {
        if (this.containerEltRef) {
            const elt = this.containerEltRef.nativeElement;
            if (this.image) {
                this.renderer.setAttribute(elt, 'src', this.image.url);
            }
        }
    }
}
