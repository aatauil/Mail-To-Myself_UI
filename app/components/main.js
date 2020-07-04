import Component from "@glimmer/component";
import { action } from "@ember/object";
import { tracked } from "@glimmer/tracking";
import { inject as service } from '@ember/service';

export default class MainComponent extends Component {

  @service('global-data') global;

  @action 
  show() {
    console.log(this.global.uploaded)
}


}