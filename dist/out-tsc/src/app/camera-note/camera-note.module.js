import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { CameraNotePage } from './camera-note.page';
const routes = [
    {
        path: '',
        component: CameraNotePage
    }
];
let CameraNotePageModule = class CameraNotePageModule {
};
CameraNotePageModule = tslib_1.__decorate([
    NgModule({
        imports: [
            CommonModule,
            FormsModule,
            IonicModule,
            RouterModule.forChild(routes)
        ],
        declarations: [CameraNotePage]
    })
], CameraNotePageModule);
export { CameraNotePageModule };
//# sourceMappingURL=camera-note.module.js.map