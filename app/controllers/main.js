import Controller from '@ember/controller';

export default class MainController extends Controller {
     count = 0;

     incremenet(){
         count = count + 1
     }

     decrement(){
        count = count - 1
    }
}
