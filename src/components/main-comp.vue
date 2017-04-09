<template>
  <div class="container">
    <div class="page-header">
      <h1>MyDrive</h1>
    </div>
    <div class="panel panel-default">
      <div class="panel-heading">
        <h3> {{ currentDir }}</h3>
      </div>
      <file-list @folderChanged="currentDir = $event" ></file-list>


    </div>
    <file-input></file-input>
  </div>
</template>

<script>
  import fileList from './file-list'
  import fileInput from './file-input.vue'
  export default {
    data () {
      return {
          currentDir: ''
      }
    },
    components: {
      'file-list': fileList,
      'file-input': fileInput
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
