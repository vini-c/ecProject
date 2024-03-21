<template>
  <div class="bg-body confirmationPage">
    <!-- Banners de feedback -->
      <ec_banner positive title="Reserva confirmada" subtitle="Sua passagem foi emitida" class="mt-4"></ec_banner>
      <ec_banner waiting title="Reserva em processamento" subtitle="Sua compra foi solicitada, aguarde a confirmação de emissão da passagem." class="mt-4"></ec_banner>
      <ec_banner error title="Erro no processamento" subtitle="Sua compra não foi aprovada, por favor confira os dados do método de pagamento." actionName="Alterar dados de pagamento" actionValue="#" class="mt-4"></ec_banner>
    <!-- Conteúdo -->
      <div class="confirmationContent">
          <v-row no-gutters>
            <v-expansion-panels v-model="panel" variant="popout" multiple class="flightOptionsExpansion">
              <ec_flightRecomendations confirmation v-bind:flightOptionData="flightOptionData" />
            </v-expansion-panels>
            <v-divider></v-divider>
          </v-row>
          <v-row no-gutters class="mobileResizerCol mb-2">
            <v-col>
              <v-row no-gutters class="pt-4">
                <h3 class="pl-3">Viajantes</h3>
              </v-row>
              <!--utilize essa seção para o array dos dados dos viajantes-->
              <div class="travelerInfo">
                <div class="travelersRow">
                  <div class="traveler">
                    <h4>Nome</h4>
                    <p class="text-caption">Documento</p>
                  </div>
                  <div class="ticket">
                    <p class="text-caption">Número do bilhete</p>
                    <h4>1345328594012</h4>
                  </div>
                </div>
                <v-divider class="mt-2"></v-divider>
              </div>
              <!--Fim da seção para o array dos dados dos viajantes-->
            </v-col>
            <v-divider vertical></v-divider>
            <v-col>
              <v-row no-gutters class="pt-4">
                <h3 class="pl-3 pb-2">Métodos de pagamento</h3>
              </v-row>
              <div class="paymentInfo">
                <v-row no-gutters>
                  <v-col v-if="creditCard">
                    <div class="payment">
                      <v-row no-gutters align="center" justify="space-between">
                        <h4>Cartão de crédito</h4>
                        <h5>{{ cardNumber }}</h5>
                      </v-row>
                      <p class="text-caption">{{ instalments }}</p>
                    </div>
                  </v-col>
                  <v-col v-if="boleto">
                    <div class="payment">
                      <v-row no-gutters align="center" justify="space-between">
                        <h4>Boleto</h4>
                        <h5>{{ cpf }}</h5>
                      </v-row>
                      <p class="text-caption">{{ value }}</p>
                    </div>
                  </v-col>
                  <v-col v-if="pix">
                    <div class="payment">
                      <v-row no-gutters align="center" justify="space-between">
                        <h4>Pix</h4>
                        <h5>{{ cpf }}</h5>
                      </v-row>
                      <p class="text-caption">{{ value }}</p>
                    </div>
                  </v-col>
                  <v-col v-if="ted">
                    <div class="payment">
                      <v-row no-gutters align="center" justify="space-between">
                        <h4>TED</h4>
                        <h5>{{ bank }}</h5>
                      </v-row>
                      <p class="text-caption">{{ value }}</p>
                    </div>
                  </v-col>
                </v-row>
                <v-row no-gutters class="pt-4 ga-2">
                  <v-btn class="rounded-xl justify-end" size="small" variant="outlined" elevation="0">Comprovante de
                    pagamento</v-btn>
                  <v-btn class="rounded-xl justify-end" size="small" variant="outlined" elevation="0">Nota Fiscal</v-btn>
                </v-row>
              </div>
            </v-col>
          </v-row>
            <v-divider></v-divider>
          <v-row no-gutters class="pa-4 ga-2"  justify="end">
            <v-btn class="rounded-lg mobileButtons justify-end" size="default" variant="tonal" elevation="0">Enviar por WhatsApp</v-btn>
            <v-btn class="rounded-lg mobileButtons justify-end" size="default" variant="tonal" elevation="0">Check-in</v-btn>
            <v-btn class="rounded-lg mobileButtons justify-end" size="default" variant="tonal" elevation="0">Minhas reservas</v-btn>
          </v-row>
      </div>
  </div>
</template>
 
 
<script setup>
import '@/components/organisms/confirmation/scss/confirmation.scss'
import ec_flightOptionComponent from '@/components/organisms/flightResults/flightRecomendations.vue'
import ec_banner from '@/components/molecules/ec_banner.vue'

</script>
 
<script>
export default {
  data: () => ({
    model: null,
    panel: [0],
  }),
  name: 'ec_confirmationContent',
  props: { flightOptionData: Array, pix: Boolean, cpf: String, value: String, cardNumber: String, creditCard: Boolean, ted: Boolean, boleto: Boolean, bank: String, cardNumber: String, instalments: String },
}
</script>
 
 