<template>
<div>
<h5 class="py-3 my-3 text-start mx-5 fs-3 explore-title">Explore ALL Planets..</h5>
   <div class="container __container">
       <div class="card">
           <div class="card-header bg-dark">
               <h4 class="infototaltitle"><b> {{planet.name}} </b> <span class="right text-primary" @click="changePlanetLess" v-show="id > 1" >Prev</span>|<span class="right text-primary" @click="changePlanetAdd">Next</span></h4>
           </div>
           <div class="card-body cuerpo-tarj">
               <ul>
                   <li>Population: {{planet.population}} habitants</li>
                   <li>Terrain: {{planet.terrain}}</li>
                   <li>Diameter: {{planet.diameter}} Km.</li>
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
               residents_names.value.push(res.data.name +' '+ ' | ' + ' '+ res.data.height + ' cm' + ' | ' + 'Birth year : '+ res.data.birth_year)
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
    background-color: #4c4a4a !important;
}
.right{
    cursor: pointer;
}
.__container{
    padding: 0 0 60px 0;
}
.cuerpo-tarj > ul > li{
    font-weight: 600;
}
.explore-title{
    color: #ffe81f !important;
}
@media(max-width:540px){
   
    .explore-title{
        width: 100%;
        margin: 0 !important;
        font-size: 20px !important;
         text-align: center !important;
    }
}
</style>