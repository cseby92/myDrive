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

  let upFile = ''; //name, extension,id

  Dropzone.options.myAwesomeDropzone = {
    autoProcessQueue: false,

    accept(file,done){
      var reader = new FileReader();
      reader.onload = (e) => {
       // console.log(reader.result);
        this.removeFile(file);
      }
      reader.readAsText(file);

      //check file
      //post with fileservice
      //if ok, send event to main-comp and add to file list

      toastr.success(file.name + " file uploaded");


      done();
    }
  };

  export default {
    init() {

    },
    data () {
      return {}
    },
    methods: {

    }
  }
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
