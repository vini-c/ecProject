<script setup>
import ec_bestOption from '@/components/atoms/bestOption.vue'
import ec_Bestprice from '@/components/atoms/bestPrice.vue'
import ec_flightRecomendations from '@/components/organisms/flightResults/flightRecomendations.vue'
import ec_priceRules from '@/components/molecules/priceRules.vue'

</script>
<template>
<!--sessão lateral para resumo de passagens selecionados no checkout-->
<section class="flightOptionCard checkoutFlightDetail rounded-lg pb-1 " v-for="(item, x) in flightOptionData" :key="x">
    <section class="foCardCheckout">
        <div class="foResumeContent">
            <div class="foHeader">
                <div class="d-flex align-center">
                    <img v-bind:src="item.mandatoryAirline.iconUrl" class="ciaLogo">
                    <p class="ciaSpecs hideMobile font-weight-regular pl-4">{{ item.mandatoryAirline.code }}
                    </p>
                </div>
            </div>
            <div class="priceTable rounded-lg">
                <p class="text-body px-2 pt-2 pb-0 font-weight-bold EC-colorContentSecondary">Detalhamento da tarifa:
                </p>
                <v-table class="px-2 pt-0 " density="compact">
                    <tbody>
                        <tr>
                            <td>Adultos</td>
                            <td class="priceTd">{{ item.totalAdultFare }}</td>
                        </tr>
                        <tr>
                            <td v-if="item.totalChildFare">Crianças</td>
                            <td v-if="item.totalChildFare" class="priceTd">{{ item.totalChildFare }}</td>
                        </tr>
                        <tr>
                            <td v-if="item.totalInfantFare">Bebês</td>
                            <td v-if="item.totalInfantFare" class="priceTd">{{ item.totalInfantFare }}</td>
                        </tr>
                        <tr>
                            <td>Taxa de Serviço:</td>
                            <td class="priceTd">{{ item.totalServiceCharge }}</td>
                        </tr>
                        <tr>
                            <td>Taxa de Embarque:</td>
                            <td class="priceTd">{{ item.totalBoardingCharge }}</td>
                        </tr>
                    </tbody>
                </v-table>
                <div class="priceVdetail pa-2">
                    <div class="finalPrice">
                        <v-row no-gutters>
                            <v-col cols="4">
                                <p class="text-body font-weight-bold EC-colorContentSecondary">Total:</p>
                            </v-col>
                            <v-col cols="8" class="pricewTag ">
                                <v-row no-gutters justify="end">
                                    <p class="text-body font-weight-bold EC-colorContentPrimary">{{ item.totalAmount }}
                                    </p>
                                </v-row>
                            </v-col>
                        </v-row>
                    </div>
                </div>
            </div>
            <div class="foBody mt-2 rounded-lg">
                <!--bloco de regras de preço-->
                <ec_priceRules exchanges="" refundable="" />
            </div>
            <div class="foBodyDetailsBar pt-3">
                <div class="detailsfoFlightInfo d-flex">
                    <div class="lugage">
                        <div class="icon mb-2 d-flex">
                            <v-row align="center" no-gutters>
                                <v-icon icon="mdi-bag-personal" size="small" class="disableContent" :class="{enableContent: item.baggageType === 'Personal'||'CarryOn'||'Checked'}"></v-icon>
                                <v-icon icon="mdi-bag-carry-on" size="small" class="disableContent" :class="{enableContent: item.baggageType === 'CarryOn'||'Checked'}"></v-icon>
                                <v-icon icon="mdi-bag-suitcase" size="small" class="disableContent" :class="{enableContent: item.baggageType === 'Checked'}"></v-icon>
                                <p class="ml-2 hideMobile" v-if="item.baggageType === 'Checked'">Bagagem Despachada</p>
                                <p class="ml-2 hideMobile" v-if="item.baggageType === 'Personal'">Bagagem Pessoal</p>
                                <p class="ml-2 hideMobile" v-if="item.baggageType === 'CarryOn'">Bagagem de Mão</p>
                            </v-row>
                        </div>
                    </div>
                </div>
            </div>
            <div class="foBody mt-2 rounded-lg checkoutNconfirmation">
                <v-expansion-panels variant="popout" multiple class="flightOptionsExpansion">
                  <ec_flightRecomendations confirmation actionSection v-bind:recommendations="flightOptionData" />
                </v-expansion-panels>            
            </div>
        </div>
    </section>
</section>

</template>

<script>
export default {
    name: "flightOptionCheckout",
    props: { flightOptionData: Array },
    data: () => ({
    model: null,
    panel: [0],}),
}
</script>

