<template>
  <v-row class="px-2 pt-4">
    <div class="foFlightInfo departureFInfo d-flex">
      <div class="foFinfoVisual">
        <div class="foFinfoVisualRounded">
          <div class="foFinfoVisualDot"></div>
        </div>
        <div class="foFinfoVisualLine"></div>
      </div>
      <div class="foFlightInfo foFlightInfoContent">
        <p class="text-body font-weight-bold EC-colorContentPrimary ">{{ departureInfoData.departureDate }}
          às {{ departureInfoData.departureTime }}
        </p>
        <div class="foFlightInfoIATA d-flex">
          <p class="location text-body font-weight-regular EC-colorContentPrimary ">
            {{ departureInfoData.departureLocation }}</p>
          <p class="IATA text-body font-weight-bold EC-colorContentPrimary ">
            {{ departureInfoData.departureIATA }}</p>
        </div>
        <p class="airport  font-weight-regular EC-colorContentPrimary">
          {{ departureInfoData.departureAirport }}</p>
      </div>
    </div>
  </v-row>
  <v-row class="px-2">
    <div class="foFlightInfo foFlightInfoResume d-flex">
      <div class="foFinfoVisual">
        <div class="foFinfoVisualLine"></div>
      </div>
      <div class="foFlightInfo foFlightInfoContent py-3">
        <p class="observationText font-weight-regular EC-colorContentSecondary">Tempo de voo: <b class=""> {{departureInfoData.departureFlightDuration }} </b></p>
      </div>
    </div>
  </v-row>
</template>

<script>
export default {
  name: "flightInfoDeparture",
  props: { departureInfoData: Object },
}
</script>
