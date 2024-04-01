<script setup>
import ec_bestOption from '@/components/atoms/bestOption.vue'
import ec_Bestprice from '@/components/atoms/bestPrice.vue'
import ec_Refundable from '@/components/atoms/refundable.vue'
import ec_FlightResume from '@/components/molecules/flightResume.vue'
import ec_flightOptions from '@/components/organisms/flightResults/flightOptions.vue'

import ec_FlightDetails from '@/components/molecules/flightDetails.vue'
import ec_FlightRequirements from '@/components/molecules/flightRequirements.vue'
</script>
<template>
    <!-- Array da estrutura completa -->
    <section class="recommendationCard rounded-lg pb-4 " v-for="(item, x) in recommendations" :key="x">
        <section class="recommendations">
            <div class="optionsContent">
                <ec_flightOptions v-bind:flightOptionsData="item.itineraries"></ec_flightOptions>
            </div>
                <div class="flightPriceDetailed" v-if="!confirmation">
                    <div class="priceTable rounded-lg mt-4 mb-2">
                        <p class="text-body px-2 pt-2 pb-0 font-weight-bold EC-colorContentSecondary">Detalhamento da
                            tarifa:
                        </p>
                        <v-table class="px-2 pt-0 pb-2" density="compact">
                            <tbody>
                                <tr>
                                    <td>Adultos</td>
                                    <td class="priceTd">R$ {{ item.totalAdultFare }}</td>
                                </tr>
                                <tr>
                                    <td v-if="item.hasKids">Crianças</td>
                                    <td v-if="item.hasKids" class="priceTd">R$ {{ item.totalChildFare }}</td>
                                </tr>
                                <tr>
                                    <td v-if="item.hasBabys">Bebês</td>
                                    <td v-if="item.hasBabys" class="priceTd">R$ {{ item.totalInfantFare }}</td>
                                </tr>
                                <tr>
                                    <td>Taxa de Serviço:</td>
                                    <td class="priceTd">R$ {{ item.totalServiceCharge }}</td>
                                </tr>
                                <tr>
                                    <td>Taxa de Embarque:</td>
                                    <td class="priceTd">R$ {{ item.totalBoardingCharge }}</td>
                                </tr>
                            </tbody>
                        </v-table>
                        <div class="priceVdetail pa-2" v-if="item.isRefundable">
                            <div class="d-flex py-1 justify-end" >
                                <div 
                                    class="d-flex align-center flex-row featureDescription errorType">
                                    <v-icon icon="mdi-alert-outline" size="x-small"></v-icon>
                                    <p class="">Tarifa não reembolsável</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <ec_FlightRequirements />
                   <p class=" EC-colorContentSecondary">{{ item.generalInfos }} </p>
                   
                </div> 

        </section>
        <div class="foBodyDetailsBar pt-3" v-if="!confirmation">
            <div class="foPrice justify-end pl-4">
                <div>
                    <p class="foType  font-weight-regular fullColor">Valor Final</p>
                </div>
                <h3 class=" font-weight-bold justify-end">R$  {{ item.totalAmount }}</h3>
            </div>
        
         
            <div v-if="actionSection" class="detailsfoFlightInfo d-flex">
                <div class="flex-row justify-end">
                    <v-btn class="rounded-xl main-btn font-weight-bold" elevation="0" v-bind:href="item.pageURL"
                        prepend-icon="mdi-cart-outline">Comprar</v-btn>
                </div>
            </div>
        </div>
       

    </section>
</template>

<script>
export default {
    name: "flightRecomendations",
    props: { recommendations: Array, actionSection: Boolean, confirmation: Boolean },
}
</script>


