import { TestBed } from '@angular/core/testing';
import { PhotoService } from './photo.service';
describe('PhotoService', () => {
    beforeEach(() => TestBed.configureTestingModule({}));
    it('should be created', () => {
        const service = TestBed.get(PhotoService);
        expect(service).toBeTruthy();
    });
});
//# sourceMappingURL=photo.service.spec.js.map