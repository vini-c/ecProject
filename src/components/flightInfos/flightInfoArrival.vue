<template>
     <v-row class="px-2 pb-4">
        <div class="foFlightInfo arrivalFInfo d-flex">
            <div class="foFinfoVisual">
                <div class="foFinfoVisualLine"></div>
                <v-icon icon="mdi-map-marker-outline" class="arrivalIcon"></v-icon>
            </div>
            <div class="foFlightInfo foFlightInfoContent pt-2">
                <p class="text-body font-weight-bold EC-colorContentPrimary">{{ arrivalInfoData.arrivalDate }} às
                    {{ arrivalInfoData.arrivalTime }}</p>
                <div class="foFlightInfoIATA d-flex">
                    <p class="location text-body font-weight-regular EC-colorContentPrimary">
                        {{ arrivalInfoData.arrivalLocation }}</p>
                    <p class="IATA text-body font-weight-bold EC-colorContentPrimary">{{arrivalInfoData.arrivalIATA }}
                    </p>
                </div>
                <p class="airport  font-weight-regular EC-colorContentPrimary">
                    {{ arrivalInfoData.arrivalAirport }}</p>
            </div>
        </div>
      </v-row>
    </template>
    
<script>
    export default{
    name :"flightInfoArrival",
    props: {arrivalInfoData:Object}
    }
</script>
    