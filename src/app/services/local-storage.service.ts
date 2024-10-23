import {Injectable} from '@angular/core';
import {Storage} from '@ionic/storage';

@Injectable({
    providedIn: 'root'
})

/**
 * This service is used to save the data into localstorage,
 * this service can also encrypt and decrypt on demand
 * Underneath this service uses Ionic LocalStorage To Save Data
 */
export class LocalStorageService {

    ready = false;
    /** This key can also set dynamically, per user to make encryption more stronger */
    private SECRET_KEY = '';

    constructor(private storage: Storage) {
        this.storage.ready().then(() => {
            this.ready = true;
        });
    }

    /**
     * To be used to set boolean value in localstorage.
     * @param key - This is the key under which our value will be saved
     * @param value - This the value which we want to save in storage
     */
    async setBoolean(key: string, value: boolean) {
        await this.storage.set(key, value);
    }

    /**
     * To be used to set objects in localstorage.
     * @param key - This is the key under which our value will be saved
     * @param value - This the value which we want to save in storage
     */
    async setObject(key: string, value: any) {
        const save = await this.storage.set(key, JSON.stringify(value));
    }

    /**
     * To be used to set number in localstorage.
     * @param key - This is the key under which our value will be saved
     * @param value - This the value which we want to save in storage
     */
    setNumber(key: string, value: number) {
        this.catchAsync(async () => {
            await this.storage.get(key);
        });
    }

    /**
     * To be used to set string in localstorage.
     * @param key - This is the key under which our value will be saved
     * @param value - This the value which we want to save in storage
     */
    async setString(key: string, value: string) {
        await this.storage.set(key, value);
    }

    /**
     * To be used to get all values from localstorage except objects.
     * @param key - This is the key under which data is saved
     */
    async getValue(key: string): Promise<any> {
        return this.storage.get(key);
    }

    /**
     * To be used to get object type values from localstorage.
     * @param key - This is the key under which data is saved
     */
    async getObject(key: string): Promise<any> {
        const obj = await this.storage.get(key);
        return JSON.parse(obj);
    }

    /**
     * To be used to get delete item from localstorage
     * @param key - This is the key under which data is saved
     */
    deleteObject(key: string): any {
        console.log('deleted****', key);
        this.catchAsync(async () => {
            await this.storage.remove(key);
            return true;
        });
    }

    private catchAsync = (fn) => (req, res, next) => {
        console.log('deleted****', fn);
        Promise.resolve(fn(req, res, next)).catch((err) => next(err));

    }

    removeObject(key: string) {
         this.storage.remove(key);
    }

}
