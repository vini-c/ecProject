<template>
  <v-app>
    <eC_mainNavBar />
    <eC_searchMainBar class="hideTablet" />
    
    <v-navigation-drawer class="eCfilter filterbar">
      <v-list-item title="Filtros"
        subtitle="Modifique sua busca através dos filtros inteligentes Embarque Certo"></v-list-item>
      <v-divider></v-divider>
      <div class="priceSection pa-2">
        <v-expansion-panels>
          <v-expansion-panel class="appbar" elevation="0">
            <v-expansion-panel-title class="px-2 py-4">
              <v-row class="flex-row align-center justify-space-between" no-gutters>
                <div class="d-flex flex-row align-center">
                  <v-icon size="small" icon="mdi-airplane"></v-icon>
                  <p class="text-body pl-2">Preço</p>
                </div>
                <v-chip>Ativo</v-chip>
              </v-row>
            </v-expansion-panel-title>
            <v-expansion-panel-text>
              <div class="priceFilterSectiond flex-row">
                <v-theme-provider theme="dark">
                <v-range-slider class="px-2"></v-range-slider>
              </v-theme-provider>
                <v-row class="justify-space-between px-4 pb-2">
                  <p class="text-caption ">R$ 0.00</p>
                  <p class="text-caption ">R$ 489.924,00</p>
                </v-row>
              </div>
            </v-expansion-panel-text>
          </v-expansion-panel>
          <v-expansion-panel  class="appbar" elevation="0">
            <v-expansion-panel-title class="px-2 py-4">
              <v-row class="flex-row align-center justify-space-between" no-gutters>
                <div class="d-flex flex-row align-center">
                  <v-icon size="small" icon="mdi-clock-outline"></v-icon>
                  <p class="text-body pl-2">Escalas</p>
                </div>
                <v-chip>Ativo</v-chip>
              </v-row>
            </v-expansion-panel-title>
            <v-expansion-panel-text>
              <v-row class="justify-center pb-4">
                <v-btn variant="tonal" density="compact">Selecionar todas</v-btn>
              </v-row>
              <div class="priceFilterSectiond">
                <v-checkbox label="Direto" value="direct"></v-checkbox>
                <v-checkbox label="1 Escala" value="with1Scale"></v-checkbox>
                <v-checkbox label="+ 2 Escalas" value="withScales"></v-checkbox>
              </div>
            </v-expansion-panel-text>
          </v-expansion-panel>
          <v-expansion-panel class="appbar" elevation="0">
            <v-expansion-panel-title class="px-2 py-4">
              <v-row class="flex-row align-center justify-space-between" no-gutters>
                <div class="d-flex flex-row align-center">
                  <v-icon size="small" icon="mdi-airplane"></v-icon>
                  <p class="text-body pl-2">Companhias</p>
                </div>
                <v-chip>Ativo</v-chip>
              </v-row>
            </v-expansion-panel-title>
            <v-expansion-panel-text class="pa-2">
              <div class="priceFilterSectiond">
                <v-row class="justify-center pb-4">
                  <v-btn variant="tonal" density="compact">Selecionar todas</v-btn>
                </v-row>
                <v-checkbox label="ciaName" value="ciaName"></v-checkbox>
                <v-checkbox label="ciaName" value="ciaName"></v-checkbox>
                <v-checkbox label="ciaName" value="ciaName"></v-checkbox>
                <v-checkbox label="ciaName" value="ciaName"></v-checkbox>
                <v-checkbox label="ciaName" value="ciaName"></v-checkbox>
              </div>
            </v-expansion-panel-text>
          </v-expansion-panel>
          <v-expansion-panel class="appbar" elevation="0">
            <v-expansion-panel-title class="px-2 py-4"> <v-row class="flex-row align-center justify-space-between"
                no-gutters>
                <div class="d-flex flex-row align-center">
                  <v-icon size="small" icon="mdi-bag-suitcase"></v-icon>
                  <p class="text-body pl-2">Bagagens</p>
                </div>
                <v-chip>Ativo</v-chip>
              </v-row>
            </v-expansion-panel-title>
            <v-expansion-panel-text>
              <div class="priceFilterSectiond">
                <v-row class="justify-center pb-4">
                  <v-btn variant="tonal" density="compact">Selecionar todas</v-btn>
                </v-row>
                <v-checkbox label="Itens Pessoais" value="Itens Pessoais"></v-checkbox>
                <v-checkbox label="Mala de mão" value="Mala de mão"></v-checkbox>
                <v-checkbox label="Bagagem Despachada" value="Bagagem Despachada"></v-checkbox>
              </div>
            </v-expansion-panel-text>
          </v-expansion-panel>
          <v-expansion-panel class="appbar" elevation="0">
            <v-expansion-panel-title class="px-2 py-4">
              <v-row class="flex-row align-center justify-space-between" no-gutters>
                <div class="d-flex flex-row align-center">
                  <v-icon size="small" icon="mdi-seat-passenger"></v-icon>
                  <p class="text-body pl-2">Assentos</p>
                </div>
                <v-chip>Ativo</v-chip>
              </v-row>
            </v-expansion-panel-title>
            <v-expansion-panel-text>
              <div class="priceFilterSectiond">
                <v-row class="justify-center pb-4">
                  <v-btn variant="tonal" density="compact">Selecionar todas</v-btn>
                </v-row>
                <v-checkbox label="Econômica" value="Econômica"></v-checkbox>
                <v-checkbox label="Premium Economy" value="Premium Economy"></v-checkbox>
                <v-checkbox label="Executiva" value="Executiva"></v-checkbox>
              </div>
            </v-expansion-panel-text>
          </v-expansion-panel>
          <v-expansion-panel class="appbar" elevation="0">
            <v-expansion-panel-title class="px-2 py-4">
              <v-row class="flex-row align-center justify-space-between" no-gutters>
                <div class="d-flex flex-row align-center">
                  <v-icon size="small" icon="mdi-clock-outline"></v-icon>
                  <p class="text-body pl-2">Horários</p>
                </div>
                <v-chip>Ativo</v-chip>
              </v-row>
            </v-expansion-panel-title>
            <v-expansion-panel-text>
              <div class="priceFilterSectiond flex-row">
                <p class="text-caption">Horário de partida</p>
                <v-range-slider class="px-2"></v-range-slider>
                <v-row class="justify-space-between px-4 pb-2">
                  <p class="text-caption ">0:00</p>
                  <p class="text-caption ">23:59</p>
                </v-row>
              </div>
              <div class="priceFilterSectiond flex-row pt-4">
                <p class="text-caption">Horário de retorno</p>
                <v-range-slider class="px-2"></v-range-slider>
                <v-row class="justify-space-between px-4 pb-2">
                  <p class="text-caption ">0:00</p>
                  <p class="text-caption ">23:59</p>
                </v-row>
              </div>

            </v-expansion-panel-text>
          </v-expansion-panel>
        </v-expansion-panels>
        <v-row class="justify-end pa-5 pt-7">
          <v-btn class="rounded-xl " variant="outlined" elevation="0" prepend-icon="mdi-filter-outline">Filtrar</v-btn>
        </v-row>
      </div>
    </v-navigation-drawer>
    <!-- test-->
    <div class="bg-body">
      <v-main>
        <v-container class="">
          <div class="searchResultsContent">
            <v-expansion-panels variant="popout" multiple class="flightOptionsExpansion">
              <flightOptionComponent v-bind:flightOptionData="flightOptionData" />
            </v-expansion-panels>
            <!-- <div class="tisingSection hideTablet ml-2">
              <v-img :width="190" class="rounded-lg mb-4" aspect-ratio="1/1" cover src="https://cdn.vuetifyjs.com/images/parallax/material.jpg"></v-img>
              <v-img :width="190" class="rounded-lg mb-4" aspect-ratio="4/3" cover src="https://cdn.vuetifyjs.com/images/parallax/material.jpg"></v-img>
            </div> -->
            </div>  
        </v-container>
      </v-main>
    </div>
  </v-app>
