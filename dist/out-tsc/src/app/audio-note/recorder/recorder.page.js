import * as tslib_1 from "tslib";
import { Component, Injectable } from '@angular/core';
import { RecordService } from 'src/app/services/record.service';
let RecorderPage = class RecorderPage {
    constructor(recordService) {
        this.recordService = recordService;
    }
    // ionViewWillEnter() {
    //   this.getAudioList();
    // }
    ngoninit() {
        this.recordService.getAudioList();
    }
};
RecorderPage = tslib_1.__decorate([
    Component({
        selector: 'app-recorder',
        templateUrl: './recorder.page.html',
        styleUrls: ['./recorder.page.scss'],
    }),
    Injectable({
        providedIn: 'root'
    }),
    tslib_1.__metadata("design:paramtypes", [RecordService])
], RecorderPage);
export { RecorderPage };
//# sourceMappingURL=recorder.page.js.map