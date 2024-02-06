<template>
    <div class="flightPriceDetailed">
                        <p class=" EC-colorContentSecondary">{{ flightIndividualData.generalInfos }} </p>
                        <div class="priceTable rounded-lg mt-4">
                            <p class="text-body px-2 pt-2 pb-0 font-weight-bold EC-colorContentSecondary">Detalhamento da
                                tarifa:
                            </p>
                            <v-table class="px-2 pt-0 " density="compact">
                                <tbody>
                                    <tr>
                                        <td>{{ flightIndividualData.Adults }}</td>
                                        <td class="priceTd">{{ flightIndividualData.AdultsPrice }}</td>
                                    </tr>
                                    <tr>
                                        <td v-if="item.hasKids">{{ flightIndividualData.Kids }}</td>
                                        <td v-if="item.hasKids" class="priceTd">{{ flightIndividualData.KidsPrice }}</td>
                                    </tr>
                                    <tr>
                                        <td v-if="item.hasBabys">{{ flightOptionData.Baby }}</td>
                                        <td v-if="item.hasBabys" class="priceTd">{{ flightIndividualData.BabysPrice }}</td>
                                    </tr>
                                    <tr>
                                        <td>Taxa de Serviço:</td>
                                        <td class="priceTd">{{ flightIndividualData.serviceTax }}</td>
                                    </tr>
                                    <tr>
                                        <td>Taxa de Embarque:</td>
                                        <td class="priceTd">{{ flightIndividualData.flightTax }}</td>
                                    </tr>
                                </tbody>
                            </v-table>
                            <div class="priceVdetail pa-2">
                                <div class="finalPrice">
                                    <div>
                                        <p class="text-body font-weight-bold EC-colorContentSecondary">Total:</p>
                                    </div>
                                    <div class="pricewTag ">
                                        <p class="text-body font-weight-bold EC-colorContentPrimary">{{ flightIndividualData.finalPrice }}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
</template>

<script>
export default {
  name: "ec_flightPriceDetailed",
  props: { flightIndividualData: Array },
}
</script>
 