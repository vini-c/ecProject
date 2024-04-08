<template>
  <div class="bg-body confirmationPage">
    <!-- Banners de feedback -->

    <section v-for="(item, x) in flightOptionData" :key="x" class="mb-3 confirmationContent">
      <ec_banner :type="item.bannerType" :title="item.bannerTitle" :subtitle="item.bannerMessage" :actionName="item.bannerCTA" :actionValue="item.bannerUrl" v-if="item.banner"/>
    </section>
      
    <!-- Conteúdo -->
      <div class="confirmationContent">
          <v-row no-gutters>
            <div class="flightData">
                <v-expansion-panels v-model="panel" variant="popout" multiple class="flightOptionsExpansion">
                  <ec_flightRecomendations confirmation v-bind:recommendations="flightOptionData" />
                  <section class="confirmationPrice" v-for="(item, x) in flightOptionData" :key="x" >
                    
                    <div class="foBody mt-2 rounded-lg">
                        <!--bloco de regras de preço-->
                        <ec_priceRules exchanges="" refundable="" />
                    </div>
                    <div class="priceTable rounded-lg">
                      <p class="text-body px-2 pt-2 pb-0 font-weight-bold EC-colorContentSecondary">Detalhamento da tarifa:</p>
                        <v-table class="px-2 pt-0 " density="compact">
                            <tbody>
                                <tr>
                                    <td>Adultos</td>
                                    <td class="priceTd">{{ item.totalAdultFare }}</td>
                                </tr>
                                <tr>
                                    <td v-if="item.totalChildFare">Crianças</td>
                                    <td v-if="item.totalChildFare" class="priceTd">{{ item.totalChildFare }}</td>
                                </tr>
                                <tr>
                                    <td v-if="item.totalInfantFare">Bebês</td>
                                    <td v-if="item.totalInfantFare" class="priceTd">{{ item.totalInfantFare }}</td>
                                </tr>
                                <tr>
                                    <td>Taxa de Serviço:</td>
                                    <td class="priceTd">{{ item.totalServiceCharge }}</td>
                                </tr>
                                <tr>
                                    <td>Taxa de Embarque:</td>
                                    <td class="priceTd">{{ item.totalBoardingCharge }}</td>
                                </tr>
                            </tbody>
                        </v-table>
                        <div class="priceVdetail pa-2">
                            <div class="finalPrice">
                                <v-row no-gutters>
                                    <v-col cols="4">
                                        <p class="text-body font-weight-bold EC-colorContentSecondary">Total:</p>
                                    </v-col>
                                    <v-col cols="8" class="pricewTag ">
                                        <v-row no-gutters justify="end">
                                            <p class="text-body font-weight-bold EC-colorContentPrimary">{{ item.totalAmount }}
                                            </p>
                                        </v-row>
                                    </v-col>
                                </v-row>
                            </div>
                        </div>
                    </div>
                  </section>
                </v-expansion-panels>
            </div>
              
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
            <v-btn class="rounded-lg mobileButtons" size="default" variant="tonal" href="#/cancelation" elevation="0">Cancelar reserva</v-btn>
            <v-btn class="rounded-lg mobileButtons justify-end" size="default" variant="tonal" elevation="0">Enviar por WhatsApp</v-btn>
            <v-btn class="rounded-lg mobileButtons justify-end" size="default" variant="tonal" elevation="0">Check-in</v-btn>
            <v-btn class="rounded-lg mobileButtons justify-end" size="default" variant="tonal" elevation="0">Minhas reservas</v-btn>
          </v-row>
      </div>
  </div>
</template>
 
 
<script setup>
import '@/components/organisms/confirmation/scss/confirmation.scss'
import ec_flightRecomendations from '@/components/organisms/flightResults/flightRecomendations.vue'
import ec_banner from '@/components/molecules/ec_banner.vue'
import ec_priceRules from '@/components/molecules/priceRules.vue'


</script>
 
<script>
export default {
  data: () => ({
    model: null,
    panel: [0,1],
  }),
  name: 'ec_confirmationContent',
  props: { flightOptionData: Array, pix: Boolean, cpf: String, value: String, cardNumber: String, creditCard: Boolean, ted: Boolean, boleto: Boolean, bank: String, cardNumber: String, instalments: String },
}
</script>
 
 