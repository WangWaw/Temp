import { Component, OnInit, Injectable } from '@angular/core';
import { NavController, Platform } from '@ionic/angular';
import { Media, MediaObject } from '@ionic-native/media/ngx';
import { File } from '@ionic-native/file/ngx';
import { RecordService } from 'src/app/services/record.service';

@Component({
  selector: 'app-recorder',
  templateUrl: './recorder.page.html',
  styleUrls: ['./recorder.page.scss'],
})

@Injectable({
  providedIn: 'root'
})
export class RecorderPage {

  constructor(public recordService: RecordService) { }

  // ionViewWillEnter() {
  //   this.getAudioList();
  // }

  ngoninit() {
    this.recordService.getAudioList();
  }

  }
