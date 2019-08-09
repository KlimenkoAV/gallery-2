import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, Subscriber } from 'rxjs';
import { FileUrl } from '../models/models';
@Injectable()

export class FileService {
    public files: FileUrl[] = [];

    public file = new BehaviorSubject('');

    public postFile(fileToUpload: File): Observable<string> {
        const formData: FormData = new FormData();
        this.files = this.files;
        formData.append('fileKey', fileToUpload, fileToUpload.name);
        return new Observable((observer: Subscriber<string>): void => {
            observer.next(fileToUpload.name);
            observer.complete();
        });

    }
}
