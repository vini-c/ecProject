<template>
    <div class="flightPromo lastBookings">
        
    <section class="flightPromoCard rounded-lg pa-4"  v-for="(item, x) in lastFlightsData" :key="x">
        <a :href=item.pageURL>
        <div class="title">
            <h4><b>{{ item.departureCity }}</b> a <b>{{item.returnCity }}</b></h4>
        </div>
        <div class="dateInfo">
            <div class="infoSide">
            <p class="text-caption">Ida</p> <p class="text-body">{{item.departureDate }}</p>
            <p class="text-caption ml-2">Volta </p> <p class="text-body">{{item.returnDate }}</p>
            </div>
            <div class="resumeSide">
                <v-chip variant="tonal">
                {{item.tripLength}}
                </v-chip>
            </div>
        </div>
        <v-divider  class="my-3"></v-divider>
        <div class="priceNconection">
            <div class="infoSide">
                <h4><b>{{ item.AdultsPrice }}</b> por pessoa</h4>
            </div>
            <div class="resumeSide">
                <v-chip v-if="item.hasOneConnection === false && item.hasMultipleConnection === false" class="bestChip" variant="tonal">
                Direto
                </v-chip>
                <v-chip v-if="item.hasOneConnection" variant="tonal">
                Com conexão
                </v-chip>
                <v-chip v-if="item.hasMultipleConnection" variant="tonal">
                + de 1 conexão
                </v-chip>
            </div>
        </div>
        </a>
        </section>
    </div>
</template>
<script>
import '@/components/molecules/promos/scss/promoCards.scss'
export default {
    name: 'ec_promoFlights',
    props: { lastFlightsData: Array }
}
</script>