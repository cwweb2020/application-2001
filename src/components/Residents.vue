<template>
 <h5 class="my-5 fs-4">See the Residents from Tatooine</h5>
    <div class="cajabotonesresidents">
        <button @click="sk=!sk">Luke Skywalker</button>
       <div class="my-3" v-show="sk">
           <img src="img/sk.jpg" alt="sky">
       </div>
        <button @click="veru=!veru">Beru Whitesun lars</button>
        <div class="my-3" v-show="veru">
           <img src="img/veru.jpg" alt="Beru Whitesun lars">
       </div>
        <button @click="c3=!c3">C-3PO</button>
        <div class="my-3" v-show="c3">
           <img src="img/c3.jpg" alt="c-3po" style="width:300px;">
       </div>
        <button @click="owen=!owen">Owen Lars</button>
        <div class="my-3" v-show="owen">
           <img src="img/owen.jpg" alt="owen" style="width:300px;">
       </div>
         <button @click="cliegg=!cliegg">Cliegg Lars</button>
        <div class="my-3" v-show="cliegg">
           <img src="img/cliegg.jpg" alt="cliegg" style="width:300px;">
       </div>
         <button @click="biggs=!biggs">Biggs Darklighters</button>
        <div class="my-3" v-show="biggs">
           <img src="img/biggs.jpg" alt="Biggs Darklighter" style="width:300px;">
       </div>
        <button @click="r5=!r5">R5-D4</button>
        <div class="my-3" v-show="r5">
           <img src="img/r5.jpg" alt="R5-D4<" style="width:300px;">
       </div>
        <button @click="shi=!shi">Shmi Skywalker</button>
        <div class="my-3" v-show="shi">
           <img src="img/shi.jpg" alt="R5-D4<" style="width:300px;">
       </div>
        <button @click="dart=!dart">Darth Vader</button>
        <div class="my-3" v-show="dart">
           <img src="img/dart.jpg" alt="Darth Vader" style="width:300px;">
       </div>
        <button @click="anakin=!anakin">Anakin Skywalker</button>
        <div class="my-3" v-show="anakin">
           <img src="img/anakin.jpg" alt="Anakin Skywalker" style="width:300px;">
       </div>



       
       
       
    </div>

                     
   
</template>

<script>
import {  onMounted, ref } from "vue"
import axios from 'axios';

export default ({ 
    data(){
        return{
            sk:false,
            veru:false,
            c3:false,
            owen:false,
            cliegg:false,
            biggs:false,
            r5:false,
            shi:false,
            dart:false,
            anakin:false
        }
    },
   
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

<style lang="scss" scoped>


.cajabotonesresidents{
    display: flex;
    flex-wrap: wrap;
    width: 80%;
    margin: 8px auto;

         
        
           button{
               width: 80%;
               margin: 8px auto !important;
               border: none;
              padding: 4px 0;
              box-shadow: 1px 1px 6px lightgrey;
           }
           
}
.my-3{
        display: flex;
        justify-content: center !important;
         width: 100%;
}

</style>