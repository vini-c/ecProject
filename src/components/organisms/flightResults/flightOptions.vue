<script setup>
import ec_bestOption from '@/components/atoms/bestOption.vue'
import ec_Bestprice from '@/components/atoms/bestPrice.vue'
import ec_Refundable from '@/components/atoms/refundable.vue'
import ec_flightItinerarie from '@/components/organisms/flightResults/flightItinerarie.vue'
import ec_FlightRequirements from '@/components/molecules/flightRequirements.vue'
</script>
<template>

    <div class="options" v-for="(item, x) in flightOptionsData" key="x">
        <div class="header" v-if="confirmation === false">
            <div class="orientation d-flex">
                <v-row no-gutters class="ga-2" align="center">
                    <v-icon icon="mdi-airplane" v-if="item.type === 'Outbound'"  class="outbound"  size="x-small"></v-icon>
                    <v-icon icon="mdi-airplane" v-if="item.type === 'Inbound'"  class="inbound"  size="x-small"></v-icon>
                    <div class="content">
                        <h4 v-if="item.type === 'Outbound'">Ida</h4>
                        <h4 v-if="item.type === 'Inbound'">Volta</h4>
                        <p>{{ item.departureDetailedDate }}</p>
                    </div>
                </v-row>
            </div>
            <div class="location">
                <div class="iata" :class="{ active: item.type === 'Outbound' }">
                    <h4>{{ item.departureLocation.airportCode }}</h4>
                    <p>{{ item.departureLocation.airportCity }}</p>
                </div>
            </div>
            <div class="location">
                <div class="iata" :class="{ active: item.type === 'Inbound' }">
                    <h4>{{ item.arrivalLocation.airportCode }}</h4>
                    <p>{{ item.arrivalLocation.airportCity }}</p>
                </div>
            </div>

            <!-- <div class="d-flex align-center visibleMobile">
                <img v-bind:src="item.mandatoryAirline.iconUrl" class="ciaLogo"> 
                <p class="ciaSpecs  font-weight-regular pl-4">{{ item.mandatoryAirline.code }}
                                </p>
            </div> -->
            <!-- <ec_bestOption v-if="item.betterOption" />
                            <ec_Bestprice v-if="item.betterPrice" />-->
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
                <p class="ciaSpecs hideMobile font-weight-regular pl-4">Operado por {{ item.mandatoryAirline.code }}</p>
            </v-row>
        </div>
        <!-- Arrays de opções de voos -->
        <v-radio-group>
            <ec_flightItinerarie v-bind:flightOptionsData="item.options"></ec_flightItinerarie>
        </v-radio-group>
        <v-row no-gutters class="ga-2 confirmationSection" align="center" justify="center">
            <v-btn class="rounded-xl font-weight-bold primaryColor" variant="outlined" size="small" elevation="0"
                prepend-icon="mdi-plus">Ver mais opções</v-btn>
        </v-row>
    </div>

</template>

<script>
export default {
    name: "flightOptionComponent",
    props: { flightOptionsData: Array, ciaInfos: String, actionSection: Boolean, confirmation: Boolean },
}
</script>
