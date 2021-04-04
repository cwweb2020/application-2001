<template>
   
     <div class="submenu mt-5 pt-5"></div>
    <h3 class="text-white text-center mt-5 films-title">Filmography</h3>
    <section class="my-5">
        <div class="container">
            <ul class="list-group col-12 col-md-8" v-for="(film, index) of films" :key="index">
                <li class="list-group-item p-4"><b>{{film.title}}:</b> <br> {{film.opening_crawl}} <hr><b>Release Date - </b>{{film.release_date}}
                
                </li>
            </ul>
        </div>
    </section>

  

</template>

<script>
import axios from 'axios'
import { onMounted, ref } from 'vue'
export default {
    setup(){
        const films = ref([])
        const planets=ref({})
        const planet = ref([])

        //------------
        

          const getData = ()=>{
             axios.get(`https://swapi.dev/api/films/`).
            then(response => {

              // console.log(response.data.results[0].planets);
                films.value = response.data.results
               films.value.map( (film)=>{
                  // console.log(film.planets);
                   planets.value = film.planets
                  // console.log(planets.value);
                   planets.value.forEach(el => {
                     // console.log(el);
                       getPlanets(el)
                   });
                   
                } )            
        })
        }
         const getPlanets = (url) => {
            axios.get(url).
            then(res => {
              // console.log(res.data.name);
               planet.value.push(res.data.name)
              // console.log(planet.value);

            } )
        } 

        onMounted( () => {
            getData()
        } )


        return {
           getData,
           ref,
           films,
           planets,
           planet
        }
    }

}
</script>

<style lang="scss">

.films-title{
    color: #ffe81f !important;
}
.__cajabotones{
    display: flex;
    justify-content: center;
           
            button{
              padding: 8px 28px;
              border: none;
              border-radius: 5px;
              font-weight: 600;
              color: #0d6efd!important;
              box-shadow: 1px 1px 5px lightgrey;
            }
}

@media(max-width:790px){
    .list-group{
        width: 100%;
    }
}
</style>