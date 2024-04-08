<template>
    <v-layout>
       <eC_mainNavBar />
       <div class="bg-body ">    
         <v-main>
            <div class="">
            <ec_mainSearchEngine></ec_mainSearchEngine>
           <div class="homeContent">
            <section class="bordedDetail widthResizer pa-3 my-4 rounded-xl">
                <section class="lastFlights pt-2">
                    <h2 class="pl-2 pb-2">Passagens de última hora</h2>
                            <ec_PromoFlights v-bind:lastFlightsData="lastFlightsData"></ec_PromoFlights>                        
                </section>
                <section class="cheaperDestinations pt-4">
                    <h2 class="pl-2 pb-2">Destinos mais baratos</h2>
                        <!-- <Splide :options="{ rewind: true }" aria-label="My Favorite Images"> -->
                            <ec_PromoDestinations v-bind:destinationPromo="cheaperDestinationsData"></ec_PromoDestinations>
                        <!-- </Splide> -->

                </section>
            </section>
            <section class="bordedDetail widthResizer pa-3 my-4 rounded-xl">
                <section class="lastFlights pt-2">
                    <h2 class="pl-2 pb-2">Destinos nacionais</h2>
                    <!-- <Splide :options="{ rewind: true }" aria-label="My Favorite Images"> -->
                    <ec_PromoDestinations v-bind:destinationPromo="nationalDestinationsData"></ec_PromoDestinations>
                    <!-- </Splide> -->
                </section>
                <section class="cheaperDestinations widthResizer pt-6">
                    <h2 class="pl-2 pb-2">Destinos internacionais</h2>
                    
                    <ec_PromoDestinations v-bind:destinationPromo="internationalDestinationsData"></ec_PromoDestinations>
                </section>
            </section>
        
           
           
            </div>
           <ec_footer/>
        </div>
         </v-main>
 
       </div>
       </v-layout>
       
   </template>
   
   <script setup>
   import eC_mainNavBar from '@/components/organisms/nav/mainNavBar.vue'
   import ec_mainSearchEngine from '@/components/organisms/searchEngine/mainSearchEngine.vue'
   import ec_footer from '@/components/organisms/nav/footer.vue'
   import ec_PromoFlights from '@/components/molecules/promos/ec_PromoFlights.vue'
   import ec_PromoDestinations from '@/components/molecules/promos/ec_PromoDestinations.vue'

 
   </script>
   
   <script>

    // import { Splide, SplideSlide } from '@splidejs/vue-splide';


   export default {

     data() {
           return {
               lastFlightsData: [
                   {
                       //General flight Infos
                       type: 'Ida e Volta',
                       pageURL: "#/checkout",
                       AdultsPrice: 'R$ 245',
                        hasOneConnection: true,
                        hasMultipleConnection: false,
                        departureCity: 'São Paulo',
                        departureDate: '19/02',
                        returnCity: 'Buenos Aires',
                        returnDate: '28/02',
                        tripLength: '9 dias',
                       
                   },
                   {
                       //General flight Infos
                       type: 'Ida e Volta',
                       pageURL: "#/checkout",
                       AdultsPrice: 'R$ 612',
                        hasOneConnection: false,
                        hasMultipleConnection: true,
                        departureCity: 'São Paulo',
                        departureDate: '17/02',
                        returnCity: 'Recife',
                        returnDate: '25/02',
                        tripLength: '8 dias',
                   },
                   {
                       //General flight Infos
                       type: 'Ida e Volta',
                       pageURL: "#/checkout",
                       AdultsPrice: 'R$ 1.469',
                        hasOneConnection: false,
                        hasMultipleConnection: false,
                        departureCity: 'São Paulo',
                        departureDate: '21/02',
                        returnCity: 'Miami',
                        returnDate: '24/02',
                        tripLength: '3 dias',
                       
                   },
                   
                  
                   
               ],
               cheaperDestinationsData: [
                   {
                       //GeneralPromoInfo
                        pageURL: "#/results",
                        AdultsPrice: 'R$ 645',
                        priceDiscount: '12%',
                        hasDiscount:true,
                        isNational: false,
                        isInternational: true,
                        destinationCity: 'Buenos Aires',
                        destinationPic: 'https://blog.123milhas.com/wp-content/uploads/2022/12/o-que-fazer-em-buenos-aires-passeios-e-pontos-turisticos-conexao123-scaled.jpg',
                   },
                   {
                       //GeneralPromoInfo
                        pageURL: "#/results",
                        AdultsPrice: 'R$ 710',
                        priceDiscount: '3%',
                        isNational: true,
                        isInternational: false,
                        destinationCity: 'Rio de Janeiro',
                        destinationPic: 'https://www.melhoresdestinos.com.br/wp-content/uploads/2019/08/rio-de-janeiro-capa2019-01.jpg',
                   },
                   {
                       //GeneralPromoInfo
                        pageURL: "#/results",
                        AdultsPrice: 'R$ 804',
                        priceDiscount: '21%',
                        hasDiscount:true,
                        isNational: true,
                        isInternational: false,
                        destinationCity: 'Curitiba',
                        destinationPic: 'https://media.tacdn.com/media/attractions-splice-spp-674x446/06/70/30/11.jpg',
                       
                   },
               ],
               nationalDestinationsData: [
                   {
                       //GeneralPromoInfo
                        pageURL: "#/results",
                        AdultsPrice: 'R$ 710',
                        priceDiscount: '3%',
                        destinationCity: 'Rio de Janeiro',
                        destinationPic: 'https://a.cdn-hotels.com/gdcs/production2/d1700/2424b84c-5372-4434-b914-3974bcce0d3f.jpg',
                   },
                   {
                       //GeneralPromoInfo
                        pageURL: "#/results",
                        AdultsPrice: 'R$ 804',
                        priceDiscount: '21%',
                        hasDiscount:true,
                        destinationCity: 'Curitiba',
                        destinationPic: 'https://www.viajeparana.com/sites/viaje-parana/arquivos_restritos/files/styles/escala_e_corta_915_555_/public/imagem/2019-02/botanical-garden-2168222_1920.jpg?itok=Kt8Fwb07',
                       
                   },
                   {
                       //GeneralPromoInfo
                        pageURL: "#/results",
                        AdultsPrice: 'R$ 933',
                        priceDiscount: '13%',
                        hasDiscount:true,
                        destinationCity: 'Goiânia',
                        destinationPic: 'https://content.r9cdn.net/rimg/dimg/18/61/a02792ea-city-11835-17b1abcd72d.jpg?crop=true&width=1020&height=498',
                       
                   },
               ],
               internationalDestinationsData: [
                   {
                       //GeneralPromoInfo
                        pageURL: "#/results",
                        AdultsPrice: 'R$ 910',
                        destinationCity: 'Bariloche',
                        destinationPic: 'https://www.civitatis.com/f/argentina/bariloche/free-tour-bariloche-589x392.jpg',
                   },
                   {
                       //GeneralPromoInfo
                        pageURL: "#/results",
                        AdultsPrice: 'R$ 2.304',
                        priceDiscount: '42%',
                        hasDiscount:true,
                        destinationCity: 'Miami',
                        destinationPic: 'https://www.melhoresdestinos.com.br/wp-content/uploads/2023/01/passagens-aereas-miami-eua-capa-03-820x430.jpg',
                       
                   },
                   {
                       //GeneralPromoInfo
                        pageURL: "#/results",
                        AdultsPrice: 'R$ 3.831',
                        destinationCity: 'Londres',
                        destinationPic: 'https://sampi.net.br/dir-arquivo-imagem/2019/08/tudo-sobre-a-inglaterra.jpg',
                       
                   },
               ]
           }
       }
   }
   </script>
   