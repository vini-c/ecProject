<template>
    <div class="bg-body checkoutPage">
        <v-main>
            <ec_checkoutResumeMobile v-bind:flightOptionData="flightOptionData"></ec_checkoutResumeMobile>
            <v-container class="">
                <v-row no-gutters>
                    <v-col cols="12">
                        <ec_banner title="Poucos assentos disponíveis"
                            subtitle="Apenas 4 lugares disponíveis para o voo selecionado"></ec_banner>
                        <v-stepper class="mobileCheckoutContainer" elevation="0">
                            <template
                                v-slot:default="{ pixPage, paymentMethodsPage, creditCardPage, instalmentsPage, travelersData, tedPage, boletoPage, payerAdress }">
                                <v-stepper-header>
                                    <v-stepper-item complete editable title="Dados do Viajante"
                                        value="travelersData"></v-stepper-item>
                                    <v-divider></v-divider>
                                    <v-stepper-item complete editable title="Método de pagamento"
                                        value="paymentMethodsPage"></v-stepper-item>

                                    <v-divider></v-divider>

                                    <v-stepper-item editable title="Endereço" value="payerAdress"></v-stepper-item>
                                </v-stepper-header>

                                <v-stepper-window>

                                    <v-stepper-window-item value="travelersData">
                                        <v-form v-model="isTravelersFormValid">
                                            <ec_travelersData></ec_travelersData>
                                            <div class="divider"></div>
                                            <ec_ticketContactData />
                                            <ec_priceRules exchanges refundable />
                                        </v-form>
                                        <v-row justify="end" no-gutters>

                                            <v-stepper-item class="nextButtonStepper" editable value="paymentMethodsPage">
                                                <v-btn class="rounded-xl main-btn font-weight-bold"
                                                    elevation="0">Continuar</v-btn>
                                            </v-stepper-item>
                                        </v-row>
                                    </v-stepper-window-item>
                                    <v-stepper-window-item value="paymentMethodsPage">
                                        <div class="checkoutTitleSection">
                                            <h2>Escolha um método de pagamento:</h2>
                                        </div>
                                        <div class="paymentOptionMobileTrigger">
                                            <v-stepper-item class="nextButtonStepper" editable value="pixDataPage">
                                                <v-row no-gutters align="center" justify="space-between">
                                                    <v-row no-gutters align="center" class="ga-1">
                                                        <h4 class="mr-2">
                                                            Pix
                                                        </h4>
                                                        <v-icon class="successIcon" icon="mdi-check-circle-outline"
                                                            size="default"></v-icon>
                                                        <v-icon class="errorIcon" icon="mdi-close-circle-outline"
                                                            size="default"></v-icon>
                                                    </v-row>
                                                    <v-icon class="nextPage" icon="mdi-chevron-right"
                                                        size="default"></v-icon>
                                                </v-row>
                                            </v-stepper-item>
                                        </div>
                                        <div class="paymentOptionMobileTrigger">
                                            <v-stepper-item class="nextButtonStepper" editable value="CreditCardPage">
                                                <v-row no-gutters align="center" justify="space-between">
                                                    <v-row no-gutters align="center" class="ga-1">
                                                        <h4 class="mr-2">
                                                            Cartão de Crédito
                                                        </h4>
                                                        <v-icon class="successIcon" icon="mdi-check-circle-outline"
                                                            size="default"></v-icon>
                                                        <v-icon class="errorIcon" icon="mdi-close-circle-outline"
                                                            size="default"></v-icon>
                                                    </v-row>
                                                    <v-icon class="nextPage" icon="mdi-chevron-right"
                                                        size="default"></v-icon>
                                                </v-row>
                                            </v-stepper-item>
                                        </div>
                                        <div class="paymentOptionMobileTrigger">
                                            <v-stepper-item class="nextButtonStepper" editable value="boletoPage">
                                                <v-row no-gutters align="center" justify="space-between">
                                                    <v-row no-gutters align="center" class="ga-1">
                                                        <h4 class="mr-2">
                                                            Boleto
                                                        </h4>
                                                        <v-icon class="successIcon" icon="mdi-check-circle-outline"
                                                            size="default"></v-icon>
                                                        <v-icon class="errorIcon" icon="mdi-close-circle-outline"
                                                            size="default"></v-icon>
                                                    </v-row>
                                                    <v-icon class="nextPage" icon="mdi-chevron-right"
                                                        size="default"></v-icon>
                                                </v-row>
                                            </v-stepper-item>
                                        </div>
                                        <div class="paymentOptionMobileTrigger">
                                            <v-stepper-item class="nextButtonStepper" editable value="tedPage">
                                                <v-row no-gutters align="center" justify="space-between">
                                                    <v-row no-gutters align="center" class="ga-1">
                                                        <h4 class="mr-2">
                                                            Transferência Bancária (TED)
                                                        </h4>
                                                        <v-icon class="successIcon" icon="mdi-check-circle-outline"
                                                            size="default"></v-icon>
                                                        <v-icon class="errorIcon" icon="mdi-close-circle-outline"
                                                            size="default"></v-icon>
                                                    </v-row>
                                                    <v-icon class="nextPage" icon="mdi-chevron-right"
                                                        size="default"></v-icon>
                                                </v-row>
                                            </v-stepper-item>
                                        </div>
                                        <v-row justify="space-between" class="pt-4" no-gutters>
                                            <v-stepper-item class="nextButtonStepper" editable value="travelersData">
                                                <v-btn class="rounded-xl font-weight-bold" variant="outlined"
                                                    elevation="0">voltar</v-btn>
                                            </v-stepper-item>
                                        </v-row>
                                    </v-stepper-window-item>

                                    <v-stepper-window-item value="pixDataPage">
                                        <ec_pixData hasTitle></ec_pixData>
                                        <v-row justify="space-between" no-gutters>
                                            <v-stepper-item class="nextButtonStepper" editable value="paymentMethodsPage">
                                                <v-btn class="rounded-xl font-weight-bold" variant="outlined"
                                                    elevation="0">voltar</v-btn>
                                            </v-stepper-item>
                                            <v-stepper-item class="nextButtonStepper" editable value="payerAdress">
                                                <v-btn class="rounded-xl main-btn font-weight-bold"
                                                    elevation="0">Continuar</v-btn>
                                            </v-stepper-item>
                                        </v-row>
                                    </v-stepper-window-item>
                                    <v-stepper-window-item value="CreditCardPage">
                                        <ec_creditData hasTitle />
                                        <v-row justify="space-between" no-gutters>
                                            <v-stepper-item class="nextButtonStepper" editable value="paymentMethodsPage">
                                                <v-btn class="rounded-xl font-weight-bold" variant="outlined"
                                                    elevation="0">voltar</v-btn>
                                            </v-stepper-item>
                                            <v-stepper-item class="nextButtonStepper" editable value="instalmentsPage">
                                                <v-btn class="rounded-xl main-btn font-weight-bold"
                                                    elevation="0">Continuar</v-btn>
                                            </v-stepper-item>
                                        </v-row>
                                    </v-stepper-window-item>
                                    <v-stepper-window-item value="instalmentsPage">
                                        <ec_cardInstalments />
                                        <v-row justify="space-between" no-gutters>
                                            <v-stepper-item class="nextButtonStepper" editable value="CreditCardPage">
                                                <v-btn class="rounded-xl font-weight-bold" variant="outlined"
                                                    elevation="0">voltar</v-btn>
                                            </v-stepper-item>
                                            <v-stepper-item class="nextButtonStepper" editable value="payerAdress">
                                                <v-btn class="rounded-xl main-btn font-weight-bold"
                                                    elevation="0">Continuar</v-btn>
                                            </v-stepper-item>
                                        </v-row>
                                    </v-stepper-window-item>
                                    <v-stepper-window-item value="boletoPage">
                                        <ec_boletoData hasTitle />
                                        <v-row justify="space-between" no-gutters>
                                            <v-stepper-item class="nextButtonStepper" editable value="paymentMethodsPage">
                                                <v-btn class="rounded-xl font-weight-bold" variant="outlined"
                                                    elevation="0">voltar</v-btn>
                                            </v-stepper-item>
                                            <v-stepper-item class="nextButtonStepper" editable value="payerAdress">
                                                <v-btn class="rounded-xl main-btn font-weight-bold"
                                                    elevation="0">Continuar</v-btn>
                                            </v-stepper-item>
                                        </v-row>
                                    </v-stepper-window-item>
                                    <v-stepper-window-item value="tedPage">
                                        <ec_tedData hasTitle />
                                        <v-row justify="space-between" no-gutters>
                                            <v-stepper-item class="nextButtonStepper" editable value="paymentMethodsPage">
                                                <v-btn class="rounded-xl font-weight-bold" variant="outlined"
                                                    elevation="0">voltar</v-btn>
                                            </v-stepper-item>
                                            <v-stepper-item class="nextButtonStepper" editable value="payerAdress">
                                                <v-btn class="rounded-xl main-btn font-weight-bold"
                                                    elevation="0">Continuar</v-btn>
                                            </v-stepper-item>
                                        </v-row>
                                    </v-stepper-window-item>
                                    <v-stepper-window-item value="payerAdress">
                                        <!-- <ec_invoiceData /> -->
                                        <div class="checkoutTitleSection  mb-4">
                                            <h2>Endereço do pagador</h2>
                                        </div>
                                        <ec_adressData/>
                                        <div class="divider"></div>
                                        <v-row cols="12">
                                            <v-checkbox v-model="checkbox">
                                                <template v-slot:label>
                                                    <div>
                                                        Li e aceito as
                                                        <v-tooltip location="bottom">
                                                            <template v-slot:activator="{ props }">
                                                                <a target="_blank" href="#" v-bind="props"
                                                                    @click.stop>condições de compra,
                                                                    políticas de
                                                                    privacidade e políticas de alterações e
                                                                    cancelamentos.</a>
                                                            </template>
                                                            Abrir em uma nova janela
                                                        </v-tooltip>.
                                                    </div>
                                                </template>
                                            </v-checkbox>
                                        </v-row>
                                        <v-row justify="space-between" align="center" class="pa-4" no-gutters>

                                            <v-stepper-item class="nextButtonStepper" editable value="paymentMethodsPage">
                                                <v-btn class="rounded-xl font-weight-bold" variant="outlined"
                                                    elevation="0">voltar</v-btn>
                                            </v-stepper-item>

                                            <v-col cols="5">
                                                <v-row no-gutters justify="end">
                                                    <v-btn class="rounded-xl main-btn font-weight-bold" elevation="0"
                                                        href="#/confirmation">Comprar</v-btn>
                                                </v-row>
                                            </v-col>
                                        </v-row>
                                    </v-stepper-window-item>
                                </v-stepper-window>
                            </template>
                        </v-stepper>
                    </v-col>
                </v-row>
            </v-container>
        </v-main>
    </div>
