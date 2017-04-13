<template>
  <div class="container">
    <div class="page-header">
      <h1>MyDrive</h1>
    </div>
    <div class="panel panel-default">
      <div class="panel-heading">
        <h3> {{ currentDir }}</h3>
      </div>
      <file-list @folderChanged="currentDir = $event" :inFiles ="filesList" ></file-list>
    </div>
    <file-input @addedFileEvent="addFile" ></file-input>
    <add-folder @addedFolderEvent="addFolder" ></add-folder>
  </div>
</template>

<script>
  import fileList from './file-list'
  import fileInput from './file-input.vue'
  import addFolder from './add-folder.vue'
  import fileService from '../services/fileservice'

  export default {

    created(){
      this.filesList = fileService.getRootDir();
      this.currentDir = this.filesList.dirName;

    },
    data () {
      return {
          currentDir: '',
          filesList: {
              dirName: '',
              files: []
          }
      }
    },
    methods: {
        addFile: function(event){
          let splitted = event[0].split('.');
          this.filesList.files.push({
            name: splitted[0],
            extension: splitted[1],
            id: ''
          });
        },
      addFolder: function(event) {
        this.filesList.files.push({
          name: event[0],
          extension: 'dir',
          id: ''
        });
      }
    },
    components: {
      'file-list': fileList,
      'file-input': fileInput,
      'add-folder': addFolder
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

  .btn-addfolder{
    height:50px;
    width:500px;
  }
  .center{
    text-align:center;
    padding-top: 1px;
    padding-bottom: 1px;
    margin-top: 1px;
    margin-bottom: 15px;
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
