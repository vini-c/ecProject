<template>
    <v-layout>
      <eC_mainNavBar />
      <!-- test-->
      <div class="bg-body flightResults bookings">
        <v-main>
          <v-container class="">
            <div class="searchResultsContent">
                <v-row no-gutters>
                    <h2 class="primaryContent pa-3 pt-1 pageTitle">Minhas reservas</h2>
                    <v-expansion-panels v-model="panel" multiple elevation="0" variant="default">
                        <v-expansion-panel expand v-model="panel" elevation="0"  title="Reservas ativas">   
                            <v-expansion-panel-text>
                                <ec_flightResumeBookings v-bind:bookings="bookingsSuccesfull" />
                            </v-expansion-panel-text>
                        </v-expansion-panel>
                        <v-expansion-panel elevation="0"  title="Reservas pendentes">   
                            <v-expansion-panel-text>
                                <ec_flightResumeBookings v-bind:bookings="bookingspendent" />                  
                            </v-expansion-panel-text>
                        </v-expansion-panel>
                        <v-expansion-panel elevation="0"  title="Reservas concluídas">   
                            <v-expansion-panel-text class="concluded">
                                <ec_flightResumeBookings v-bind:bookings="bookingconcluded" />                  
                            </v-expansion-panel-text>
                        </v-expansion-panel>
                        <v-expansion-panel elevation="0"  title="Reservas canceladas">   
                            <v-expansion-panel-text class="concluded">
                                <ec_flightResumeBookings v-bind:bookings="bookingcanceled" />                  
                            </v-expansion-panel-text>
                        </v-expansion-panel>
                    </v-expansion-panels>
                </v-row>
                <ec_notFoundContent searchError mainActionName="Buscar passagens" href="#/home" title="Você ainda não tem nenhuma reserva"
                        subtitle="Busque agora pelas melhores passagens do Brasil, e administre suas reservas nessa tela."></ec_notFoundContent>
            </div>
          </v-container>
          <ec_footer />
        </v-main>

      </div>
    </v-layout>
  
  </template>
  
    <style lang="scss">
    @use '@/components/molecules/scss/flightOptions.scss';
    @use '@/components/molecules/scss/bookings.scss';

    </style>
  
  <script setup >
  import ec_flightResumeBookings from '@/components/organisms/flightResults/flightBookings.vue'
  import eC_mainNavBar from '@/components/organisms/nav/mainNavBar.vue'
  import ec_footer from '@/components/organisms/nav/footer.vue'
  import ec_notFoundContent from '@/components/molecules/ec_notFoundContent.vue'
  import ec_banner from '@/components/molecules/ec_banner.vue'
  </script>
  
  <script>
  </script>
  
  
  <script>
  
  
   export default{
    data(){
      return{
        model: null,
    panel: [1],
        "bookingsSuccesfull": 
                    [
                        {  
                                    "departureDate": "17/04",
                                    "departureDetailedDate": "Sáb 17 de Mar, 2024",
                                    "departureHour": "15:00",
                                    "airportCode": "GYN",
                                    "ArrivalairportCity": "Goiânia",
                                    "DepartureairportCity": "Brasília",
                                    "baggageType": "Personal",
                                    "totalDuration": "17h 31min",
                                    "hasDirectFlight": "true",

                                "mandatoryAirline": {
                                    "code": "Gol",
                                    "iconUrl": "https://wooba-sandbox.travellink.com.br/Upload/logomarcas/companhiaico5.gif"
                                },
                                "totalAdultFare": 704.40,
                                "totalAdultBoardingCharge": 148.66,
                                "totalAdultServiceCharge": 82.00,
                                "totalChildFare": 704.40,
                                "totalChildBoardingCharge": 148.66,
                                "totalChildServiceCharge": 82.00,
                                "totalInfantFare": 0.00,
                                "totalInfantBoardingCharge": -80.00,
                                "totalInfantServiceCharge": 82.00,
                                "totalFare": 1408.80,
                                "totalBoardingCharge": 217.32,
                                "totalServiceCharge": 246.00,
                                "totalTaxes": 463.32,
                                "totalAmount": 1872.12,
                                "baggageType": "CarryOn",
                                "isRefundable": false,
                                "generalInfos": "Em todo voo você tem direito a levar uma bolsa pequena com seus pertences O limite de peso da bagagem pode variar em cada compania aérea, confira o limite exato no site oficial da companhia",
                                "sourceType": 1,
                                "pageUrl":"#/confirmation",
                        },
                        {                               
                            "pageUrl":"#/confirmation",

                                    "departureDate": "17/04",
                                    "departureDetailedDate": "Sáb 17 de Mar, 2024",
                                    "departureHour": "15:00",
                                    "airportCode": "GYN",
                                    "ArrivalairportCity": "Goiânia",
                                    "DepartureairportCity": "Brasília",
                                    "baggageType": "Personal",
                                    "totalDuration": "17h 31min",
                                    "hasDirectFlight": "true",

                                "mandatoryAirline": {
                                    "code": "Gol",
                                    "iconUrl": "https://wooba-sandbox.travellink.com.br/Upload/logomarcas/companhiaico5.gif"
                                },
                                "totalAdultFare": 704.40,
                                "totalAdultBoardingCharge": 148.66,
                                "totalAdultServiceCharge": 82.00,
                                "totalChildFare": 704.40,
                                "totalChildBoardingCharge": 148.66,
                                "totalChildServiceCharge": 82.00,
                                "totalInfantFare": 0.00,
                                "totalInfantBoardingCharge": -80.00,
                                "totalInfantServiceCharge": 82.00,
                                "totalFare": 1408.80,
                                "totalBoardingCharge": 217.32,
                                "totalServiceCharge": 246.00,
                                "totalTaxes": 463.32,
                                "totalAmount": 1872.12,
                                "baggageType": "CarryOn",
                                "isRefundable": false,
                                "generalInfos": "Em todo voo você tem direito a levar uma bolsa pequena com seus pertences O limite de peso da bagagem pode variar em cada compania aérea, confira o limite exato no site oficial da companhia",
                                "sourceType": 1
                        },
                    ],
        "bookingspendent": 
                    [
                        {           
                                    "banner" : "true",
                                    "pageUrl":"#/confirmation",
                                    "bannerType":"error",
                                    "bannerTitle":"Erro no processamento",
                                    "bannerMessage":"Sua compra não foi aprovada, por favor confira os dados do método de pagamento",
                                    "bannerCTA":"Alterar dados de pagamento",
                                    "bannerUrl":"#/checkout",
                                    "departureDate": "17/04",
                                    "departureDetailedDate": "Sáb 17 de Mar, 2024",
                                    "departureHour": "15:00",
                                    "airportCode": "GYN",
                                    "ArrivalairportCity": "Goiânia",
                                    "DepartureairportCity": "Brasília",
                                    "baggageType": "Personal",
                                    "totalDuration": "17h 31min",
                                    "hasDirectFlight": "true",

                                "mandatoryAirline": {
                                    "code": "Gol",
                                    "iconUrl": "https://wooba-sandbox.travellink.com.br/Upload/logomarcas/companhiaico5.gif"
                                },
                                "totalAdultFare": 704.40,
                                "totalAdultBoardingCharge": 148.66,
                                "totalAdultServiceCharge": 82.00,
                                "totalChildFare": 704.40,
                                "totalChildBoardingCharge": 148.66,
                                "totalChildServiceCharge": 82.00,
                                "totalInfantFare": 0.00,
                                "totalInfantBoardingCharge": -80.00,
                                "totalInfantServiceCharge": 82.00,
                                "totalFare": 1408.80,
                                "totalBoardingCharge": 217.32,
                                "totalServiceCharge": 246.00,
                                "totalTaxes": 463.32,
                                "totalAmount": 1872.12,
                                "baggageType": "CarryOn",
                                "isRefundable": false,
                                "generalInfos": "Em todo voo você tem direito a levar uma bolsa pequena com seus pertences O limite de peso da bagagem pode variar em cada compania aérea, confira o limite exato no site oficial da companhia",
                                "sourceType": 1
                        },  
                        {           
                                    "banner" : "true",
                                    "pageUrl":"#/confirmation",
                                    "bannerType":"waiting",
                                    "bannerTitle":"Aguardando processamento",
                                    "bannerMessage":"Sua compra está sendo processada",
                                    // "bannerCTA":"Alterar dados de pagamento",
                                    // "bannerUrl":"#/checkout",
                                    "departureDate": "17/04",
                                    "departureDetailedDate": "Sáb 17 de Mar, 2024",
                                    "departureHour": "15:00",
                                    "airportCode": "GYN",
                                    "ArrivalairportCity": "Goiânia",
                                    "DepartureairportCity": "Brasília",
                                    "baggageType": "Personal",
                                    "totalDuration": "17h 31min",
                                    "hasDirectFlight": "true",

                                "mandatoryAirline": {
                                    "code": "Gol",
                                    "iconUrl": "https://wooba-sandbox.travellink.com.br/Upload/logomarcas/companhiaico5.gif"
                                },
                                "totalAdultFare": 704.40,
                                "totalAdultBoardingCharge": 148.66,
                                "totalAdultServiceCharge": 82.00,
                                "totalChildFare": 704.40,
                                "totalChildBoardingCharge": 148.66,
                                "totalChildServiceCharge": 82.00,
                                "totalInfantFare": 0.00,
                                "totalInfantBoardingCharge": -80.00,
                                "totalInfantServiceCharge": 82.00,
                                "totalFare": 1408.80,
                                "totalBoardingCharge": 217.32,
                                "totalServiceCharge": 246.00,
                                "totalTaxes": 463.32,
                                "totalAmount": 1872.12,
                                "baggageType": "CarryOn",
                                "isRefundable": false,
                                "generalInfos": "Em todo voo você tem direito a levar uma bolsa pequena com seus pertences O limite de peso da bagagem pode variar em cada compania aérea, confira o limite exato no site oficial da companhia",
                                "sourceType": 1
                        },     
                        {           
                                    "banner" : "true",
                                    "pageUrl":"#/confirmation",
                                    "bannerType":"warning",
                                    "bannerTitle":"Atualize os dados dos passageiros",
                                    "bannerMessage":"Algo deu errado na emissão dos seus bilhetes eletrônicos",
                                    "bannerCTA":"Atualizar dados",
                                    "bannerUrl":"#/checkout",
                                    "departureDate": "17/04",
                                    "departureDetailedDate": "Sáb 17 de Mar, 2024",
                                    "departureHour": "15:00",
                                    "airportCode": "GYN",
                                    "ArrivalairportCity": "Goiânia",
                                    "DepartureairportCity": "Brasília",
                                    "baggageType": "Personal",
                                    "totalDuration": "17h 31min",
                                    "hasDirectFlight": "true",

                                "mandatoryAirline": {
                                    "code": "Gol",
                                    "iconUrl": "https://wooba-sandbox.travellink.com.br/Upload/logomarcas/companhiaico5.gif"
                                },
                                "totalAdultFare": 704.40,
                                "totalAdultBoardingCharge": 148.66,
                                "totalAdultServiceCharge": 82.00,
                                "totalChildFare": 704.40,
                                "totalChildBoardingCharge": 148.66,
                                "totalChildServiceCharge": 82.00,
                                "totalInfantFare": 0.00,
                                "totalInfantBoardingCharge": -80.00,
                                "totalInfantServiceCharge": 82.00,
                                "totalFare": 1408.80,
                                "totalBoardingCharge": 217.32,
                                "totalServiceCharge": 246.00,
                                "totalTaxes": 463.32,
                                "totalAmount": 1872.12,
                                "baggageType": "CarryOn",
                                "isRefundable": false,
                                "generalInfos": "Em todo voo você tem direito a levar uma bolsa pequena com seus pertences O limite de peso da bagagem pode variar em cada compania aérea, confira o limite exato no site oficial da companhia",
                                "sourceType": 1
                        },            
                    ],
        "bookingcanceled": [
                    {  
                        "pageUrl":"#/confirmation",
                               "canceled": "true",
                                "departureDate": "17/04",
                                "departureDetailedDate": "Sáb 17 de Mar, 2024",
                                "departureHour": "15:00",
                                "airportCode": "GYN",
                                "ArrivalairportCity": "Goiânia",
                                "DepartureairportCity": "Brasília",
                                "baggageType": "Personal",
                                "totalDuration": "17h 31min",
                                "hasDirectFlight": "true",

                            "mandatoryAirline": {
                                "code": "Gol",
                                "iconUrl": "https://wooba-sandbox.travellink.com.br/Upload/logomarcas/companhiaico5.gif"
                            },
                            "totalAdultFare": 704.40,
                            "totalAdultBoardingCharge": 148.66,
                            "totalAdultServiceCharge": 82.00,
                            "totalChildFare": 704.40,
                            "totalChildBoardingCharge": 148.66,
                            "totalChildServiceCharge": 82.00,
                            "totalInfantFare": 0.00,
                            "totalInfantBoardingCharge": -80.00,
                            "totalInfantServiceCharge": 82.00,
                            "totalFare": 1408.80,
                            "totalBoardingCharge": 217.32,
                            "totalServiceCharge": 246.00,
                            "totalTaxes": 463.32,
                            "totalAmount": 1872.12,
                            "baggageType": "CarryOn",
                            "isRefundable": false,
                            "generalInfos": "Em todo voo você tem direito a levar uma bolsa pequena com seus pertences O limite de peso da bagagem pode variar em cada compania aérea, confira o limite exato no site oficial da companhia",
                            "sourceType": 1
                    },   

                    ],
                    "bookingconcluded": [
                    {  
                        "pageUrl":"#/confirmation",
                                "departureDate": "17/04",
                                "departureDetailedDate": "Sáb 17 de Mar, 2024",
                                "departureHour": "15:00",
                                "airportCode": "GYN",
                                "ArrivalairportCity": "Goiânia",
                                "DepartureairportCity": "Brasília",
                                "baggageType": "Personal",
                                "totalDuration": "17h 31min",
                                "hasDirectFlight": "true",

                            "mandatoryAirline": {
                                "code": "Gol",
                                "iconUrl": "https://wooba-sandbox.travellink.com.br/Upload/logomarcas/companhiaico5.gif"
                            },
                            "totalAdultFare": 704.40,
                            "totalAdultBoardingCharge": 148.66,
                            "totalAdultServiceCharge": 82.00,
                            "totalChildFare": 704.40,
                            "totalChildBoardingCharge": 148.66,
                            "totalChildServiceCharge": 82.00,
                            "totalInfantFare": 0.00,
                            "totalInfantBoardingCharge": -80.00,
                            "totalInfantServiceCharge": 82.00,
                            "totalFare": 1408.80,
                            "totalBoardingCharge": 217.32,
                            "totalServiceCharge": 246.00,
                            "totalTaxes": 463.32,
                            "totalAmount": 1872.12,
                            "baggageType": "CarryOn",
                            "isRefundable": false,
                            "generalInfos": "Em todo voo você tem direito a levar uma bolsa pequena com seus pertences O limite de peso da bagagem pode variar em cada compania aérea, confira o limite exato no site oficial da companhia",
                            "sourceType": 1
                    },                
                    ]
          
        
                    
          
        }
        
      }
  }
   </script>

  