<template>
    <v-layout>
      <v-main>
    <eC_mainNavBar />
    <section class="form bg-body ">
        <v-form>
            <div class="contentResizer py-6">
                <h1 class="mb-2 px-3">Atendimento</h1>
                <p class="mb-4 px-3">Fale com a equipe EmbarqueCerto para um atendimento especializado e personalizado.</p>
                <section class="backgroundAttendance pa-4">
                    <v-row>
                        <v-col cols="12" md="3">
                            <v-text-field
                                label="Nome"
                                hide-details
                                required
                                variant="outlined"
                            ></v-text-field>
                        </v-col>
                        <v-col cols="12" md="3">
                            <v-text-field
                                label="E-mail"
                                hide-details
                                required
                                variant="outlined"
                            ></v-text-field>
                        </v-col>
                        <v-col cols="12" md="3">
                            <v-text-field
                                label="Telefone"
                                hide-details
                                required
                                variant="outlined"
                            ></v-text-field>
                        </v-col>    
                        <v-col cols="12" md="3">
                            <v-text-field
                                label="Número de Reserva"
                                hide-details
                                required
                                variant="outlined"
                            ></v-text-field>
                        </v-col>       
                    </v-row>
                    <v-row no gutters>
                        <v-col cols="12" md="12">
                            <v-select
                            label="Selecione o assunto"
                            :items="['Bagagens','Cancelamento','Dúvidas', 'Reservas','Reembolso', 'Sugestões']"
                            variant="outlined"
                            ></v-select>                        
                        </v-col>
                    </v-row>
                    <v-row no-gutters>
                        <v-col cols="12" md="12">
                            <v-textarea variant="outlined" label="Mensagem"></v-textarea>
                        </v-col>
                    </v-row>
                    <v-row no-gutters class=" ga-2"  justify="end">
                        <v-btn class="rounded-lg mobileButtons justify-end" size="default" variant="tonal" elevation="0">Enviar Mensagem </v-btn>
                    </v-row>
                </section>
            </div>
        </v-form>
    </section>
    <ec_footer/>
  </v-main>
  </v-layout>
  </template>
<script setup>
//   import '@/components/organisms/helpcenter/scss/hel.scss'
  import eC_mainNavBar from '@/components/organisms/nav/mainNavBar.vue'
  import ec_footer from '@/components/organisms/nav/footer.vue'
  import ec_helpCenter from '@/components/organisms/helpcenter/helpcenter.vue'
  </script>