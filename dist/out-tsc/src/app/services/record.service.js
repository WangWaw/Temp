import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
import { Platform } from '@ionic/angular';
import { Media } from '@ionic-native/media/ngx';
import { File } from '@ionic-native/file/ngx';
import { Router } from '@angular/router';
import { Arrays } from 'util';
let RecordService = class RecordService {
    constructor(media, file, platform, router) {
        this.media = media;
        this.file = file;
        this.platform = platform;
        this.router = router;
        this.audioList = [];
        this.recording = false;
    }
    // ionViewWillEnter() {
    //   this.getAudioList();
    // }
    getAudioList() {
        if (localStorage.getItem("audiolist")) {
            this.audioList = JSON.parse(localStorage.getItem("audiolist"));
            console.log(this.audioList);
            this.playing = Boolean[this.audioList.length()];
            Arrays.fill(this.playing, false);
        }
    }
    startRecord() {
        if (this.platform.is('ios')) {
            this.fileName = 'record' + new Date().getDate() + new Date().getMonth() + new Date().getFullYear() + new Date().getHours() + new Date().getMinutes() + new Date().getSeconds() + '.m4a';
            this.filePath = this.file.documentsDirectory.replace(/file:\/\//g, '') + this.fileName;
            this.audio = this.media.create(this.filePath);
        }
        else if (this.platform.is('android')) {
            this.fileName = 'record' + new Date().getDate() + new Date().getMonth() + new Date().getFullYear() + new Date().getHours() + new Date().getMinutes() + new Date().getSeconds() + '.mp3';
            this.filePath = this.file.externalDataDirectory.replace(/file:\/\//g, '') + this.fileName;
            this.audio = this.media.create(this.filePath);
        }
        this.audio.startRecord();
        this.recording = true;
    }
    stopRecord() {
        this.audio.stopRecord();
        var self = this;
        var counter = 0;
        var timerDur = setInterval(function () {
            counter = counter + 100;
            if (counter > 2000) {
                clearInterval(timerDur);
            }
            var dur = self.audio.getDuration();
            if (dur > 0) {
                clearInterval(timerDur);
                //document.getElementById('audio_duration').innerHTML = (dur) + " sec";
                self.fileDur = dur * 1000;
            }
        }, 100);
        //    this.fileDur = this.audio.getDuration();
        let data = { filename: this.fileName, fileDuration: this.fileDur };
        this.audioList.push(data);
        localStorage.setItem("audiolist", JSON.stringify(this.audioList));
        this.recording = false;
        this.getAudioList();
    }
    playAudio(file, idx) {
        if (this.platform.is('ios')) {
            this.filePath = this.file.documentsDirectory.replace(/file:\/\//g, '') + file;
            this.audio = this.media.create(this.filePath);
        }
        else if (this.platform.is('android')) {
            this.filePath = this.file.externalDataDirectory.replace(/file:\/\//g, '') + file;
            this.audio = this.media.create(this.filePath);
        }
        this.audio.play();
        this.audio.setVolume(0.8);
        this.playing[idx] = true;
    }
    pauseAudio(file, idx) {
        if (this.platform.is('ios')) {
            this.filePath = this.file.documentsDirectory.replace(/file:\/\//g, '') + file;
            this.audio = this.media.create(this.filePath);
        }
        else if (this.platform.is('android')) {
            this.filePath = this.file.externalDataDirectory.replace(/file:\/\//g, '') + file;
            this.audio = this.media.create(this.filePath);
        }
        this.audio.pause();
        this.playing[idx] = false;
    }
    stopAudio() {
        this.audio.stop();
    }
};
RecordService = tslib_1.__decorate([
    Injectable({
        providedIn: 'root'
    }),
    tslib_1.__metadata("design:paramtypes", [Media,
        File,
        Platform,
        Router])
], RecordService);
export { RecordService };
//# sourceMappingURL=record.service.js.map