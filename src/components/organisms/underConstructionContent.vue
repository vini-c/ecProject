<template>
    <section class="underConstructionContent">
        <div class="constructionContent">
            <div class="columnConstruction textSide">
                        <img src="@/assets/ecLogo_full.svg" class="logo">
                        <h1>Construindo o melhor serviço de passagens aéreas do Brasil.</h1>
                        <div class="d-flex progressIndicator">
                        <v-col cols="10" class="leftZero">
                            <v-progress-linear :model-value=progressValue rounded :height="16"></v-progress-linear>
                        </v-col>
                        <v-col cols="1">
                            <h4>{{ progressValue }}%</h4>
                        </v-col>
                        </div>
                    <div class="d-flex ga-2 socialMediasection hideMobile" >
                        <div class="d-flex title ga-2" >
                                <p>embarquecertooficial</p><v-icon icon="mdi-check-decagram" color="blue"></v-icon>
                        <p>nas redes sociais</p>
                        </div>
                        <div class="socialbtns d-flex ga-2">
                        <v-btn elevation="0" icon="mdi-instagram" size="default"></v-btn>
                        <v-btn elevation="0" icon="mdi-facebook" size="default"></v-btn>
                        <v-btn elevation="0" icon="mdi-youtube" size="default"></v-btn>
                        </div>
                    </div>
            </div>
            <div class="columnConstruction formSide">
                <section class="subscrition">
                    <v-row no-gutters align="center">
                        <v-icon icon="mdi-bell" class="bell-icon"></v-icon>
                        <h3>Receba as melhores promoções de passagens!</h3>
                    </v-row>
                    <v-row no-gutters align="center">
                        <p>Assine os canais de comunicação do Embarque Certo e receba promoções imperdíveis.</p>
                    </v-row>
                    <div class="subscriptionForm">
                        <v-row no-gutters align="center">
                            <ec_phone />
                        </v-row>
                        <v-row no-gutters align="center">
                            <ec_mail />
                        </v-row>
                        <v-row no-gutters justify="end">
                            <v-btn size="default" @click="sheet = !sheet" elevation="0" class="main-btn font-weight-bold" rounded="lg">Quero me
                                inscrever</v-btn>
                        </v-row>
                    </div>
                </section>
                <div class="d-flex ga-2 socialMediasection hideTablet" >
                        <div class="d-flex title ga-2 socialTitle" >
                            <div class="title">
                                <p>embarquecertooficial</p><v-icon icon="mdi-check-decagram" color="blue"></v-icon>
                            </div>
                        <p>nas redes sociais</p>
                        </div>
                        <div class="socialbtns d-flex ga-2">
                        <v-btn elevation="0" icon="mdi-instagram" size="default"></v-btn>
                        <v-btn elevation="0" icon="mdi-facebook" size="default"></v-btn>
                        <v-btn elevation="0" icon="mdi-youtube" size="default"></v-btn>
                        </div>
                    </div>
            </div>
        </div>
    </section>


    <v-bottom-sheet v-model="sheet" inset>
      <v-card
        class="text-center mb-4 py-4"
        
        rounded="lg"
      >
        <v-card-text >

          
          <div>
            <v-icon icon="mdi-check-circle-outline" color="green" size="40" class="mb-2"></v-icon>
            <h2>Você receberá as promoções do EmbarqueCerto em breve!</h2>
            <p>Cadastro feito com sucesso.</p>
            <v-btn class="mt-4"
            variant="tonal"
            @click="sheet = !sheet"
            rounded="lg"
          >
            fechar alerta
          </v-btn>
          </div>
        </v-card-text>
      </v-card>
    </v-bottom-sheet>
</template>


<script setup>
import ec_mail from '@/components/atoms/dataInputs/ec_Email_input.vue'
import ec_phone from '@/components/atoms/dataInputs/ec_Phone_input.vue'
</script>
  
<script>
export default {
    name: "ec_construction",
    props: { progressValue: String },
    data: () => ({
      sheet: false,
    }),
}
</script>