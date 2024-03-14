<script setup>
import ec_bestOption from '@/components/atoms/bestOption.vue'
import ec_Bestprice from '@/components/atoms/bestPrice.vue'
import ec_Refundable from '@/components/atoms/refundable.vue'
import ec_FlightResume from '@/components/molecules/flightResume.vue'
import ec_FlightDetails from '@/components/molecules/flightDetails.vue'
import ec_FlightRequirements from '@/components/molecules/flightRequirements.vue'
</script>
<template>
    <!-- Array da estrutura completa -->
    <section class="recommendationCard rounded-lg pb-4 " v-for="(item, x) in flightOptionData" :key="x">
        <section class="recommendations">
                <div class="options">
                    <!-- para arrays Headers replicáveis sobre ida ou volta -->
                    <div class="header" v-if="confirmation === false">
                            <div class="orientation d-flex">
                                <v-row no-gutters class="ga-2" align="center">
                                    <v-icon icon="mdi-airplane" size="x-small"></v-icon>
                                    <div class="content">
                                        <h4>Ida</h4>
                                        <p>Sáb, 16 de Mar, 2025</p>
                                    </div>
                                </v-row>
                            </div>
                            <div class="location">
                                <div class="iata" :class="{ active: item.isDeparture }">
                                    <h4>GRU</h4>
                                    <p>São Paulo</p>
                                </div>
                            </div>
                            <div class="location">
                                <div class="iata" :class="{ active: item.isReturn }">
                                    <h4>GRU</h4>
                                    <p>São Paulo</p>
                                </div>
                            </div>
                            
                                <!-- <div class="d-flex align-center">
                                <img v-bind:src="item.ciaLogo"
                                    class="ciaLogo">
                                <p class="ciaSpecs hideMobile font-weight-regular pl-4">{{ item.mainOperation }}
                                </p>
                            </div>
                            
                            <ec_bestOption v-if="item.betterOption" />
                            <ec_Bestprice v-if="item.betterPrice" /> -->
                    </div>
                    <div class="header confirmation" v-if="confirmation">
                        <v-row no-gutters align="center" class="ga-4">
                            <div class="d-flex align-center">
                                <img v-bind:src="item.ciaLogo" class="ciaLogo">
                            </div>
                            <div class="confirmationIllustration">
                                <div class="divider"></div>
                                <v-img class="planeConfirmationLogo" width="36" :aspect-ratio="1"
                                    src="@/assets/ec_plane.svg"></v-img>
                            </div>
                            <p class="ciaSpecs hideMobile font-weight-regular pl-4">Operado por {{ item.mainOperation }}</p>
                        </v-row>
                    </div>
                    <!-- Arrays de opções de voos -->
                    <div class="body mt-2 rounded-lg">
                        <v-expansion-panel elevation="0" class="rounded-lg foExpansion">
                            <div class="bg-card itineraryOption">
                                <ec_FlightResume v-bind:flightIndividualData="item.flightDetail" />
                                <v-expansion-panel-title class="detailTrigger bg-card" v-slot="{ open }">
                                </v-expansion-panel-title>
                            </div>
                            <v-expansion-panel-text class="px-1">
                                <section class="details">
                                    <!-- flightDetails Departure -->
                                    <ec_FlightDetails v-bind:flightIndividualData="item.flightDetail" />
                                    <!-- PricenDetails -->
                                </section>
                            </v-expansion-panel-text>

                        </v-expansion-panel>



                    </div>
                </div>
                <!-- detalhes da recomendacao -->
                <div class="flightPriceDetailed">
                    <ec_FlightRequirements />
                    <p class=" EC-colorContentSecondary">{{ item.generalInfos }} </p>
                    <div class="priceTable rounded-lg mt-4">
                        <p class="text-body px-2 pt-2 pb-0 font-weight-bold EC-colorContentSecondary">Detalhamento da
                            tarifa:
                        </p>
                        <v-table class="px-2 pt-0 " density="compact">
                            <tbody>
                                <tr>
                                    <td>{{ item.Adults }}</td>
                                    <td class="priceTd">{{ item.AdultsPrice }}</td>
                                </tr>
                                <tr>
                                    <td v-if="item.hasKids">{{ item.Kids }}</td>
                                    <td v-if="item.hasKids" class="priceTd">{{ item.KidsPrice }}</td>
                                </tr>
                                <tr>
                                    <td v-if="item.hasBabys">{{ item.Baby }}</td>
                                    <td v-if="item.hasBabys" class="priceTd">{{ item.BabysPrice }}</td>
                                </tr>
                                <tr>
                                    <td>Taxa de Serviço:</td>
                                    <td class="priceTd">{{ item.serviceTax }}</td>
                                </tr>
                                <tr>
                                    <td>Taxa de Embarque:</td>
                                    <td class="priceTd">{{ item.flightTax }}</td>
                                </tr>
                            </tbody>
                        </v-table>
                        <div class="priceVdetail pa-2">
                            <div class="finalPrice">
                                <div>
                                    <p class="text-body font-weight-bold EC-colorContentSecondary">Total:</p>
                                </div>
                                <div class="pricewTag ">
                                    <p class="text-body font-weight-bold EC-colorContentPrimary">{{ item.finalPrice }}
                                    </p>
                                </div>
                            </div>
                            <div class="d-flex py-1 justify-end">
                                <div v-if="item.isRefundable"
                                    class="d-flex align-center flex-row featureDescription errorType">
                                    <v-icon icon="mdi-alert-outline" size="x-small"></v-icon>
                                    <p class="">Tarifa não reembolsável</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

        </section>
        <div class="foBodyDetailsBar pt-3">
            <div class="foPrice justify-end pl-4">
                <div>
                    <p class="foType  font-weight-regular fullColor">Valor Final</p>
                </div>
                <h3 class=" font-weight-bold justify-end">{{ item.finalPrice }}</h3>
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
    name: "flightOptionComponent",
    props: { flightOptionData: Array, actionSection: Boolean, confirmation: Boolean },
}
</script>


