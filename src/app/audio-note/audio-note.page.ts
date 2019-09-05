import { Component, OnInit } from '@angular/core';
import { NavController, Platform } from '@ionic/angular';
import { Media, MediaObject } from '@ionic-native/media/ngx';
import { File } from '@ionic-native/file/ngx';
import { RecordService } from 'src/app/services/record.service';

@Component({
  selector: 'app-audio-note',
  templateUrl: './audio-note.page.html',
  styleUrls: ['./audio-note.page.scss'],
})

export class AudioNotePage {
  constructor(public recordService: RecordService) { }

    // ionViewWillEnter() {
    //   this.getAudioList();
    // }
  
   ngoninit() {
    this.recordService.getAudioList();
   }
}
