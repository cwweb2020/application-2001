<template>

    <Navbar />
      
   <Spaceships />

   
</template>


<script>
import Spaceships from '../components/Spaceships'
import Navbar from '../components/Navbar'
export default ({
  components:{
     Navbar,
     Spaceships,
     
  }
  
    // setup(){
    //     const store = useStore()
    //     onMounted(() => {
    //       store.dispatch('fetchSpaceships')
    //     })
    //        // console.log(store.state.planets);
       
    //    return {
         
    //    }
    // }

})
</script>

<style lang="scss">



</style>


