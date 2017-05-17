import Vue from 'vue';
import axios from 'axios';


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
        id: ' '
      },
        {
          name: 'myFile2',
          extension: 'txt',
          id: ' '
        },
        {
          name: 'myFolder',
          extension: 'dir',
          id: ' '
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
    return
    files: [{
      name: 'wegregw',
      extension: 'txt',
      id: ''
    },
      {
        name: 'grewhqrehrq',
        extension: 'exe',
        id: ''
      }];
  },
  uploadFile(file, name){

    let sizeofChunks = 65035;
    let regexp = new RegExp( '.{1,' + sizeofChunks + '}', 'g');
    let chunks = file.match(regexp);
    console.log(chunks);

    let splitted = name.split(/\.(?=[^\.]+$)/);
    let fileName = splitted[0];
    let fileExtension = splitted[1];

    let request = axios.post('http://192.168.1.104:8080/file/stream', {
      'filename': name,
      'content': file
    },{ headers: {
      'Transfer-Encoding': 'chunked'
    }}).then(function (response) {

      return {
        name: fileName,
        extension: fileExtension,
        id: response.data.id
      }

    }).catch(function (error) {
      console.log(error);
    });

    return request;
  },


  createFolder(folderName){




    //check for name if already exists in this dir!!
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
      extension: 'dir',
      id: '1'
    }
  },
  removeFile(id){
    /*    axios.delete('http://localhost:8080/', {data: {'id': id}}).then(function (response) {


     return true;
     }).catch(function (error) {
     console.log(error);
     });
     return false;
     */
    return true;
  }

}
