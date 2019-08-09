import { Component, OnInit } from '@angular/core';
import { Subject } from 'rxjs';
import { FileService } from '../../services/file.service';
import { FileUrl } from '../../models/models';

@Component({
    moduleId: module.id,
    selector: 'gallery',
    templateUrl: 'gallery.component.html'
})
export class GalleryComponent implements OnInit {
    public fileToShow: FileUrl[]=[];

    public mainImage: FileUrl;

    public ok: boolean = false;

    public index: number = 0;

    private unsubscribe: Subject<void> = new Subject<void>();

    private fileService: FileService;

    public constructor(fileService: FileService) {
        this.fileService = fileService;
        this.fileToShow = this.fileService.files;
        this.fileService.file.subscribe(this.onValueChanged.bind(this));
    }

    public bind(func: Function, context: GalleryComponent): EventListenerOrEventListenerObject {
        return function bind(...args: KeyboardEvent[]): Function {
            return func.apply(context, args);
        };
    }

    public onValueChanged(): void{
        this.updateMainFile(this.fileService.files[this.fileService.files.length - 1]);
    }

    public ngOnInit(): void{
        document.body.addEventListener('keydown', this.bind(function keyDown(event: KeyboardEvent): void {
            if (event.keyCode === 37) {
                this.previous();
            } else if (event.keyCode === 39) {
                this.next();
            }
        }, this));
    }

    public updateMainFile(image: FileUrl): void{
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
