import { async, TestBed } from '@angular/core/testing';
import { LoaderComponent } from './loader.component';

describe('LoaderComponent', () => {
    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [
                LoaderComponent,
            ],
        }).compileComponents();
    }));
    it('something', async(() => {
        const fixture = TestBed.createComponent(LoaderComponent);
        const loader = fixture.debugElement.componentInstance;
        expect(loader.warningActive).toEqual(false);
    }));
});
