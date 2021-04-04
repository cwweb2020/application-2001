<template>
   <section class="navtotal">
       <div class="navwrap">
            <ul class="navlista">
                <li><router-link to="/">Home</router-link><span class="space">/</span> |<span class="space">./.</span></li>
                <li><router-link to="/about">Spaceships</router-link></li>
            </ul>
       </div>
   </section>
     
      <div class="submenu">
          <!-- relleno -->
      </div>
</template>

<script>
export default {

}
</script>

<style lang="scss">
   .navtotal{
       width: 100%;
       height: 12vh;
       background-color: #2b2e32;
       display: flex;
       justify-content: center;

           .navwrap{
               width: 85%;
               height: 12vh;

                    .navlista{
                        display: flex;
                        height: 100%;
                        justify-content: flex-end;
                        align-items: center;

                              li{
                                  color: white;
                                  list-style: none;
                                      
                                         a{
                                             color: white;
                                         }
                                         .space{
                                             opacity: 0;
                                         }
                                         
                              }
                    }
              
           }
          
   }
    .submenu{
               background-color: #51565db0;
               height: 6vh;
               width: 100%;
           }
</style>>

