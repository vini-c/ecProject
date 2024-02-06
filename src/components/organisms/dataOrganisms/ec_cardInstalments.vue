<template>
    <section class="payByCard Installments">
        <!-- Parcelamento -->
        <!-- dados do de parcelamento -->
        <div class="checkoutTitleSection  mb-4">
            <h2>Em quantas parcelas você quer pagar?</h2>
        </div>
        <v-radio-group direction="horizontal" ripple>
            <v-radio ripple class="instalmentsOption" n value="a vista">
                <template v-slot:label>
                    <div>
                        <h4 class="title">À vista</h4>
                        <!-- <p class="detailed">1a parcela de R$ 6.198 + 1 de R$ 3.716</p> -->
                        <p class="total">Total a pagar: R$ 9.914</p>
                    </div>
                </template>
            </v-radio>
            <v-radio ripple class="instalmentsOption noFee" value="2x">
                <template v-slot:label>
                    <div>
                        <h4 class="title">2x sem juros</h4>
                        <p class="detailed">1a parcela de R$ 6.198 + 1 de R$ 3.716</p>
                        <p class="total">Total a pagar: R$ 9.914</p>
                    </div>
                </template>
            </v-radio>
        </v-radio-group>
    </section>
</template>


<script setup>
import '@/assets/scss/instalmentsCreditCard.scss'
</script>
<script>

export default {
    name: 'ec_cardInstalments',
}
</script>