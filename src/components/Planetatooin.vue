<template>
  <div class="container __containerplaneta">
          <h2 class="tatooine-title">Tatooine Planet</h2>
     <h3 class="text-white aboutplanet-title">About the Planet:..</h3>
      <div class="row">
          <div class="card">
             <img src="https://firebasestorage.googleapis.com/v0/b/productos-9a1af.appspot.com/o/sky.jpg?alt=media&token=73259518-a68d-4d3c-b7bf-f3f65a475683" class="card-img-top" alt="planet">

         <div class="card-body py-4">
           <h5 class="card-title">Card title</h5>
           <p class="card-text fs-4">Some caracteristics from Tatooine planet.</p>
            
             <ul>
                 <li class="fs-4">Name of the Planet : <span class="space">/</span> <b> {{allplanets.name}} </b></li>
                 <li class="fs-4">Rotation Period : {{allplanets.rotation_period}} hours</li>
                 <li class="fs-4">Orbital Period: {{allplanets.orbital_period}} Earth Hours</li>
                 <li class="fs-4">Diameter: {{allplanets.diameter}} km</li>
                 <li class="fs-4"> Climate: {{allplanets.climate}}</li>
                 <li class="fs-4">Graviti: {{allplanets.gravity}}</li>
                 <li class="fs-4">Terrain: {{allplanets.terrain}}</li>
                 <li class="fs-4">Surface water: {{allplanets.surface_water}}</li>
                 <li class="fs-4"> Population: {{allplanets.population}} habitants.</li>
             </ul>
         </div>
    </div>
      </div>
  </div>
 
    
</template>

<script>
import { computed, onMounted } from 'vue'
import { useStore } from 'vuex'
export default {

    setup(){
        const store = useStore()
        onMounted(() => {
          store.dispatch('fetchPlanet')
        })
           // console.log(store.state.planets);
       const allplanets = computed(() => store.state.planets)
      //  console.log(allplanets);
       return {allplanets}
    }

}
</script>

<style lang="scss">
.__containerplaneta{
    padding: 80px 0;
    min-height: 80vh;
}

@media(max-width:540px){
    .__containerplaneta{
        padding: 40px 0 !important;

               .aboutplanet-title{
                   font-size: 18px;
                   margin: 8px;
                   padding: 8px;
               }
    }

  
}
.tatooine-title{
    color: #ffe81f !important;
}
</style>

