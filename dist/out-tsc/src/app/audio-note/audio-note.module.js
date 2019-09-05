import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { AudioNotePage } from './audio-note.page';
const routes = [
    {
        path: '',
        component: AudioNotePage
    }
];
let AudioNotePageModule = class AudioNotePageModule {
};
AudioNotePageModule = tslib_1.__decorate([
    NgModule({
        imports: [
            CommonModule,
            FormsModule,
            IonicModule,
            RouterModule.forChild(routes)
        ],
        declarations: [AudioNotePage]
    })
], AudioNotePageModule);
export { AudioNotePageModule };
//# sourceMappingURL=audio-note.module.js.map