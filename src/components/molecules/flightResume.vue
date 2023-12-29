
<template>
<div class="foSpecwTitle" v-for="(flightDetails,x) in flightIndividualData" key="x">
          <h4 class="d-none d-md-flex">{{ flightDetails.typeInfo }}</h4>
          <div class="foResume foDeparture">
              <div class="foDepaturefTime foTimenFlight">
                  <p class="foDate">{{ flightDetails.departurenumberDate }}</p>
                  <div class="foHour">
                      <p class="foTime">{{ flightDetails.departureTime }}</p>
                  </div>
                  <p class="foIATA">{{ flightDetails.departureIATA }}</p>
              </div>
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
              <div class="foArrivalTime foTimenFlight">
                  <p class="foDate">{{ flightDetails.arrivalnumberDate }}</p>
                  <div class="foHour">
                      <p class="foTime">{{ flightDetails.arrivalTime }}</p>
                      <p v-if="flightDetails.overNight" class="nextDay">+1</p>
                  </div>
                  <p class="foIATA">{{ flightDetails.arrivalIATA }}</p>
              </div>
          </div>
      </div>
</template>

<script>
  export default{
    name :"ec_FlightResume",
    props: { flightIndividualData: Array },
  }
</script>
