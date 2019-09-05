import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { RecorderPage } from './recorder.page';
const routes = [
    {
        path: '',
        component: RecorderPage
    }
];
let RecorderPageModule = class RecorderPageModule {
};
RecorderPageModule = tslib_1.__decorate([
    NgModule({
        imports: [
            CommonModule,
            FormsModule,
            IonicModule,
            RouterModule.forChild(routes)
        ],
        declarations: [RecorderPage]
    })
], RecorderPageModule);
export { RecorderPageModule };
//# sourceMappingURL=recorder.module.js.map