
<template>
    <div class="itinerarie">
        <v-radio value="voo"></v-radio>
        <div class="d-flex cia align-center">
            <img v-bind:src="flightIndividualData.mandatoryAirline.iconUrl" class="ciaLogo">
            <p class="hideMobile font-weight-regular">{{ flightIndividualData.mandatoryAirline.code }}
            </p>
        </div>
        <div class="data">
            <div class="departure">
                <p class="date">{{ flightIndividualData.departureDate }}</p>
                <div class="hourArea">
                    <p class="time">{{ flightIndividualData.departureHour }}</p>
                </div>
                <p class="iata">{{ flightIndividualData.departureLocation.airportCode }}</p>
            </div>
            <div class="duration">
                <p class=" text-primary-lighter-2">{{ flightIndividualData.totalDuration }}</p>
                <img v-if="flightIndividualData.hasDirectFlight" src="../../assets/direct-Flight.svg">
                <p v-if="flightIndividualData.hasDirectFlight" class="text-primary-lighter-2">Direto</p>
                <img v-if="flightIndividualData.hasConnection" class="text-primary" src="../../assets/oneConnection-Flight.svg">
                <p v-if="flightIndividualData.hasConnection" class="text-primary-lighter-2">1 Conexão</p>
                <img v-if="flightIndividualData.hasMultipleConnection" class="text-primary"
                    src="../../assets/moConnections-Flight.svg">
                <p v-if="flightIndividualData.hasMultipleConnection" class="text-primary-lighter-2">2+ Conexões</p>
            </div>
            <div class="return">
                <p class="date">{{ flightIndividualData.arrivalDate }}</p>
                <div class="hourArea">
                    <p class="time">{{ flightIndividualData.arrivalHour }}</p>
                    <p v-if="flightIndividualData.isLayover" class="nextDay">+1</p>
                </div>
                <p class="iata">{{ flightIndividualData.arrivalLocation.airportCode }}</p>
            </div>
        </div>
        <div class="lugage">
            <div class="icon">
                <v-icon icon="mdi-bag-personal" size="small" class="disableContent" :class="{enableContent: flightIndividualData.baggageType === 'Personal'||'CarryOn'||'Checked'}"></v-icon>
                <v-icon icon="mdi-bag-carry-on" size="small" class="disableContent" :class="{enableContent: flightIndividualData.baggageType === 'CarryOn'||'Checked'}"></v-icon>
                <v-icon icon="mdi-bag-suitcase" size="small" class="disableContent" :class="{enableContent: flightIndividualData.baggageType === 'Checked'}"></v-icon>

            </div>
            <div class="description">
                <p class="observationText hideMobile" v-if="flightIndividualData.baggageType === 'Checked'">Bagagem Despachada</p>
                <p class="observationText hideMobile" v-if="flightIndividualData.baggageType === 'Personal'">Bagagem Pessoal</p>
                <p class="observationText hideMobile" v-if="flightIndividualData.baggageType === 'CarryOn'">Bagagem de Mão</p>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "ec_FlightResume",
    props: { flightIndividualData: Array },
}
</script>
