import { Component } from '@angular/core';
import { Subject } from 'rxjs';
import { FileUrl } from '../../models/models';
import { FileService } from '../../services/file.service';

@Component({
    moduleId: module.id,
    selector: 'gallery',
    templateUrl: 'gallery.component.html',
    styleUrls : ['gallery.component.scss'],
})
export class GalleryComponent {
    public fileToShow: FileUrl[] = [];
    public mainImage: FileUrl;
    public index: number = 0;
    public unsubscribe: Subject <void> = new Subject<void>();
    private fileService: FileService;

    public constructor(fileService: FileService) {
        this.fileService = fileService;
        this.fileToShow = this.fileService.files;
        this.fileService.file.subscribe(this.onValueChanged.bind(this));
    }

    public bind(func: Function, context: GalleryComponent): EventListenerOrEventListenerObject {
        return  ((...args: KeyboardEvent[]) => func.apply(context, args));
    }

    public ngOnInit(): void {
        document.body.addEventListener('keydown', this.bind(function keyDown(event: KeyboardEvent): void {
            if (event.keyCode === 37) {
                this.previous();
            } else if (event.keyCode === 39) {
                this.next();
            }
        }, this));
    }

    public onValueChanged(): void {
        this.updateMainFile(this.fileService.files[this.fileService.files.length - 1]);
    }


    public updateMainFile(image: FileUrl): void {
        this.mainImage = image;
        this.index = this.fileToShow.findIndex((x: FileUrl): boolean => x.url === image.url);
    }

    public checkMini(index: number): boolean {
        return this.index === index;
    }

    public next(): void {
        this.index++;
        if (this.index >= this.fileToShow.length) {
            this.index = 0;
        }
        this.mainImage = this.fileToShow[this.index];
    }

    public previous(): void {
        this.index--;
        if (this.index < 0) {
            this.index = this.fileToShow.length - 1;
        }
        this.mainImage = this.fileToShow[this.index];
    }
}
