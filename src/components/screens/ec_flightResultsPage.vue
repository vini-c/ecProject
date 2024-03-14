<template>
   <v-layout>
      <eC_mainNavBar />
      <eC_searchEngineResults />
      <eC_filters />
      <!-- test-->
      <div class="bg-body flightResults">
        <v-main>
          <v-container class="">        
            <div class="searchResultsContent">
              <v-row no-gutters>
              <v-col xs="12" sm="12" md="10" lg="10">
                <ec_AIadvisory class="mb-4" elevation="0" v-bind:flightOptionData="flightOptionData"></ec_AIadvisory>
                <h3 class="primaryContent pa-3 pt-1 pageTitle">Selecionamos esses voos para que você tenha mais opções de viagem:</h3>
              <v-expansion-panels variant="popout" multiple class="flightOptionsExpansion">
                <!-- Componente de opcao de passagem -->
                <ec_flightOptionComponent actionSection v-bind:flightOptionData="flightOptionData" />
              </v-expansion-panels>
              <ec_notFoundContent searchError  title="Não encontramos voo disponíveis" subtitle="Tente alterar os filtros ou as datas da sua busca."></ec_notFoundContent>
              </v-col>
              <v-col class="hideMobile" xs="12" sm="12" md="2" lg="2">
              <div class="tisingSection  hideTablet ml-2">
                <v-img  class="rounded-lg mb-4" aspect-ratio="1/1" cover src="https://cdn.vuetifyjs.com/images/parallax/material.jpg"></v-img>
                <v-img  class="rounded-lg mb-4" aspect-ratio="4/3" cover src="https://cdn.vuetifyjs.com/images/parallax/material.jpg"></v-img>
              </div>
              </v-col>
            </v-row>
              </div>  

          </v-container>
          <ec_footer/>
        </v-main>

      </div>
      </v-layout>
      
  </template>
  
  <script setup>
    import '@/components/molecules/scss/flightOptions.scss'
  import ec_flightOptionComponent from '@/components/organisms/flightResults/flightOptionComponent.vue'
  import eC_mainNavBar from '@/components/organisms/nav/mainNavBar.vue'
  import eC_searchEngineResults from '@/components/organisms/searchEngine/searchEngineResults.vue'
  import eC_filters from '@/components/organisms/filters.vue'
  import ec_AIadvisory from '@/components/organisms/aiAdvisory.vue'
  import ec_footer from '@/components/organisms/nav/footer.vue'
  import ec_notFoundContent from '@/components/molecules/ec_notFoundContent.vue'

  </script>
  
  <script>
  export default {
    data() {
          return {
              flightOptionData: [
                  {
                      //General flight Infos
                      type: 'Ida',
                      mainOperation: 'Latam',
                      generalInfos: '*1 mala por adulto. *Em todo voo você tem direito a levar uma bolsa pequena com seus pertences. **O limite de peso da bagagem pode variar em cada compania aérea, confira o limite exato no site oficial da companhia',                    
                      isRefundable: true,
                      betterPrice: false,
                      betterOption: true,
                      fasterOption: false,
                      isReturn: false,
                      isDeparture: true,
                      hasKids: true,
                      hasBabys: true,
                      personalBag: false,
                      checkedBag: false,
                      boardBag: false,
                      economyClass: false,
                      PremiumClass: false,
                      ExecutiveClass: true,
                      pageURL: "#/checkout",
                      ciaLogo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/fe/Latam-logo_-v_%28Indigo%29.svg/1600px-Latam-logo_-v_%28Indigo%29.svg.png',
  
                      // priceInfos
                      finalPrice: 'R$ 32.544',
                      Adults: '2 Adultos',
                      AdultsPrice: 'R$ 18.506',
                      Kids: '1 Criança',
                      KidsPrice: 'R$ 9.253',
                      Baby: '1 Bebê',
                      BabysPrice: 'R$ 926',
                      flightTax: 'R$ 3.859',
                      serviceTax: 'R$ 512',
                      flightDetail: [
                            {
                              // General infos
                              typeInfo: 'Ida',
                              departurenumberDate: '09/01',
                              ArrivalnumberDate: '10/01',
                              totalFlightDuration: '21h10m',
                              isDeparture: false,
                              directFlight: false,
                              personalBag: false,
                              checkedBag: false,
                              boardBag: true,
                              overNight:true,
                              economyClass: false,
                              PremiumClass: true,
                              ExecutiveClass: false,
                              operation: 'Gol',
                              number: 'AV86',
                              model: 'Airbus A320-100/200',
                              ciaLogo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/6b/LogoGOL-Pref-FundoClaro-RGB.svg/1280px-LogoGOL-Pref-FundoClaro-RGB.svg.png',
  
                              //Departure Flight Details
                              departureDate: 'Ter, 09 de Jan de 2023',
                              departureTime: '07:30',
                              departureLocation: 'Guarulhos, São Paulo',
                              departureIATA: 'GRU',
                              departureAirport: 'Aeroporto Internacional de Guarulhos',
                              departureFlightDuration: '5h 15m',
  
                              //This flight has Connections?
                              hasConnection: true,
                              hasOneConnection: true,
                              hasMultipleConnection: false,
                              optionConnections: [
                                  {
                                      changeAirplane: true,
                                      connectionoperation: 'Gol',
                                      connectionnumber: 'AV86',
                                      connectionmodel: 'Airbus A320-100/200',
                                      connectionciaLogo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/6b/LogoGOL-Pref-FundoClaro-RGB.svg/1280px-LogoGOL-Pref-FundoClaro-RGB.svg.png',
  
                                      connectionDate: 'Ter, 09 de Jan de 2023',
                                      connectionTime: '22:55',
                                      connectionLocation: 'Bogotá, Colombia',
                                      connectionIATA: 'BOG',
                                      connectionAirport: 'Aeroporto Internacional El Nuevo Dorado',
                                      connectionFlightDuration: '3h 50m',
                                      connectionDelay: '11h 30m',
                                  },
                                  
                              ],
  
                              //Arrival Flight Details
                              arrivalDate: 'Quar, 10 de Jan de 2023',
                              arrivalTime: '02:45',
                              arrivalLocation: 'Miami, Florida',
                              arrivalIATA: 'MIA',
                              arrivalAirport: 'Aeroporto Internacional Miami',
                              inFlightExtraInfos: '*1 mala por adulto. *Em todo voo você tem direito a levar uma bolsa pequena com seus pertences.  **O limite de peso da bagagem pode variar em cada compania aérea, confira o limite exato no site oficial da companhia',
  
                            },
                        
                            
                      ],
                      
                  }
                  
              ]
          }
      }
  }
  </script>
  