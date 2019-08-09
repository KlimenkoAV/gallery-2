import { Component } from '@angular/core';
import { FileService } from '../../services/file.service';

@Component({
    moduleId: module.id,
    selector: 'loader',
    templateUrl: 'loader.component.html',
    styleUrls : ['loader.component.scss'],

})
export class LoaderComponent {
    public onDragOverActive: boolean = false;
    public warningActive: boolean = false;
    public fileService: FileService;

    public constructor(fileService: FileService) {
        this.fileService = fileService;
    }

    public onDrop(event: DragEvent): void {
        this.onDragOverActive = false;
        event.preventDefault();
        this.handleFileInput(event.dataTransfer.files);
    }

    public onDragOver(event: DragEvent): void {
        this.onDragOverActive = true;
        event.stopPropagation();
        event.preventDefault();
    }

    public onDragLeave() {
        this.onDragOverActive = false;
        event.stopPropagation();
        event.preventDefault();
    }

    public handleFileInput(files: FileList): void {
        for (let i = 0; i < files.length; i++) {
            if (files.item(i).type.indexOf('image')) {
                this.warningActive = true;
                setTimeout((): void => {
                    this.warningActive = false;
                }, 3000);
            } else {
                this.fileService.files
                    .push({ file: files.item(i), url: URL.createObjectURL(files.item(i)) });
                this.fileService.file.next('');
            }
        }
    }
}
