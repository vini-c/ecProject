<script setup>
import ec_FlightResume from '@/components/molecules/flightResume.vue'
import ec_FlightDetails from '@/components/molecules/flightDetails.vue'
</script>

<template>
 <div class="body mt-2 rounded-lg"  v-for="(item, x) in flightOptionsData" key="x">
    <v-expansion-panel elevation="0" class="rounded-lg foExpansion" >
        <div class="bg-card itineraryOption">
        <div class="itinerarie">
        <v-radio :value="item.tripId"></v-radio>
        <div class="d-flex cia align-center">
            <img v-bind:src="item.mandatoryAirline.iconUrl" class="ciaLogo">
            <p class="hideMobile font-weight-regular">{{ item.mandatoryAirline.code }}
            </p>
        </div>
        <div class="data">
            <div class="departure">
                <p class="date">{{ item.departureDate }}</p>
                <div class="hourArea">
                    <p class="time">{{ item.departureHour }}</p>
                </div>
                <p class="iata">{{ item.departureLocation.airportCode }}</p>
            </div>
            <div class="duration">
                <p class=" text-primary-lighter-2">{{ item.totalDuration }}</p>
                <img v-if="item.hasDirectFlight" src="@/assets/direct-Flight.svg">
                <p v-if="item.hasDirectFlight" class="text-primary-lighter-2">Direto</p>
                <img v-if="item.hasConnection" class="text-primary" src="@/assets/oneConnection-Flight.svg">
                <p v-if="item.hasConnection" class="text-primary-lighter-2">1 Conexão</p>
                <img v-if="item.hasMultipleConnection" class="text-primary"
                    src="@/assets/moConnections-Flight.svg">
                <p v-if="item.hasMultipleConnection" class="text-primary-lighter-2">2+ Conexões</p>
            </div>
            <div class="return">
                <p class="date">{{ item.arrivalDate }}</p>
                <div class="hourArea">
                    <p class="time">{{ item.arrivalHour }}</p>
                    <p v-if="item.isLayover" class="nextDay">+1</p>
                </div>
                <p class="iata">{{ item.arrivalLocation.airportCode }}</p>
            </div>
        </div>
        <div class="lugage">
            <div class="icon">
                <v-icon icon="mdi-bag-personal" size="small" class="disableContent" :class="{enableContent: item.baggageType === 'Personal' || item.baggageType === 'CarryOn' || item.baggageType ===  'Checked'}"></v-icon>
                <v-icon icon="mdi-bag-carry-on" size="small" class="disableContent" :class="{enableContent: item.baggageType === 'CarryOn' || item.baggageType === 'Checked'}"></v-icon>
                <v-icon icon="mdi-bag-suitcase" size="small" class="disableContent" :class="{enableContent: item.baggageType === 'Checked'}"></v-icon>

            </div>
            <div class="description">
                <p class="observationText hideMobile" v-if="item.baggageType === 'Checked'">Bagagem Despachada</p>
                <p class="observationText hideMobile" v-if="item.baggageType === 'Personal'">Bagagem Pessoal</p>
                <p class="observationText hideMobile" v-if="item.baggageType === 'CarryOn'">Bagagem de Mão</p>
            </div>
        </div>
    </div>
        <v-expansion-panel-title class="detailTrigger bg-card" v-slot="{ open }">
        </v-expansion-panel-title>
        </div>
        <v-expansion-panel-text class="px-1">
            <section class="details">
                <!-- flightDetails Departure -->
                <div class="foDetails foDepartureDetails bg-details surface-1 rounded-lg" > 
                    <div>
                        <v-row cols="12" justify="space-between" class="pa-4 pb-6 align-center">
                            <p class="detailedText">Detalhes do Voo</p>
                            <p class="observationText font-weight-regular  EC-colorContentSecondary">Tempo total de viagem:<b>{{ item.totalDuration }}</b></p>
                        </v-row>
                        <ec_FlightDetails v-bind:flightData="item.segments"  v-bind:flightOptionsData="flightOptionsData"/>
                    </div>
                    <div class="pt-4">
                        <v-row no-gutters>
                            <div class="detailsfoFlightInfo d-flex">
                            <!-- <ec_luggageType v-bind:lugaggeData="flightDetails" />
                            <ec_classType v-bind:classData="flightDetails"/> -->
                            </div>
                        </v-row>
                        <v-row no-gutters class="px-2 pb-3">
                            <div class="detailsfoFlightInfo foTextInfos">
                            <!-- <p class="observationText EC-colorContentPrimary">{{ flightDetails.inFlightExtraInfos }}</p> -->
                            </div>
                        </v-row>         
                    </div>
                </div>
            </section>
        </v-expansion-panel-text>

    </v-expansion-panel>
</div>

</template>



<script>
export default {
    name: "flightItinerarie",
    props: { flightOptionsData: Array, actionSection: Boolean, confirmation: Boolean },
}
</script>
