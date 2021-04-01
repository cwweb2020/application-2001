<template>
  <div class="container __containerplaneta">
          <h2>Tatooine Planet</h2>
     <h3 class="text-white">About the Planet:..</h3>
      <div class="row">
          <div class="card">
             <img src="https://firebasestorage.googleapis.com/v0/b/productos-9a1af.appspot.com/o/sky.jpg?alt=media&token=73259518-a68d-4d3c-b7bf-f3f65a475683" class="card-img-top" alt="planet">

         <div class="card-body py-4">
           <h5 class="card-title">Card title</h5>
           <p class="card-text">Some caracteristics from Tatooine planet.</p>
            
             <ul>
                 <li>Name of the Planet : {{allplanets.results[0].name}}</li>
                 <li>Rotation Period : {{allplanets.results[0].rotation_period}}</li>
                 <li>Orbital Period: {{allplanets.results[0].orbital_period}}</li>
                 <li>Diameter: {{allplanets.results[0].diameter}}</li>
                 <li> Climate: {{allplanets.results[0].climate}}</li>
                 <li>Graviti: {{allplanets.results[0].gravity}}</li>
                 <li>Terrain: {{allplanets.results[0].terrain}}</li>
                 <li>Surface water: {{allplanets.results[0].surface_water}}</li>
                 <li> Population: {{allplanets.results[0].population}}</li>
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

       const allplanets = computed(() => store.state.planets)

       return {allplanets}
    }

}
</script>

<style lang="scss">
.__containerplaneta{
    padding: 80px 0;
    min-height: 80vh;
}


</style>

