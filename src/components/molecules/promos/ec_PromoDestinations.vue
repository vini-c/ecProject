<template>
    <div class="flightPromo destinations">
                <div :style="{ backgroundImage: 'url(' + item.destinationPic + ')' }"  v-for="(item, x) in destinationPromo" :key="x" class="cardContent">
                    <a :href=item.pageURL >
                            <div class="contentDetail">
                                <div v-if="item.hasDiscount" class="discountViewer"><b>{{ item.priceDiscount }}</b>
                                    mais barato</div>
                                <div class="content">
                                    <h4>{{ item.destinationCity }}</h4>
                                    <p>A partir de <b>{{ item.AdultsPrice }}</b></p>
                                    <div class="actionContent" v-if="item.isNational || item.isInternational">
                                        <v-chip v-if="item.isNational" class="national">Nacional</v-chip>
                                        <v-chip v-if="item.isInternational" class="international">Internacional</v-chip>
                                        <v-icon icon="mdi-chevron-right" class="icon"></v-icon>
                                    </div>
                                </div>
                        </div>
                    </a>
                </div>
    </div>
</template>
<script>
import '@/components/molecules/promos/scss/promoCards.scss'
export default {
    name: 'ec_PromoDestinations',
    props: { destinationPromo: Array },

}








</script>


