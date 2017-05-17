<template>
  <div id="dropTarget" class="mypanel panel panel-default">
    <span>Drop files here</span>
    <button id="browseButton" class="mybtn btn btn-primary">Upload files</button>

   <!-- <form action="asd "
          class="dropzone"
          id="my-awesome-dropzone"></form>
  -->
  </div>
</template>

<script>
  import encoder from '../services/base64encoder.js';
  import fileService from '../services/fileservice';
  import Dropzone from 'dropzone';
  import Vue from 'vue';
  import Resumable from 'resumablejs';


  let comp = Vue.component('file-input', {
      mounted(){
        let r = new Resumable({
          target:'http://localhost:9090/file/stream',
          chunkSize: 64 * 1024,
          simultaneousUploads: 3,
          testChunks: false
        });
        r.assignBrowse(document.getElementById('browseButton'));
        r.assignDrop(document.getElementById('dropTarget'));



        r.on('fileAdded', function(file, event){
          this.fileName = file.fileName;
          console.log(r.files);
          //r.opts.query.macska= "MACSKA";
          r.upload();
        });

        r.on('progress', () => {
         /* if(r.progress() === 0)
              this.failedUploadCounter++;

          if(this.failedUploadCounter === 5){
            this.failedUploadCounter = 0;
              r.cancel();
              toastr.error('Unable to upload ' + this.fileName + ' please try it again');

          }
*/
        });

        r.on('fileError', function(message, file){
        });

        r.on('fileSuccess', function (file, message) {
          toastr.success(file.name + ' file succesfully uploaded');
          window.componentInstance.notifyParentAboutUpload(this.fileName, message.id);
        });

        window.componentInstance = this;
      },
      data () {
        return {
            fileName: '',
          failedUploadCounter: 0
        }
      },
      methods: {
        notifyParentAboutUpload(name, id) {
          this.$emit('addedFileEvent', [name, id]);
        }
      }
    });

  export default comp;

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .mybtn{
    display: block;
    margin-right:auto;
    margin-left:auto;
    margin-top: 10px;
  }

  .mypanel {
    font-size: large;
    text-align: center;
    padding: 40px;
  }

  h1, h2 {
    font-weight: normal;
  }

  ul {
    list-style-type: none;
    padding: 0;
  }

  li {
    display: inline-block;
    margin: 0 10px;
  }

  a {
    color: #42b983;
  }
</style>
