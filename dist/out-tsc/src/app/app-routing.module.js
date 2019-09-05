import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule } from '@angular/router';
const routes = [
    { path: '', redirectTo: 'home', pathMatch: 'full' },
    {
        path: 'home',
        children: [
            {
                path: '',
                loadChildren: './home/home.module#HomePageModule'
            },
            {
                path: 'orders',
                children: [
                    {
                        path: '',
                        loadChildren: './orders/orders.module#OrdersPageModule'
                    },
                    {
                        path: ':orderId',
                        loadChildren: './orders/order-detail/order-detail.module#OrderDetailPageModule'
                    }
                ]
            },
            {
                path: 'audio-note',
                children: [
                    {
                        path: '',
                        loadChildren: './audio-note/audio-note.module#AudioNotePageModule'
                    },
                    {
                        path: 'recorder',
                        loadChildren: './audio-note/recorder/recorder.module#RecorderPageModule'
                    }
                ]
            },
            {
                path: 'camera-note',
                loadChildren: './camera-note/camera-note.module#CameraNotePageModule'
            }
        ]
    }
];
let AppRoutingModule = class AppRoutingModule {
};
AppRoutingModule = tslib_1.__decorate([
    NgModule({
        imports: [
            RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
        ],
        exports: [RouterModule]
    })
], AppRoutingModule);
export { AppRoutingModule };
//# sourceMappingURL=app-routing.module.js.map