</template>


<script setup>
import ec_banner from '@/components/molecules/ec_banner.vue'
import ec_creditData from '@/components/organisms/dataOrganisms/ec_creditData.vue'
import ec_cardInstalments from '@/components/organisms/dataOrganisms/ec_cardInstalments.vue'
import ec_boletoData from '@/components/organisms/dataOrganisms/ec_boletoData.vue'
import ec_pixData from '@/components/organisms/dataOrganisms/ec_pixData.vue'
import ec_tedData from '@/components/organisms/dataOrganisms/ec_tedData.vue'
// import ec_invoiceData from '@/components/organisms/dataOrganisms/ec_invoiceData.vue'
import ec_travelersData from '@/components/organisms/dataOrganisms/ec_travelersData.vue'
import ec_ticketContactData from '@/components/organisms/dataOrganisms/ec_ticketContactData.vue'
import ec_priceRules from '@/components/molecules/priceRules.vue'
import ec_checkoutResumeMobile from '@/components/organisms/checkout/ec_checkoutResumeMobile.vue'
import ec_adressData from '@/components/organisms/dataOrganisms/ec_adressData.vue'


</script>

<script>
export default {
    data: () => ({
        model: null,
        panel: [0, 1, 2],
        pix: false,
        creditCard: false,
        boleto: false,
        ted: false,
        isTravelersFormValid: false,
        checkbox: false,
    }),
    props: { flightOptionData: Array },
    name: 'ec_checkoutMobile',
} 
</script>

