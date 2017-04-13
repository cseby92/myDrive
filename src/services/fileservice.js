import Vue from 'vue'
import axios from 'axios'
import encoder from './base64encoder.js'



export default {
  getRootDir(){

  /*
    axios.get('http://localhost:8080/')
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
  },
  uploadFile(file, name){
    //MOVE THIS
    let splitted = name.split(/\.(?=[^\.]+$)/);
    let fileName = splitted[0];
    let fileExtension = splitted[1];
    //inside callback

    let encodedFile = '';
    let reader = encoder.encode(file);
    reader.onload = function(){
      encodedFile = reader.result;
    }
    //post file object
    //returns id
    /*
     axios.post('http://localhost:8080/', {
      'filename': name,
      'content': file
    }).done(function (response) {


        return {
          name: fileName,
          extension: fileExtension,
          id: id
        }
      })
      .fail(function (error) {
        console.log(error);
      });
*/
    return {
      name: fileName,
      extension: fileExtension,
      id: '1'
    }


  },
  createFolder(folderName){
    /*
     axios.post('http://localhost:8080/', {
     'filename': name,
     'content': file
     }).done(function (response) {


     return {
     name: fileName,
     extension: fileExtension,
     id: id
     }
     })
     .fail(function (error) {
     console.log(error);
     });
     */
    return {
      name: folderName,
      extension: dir,
      id: '1'
    }
  }

}
