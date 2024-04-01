<template>
    <section class="LoginScreen">
        <div class="signUpBlock">
            <div class="contentBlock">
                <div class="signUpColumn">
                    <h1>Bem-vinda(o) ao Embarque Certo  </h1>
                    <h2>Administre suas reservas de passagens aéreas e receba promoções exclusivas do EmbarqueCerto</h2>
                </div>
                <div class="signUpColumn form">
                    <v-row no-gutters align="center">
                        <v-text-field variant="outlined"
                            label="Nome social"
                            name="userName"
                        ></v-text-field>
                    </v-row>
                    <v-row no-gutters align="center" justify="flex-end">                                
                        <ec_mail />
                    </v-row>
                </div>
            </div>
            <div class="passwordBlock">
                <ec_passwordRecovery signup/>
            </div>
            <v-row no-gutters justify="end" class="ga-2">
                <v-btn size="default" href="#" elevation="0" class="main-btn font-weight-bold" rounded="lg">Criar conta</v-btn>
            </v-row>
        </div>
    </section>
</template>

<script setup>
import ec_mail from '@/components/atoms/dataInputs/ec_Email_input.vue'
import ec_passwordRecovery  from '@/components/organisms/dataOrganisms/ec_passwordRecovery.vue'

</script>
  
<script>
export default {
    name: "ec_loginContent",
}
</script>