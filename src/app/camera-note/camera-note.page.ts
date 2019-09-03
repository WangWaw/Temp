import { Component, OnInit } from '@angular/core';
import { PhotoService } from '../services/photo.service';

@Component({
  selector: 'app-camera-note',
  templateUrl: './camera-note.page.html',
  styleUrls: ['./camera-note.page.scss'],
})
export class CameraNotePage {
  currentImage: any;
  
  constructor(public photoService: PhotoService) { }

  ngOnInit() {
    this.photoService.loadSaved();

  }
}