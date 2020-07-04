import Component from "@glimmer/component";
import { tracked } from "@glimmer/tracking"
import { action } from "@ember/object";
import { inject as service } from '@ember/service';

export default class UploadComponent extends Component {

  @service('global-data') global;

    @action 
    fileList(element) {

        let fileLength = element.target.files.length 

        for (let i = 0 ; i < fileLength ; i++){
            this.global.set(element.target.files[i])
        }

    }



  
  }

