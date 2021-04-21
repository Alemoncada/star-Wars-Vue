<template >
    <div class="background">
    <div class="container background">
        <h1 class="bigtitle text-center font-weight-bold ">{{currentCharacter.name}} </h1>
        <p class="text-white"><span class="font-weight-bold text-warning" >Birth year: </span>{{currentCharacter.birth_year}} </p>
        <p class="text-white"><span class="font-weight-bold text-warning">Skin color: </span>{{currentCharacter.skin_color}} </p>
        <p class="text-white"><span class="font-weight-bold text-warning">Eye color: </span>{{currentCharacter.eye_color}}</p>
        <p class="text-white"><span class="font-weight-bold text-warning">Gender: </span>{{currentCharacter.gender}}</p>
        <p class="text-white"><span class="font-weight-bold text-warning"> Films: </span>{{this.$store.state.films}}</p>
        <p class="text-white"><span class="font-weight-bold text-warning"> Vehicles: </span>{{this.$store.state.vehicles ==! [] ? "unknown" : this.$store.state.vehicles  }}</p>
    </div>
    </div>
</template>

<script>

// import axios from 'axios';

export default {
    name: 'currentCharacter',

    props:['name'],
    
    computed:{
        currentCharacter(){
            return this.$store.state.currentCharacter
        },
        
    },

    mounted(){
        return this.$store.dispatch('getCurrentCharacter', this.name)
        
    },   
}
</script>



<style scoped>
.background {
  background-image: url(https://genuine-lamps.com/images/windows/best-star-wars-wallpapers-30-images-to-help-you-pick-a-side_13.jpg);
  height: 90vh;
  width: 100vw;
  background-size: coverspo
   
}
.bigtitle {
 -webkit-text-stroke: 3px gold;
  color: black;
}
</style>