</template>

<script setup>
import flightOptionComponent from '@/components/flightOptionComponent.vue'
import eC_mainNavBar from '@/components/organisms/mainNavBar.vue'
import eC_searchMainBar from '@/components/organisms/searchMainBar.vue'

</script>

<script>
export default {
  data() {
        return {
            flightOptionData: [
                {
                    //General flight Infos
                    type: 'Ida e Volta',
                    mainOperation: 'Latam',
                    generalInfos: '*1 mala por adulto. *Em todo voo você tem direito a levar uma bolsa pequena com seus pertences. **O limite de peso da bagagem pode variar em cada compania aérea, confira o limite exato no site oficial da companhia',                    
                    isRefundable: true,
                    betterPrice: false,
                    betterOption: true,
                    hasKids: true,
                    hasBabys: true,
                    personalBag: true,
                    checkedBag: false,
                    boardBag: false,
                    economyClass: false,
                    PremiumClass: false,
                    ExecutiveClass: true,
                    pageURL: "#",
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
                            directFlight: false,
                            personalBag: false,
                            checkedBag: false,
                            boardBag: true,
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
                          {
                            // General infos
                            typeInfo: 'Volta',
                            departurenumberDate: '09/01',
                            ArrivalnumberDate: '10/01',
                            totalFlightDuration: '21h10m',
                            directFlight: true,
                            personalBag: false,
                            checkedBag: false,
                            boardBag: true,
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
                            hasConnection: false,
                            hasOneConnection: false,
                            hasMultipleConnection: false,
                            optionConnections: [
                                {
                                    changeAirplane: true,
                                    connectionoperation: 'Latam',
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
                    
                },
                {
                    //General flight Infos
                    type: 'Ida e Volta',
                    mainOperation: 'Gol',
                    generalInfos: '*1 mala por adulto. *Em todo voo você tem direito a levar uma bolsa pequena com seus pertences. **O limite de peso da bagagem pode variar em cada compania aérea, confira o limite exato no site oficial da companhia',                    
                    isRefundable: false,
                    betterPrice: false,
                    betterOption: true,
                    hasKids: true,
                    hasBabys: false,
                    personalBag: false,
                    checkedBag: true,
                    boardBag: false,
                    economyClass: false,
                    PremiumClass: true,
                    ExecutiveClass: false,
                    pageURL: "#",
                    ciaLogo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/6b/LogoGOL-Pref-FundoClaro-RGB.svg/1280px-LogoGOL-Pref-FundoClaro-RGB.svg.png',

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
                            directFlight: false,
                            personalBag: false,
                            checkedBag: true,
                            boardBag: false,
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
                                    connectionoperation: 'Latam',
                                    connectionnumber: 'AV86',
                                    connectionmodel: 'Airbus A320-100/200',
                                    connectionciaLogo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/fe/Latam-logo_-v_%28Indigo%29.svg/1600px-Latam-logo_-v_%28Indigo%29.svg.png',

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
                          {
                            // General infos
                            typeInfo: 'Volta',
                            departurenumberDate: '09/01',
                            ArrivalnumberDate: '10/01',
                            totalFlightDuration: '21h10m',
                            directFlight: true,
                            personalBag: false,
                            checkedBag: false,
                            boardBag: true,
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
                            hasConnection: false,
                            hasOneConnection: false,
                            hasMultipleConnection: false,
                            optionConnections: [
                                {
                                    changeAirplane: true,
                                    connectionoperation: 'Latam',
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
                    
                },
                {
                    //General flight Infos
                    type: 'Ida e Volta',
                    mainOperation: 'Delta Airlines',
                    generalInfos: '*1 mala por adulto. *Em todo voo você tem direito a levar uma bolsa pequena com seus pertences. **O limite de peso da bagagem pode variar em cada compania aérea, confira o limite exato no site oficial da companhia',                    
                    isRefundable: true,
                    betterPrice: false,
                    betterOption: true,
                    hasKids: true,
                    hasBabys: false,
                    personalBag: false,
                    checkedBag: true,
                    boardBag: false,
                    economyClass: true,
                    PremiumClass: false,
                    ExecutiveClass: false,
                    pageURL: "#",
                    ciaLogo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d1/Delta_logo.svg/1024px-Delta_logo.svg.png',

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
                            directFlight: false,
                            personalBag: false,
                            checkedBag: true,
                            boardBag: false,
                            economyClass: false,
                            PremiumClass: true,
                            ExecutiveClass: false,
                            operation: 'Gol',
                            number: 'AV86',
                            model: 'Airbus A320-100/200',
                            ciaLogo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d1/Delta_logo.svg/1024px-Delta_logo.svg.png',

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
                                    connectionoperation: 'Latam',
                                    connectionnumber: 'AV86',
                                    connectionmodel: 'Airbus A320-100/200',
                                    connectionciaLogo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/fe/Latam-logo_-v_%28Indigo%29.svg/1600px-Latam-logo_-v_%28Indigo%29.svg.png',

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
                          {
                            // General infos
                            typeInfo: 'Volta',
                            departurenumberDate: '09/01',
                            ArrivalnumberDate: '10/01',
                            totalFlightDuration: '21h10m',
                            directFlight: true,
                            personalBag: false,
                            checkedBag: false,
                            boardBag: true,
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
                            hasConnection: false,
                            hasOneConnection: false,
                            hasMultipleConnection: false,
                            optionConnections: [
                                {
                                    changeAirplane: true,
                                    connectionoperation: 'Latam',
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
                    
                },
                {
                    //General flight Infos
                    type: 'Ida e Volta',
                    mainOperation: 'Delta Airlines',
                    generalInfos: '*1 mala por adulto. *Em todo voo você tem direito a levar uma bolsa pequena com seus pertences. **O limite de peso da bagagem pode variar em cada compania aérea, confira o limite exato no site oficial da companhia',                    
                    personalBag: true,
                    ExecutiveClass: true,
                    pageURL: "#",
                    ciaLogo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d1/Delta_logo.svg/1024px-Delta_logo.svg.png',

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
                            directFlight: false,
                            personalBag: false,
                            checkedBag: true,
                            boardBag: false,
                            economyClass: false,
                            PremiumClass: true,
                            ExecutiveClass: false,
                            operation: 'Gol',
                            number: 'AV86',
                            model: 'Airbus A320-100/200',
                            ciaLogo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d1/Delta_logo.svg/1024px-Delta_logo.svg.png',

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
                                    connectionoperation: 'Latam',
                                    connectionnumber: 'AV86',
                                    connectionmodel: 'Airbus A320-100/200',
                                    connectionciaLogo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/fe/Latam-logo_-v_%28Indigo%29.svg/1600px-Latam-logo_-v_%28Indigo%29.svg.png',

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
                          {
                            // General infos
                            typeInfo: 'Volta',
                            departurenumberDate: '09/01',
                            ArrivalnumberDate: '10/01',
                            totalFlightDuration: '21h10m',
                            directFlight: true,
                            personalBag: false,
                            checkedBag: false,
                            boardBag: true,
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
                            hasConnection: false,
                            hasOneConnection: false,
                            hasMultipleConnection: false,
                            optionConnections: [
                                {
                                    changeAirplane: true,
                                    connectionoperation: 'Latam',
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
                    
                },
            ]
        }
    }
}
</script>
