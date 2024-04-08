<style lang="scss">
@use '@/components/molecules/scss/flightOptions.scss';
</style>

<script setup>
import ec_banner from '@/components/molecules/ec_banner.vue'
</script>
<template>
    <!-- Array da estrutura completa -->
    <section class="recommendationCard rounded-lg mb-2" :class="{ canceled: item.canceled === 'true' }" v-for="(item, x) in bookings" :key="x">
        <section class="recommendations">
            <div class="optionsContent">
                <ec_banner :type="item.bannerType" :title="item.bannerTitle" :subtitle="item.bannerMessage" :actionName="item.bannerCTA" :actionValue="item.bannerUrl" v-if="item.banner"/>
                <div class="bookingOption">
                        <div class="bookingContent">
                            <div class="bookingTitle">
                                <div class="heading">
                                    <p class="date">{{ item.departureDetailedDate }}</p>
                                </div>
                                <div class="location"> 
                                    <div class="location-title">
                                        <p>{{ item.DepartureairportCity }} </p>
                                        <v-icon icon="mdi-airplane"  class="plane"  size="x-small"></v-icon>
                                        <p>{{ item.ArrivalairportCity }} </p>
                                    </div>
                                    <div class="lugage d-flex">
                                        <div class="icon">
                                            <v-icon icon="mdi-bag-personal" size="small" class="disableContent" :class="{enableContent: item.baggageType === 'Personal' || item.baggageType === 'CarryOn' || item.baggageType ===  'Checked'}"></v-icon>
                                            <v-icon icon="mdi-bag-carry-on" size="small" class="disableContent" :class="{enableContent: item.baggageType === 'CarryOn' || item.baggageType === 'Checked'}"></v-icon>
                                            <v-icon icon="mdi-bag-suitcase" size="small" class="disableContent" :class="{enableContent: item.baggageType === 'Checked'}"></v-icon>
                                        </div>
                                        <div class="description">
                                            <p class="observationText " v-if="item.baggageType === 'Checked'">Bagagem Despachada</p>
                                            <p class="observationText " v-if="item.baggageType === 'Personal'">Bagagem Pessoal</p>
                                            <p class="observationText " v-if="item.baggageType === 'CarryOn'">Bagagem de Mão</p>
                                        </div>
                                    </div>
                                     <div class="d-flex cia align-center">
                                        <img v-bind:src="item.mandatoryAirline.iconUrl" class="ciaLogo">
                                        <p class="observationText">{{ item.mandatoryAirline.code }}
                                        </p>
                                    </div>
                                    
                                </div>
                               
                                
                            </div>
                            <div class="detailsfoFlightInfo d-flex h-100">
                                <div class="flex-row justify-end h-100">
                                    <v-row no-gutters class="ga-2 h-100" justify="end" align-items="end">
                                        <v-btn block class="rounded-xl font-weight-bold" variant="outlined" elevation="0" :href=item.pageUrl>
                                            Ver detalhes
                                        </v-btn>
                                        <v-btn v-if="!item.banner" block class="rounded-xl font-weight-bold" variant="outlined" elevation="0" :href=item.pageUrl>
                                            Bilhete de embarque
                                        </v-btn>
                                    </v-row>
                                </div>
                            </div>
                        </div>
                            
                        </div>

            </div>
        </section>
    </section>
</template>

<script>
export default {
    name: "flightRecomendations",
    props: { bookings: Array, actionSection: Boolean, active: Boolean },
}
</script>


