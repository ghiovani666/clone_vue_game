<template>
   <div>


      <div class="uni-page-wrapper">
         <div class="uni-page-body">



            <div data-v-672c2f8e="" class="page-user">
               <div data-v-024a896b="" data-v-672c2f8e="" class="u-navbar">

                  <div data-v-024a896b="" class="u-navbar--fixed">
                     <div data-v-186edb96="" data-v-024a896b="" class="u-status-bar"
                        style="height: 0px; background-color: rgb(255, 255, 255);"></div>
                     <div data-v-024a896b="" class="u-navbar__content" style="height: 44px;">
                        <div data-v-024a896b="" class="u-navbar__content__left">
                           <div data-v-59765974="" data-v-024a896b="" class="u-icon u-icon--right">
                              <span data-v-59765974="" hover-class="" class="u-icon__icon uicon-arrow-left"
                                 style="font-size: 20px; line-height: 20px; font-weight: normal; top: 0px; color: rgb(255, 255, 255);">
                                 <span></span></span>

                           </div>
                           <router-link to="/">
                              <span data-v-024a896b="" class="u-navbar__content__left__text"
                                 style="color: rgb(255, 255, 255);"><span>Regresar</span></span>
                           </router-link>
                        </div>
                        <span data-v-024a896b="" class="u-line-1 u-navbar__content__title" style="width: 200px;">
                           <span></span></span>

                     </div>
                  </div>
               </div>


               <div data-v-672c2f8e="" class="mynftbg uni-image">
                  <div
                     :style="{ 'background-image': `url(${require('@/assets/MXMNFT_files/mynftbg.png')})`, 'background-position': `center center`, 'background-size': `contain`, 'background-repeat': `no-repeat` }">
                  </div>

               </div>
               <div data-v-672c2f8e="" class="myuser-list">
                  <div data-v-672c2f8e="" class="mytitle">
                     <span data-v-672c2f8e="" class="text"><span>PRUEBA</span></span>
                  </div>
                  <!---->
               </div>
            </div>

         </div>
      </div>



   </div>
</template>

<script>
export default {
   name: 'TablaDetalle',
   props: {
      msg: String
   },
   components: {

   }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
