<template>
<div>

   <div class="container __container">
       <div class="card">
           <div class="card-header bg-dark">
               <h4 class="infototaltitle">{{planet.name}}  <span class="right" @click="changePlanetLess">Prev</span>|<span class="right" @click="changePlanetAdd">Next</span></h4>
           </div>
           <div class="card-body cuerpo-tarj">
               <ul>
                   <li>Population: {{planet.population}}</li>
                   <li>Terrain: {{planet.terrain}}</li>
                   <li>Diameter: {{planet.name}} Km.</li>
                   <li>Climate: {{planet.climate}}</li>
                   <li>Gravity: {{planet.gravity}}</li>
                   <li>Surface water: {{planet.surface_water}}</li> 
                   <li>Rotation period:  {{planet.rotation_period}} (E. hours)</li>
                   <li>Residents:</li>
                       <ul v-for="(resident, index) in residents_names" :key="index">
                           <li>{{resident}}</li>
                       </ul>                   
               </ul>
           </div>
       </div>
   </div>
</div>    
</template>

<script>
import {  onMounted, ref } from "vue"
import axios from 'axios';

export default ({ 
    setup() {
        const planet = ref({})
        const id = ref(1)
        const residents = ref([])
        const residents_names = ref([])

        const changePlanet = ()=>{
            residents_names.value = []
            if (id.value == undefined || id.value == 0) {
               id.value = 1 
            }
            getData(id.value)
        }
        const changePlanetAdd= ()=>{
            residents_names.value = []
            id.value +=1
            getData(id.value)
        }
        const changePlanetLess= ()=>{
            residents_names.value = []
            id.value -=1
            if (id.value == undefined || id.value == 0) {
               id.value = 1 
            }
            getData(id.value)
        }


        const getData = (id_planet)=>{
             axios.get(`http://swapi.dev/api/planets/${id_planet}/`).
            then(response => {
            planet.value = response.data
            residents.value = response.data.residents
            residents.value.forEach(element => {
                getResidentsNames(element)
            });            
        })
        }
        const getResidentsNames = (url) => {
            axios.get(url).
            then(res => {
               residents_names.value.push(res.data.name)
            } )
        }   
        onMounted(()=>{
            getData(1)                               
        })

        return{planet, changePlanet, id, residents_names, changePlanetAdd, changePlanetLess}         
    },
})
</script>

<style scoped>
.card{
    border: 2px solid  #ffe81f  !important;
    background-color: #000000;
    font-family:'IBM Plex Mono', monospace;
    color:aliceblue;
    text-shadow: 1px 1px 2px black;
    letter-spacing: 1.1px;
}
.card-header{
    background-color: #ffe81f !important;
    color: black !important;
     text-shadow: none;
     padding: 20px 0 !important;

        
}
.infototaltitle{
    color: black !important;
}
.cuerpo-tarj{
    background-color: rgb(88, 85, 85) !important;
}
.right{
    cursor: pointer;
}
.__container{
    padding: 0 0 60px 0;
}
</style>