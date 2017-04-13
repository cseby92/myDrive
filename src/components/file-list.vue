<template>
  <div class="panel-body margin-bottom">
    <table class="table margin-bottom">
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
            <button class="btn btn-link">
              <span class="glyphicon glyphicon-level-up"></span>
            </button>
          </td>
          <td>
            {{ parent }} "(parent)"
          </td>
          <td>
            dir
          </td>
        </tr>
        <tr v-for="(file, index) in files">
          <td>
            <button class="btn btn-link">
              <span class="glyphicon glyphicon-folder-open" v-if="file.extension === 'dir'"></span>
              <span class="glyphicon glyphicon-file" v-else></span>
            </button>
          </td>
          <td>
            {{ file.name }}
          </td>
          <td>
            {{ file.extension }}
          </td>
          <td>
            <button class="btn btn-link" @click="removeFile(index)">
              <span class="glyphicon glyphicon-trash"></span>
            </button>

          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import fileService from '../services/fileservice';
export default {
  props: ['inFiles'],
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
    },
    removeFile(index){
        console.log(index);
    }
  },
    //lifecycle events
    created(){
      this.files = this.inFiles.files;
      this.currentFolder = this.inFiles.dirName;
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

.icon-large{
  height: 50px;
  width: 20px;
}

.margin-bottom{
  margin-bottom: 1px;
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
