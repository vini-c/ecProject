<template>
    <div v-for="connections in flightOptionData">
        <div class="flightInfoSection">
            <div class="foFlightInfo connectingFInfo d-flex">
                <div class="foFinfoVisual">
                    <div class="foFinfoVisualLine"></div>
                    <div class="foFinfoVisualRoundedDashed"></div>
                    <div class="foFinfoVisualLine"></div>
                </div>
                <div class="foFlightInfo foFlightInfoContent">
                    <div v-if="connections.changeAirplane" class="foCIAdetails ciaChangedConnection rounded-lg pa-3 mb-4 mt-2">
                        <div class="d-flex ciaLogonInfos">
                            <img v-bind:src="connections.connectionciaLogo"
                                class="ciaLogo">
                            <p class=" font-weight-regular EC-colorContentPrimary">Operado por
                                <b>{{ connections.connectionoperation }}</b>
                            </p>
                        </div>
                        <div class="d-flex airplaneInfos">
                            <p class=" font-weight-regular  EC-colorContentPrimary">Vôo
                                número:<b>{{ connections.connectionnumber }}</b></p>
                            <v-divider vertical></v-divider>
                            <p class=" font-weight-regular  EC-colorContentPrimary">{{ connections.connectionmodel
                            }}</p>
                        </div>
                    </div>
                    <p class="text-body font-weight-bold EC-colorContentPrimary">{{ connections.connectionDate }}
                        às {{ connections.connectionTime }}
                    </p>
                    <div class="foFlightInfoIATA d-flex">
                        <p class="location text-body font-weight-regular EC-colorContentPrimary">
                            {{ connections.connectionLocation }}</p>
                        <p class="IATA text-body font-weight-bold EC-colorContentPrimary">
                            {{ connections.connectionIATA }}</p>
                    </div>
                    <p class="airport  font-weight-regular EC-colorContentPrimary">
                        {{ connections.connectionAirport }}</p>
                </div>
            </div>
        </div>
      <div class="flightInfoSection">
            <div class="foFlightInfo foFlightInfoResume d-flex">
                <div class="foFinfoVisual">
                    <div class="foFinfoVisualLine"></div>
                </div>
                <div class="foFlightInfo foFlightInfoContent py-3">
                    <p class="observationText font-weight-regular EC-colorContentSecondary">Conexão: <b
                            class="EC-colorContentSecondary">{{ connections.connectionDelay }}</b></p>
                    <p class="observationText font-weight-regular EC-colorContentSecondary">Tempo de voo: <b
                            class="EC-colorContentSecondary">{{ connections.connectionFlightDuration }}</b></p>
                </div>
            </div>
        </div>
    </div>
</template>
    
<script>
export default {
    name: "flightInfoConnection",
    props: { flightOptionData: Array }
}
</script>
    