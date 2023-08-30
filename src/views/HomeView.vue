<script setup></script>

<template>
  <main>
    <li v-for="medico in alldocs">{{ medico.surname }}, {{ medico.name }}. {{ medico.especialidad.especialidad }}</li>
  </main>
  
</template>


<script>
import axios from 'axios'

export default {
  name: 'Home',
  data() {
    return {
      alldocs: null
    }
  },
  mounted() {
    this.getAllDocs()
  },
  methods: {
    getAllDocs() {
      axios.get('all-docs/')
      .then(response => {
        console.log(response.data);
        this.alldocs = response.data
        })
    }
  }
}
</script>