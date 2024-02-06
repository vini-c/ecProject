<template>
    <div class="text-center">
        <section class="flightCheckoutNav">
            <v-btn class="rounded-xl font-weight-bold mr-3" variant="tonal" icon="mdi-chevron-left" elevation="0"
                        href="#"></v-btn>
            <div class="checkoutBarContent" @click="sheet = !sheet">
                <v-row align="center" no-gutters class="pa-2">
                    <v-row no-gutters class="ga-1" align="center">
                        <v-icon class="infoColor" icon="mdi-cart-outline"></v-icon>
                        <!-- <p class="infoCaption infoColor">Total</p> -->
                        <h4>{{ flightOptionData.finalPrice }} R$ 34.412</h4>
                    </v-row>
                    <div class="fakeButton">
                        <p>Ver Detalhes</p>
                    </div>
                </v-row>
            </div>
        </section>
        <v-bottom-sheet v-model="sheet">
            <v-card>
                <v-card-text class="mobileResumeCheckout">
                    <v-row no-gutter justify="space-between" align="center" class="py-4 pl-4 pb-6">
                        <h3>Detalhes da viagem</h3>
                        <v-btn class="rounded-xl  font-weight-bold mr-4"
                            icon="mdi-close" @click="sheet = !sheet" variant="outlined" elevation="0"></v-btn>
                    </v-row>

                    <v-row no-gutters class="mobileCheckoutInfos">
                        <v-col cols="12">
                            <ec_flightOptionCheckout v-bind:flightOptionData="flightOptionData" />
                        </v-col>
                    </v-row>
                </v-card-text>
            </v-card>
        </v-bottom-sheet>
    </div>
</template>

<script setup>
import ec_flightOptionCheckout from '@/components/organisms/checkout/flightOptionCheckout.vue'
</script>
<script>
export default {
    data: () => ({
        sheet: false,
    }),
    props: { flightOptionData: Array },
    name: 'ec_checkoutMobile',
} 
</script>