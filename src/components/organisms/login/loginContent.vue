<template>
    <section class="LoginScreen">
            <div class="loginColumn">
                <h1>As melhores passagens<br> aéreas estão aqui...</h1>
                <h2>Administre suas reservas de passagens aéreas e receba promoções exclusivas do EmbarqueCerto</h2>
            </div>
            <div class="loginColumn form">
                <section class="subscrition">
                    <v-row no-gutters align="center" justify="center" class="w-100">
                        <h3 class="color text-center d-flex">Criar ou acessar conta!</h3>
                    </v-row>
                    <v-row no-gutters align="center" justify="center" class="my-2 ga-4">
                        <v-btn variant="outlined" icon="mdi-google"></v-btn> 
                        <v-btn variant="outlined" icon="mdi-facebook"></v-btn>                                               
                        <v-btn variant="outlined" icon="mdi-apple"></v-btn>                                               
                    </v-row>
                    <v-row no-gutters align="center" justify="center">
                        <div class="login-divider" >
                            <div class="divider"></div>
                            <p>ou</p> 
                            <div class="divider"></div>
                        </div>
                    </v-row>
                    <div class="subscriptionForm">
                        <v-row no-gutters align="center">
                            <ec_mail />
                        </v-row>
                        <v-row no-gutters align="center" justify="flex-end">
                            <v-text-field variant="outlined"
                                :append-inner-icon="show1 ? 'mdi-eye' : 'mdi-eye-off'"
                                :type="show1 ? 'text' : 'password'"
                                label="Senha"
                                name="actualPass"
                                @click:append-inner="show1 = !show1"
                            ></v-text-field>
                        </v-row>
                        <v-row no-gutters justify="end">
                            <v-btn size="small" href="#/forgotPassword" variant="tonal" elevation="0" class="font-weight-bold mb-6" rounded="lg">Esqueci minha senha</v-btn>
                        </v-row>
                        <v-row no-gutters justify="space-between" class="ga-2">
                            <v-btn size="default" href="#/sign-up" variant="outlined" elevation="0" class="font-weight-bold" rounded="lg">Cadastre-se</v-btn>
                            <v-btn size="default" href="#" elevation="0" class="main-btn font-weight-bold" rounded="lg">Acessar</v-btn>
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
    name: "ec_loginContent",
    data: () => ({
      sheet: false,
      show1: false,
        password: 'Password',
    }),
}
</script>