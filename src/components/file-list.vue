<template>
  <div class="panel-body">
    <table class="table">
      <thead>
      <tr>
        <th>
          Icon
        </th>
        <th>
          Name
        </th>
        <th>
          Extension
        </th>
        <th>
          Delete
        </th>
      </tr>
      </thead>
      <tbody>
        <tr v-if="parent !== ''">
          <td>
            <i class="glyphicon glyphicon-level-up"></i>
          </td>
          <td>
            {{ parent }} "(parent)"
          </td>
          <td>
            dir
          </td>
        </tr>
        <tr v-for="file in files">
          <td>
            <i class="glyphicon glyphicon-folder-open" v-if="file.extension === 'dir'"></i>
            <i class="glyphicon glyphicon-file" v-else></i>
          </td>
          <td>
            {{ file.name }}
          </td>
          <td>
            {{ file.extension }}
          </td>
          <td>
            <i class="glyphicon glyphicon-trash"></i>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import fileService from '../services/fileservice';
export default {
  data () {
    return {
        currentFolder: 'myFolder',
        files: [],
        parent: 'asd'
    }
  },
  methods: {
    changeFolder(event){
      this.$emit('folderChanged', this.currentFolder);
    }
  },
    //lifecycle events
    created(){
      let rootNameAndContent = fileService.getRootDir();
      this.currentFolder = rootNameAndContent.dirName;
      this.files = rootNameAndContent.files;
      this.changeFolder();
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
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
