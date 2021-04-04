<template>
    <h2 class="my-4 fs-3">Discover the Spaceships</h2>


  <div class="spaceship-container">
        <div class="spaceship-row" v-for="(spaceship, index) in $store.getters.sp.results" :key="index">
            <!-- card -->
               <div class="card _cardspaceship">
                   <h4 class="fs-5 mb-3 spaceship-title">Name: {{spaceship.name}}</h4>
                 <h3 class="text-white fs-5">Model: {{spaceship.model}}</h3>
                 <h3 class="text-white fs-5">Max Atmosphering Speed: {{spaceship.    max_atmosphering_speed}} km/h.</h3>
                 <h3 class="text-white fs-5">Starship Class: {{spaceship.starship_class}}.</h3>
                   <div class="card-body">
                 
               </div>
             </div>
            <!-- card -->
        </div>
  </div>
   <!-- <h4>{{$store.getters.sp.results}}</h4> -->

</template>

<script>
import { onMounted } from 'vue'
import { useStore } from 'vuex'
export default {
    setup(){
        const store = useStore()
        onMounted(() => {
          store.dispatch('fetchSpaceships')
        })
           // console.log(store.state.planets);
      
       return {
           
       }
    }

}
</script>

<style lang="scss">
.spaceship-container{
    width: 90%;
    margin: auto;
    padding: 20px 0;
     display: grid;
     grid-template-columns: repeat( auto-fit, minmax(350px, 1fr) ) !important;
     grid-gap: 15px;


        .spaceship-row{
           
           

                 ._cardspaceship{
                        background-color: #51565db0;
                        padding: 20px !important;
                        height: 100%;

                                  .card-body{
                                       padding: 0;
                                 }
                                 .spaceship-title{
                                     color: #ffe81f !important;
                                 }
                  }
        }
}

</style>












