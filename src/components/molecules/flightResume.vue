
<template>
    <div class="itinerarie" v-for="(flightDetails, x) in flightIndividualData" key="x">
        <v-radio value="voo"></v-radio>
        <div class="d-flex cia align-center">
            <img v-bind:src="flightDetails.ciaLogo" class="ciaLogo">
            <p class="hideMobile font-weight-regular">{{ flightDetails.operation }}
            </p>
        </div>
        <div class="data">
            <div class="departure">
                <p class="date">{{ flightDetails.departurenumberDate }}</p>
                <div class="hourArea">
                    <p class="time">{{ flightDetails.departureTime }}</p>
                </div>
                <p class="iata">{{ flightDetails.departureIATA }}</p>
            </div>
            <div class="duration">
                <p class=" text-primary-lighter-2">{{ flightDetails.totalFlightDuration }}</p>
                <img v-if="flightDetails.directFlight" src="../../assets/direct-Flight.svg">
                <p v-if="flightDetails.directFlight" class="text-primary-lighter-2">Direto</p>
                <img v-if="flightDetails.hasOneConnection" class="text-primary" src="../../assets/oneConnection-Flight.svg">
                <p v-if="flightDetails.hasOneConnection" class="text-primary-lighter-2">1 Conexão</p>
                <img v-if="flightDetails.hasMultipleConnection" class="text-primary"
                    src="../../assets/moConnections-Flight.svg">
                <p v-if="flightDetails.hasMultipleConnection" class="text-primary-lighter-2">2+ Conexões</p>
            </div>
            <div class="return">
                <p class="date">{{ flightDetails.arrivalnumberDate }}</p>
                <div class="hourArea">
                    <p class="time">{{ flightDetails.arrivalTime }}</p>
                    <p v-if="flightDetails.overNight" class="nextDay">+1</p>
                </div>
                <p class="iata">{{ flightDetails.arrivalIATA }}</p>
            </div>
        </div>
        <div class="lugage">
            <div class="icon">
                <v-icon icon="mdi-bag-personal" size="small" class="disableContent" :class="{enableContent: flightDetails.personalBag || flightDetails.boardBag || flightDetails.checkedBag}"></v-icon>
                <v-icon icon="mdi-bag-carry-on" size="small" class="disableContent" :class="{enableContent: flightDetails.boardBag || flightDetails.checkedBag}"></v-icon>
                <v-icon icon="mdi-bag-suitcase" size="small" class="disableContent" :class="{enableContent: flightDetails.checkedBag}"></v-icon>
            </div>
            <div class="description">
                <p class="observationText hideMobile" v-if="flightDetails.checkedBag">Bagagem Despachada</p>
                <p class="observationText hideMobile" v-if="flightDetails.personalBag">Bagagem Pessoal</p>
                <p class="observationText hideMobile" v-if="flightDetails.boardBag">Bagagem de Mão</p>
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
