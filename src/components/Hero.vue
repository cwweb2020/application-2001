<template>
    <section class="herototal">
        <div class="herowrap">
            <img class="stwimg1" src="https://firebasestorage.googleapis.com/v0/b/cereales-ebbb8.appspot.com/o/tatooine.png?alt=media&token=397215cf-b807-438f-b399-09308cc64fda" alt="imagen-planeta">
            <img class="stwimg" src="img/stwars.png" alt="">
        </div>

    </section>
</template>

<script>
export default {

}
</script>

<style lang="scss">
.herototal{
    width: 100%;
    overflow: hidden;

          .herowrap{
              height: 75vh;
                 
                  img{
                      object-fit: cover;
                  }
          }
}
.stwimg{
    position: absolute;
    top: 55%;
    left: 37%;
    width: 25%;
}


@media (max-width: 790px){
        .stwimg{
         top: 60%;
         left: 29%;
        width: 45%;
}

}
@media (max-width: 600px){
    .stwimg{
    top: 60%;
    left: 29%;
    width: 45%;

}
.stwimg1{
    height: 74vh;
}
}
</style>

