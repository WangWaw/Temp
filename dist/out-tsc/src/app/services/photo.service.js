import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
import { Camera } from '@ionic-native/camera/ngx';
import { Storage } from '@ionic/storage';
let PhotoService = class PhotoService {
    constructor(camera, storage) {
        this.camera = camera;
        this.storage = storage;
        this.photos = [];
    }
    takePicture() {
        const options = {
            quality: 100,
            destinationType: this.camera.DestinationType.DATA_URL,
            encodingType: this.camera.EncodingType.JPEG,
            mediaType: this.camera.MediaType.PICTURE
        };
        this.camera.getPicture(options).then((imageData) => {
            // Add new photo to gallery
            this.photos.unshift({
                data: 'data:image/jpeg;base64,' + imageData
            });
            // Save all photos for later viewing
            this.storage.set('photos', this.photos);
        }, (err) => {
            // Handle error
            console.log("Camera issue: " + err);
        });
    }
    loadSaved() {
        this.storage.get('photos').then((photos) => {
            this.photos = photos || [];
        });
    }
};
PhotoService = tslib_1.__decorate([
    Injectable({
        providedIn: 'root'
    }),
    tslib_1.__metadata("design:paramtypes", [Camera, Storage])
], PhotoService);
export { PhotoService };
class Photo {
}
//# sourceMappingURL=photo.service.js.map