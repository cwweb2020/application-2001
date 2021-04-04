<template>
    <h2 class="my-4 fs-3 spaceship-title"> The Spaceships</h2> 
   <div class="__cajabotones"> <button @click="changeShipLess" v-show="id > 1">Prev</button> | <button @click="changeShipAdd">Next</button> </div>

  <div class="spaceship-container">
        <div class="spaceship-row" v-for="(ship, index) in itemships" :key="index">
            <!-- card -->
               <div class="card _cardspaceship">
                   <h4 class="fs-5 mb-3 spaceship-title">Name: {{ship.name}}</h4>
                   <hr class="bg-light">
                 <h3 class="text-white fs-5 my-2">Model: {{ship.model}}</h3>
                 <h3 class="text-white fs-5 my-2">Max Atmosphering Speed: {{ship.max_atmosphering_speed}} km/h.</h3>
                 <h3 class="text-white fs-5 my-2">Starship Class: {{ship.starship_class}}.</h3>
                 <h3 class="text-white fs-5 my-2">Crew: {{ship.crew}}.</h3>
                 <h3 class="text-white fs-5 my-2">Passengers: {{ship.passengers}}.</h3>

                   <div class="card-body">
                 
               </div>
             </div>
            <!-- card -->
        </div>
  </div>
                        
                     
</template>

<script>
import {  onMounted, ref } from "vue"
import axios from 'axios';

export default ({ 
    setup() {
        const ships = ref([])
        const id = ref(1)
        const itemships = ref([])
        

        const changeShip = ()=>{
         
            if (id.value == undefined || id.value == 0) {
               id.value = 1 
            }
            getData(id.value)
        }
        const changeShipAdd= ()=>{
           
            id.value +=1
            if (id.value > 4 ) {
               id.value = 4 
            }
            getData(id.value)
        }
        const changeShipLess= ()=>{
          
            id.value -=1
            if (id.value == null || id.value == 0) {
               id.value = 1 
            }
            getData(id.value)
        }


        const getData = (id_ship)=>{
            console.log(id_ship);
             axios.get(`https://swapi.dev/api/starships/?page=${id_ship}`).
            then(response => {
             // console.log(response.data);
            ships.value = response.data

            //mapping ships.value
           ships.value.results.map(function (item) { 
             console.log(item.name);
             itemships.value.push(item) 
            })
                      
        })
        }
        
        onMounted(()=>{
            getData(1)   

        })

        return{ships, id, changeShipAdd, changeShipLess, changeShip, itemships}         
    },
})
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
                        padding: 25px !important;
                        height: 100%;
                        box-shadow: 1px 1px 8px whitesmoke;

                                  .card-body{
                                       padding: 0;
                                 }
                                 .spaceship-title{
                                     color: #ffe81f !important;
                                 }
                  }
        }
}
 .spaceship-title{
     color: #ffe81f !important;
 }
</style>












