import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { RecordService } from 'src/app/services/record.service';
let AudioNotePage = class AudioNotePage {
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
AudioNotePage = tslib_1.__decorate([
    Component({
        selector: 'app-audio-note',
        templateUrl: './audio-note.page.html',
        styleUrls: ['./audio-note.page.scss'],
    }),
    tslib_1.__metadata("design:paramtypes", [RecordService])
], AudioNotePage);
export { AudioNotePage };
//# sourceMappingURL=audio-note.page.js.map