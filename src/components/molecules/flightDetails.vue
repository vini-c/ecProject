<script setup>
import flightInfoConnection from '@/components/flightInfos/flightInfoConnection.vue'
import flightInfoDeparture from '@/components/flightInfos/flightInfoDeparture.vue'
import flightInfoArrival from  '@/components/flightInfos/flightInfoArrival.vue'
import ec_luggageType from  '../atoms/lugaggeType.vue'
import ec_classType from  '../atoms/classType.vue'


</script>

<template>
  <div  v-for="(flightDetails,x) in flightIndividualData" key="x" class="foDetails foDepartureDetails bg-details surface-1 rounded-lg"> 
    <div>
          <v-row cols="12" justify="space-between" class="pa-4 pb-6 align-center">
            <!-- <p class="primaryText EC-colorContentPrimary font-weight-bold">{{ flightDetails.typeInfo }} </p> -->
                                            <p class="detailedText">Detalhes do
                                            Voo de {{ flightDetails.typeInfo }}</p>
            <p class="observationText font-weight-regular  EC-colorContentSecondary">Tempo total de viagem:
              <b>{{ flightDetails.totalFlightDuration }}</b>
            </p>
          </v-row>

          <!-- airplaneDetails -->
          <div class="foCIAdetails rounded-lg pa-3 mb-4">
            <div class="d-flex ciaLogonInfos">
              <img
              v-bind:src="flightDetails.ciaLogo"
                class="ciaLogo">
              <p class=" font-weight-regular EC-colorContentPrimary">Operado por
                <b>{{ flightDetails.operation }}</b>
              </p>
            </div>
            <div class="d-flex airplaneInfos">
              <p class=" font-weight-regular  EC-colorContentPrimary">Vôo
                número:<b>{{ flightDetails.number }}</b></p>
              <v-divider vertical></v-divider>
              <p class=" font-weight-regular  EC-colorContentPrimary">{{ flightDetails.model }}</p>
            </div>
          </div>

          <!-- Departure -->
          <flightInfoDeparture v-bind:departureInfoData="flightDetails" />
          <!-- Connection -->
          <flightInfoConnection v-if="flightDetails.hasConnection" v-bind:flightOptionData="flightDetails.optionConnections" />
          <!-- Arrival -->
          <flightInfoArrival v-bind:arrivalInfoData="flightDetails" />
    </div>
    <div class="pt-4">
    <v-row no-gutters>
      <div class="detailsfoFlightInfo d-flex">
        <ec_luggageType v-bind:lugaggeData="flightDetails" />
        <ec_classType v-bind:classData="flightDetails"/>
      </div>
    </v-row>
    <v-row no-gutters class="px-2 pb-3">
      <div class="detailsfoFlightInfo foTextInfos">
        <p class="observationText EC-colorContentPrimary">{{ flightDetails.inFlightExtraInfos }}</p>
      </div>
    </v-row>
    </div>
  </div>
</template>

<script>
export default {
  name: "flightDetails",
  props: { flightIndividualData: Array },
}
</script>
 