<template>
    <Navbar/>
    <Hero/>

    <Planetatooin  />
     


</template>

<script>
import Hero from '../components/Hero.vue'
import Navbar from '../components/Navbar.vue'
import Planetatooin from '../components/Planetatooin.vue'

export default {
  name: 'Home',
  components: {
     Navbar,
    Hero,
    Planetatooin,
   
  }

}
</script>
