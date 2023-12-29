<script setup>
import ec_bestOption from '@/components/atoms/bestOption.vue'
import ec_Bestprice from '@/components/atoms/bestPrice.vue'
import ec_Refundable from '@/components/atoms/refundable.vue'
import ec_FlightResume from '@/components/molecules/flightResume.vue'
import ec_FlightDetails from '@/components/molecules/flightDetails.vue'
</script>

<template>
    <section class="flightOptionCard rounded-lg pb-4 " v-for="(item, x) in flightOptionData" :key="x">
        <section class="foCard">
            <div class="foResumeContent">
                <div class="foHeader">
                    <div class="d-flex align-center">
                        <img v-bind:src="item.ciaLogo"
                            class="ciaLogo">
                        <p>
                        <p class="ciaSpecs hideMobile font-weight-regular pl-4">{{ item.mainOperation }}
                        </p>
                        </p>
                    </div>
                    <ec_bestOption v-if="item.betterOption" />
                    <ec_Bestprice v-if="item.betterPrice" />
                </div>
                <div class="foBody mt-2 rounded-lg">
                    <div class="foSpec">
                        <ec_FlightResume v-bind:flightIndividualData="item.flightDetail" />
                    </div>
                    <div class="foPrice justify-end">
                        <div>
                            <p class="foType  font-weight-regular fullColor">Valor Final</p>
                        </div>
                        <h3 class=" font-weight-bold justify-end">{{ item.finalPrice }}</h3>
                        <ec_Refundable class="hideMobile" v-if="item.isRefundable" />
                        <p class="ciaSpecs hideDesktop font-weight-regular pl-4">{{ item.mainOperation }}</p>
                    </div>
                </div>
            </div>

        </section>
        <v-expansion-panel elevation="0" class="rounded-lg foExpansion">
            <v-expansion-panel-title class="fodetailTrigger bg-card" v-slot="{ open }">
                <div class="foActionBar">
                    <v-btn class="rounded-xl justify-end" size="x-small" elevation="0" variant="text">Detalhes do
                        Voo</v-btn>
                </div>
            </v-expansion-panel-title>
            <v-expansion-panel-text class="px-1">
                <section class="foDetailsContent ">
                    <!-- flightDetails Departure -->
                    <ec_FlightDetails v-bind:flightIndividualData="item.flightDetail" />
                    <!-- PricenDetails -->
                    <div class="flightPriceDetailed">
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
            </v-expansion-panel-text>

        </v-expansion-panel>
        <div class="foBodyDetailsBar pt-3">
            <div class="detailsfoFlightInfo d-flex">
            <div class="EC-colorContentPrimary d-flex" v-if="item.checkedBag">
                            <v-icon icon="mdi-bag-personal" size="x-small" class="enableContent"></v-icon>
                            <v-icon icon="mdi-bag-carry-on" size="x-small" class="enableContent"></v-icon>
                            <v-icon icon="mdi-bag-suitcase" size="x-small" class="enableContent"></v-icon>
                            <p class="observationText hideMobile">Bagagem Despachada</p>
                        </div>
                        <div class="EC-colorContentPrimary d-flex" v-if="item.boardBag">
                            <v-icon icon="mdi-bag-personal" size="x-small" class="enableContent"></v-icon>
                            <v-icon icon="mdi-bag-carry-on" size="x-small" class="enableContent"></v-icon>
                            <v-icon icon="mdi-bag-suitcase-off-outline" size="x-small" class="disableContent"></v-icon>
                            <p class="observationText hideMobile">Bagagem de Mão</p>

                        </div>
                        <div class="EC-colorContentPrimary d-flex" v-if="item.personalBag">
                            <v-icon icon="mdi-bag-personal" class="enableContent" size="x-small"></v-icon>
                            <v-icon icon="mdi-bag-carry-on-off" class="disableContent" size="x-small"></v-icon>
                            <v-icon icon="mdi-bag-suitcase-off-outline" class="disableContent" size="x-small"></v-icon>
                            <p class="observationText hideMobile">Bagagem Pessoal</p>
                        </div>
                        <div v-if="item.economyClass" class="iconFlexEC EC-colorContentPrimary">
                            <v-icon icon="mdi-seat-recline-normal" class="enableContent"></v-icon>
                            <p class="observationText">Econômica</p>
                        </div>
                        <div v-if="item.PremiumClass" class="iconFlexEC EC-colorContentPrimary">
                            <v-icon icon="mdi-seat-recline-extra" class="enableContent"></v-icon>
                            <p class="observationText">Premium Economy</p>
                        </div>
                        <div v-if="item.ExecutiveClass" class="iconFlexEC EC-colorContentPrimary">
                            <v-icon icon="mdi-seat-flat-angled" class="enableContent"></v-icon>
                            <p class="observationText">Executiva</p>
              </div>
              </div>
            <div class="detailsfoFlightInfo d-flex">
                <div class="flex-row justify-end">
                    <v-btn class="rounded-xl main-btn font-weight-bold" elevation="0" v-bind:href="item.pageURL"
                    prepend-icon="mdi-cart-outline">Comprar</v-btn>
                </div>
            </div>
        </div>
        <div v-if="item.isRefundable" class=" hideDesktop pt-4 justify-end d-flex px-4">
            <ec_Refundable />
        </div>

    </section>
</template>

<script>
export default {
    name: "flightOptionComponent",
    props: { flightOptionData: Array },

}
</script>


