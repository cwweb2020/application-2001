<template>
 <div class="submenu mt-5 pt-5"></div>
 <h5 class="my-5 fs-4 seeresident-title">See the Residents from Tatooine</h5>
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
           <img src="img/c3.jpg" alt="c-3po">
       </div>
        <button @click="owen=!owen">Owen Lars</button>
        <div class="my-3" v-show="owen">
           <img src="img/owen.jpg" alt="owen">
       </div>
         <button @click="cliegg=!cliegg">Cliegg Lars</button>
        <div class="my-3" v-show="cliegg">
           <img src="img/cliegg.jpg" alt="cliegg">
       </div>
         <button @click="biggs=!biggs">Biggs Darklighters</button>
        <div class="my-3" v-show="biggs">
           <img src="img/biggs.jpg" alt="Biggs Darklighter">
       </div>
        <button @click="r5=!r5">R5-D4</button>
        <div class="my-3" v-show="r5">
           <img src="img/r5.jpg" alt="R5-D4<">
       </div>
        <button @click="shi=!shi">Shmi Skywalker</button>
        <div class="my-3" v-show="shi">
           <img src="img/shi.jpg" alt="R5-D4">
       </div>
        <button @click="dart=!dart">Darth Vader</button>
        <div class="my-3" v-show="dart">
           <img src="img/dart.jpg" alt="Darth Vader">
       </div>
        <button @click="anakin=!anakin">Anakin Skywalker</button>
        <div class="my-3" v-show="anakin">
           <img src="img/anakin.jpg" alt="Anakin Skywalker">
       </div>


    </div>

       
                     
   
</template>

<script>
import { onMounted, ref } from 'vue'


export default { 
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
            anakin:false,

            
        }
    },
    setup(){
     
    }
   
   
}
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
               padding: 5px 0;
               box-shadow: 1px 1px 6px lightgrey;
               background-image: linear-gradient(to top, #accbee 0%, #e7f0fd 100%);
           }
           
}
.my-3{
        display: flex;
        justify-content: center !important;
         width: 100%;
           
             img{
                 width: 100%;
             }
}
.seeresident-title{
   
    color: #ffe81f !important;
}



@media (min-width: 790px){
   
   .cajabotonesresidents{

       button{
       font-size: 19px;
       font-weight: bold;
    }
  
  }
  
}
@media(max-width:540px){
  .seeresident-title{
      width: 90%;
      margin-bottom: 18px !important;
  }
}
</style>