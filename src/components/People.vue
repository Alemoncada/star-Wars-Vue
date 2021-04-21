<template >

  <div class="container background">
    <div class="text-center">
      <h1 class="font-weight-bold bigtitle">STAR WARS CHARACTERS</h1>
    </div>

    <div >
      <b-row class="justify-content-center" >
        <character  v-for="(character) in characters" v-bind:key="character.id" v-bind:character="character" />
      </b-row>
    </div>

     <div class="mt-5" >
      <b-row class="justify-content-center">
        <b-button @click="changePageA()" class="m-2">Anterior</b-button>
        <h1> <b-badge>{{this.$store.state.page}}</b-badge></h1>
        <b-button @click="changePageB()" class="m-2">Siguiente</b-button>
      </b-row>
    </div>

  </div>
</template>


<script>
import Character from '@/components/Character.vue';

export default{
  components:{
    Character
    
  },

  computed:{
    characters(){
      return this.$store.state.characters;
    },
   
  },

  mounted(){
      return this.$store.dispatch('getCharacters');
      
  },

  methods:{
    changePageA(){
     this.$store.state.page = this.$store.state.page >= 2 ? this.$store.state.page - 1 : this.$store.state.page,
      this.$store.dispatch('getCharacters');
    },

    changePageB(){
     this.$store.state.page = this.$store.state.page < 9 ? this.$store.state.page + 1 : this.$store.state.page,
     this.$store.dispatch('getCharacters');
    },
  }
  
}
</script>


