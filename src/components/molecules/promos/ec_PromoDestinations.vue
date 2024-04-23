<template>
    <div class="flightPromo destinations">
                          
                <Splide :options="{ rewind: true, perPage: 3, gap: '1rem', perMove: 1, breakpoints: {
    1200: { perPage: 3, gap: '1rem' },
    800 : { perPage: 2, gap: '1rem' },
    500 : { perPage: 1, gap: '1rem' },
  }}" aria-label="My Favorite Images">
                    <SplideSlide v-for="(item, x) in destinationPromo" :key="x"  >
                        <div :style="{ backgroundImage: 'url(' + item.destinationPic + ')' }" class="cardContent">
                            <!-- <SplideSlide> -->
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
                            <!-- </SplideSlide> -->
                            </div>
                    </SplideSlide>
                </Splide>

                
    </div>
</template>
<script>
import '@/components/molecules/promos/scss/promoCards.scss'
import { Splide, SplideSlide } from '@splidejs/vue-splide';
import '@splidejs/vue-splide/css';

export default {
    name: 'ec_PromoDestinations',
    props: { destinationPromo: Array },
    components: {
    Splide,
    SplideSlide,
  },

}

</script>


