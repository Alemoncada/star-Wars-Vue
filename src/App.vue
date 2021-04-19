<template class="bg-warning">
  <div id="app" class="aling-text-center justify-content-md-center background ">
    <router-view/>
    
      <b-row class="justify-content-center">
      <router-link to="/"><b-button>home</b-button></router-link>       
      </b-row>
    
  </div>
</template>

<style >
.background {
  background-image: url(https://genuine-lamps.com/images/windows/best-star-wars-wallpapers-30-images-to-help-you-pick-a-side_13.jpg);
  
}
.bigtitle {
 -webkit-text-stroke: 3px gold;
  color: black;
}
</style>