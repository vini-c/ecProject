<template>
    <section class="LoginScreen">
            <div class="loginColumn form">
                <section class="subscrition">
                    <v-row no-gutters align="center">
                        <h3 class="color">Esqueci minha senha</h3>
                        <p>Digite o email cadastrado no Embarque Certo para realizar o processo de atualização da senha.</p>
                    </v-row>
                    <div class="subscriptionForm pt-2">
                        <v-row no-gutters align="center">
                            <ec_mail />
                        </v-row>
                        <v-row no-gutters justify="end" class="ga-2">
                            <v-btn size="default" href="#/new-password" elevation="0" class="main-btn font-weight-bold" rounded="lg">Solicitar nova senha</v-btn>
                        </v-row>
                    </div>
                </section>
            </div>
    </section>
</template>

<script setup>
import ec_mail from '@/components/atoms/dataInputs/ec_Email_input.vue'
</script>
  
<script>
export default {
    name: "ec_forgotPassword",
    data: () => ({
      sheet: false,
      show1: false,
        password: 'Password',
    }),
}
</script>