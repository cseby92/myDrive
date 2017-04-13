<template>
  <div>
    <div class="center">
      <button type="button" class="btn btn-primary btn-addfolder" data-toggle="modal" data-target="#myModal">
        <span class="glyphicon glyphicon-plus"></span>
        New folder
      </button>
    </div>
    <div id="myModal" class="modal fade modal-centered" role="dialog">
      <div class="modal-dialog">

        <!-- Modal content-->
        <div class="modal-content">
          <div class="modal-header">
            <button type="button" class="close" data-dismiss="modal">&times;</button>
            <h4 class="modal-title">Create a folder</h4>
          </div>
          <div class="modal-body">
            <p>Enter the name of the folder here: </p>
            <input type="text" id="modalinput">
          </div>
          <div class="modal-footer">
            <button @click="createClicked" class="btn btn-primary" data-dismiss="modal">Create</button>
            <button @click="cancelClicked" type="button" class="btn btn-default" data-dismiss="modal">Cancel</button>
          </div>
        </div>

      </div>
    </div>
  </div>
</template>

<script>

  import fileList from './file-list'
  import fileInput from './file-input.vue'
  import fileService from '../services/fileservice'
  import Vue from 'vue';

  let comp = Vue.component('add-folder', {

    mounted(){
      this.modalInput = this.$el.querySelector('#modalinput');
    },
    data () {
      return {
        modalInput: null
      }
    },
    methods: {
      createClicked(event){

        if(this.modalInput.value === '')
            return;
        fileService.createFolder(); //todo
        this.$emit('addedFolderEvent', [this.modalInput.value]);
        this.modalInput.value = '';
      },
      cancelClicked(event){
        this.modalInput.value = '';
      }
    }
  });
  export default comp;

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>


  .btn-addfolder{
    height:50px;
    width:500px;
  }

  .modal-centered {
    margin-top: 20%;
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
