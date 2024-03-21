<script setup>
import flightInfoConnection from '@/components/flightInfos/flightInfoConnection.vue'
import flightInfoDeparture from '@/components/flightInfos/flightInfoDeparture.vue'
import flightInfoArrival from  '@/components/flightInfos/flightInfoArrival.vue'
import ec_luggageType from  '../atoms/lugaggeType.vue'
import ec_classType from  '../atoms/classType.vue'


</script>
<template>
  <div v-for="(item, x) in flightData" key="x"> 
    <div class="flightInfoSection">
      <div class="foFlightInfo  d-flex" :class="{connectingFInfo: item.isConnection}">
            <div class="foFinfoVisual">
                <div class="foFinfoVisualLine"  v-if="item.isConnection"></div>
                <div :class="item.isConnection ? 'foFinfoVisualRoundedDashed' : 'foFinfoVisualRounded'">
                </div>
                <div class="foFinfoVisualLine"></div>
            </div>
            <div class="foFlightInfo foFlightInfoContent">
                <div v-if="item.isConnection === true" class="foCIAdetails ciaChangedConnection rounded-lg pa-3 mb-4 mt-2">
                    <div class="d-flex ciaLogonInfos">
                        <img v-bind:src="item.mandatoryAirline.iconUrl" class="ciaLogo">
                        <p class=" font-weight-regular EC-colorContentPrimary">Operado por <b>{{ item.mandatoryAirline.code }}</b></p>
                    </div>
                    <div class="d-flex airplaneInfos">
                        <p class=" font-weight-regular  EC-colorContentPrimary">Vôo número:<b>{{ item.flightNumber }}</b></p>
                        <v-divider vertical></v-divider>
                        <p class=" font-weight-regular  EC-colorContentPrimary">Aeronave: {{ item.aircraftType}}</p>
                    </div>
                </div>
                <p class="text-body font-weight-bold EC-colorContentPrimary">{{ item.departure.date }} às {{ item.departure.hour }}</p>
                <div class="foFlightInfoIATA d-flex">
                    <p class="location text-body font-weight-regular EC-colorContentPrimary">{{ item.departure.airportCity }}</p>
                    <p class="IATA text-body font-weight-bold EC-colorContentPrimary">{{ item.departure.airportCode }}</p>
                </div>
                <p class="airport  font-weight-regular EC-colorContentPrimary">{{ item.departure.airportName }}</p>
            </div>
        </div>
      </div>
      <div class="flightInfoSection">
            <!-- dados de conexão -->
            <div class="foFlightInfo foFlightInfoResume d-flex">
                <div class="foFinfoVisual">
                    <div class="foFinfoVisualLine"></div>
                </div>
                <div class="foFlightInfo foFlightInfoContent py-3">
                    <p class="observationText font-weight-regular EC-colorContentSecondary" v-if="item.isConnection">Conexão: <b class="EC-colorContentSecondary">{{ item.duration }}</b></p>
                    <p class="observationText font-weight-regular EC-colorContentSecondary">Tempo de voo: <b class="EC-colorContentSecondary">{{ item.duration }}</b></p>
                </div>
            </div>
              <!-- pouso da conexão -->
            <div v-if="item.hasConnection" class="foFlightInfo connectingFInfo d-flex">
            <div class="foFinfoVisual">
                <div class="foFinfoVisualLine"></div>
                <div class="foFinfoVisualRoundedDashed"></div>
                <div class="foFinfoVisualLine"></div>
            </div>
            <div class="foFlightInfo mb-3 foFlightInfoContent">
                <p class="text-body font-weight-bold EC-colorContentPrimary">{{ item.arrival.date }} às {{ item.arrival.hour }}</p>
                <div class="foFlightInfoIATA d-flex">
                    <p class="location text-body font-weight-regular EC-colorContentPrimary">{{ item.arrival.airportCity }}</p>
                    <p class="IATA text-body font-weight-bold EC-colorContentPrimary">{{ item.arrival.airportCode }}</p>
                </div>
                <p class="airport  font-weight-regular EC-colorContentPrimary">{{ item.arrival.airportName }}</p>
            </div>
        </div>
      </div>
      <!-- retorno -->
      <div class="flightInfoSection">
        <div class="foFlightInfo arrivalFInfo d-flex" v-if="!item.hasConnection">
            <div class="foFinfoVisual">
                <div class="foFinfoVisualLine"></div>
                <v-icon icon="mdi-map-marker-outline" class="arrivalIcon"></v-icon>
            </div>
            <div class="foFlightInfo foFlightInfoContent pt-2">
                <p class="text-body font-weight-bold EC-colorContentPrimary">{{ item.arrival.date }} às
                    {{ item.arrival.hour }}</p>
                <div class="foFlightInfoIATA d-flex">
                    <p class="location text-body font-weight-regular EC-colorContentPrimary">
                        {{ item.arrival.airportCity  }}</p>
                    <p class="IATA text-body font-weight-bold EC-colorContentPrimary">{{ item.arrival.airportCode  }}
                    </p>
                </div>
                <p class="airport  font-weight-regular EC-colorContentPrimary">
                    {{ item.arrival.airportName }}</p>
            </div>
        </div>
    </div>
  </div>

       

</template>

<script>
export default {
  name: "flightDetails",
  props: { flightData:Array },
}
</script>
 