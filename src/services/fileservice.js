import Vue from 'vue'
import axios from 'axios'

export default {
  getRootDir(){
  /*
    .get('http://localhost:8080/')
      .then(function (response) {
        return response.json();
      })
      .catch(function (error) {
        console.log(error);
      });
   */

    return {
      dirName: 'someDir',
      files: [{
        name: 'myFile1',
        extension: 'txt',
        id: ''
        },
        {
          name: 'myFile2',
          extension: 'txt',
          id: ''
        },
          {
          name: 'myFolder',
          extension: 'dir',
          id: ''
        }]
    }
  },
  getContentInDir(dirName){
  /*
     axios.get('http://localhost:8080/' + dirName)
     .then(function (response) {
      return response.json();
     })
     .catch(function (error) {
       console.log(error);
     });
  */


    return {};
  }
}
