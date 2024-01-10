<template>
<div class="durationFlight">
    <p class=" text-primary-lighter-2">{{ flightDetails.totalFlightDuration }}</p>
    <img v-if="flightDetails.directFlight"  src="../../assets/direct-Flight.svg">
    <p v-if="flightDetails.directFlight" class=" text-primary-lighter-2">Direto</p>
    <img v-if="flightDetails.hasOneConnection" class="text-primary"
        src="../../assets/oneConnection-Flight.svg">
    <p v-if="flightDetails.hasOneConnection" class=" text-primary-lighter-2">1 Conexão</p>
    <img v-if="flightDetails.hasMultipleConnection" class="text-primary"
        src="../../assets/moConnections-Flight.svg">
    <p v-if="flightDetails.hasMultipleConnection" class=" text-primary-lighter-2">2+ Conexões</p>
</div>
</template>
<script>
export default{
    name :"ec_FlightDuration",
    props: { flightIndividualData: Array },
  }
</script>