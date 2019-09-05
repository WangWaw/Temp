import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { PhotoService } from '../services/photo.service';
let CameraNotePage = class CameraNotePage {
    constructor(photoService) {
        this.photoService = photoService;
    }
    ngOnInit() {
        this.photoService.loadSaved();
    }
};
CameraNotePage = tslib_1.__decorate([
    Component({
        selector: 'app-camera-note',
        templateUrl: './camera-note.page.html',
        styleUrls: ['./camera-note.page.scss'],
    }),
    tslib_1.__metadata("design:paramtypes", [PhotoService])
], CameraNotePage);
export { CameraNotePage };
//# sourceMappingURL=camera-note.page.js.map