<template>
  <div class="mypanel panel panel-default">
    <form action="asd "
          class="dropzone"
          id="my-awesome-dropzone"></form>
  </div>
</template>

<script>

  import fileService from '../services/fileservice';
  import Dropzone from 'dropzone';
  import Vue from 'vue';

  let upFile = ''; //name, extension,id

 let comp = Vue.component('file-input',{
   mounted(){
     window.componentInstance = this;
   },
   data () {
      return {}
    },
    methods: {
      notifyParentAboutUpload(name, id) {
          console.log(this);
        this.$emit('addedFileEvent', [name,id]);
      }
    }
  });

 export default comp;

  Dropzone.options.myAwesomeDropzone = {
    autoProcessQueue: false,

    accept(file,done){

      /*
      var reader = new FileReader();
      reader.onload = (e) => {
        //check file
        //...
        //post with fileservice
        let id = fileService.uploadFile(reader.result, file.name);


        this.removeFile(file);
      }
      reader.readAsText(file);
      */
      let id = fileService.uploadFile(file,file.name).id;
      if( id ){
        toastr.success(file.name + ' file succesfully uploaded');
        window.componentInstance.notifyParentAboutUpload(file.name, id);
      }
      else
        toastr.error('Unable to upload ' + file.name + ' please try it again');

      this.removeFile(file);
      done();
    }
  };

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

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
