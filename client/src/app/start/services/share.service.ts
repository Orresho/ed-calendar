export class ShareService {
    city: string;

    constructor() {
        this.city = null;
    }

    setCity(city) {
        this.city = city;
    }

    getCity() {
        return this.city;
    }
}