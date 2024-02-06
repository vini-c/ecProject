<template>
    <footer>
        <section class="ec_footer">
            <div class="footerContent">
                <div class="flexContent">
                    <div class="flex-itemContainer1">
                        <div class="subscription" no-gutters>
                            <v-row no-gutters align="center" class="pb-6">
                                <div class="columns oneThird">
                                    <img src="@/assets/promo_illustration.svg" class="illustrationResizer" />
                                </div>
                                <div class="columns">
                                    <h3>Receba ofertas exclusivas do EmbarqueCerto no seu email ou WhatsApp</h3>
                                    <a href="#" target="_blank">
                                        <p>Políticas de privacidade</p>
                                    </a>

                                </div>
                            </v-row>
                            <div>
                                <v-row no-gutters>
                                    <ec_email_input></ec_email_input>
                                </v-row>
                            </div>
                            <div>
                                <v-row no-gutters>
                                    <ec_phone_input></ec_phone_input>
                                </v-row>
                            </div>
                            <v-row no-gutters justify="end">
                                <v-btn class="rounded-xl main-btn font-weight-bold" elevation="0">Me inscrever</v-btn>
                            </v-row>
                        </div>
                    </div>
                    <div class="flex-itemContainer2">
                        <section class="socialNetworks">
                            <v-row no-gutters align="center" class="ga-1">
                                <h3>embarquecertooficial</h3><v-icon icon="mdi-check-decagram" size="small"
                                    color="blue"></v-icon>
                                <h3>nas redes sociais</h3>
                            </v-row>
                            <v-row no-gutters>
                                <p class="text-body">Compartilhamos informações, dicas e promoções direto nas nossas redes
                                    sociais, vale lembrar que o EmbarqueCerto possui somente uma rede social oficial em cada
                                    canal.</p>
                            </v-row>
                            <v-row no-gutters align="center" class="illustrationPlane mb-2">
                                <div class="line"></div>
                                <img src="@/assets/ec_planeSolo.svg" style="width:20px" />
                            </v-row>
                            <v-row no-gutters class="socialIcon ga-2">
                                <v-btn icon="mdi-instagram" rounded="lg" variant="tonal" size="default" href="#" />
                                <v-btn icon="mdi-facebook" rounded="lg" variant="tonal" size="default" href="#" />
                                <v-btn icon="mdi-youtube" rounded="lg" variant="tonal" size="default" href="#" /> </v-row>
                        </section>
                        <section class="legalInfo pa-2">
                            <v-row no-gutters>
                                <h4>Informações Legais</h4>
                            </v-row>
                            <v-row no-gutters>
                                <p class="text-caption">Embarque Certo LTDA. CNPJ: 123.321.0001/12 </p>
                                <p class="text-caption">EMBARQUECERTO.COM - Ministério do Turismo - Cadastur
                                    26.012747.10.0001-6 / 26.012747.10.0002-3 Copyright 1999-2024, EMBARQUE CERTO.com Ltda.
                                    Todos os direitos reservados.</p>

                                <p class="text-caption pt-3">O EMBARQUE CERTO comercializa os produtos de seus fornecedores
                                    apenas de forma direta pelo seu site (www.EMBARQUECERTO.com). Não há qualquer venda por
                                    redes sociais (Facebook, Instagram, Twitter, LinkedIn, etc.). Pós-vendas - os canais
                                    oficiais de atendimento aos clientes são: por meio do telefone 11 4003 9444 e Minhas
                                    Viagens. o embarque certo não realiza qualquer tipo de abordagem nas redes sociais ou
                                    sites de relacionamento, tampouco disponibiliza e-mails de contato com domínios
                                    distintos de @embarquecerto.com. Endereços de e-mails com domínios: @hotmail.com
                                    @gmail.com @outlook.com ou qualquer outro neste sentido não tem qualquer relação com a
                                    embarquecerto. Mais esclarecimentos em www.embarquecerto.com.</p>
                                <p class="text-caption">Avenida Alphaville 1345 - São Paulo - SP</p>

                            </v-row>
                        </section>
                    </div>

                </div>

            </div>
    </section>
</footer></template>

<script setup>
import '@/components/organisms/nav/scss/footer.scss'
import ec_email_input from '@/components/atoms/dataInputs/ec_Email_Input.vue'
import ec_phone_input from '@/components/atoms/dataInputs/ec_Phone_Input.vue'
</script>

<script>
export default {
    name: 'ec_confirmationContent',
}
</script>