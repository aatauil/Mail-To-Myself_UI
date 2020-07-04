import Service from '@ember/service';
import { A } from '@ember/array';

export default class GlobalDataService extends Service {

    uploaded = A([]);

    set(item) {
        this.uploaded.pushObject(item)
    }

    empty() {
        this.uploaded.clear();
    }

    show() {
        console.log(this.uploaded)
    }

}
