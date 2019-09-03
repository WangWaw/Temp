import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';


const routes: Routes = [
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
          }]
      },
      {
        path: 'audio-note',
        children: [
          {
            path:'',
            loadChildren: './audio-note/audio-note.module#AudioNotePageModule'
          }, 
          {
            path:'recorder',
            loadChildren: './audio-note/recorder/recorder.module#RecorderPageModule'

          }]
      },  
      {
        path: 'camera-note',
        loadChildren: './camera-note/camera-note.module#CameraNotePageModule'
      }
    ]
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
