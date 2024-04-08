<template>

   <!-- test-->
   <div class="bg-body checkoutPage">
    <v-main>
      <v-container fluid class="">
        <v-row no-gutters class="pb-4"> 
          <v-btn class="rounded-xl font-weight-bold mr-3" variant="outlined" elevation="0" href="#">Voltar</v-btn>
          <h2>Reserva de passagem</h2>
        </v-row>
        <v-row no-gutters>
          <v-col cols="8">

            <ec_banner type="warning" title="Poucos assentos disponíveis"
                subtitle="Apenas 4 lugares disponíveis para o voo selecionado"></ec_banner>

            <div class="paymentData mt-4">

              <v-expansion-panels v-model="panel" multiple variant="accordion">
                <v-expansion-panel id="travelersData" expand v-model="panel" elevation="0" class="travelersData">
                  <v-expansion-panel-title>
                    <v-row no-gutters align="center">
                      <h2 class="mr-2">
                        Dados dos viajantes
                      </h2>
                      <v-icon class="successIcon " icon="mdi-check-circle-outline" size="default"></v-icon>
                      <v-icon class="errorIcon" icon="mdi-close-circle-outline" size="default"></v-icon>
                    </v-row>
                  </v-expansion-panel-title>
                  <v-expansion-panel-text>
                    <v-form v-model="isTravelersFormValid">
                      <ec_travelersInputs title="Adulto 1" :hasTitle="true" :hasClose="false" :hasButtons="false"></ec_travelersInputs>
                      <div class="divider"></div>
                      <ec_ticketContactData />
                    </v-form>
                    <v-row justify="end" no-gutters>
                      <v-btn class="rounded-xl font-weight-bold mr-3" variant="outlined" elevation="0"
                        href="#travelersData">Limpar dados</v-btn>
                      <v-btn class="rounded-xl main-btn font-weight-bold"  ref="payments" :disabled="!isTravelersFormValid" elevation="0"
                      @click="$refs.payments.$el.scrollIntoView()" >Salvar e
                        continuar</v-btn>
                    </v-row>
                  </v-expansion-panel-text>
                </v-expansion-panel>
                <v-expansion-panel  expand v-model="panel" elevation="0" class="paymentMethod">
                  <v-expansion-panel-title>
                    <v-row no-gutters align="center">
                      <h2 class="mr-2">
                        Métodos de pagamento
                      </h2>
                      <v-icon class="successIcon" icon="mdi-check-circle-outline" size="default"></v-icon>
                      <v-icon class="errorIcon" icon="mdi-close-circle-outline" size="default"></v-icon>
                    </v-row>
                  </v-expansion-panel-title>
                  <v-expansion-panel-text>
                    <h3 class="pt-4">Escolha um método de pagamento:</h3>
                    <v-chip-group class="pb-6" v-model="model" filter v-slot="{ isSelected, toggle, selectedClass }">
                      <v-chip size="x-large" variant="outlined">Pix</v-chip>
                      <v-chip size="x-large" variant="outlined">Cartão de crédito</v-chip>
                      <v-chip size="x-large" variant="outlined">Boleto</v-chip>
                      <v-chip size="x-large" variant="outlined">Transferência Bancária On-line</v-chip>
                    </v-chip-group>
                    <v-expand-transition mode="out-in">
                      <v-sheet v-if="model == 0">
                        <section class="paymentOption pix">
                          <ec_pixData></ec_pixData>
                          <div class="divider"></div>
                          <div class="checkoutTitleSection  mb-4">
                            <h4>Endereço do pagador:</h4>
                        </div>
                        <ec_adressData/>
                          <!-- <v-row justify="end" no-gutters>
                            <v-btn class="rounded-xl font-weight-bold mr-3" variant="outlined" elevation="0"
                              >Limpar dados</v-btn>
                            <v-btn class="rounded-xl main-btn font-weight-bold" elevation="0" @click="$refs.invoice.$el.scrollIntoView()">Salvar e
                              continuar</v-btn>
                          </v-row> -->
                        </section>
                      </v-sheet>
                      <v-sheet v-if="model == 1">
                        <section class="paymentOption creditCard">
                          <ec_creditData></ec_creditData>
                          <ec_cardInstalments />
                          <div class="divider"></div>
                          <div class="checkoutTitleSection  mb-4">
                            <h4>Endereço do pagador:</h4>
                        </div>
                        <ec_adressData/>
                          <!-- <v-row justify="end" no-gutters>
                            <v-btn class="rounded-xl font-weight-bold mr-3" variant="outlined" elevation="0"
                              >Limpar dados</v-btn>
                            <v-btn class="rounded-xl main-btn font-weight-bold" elevation="0"  @click="$refs.invoice.$el.scrollIntoView()">Salvar e
                              continuar</v-btn>
                          </v-row> -->
                        </section>
                      </v-sheet>
                      <v-sheet v-if="model == 2">
                        <section class="paymentOption boleto">
                          <ec_boletoData></ec_boletoData>
                          <div class="divider"></div>
                          <div class="checkoutTitleSection  mb-4">
                            <h4>Endereço do pagador:</h4>
                        </div>
                        <ec_adressData/>
                          <!-- <v-row justify="end" no-gutters>
                            <v-btn class="rounded-xl font-weight-bold mr-3" variant="outlined" elevation="0"
                              >Limpar dados</v-btn>
                            <v-btn class="rounded-xl main-btn font-weight-bold" elevation="0"  @click="$refs.invoice.$el.scrollIntoView()">Salvar e
                              continuar</v-btn>
                          </v-row> -->
                        </section>
                      </v-sheet>
                      <v-sheet v-if="model == 3">
                        <section class="paymentOption ted">
                          <ec_tedData></ec_tedData>
                          <div class="divider"></div>
                          <div class="checkoutTitleSection  mb-4">
                            <h4>Endereço do pagador:</h4>
                        </div>
                        <ec_adressData/>
                          <!-- <v-row justify="end" no-gutters>
                            <v-btn class="rounded-xl font-weight-bold mr-3" variant="outlined" elevation="0"
                              >Limpar dados</v-btn>
                            <v-btn class="rounded-xl main-btn font-weight-bold" elevation="0"  @click="$refs.invoice.$el.scrollIntoView()">Salvar e
                              continuar</v-btn>
                          </v-row> -->
                        </section>
                      </v-sheet>
                    </v-expand-transition>
                    
                  </v-expansion-panel-text>
                </v-expansion-panel>
              </v-expansion-panels>
              <v-row justify="end" align="center" class="pa-4" no-gutters>
                <v-col cols="7">
                  <v-checkbox v-model="checkbox">
                    <template v-slot:label>
                      <div>
                        Li e aceito as
                        <v-tooltip location="bottom">
                          <template v-slot:activator="{ props }">
                            <a target="_blank" href="#" v-bind="props" @click.stop>condições de compra, políticas de
                              privacidade e políticas de alterações e cancelamentos.</a>
                          </template>
                          Abrir em uma nova janela
                        </v-tooltip>.
                      </div>
                    </template>
                  </v-checkbox>
                </v-col>
                <v-col cols="5">
                  <v-row no-gutters justify="end">
                    <v-btn class="rounded-xl main-btn font-weight-bold" elevation="0" href="#/confirmation">Comprar</v-btn>
                  </v-row>
                </v-col>
              </v-row>
            </div>
          </v-col>
          <v-col cols="4">
            <div class="flightData pl-4">
              <!-- dados do voo -->
              <ec_flightOptionCheckout v-bind:flightOptionData="flightOptionData"/>              
            </div>
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
import ec_adressData from '@/components/organisms/dataOrganisms/ec_adressData.vue'
import ec_travelersInputs from '@/components/organisms/dataOrganisms/ec_travelersInputs.vue'
import ec_ticketContactData from '@/components/organisms/dataOrganisms/ec_ticketContactData.vue'
import ec_flightOptionCheckout from '@/components/organisms/checkout/flightOptionCheckout.vue'
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
  name: 'ec_checkoutDesktop',
  }
</script>

