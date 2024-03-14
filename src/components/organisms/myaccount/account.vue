<template>
    <div class="bg-body accountPage">
        <div class="accountSection">
            <h1>Minha conta</h1>
            <div class="accountBlocks">
                <div class="accountContent">
                    <div class="optionContent">
                        <div class="title">
                            <div class="pic">
                                <v-avatar size="64" class="avatar_border"
                                    image="https://d3njjcbhbojbot.cloudfront.net/api/utilities/v1/imageproxy/https://images.ctfassets.net/wp1lcwdav1p1/HNuAe2M59cQATyNkXb4mR/f3503ac70f716f3bb3e7b0161b4e53bd/edited_iStock-693553358__1_.png?w=1500&h=680&q=60&fit=fill&f=faces&fm=jpg&fl=progressive&auto=format%2Ccompress&dpr=1&w=1000&h="></v-avatar>
                            </div>
                            <div class="content">
                                <h3>João Silva</h3>
                                <div class="userData">
                                    <v-icon icon="mdi-email-outline" size="small"></v-icon>
                                    <p>joaosilva@gmail.com <v-badge color="" content="+2" inline></v-badge></p>
                                </div>
                                <div class="userData">
                                    <v-icon icon="mdi-cellphone-check" size="small"></v-icon>
                                    <p>11 95324 1049</p>
                                </div>
                            </div>
                        </div>
                        <div class="divisor">
                            <div class="confirmationIllustration">
                                <div class="divider"></div>
                                <v-img class="planeConfirmationLogo" width="36" :aspect-ratio="1"
                                    src="@/assets/ec_plane.svg"></v-img>
                            </div>
                        </div>
                    </div>
                    <div class="ctas mt-2">
                        <v-btn variant="outlined" elevation="0" rounded="xl" @click="myData = !myData">Editar dados</v-btn>
                    </div>
                    <v-bottom-sheet elevation="0" v-model="myData" inset>
                        <v-card>
                            <v-container fluid>
                                <v-row no-gutters>
                                    <v-col cols="10">
                                        <div class="checkoutTitleSection mb-4">
                                            <h2>Meus dados</h2>
                                        </div>
                                    </v-col>


                                    
                                    
                                    <v-col cols="2">
                                        <v-row no-gutters justify="end">
                                            <v-btn class="rounded-xl  font-weight-bold mr-4" icon="mdi-close"
                                                @click="myData = !myData" variant="outlined" elevation="0"></v-btn>
                                        </v-row>
                                    </v-col>
                                </v-row>
                                <div class="userInfoContent">
                                    <div class="shorterContent">
                                            <div class="pic">
                                                <div class="rowDesktop ga-1 mb-3" justify="center">
                                                    <v-avatar size="64" class="avatar_border"
                                                        image="https://d3njjcbhbojbot.cloudfront.net/api/utilities/v1/imageproxy/https://images.ctfassets.net/wp1lcwdav1p1/HNuAe2M59cQATyNkXb4mR/f3503ac70f716f3bb3e7b0161b4e53bd/edited_iStock-693553358__1_.png?w=1500&h=680&q=60&fit=fill&f=faces&fm=jpg&fl=progressive&auto=format%2Ccompress&dpr=1&w=1000&h=">
                                                    </v-avatar>
                                                </div>
                                            </div>
                                            <div class="rowDesktop">
                                                <v-btn variant="outlined" size="small" elevation="0" rounded="xl">Alterar
                                                    foto</v-btn>
                                            </div>
                                            <div class="rowDesktop">
                                                <v-btn variant="outlined" size="small" elevation="0" rounded="xl">Excluir
                                                    foto</v-btn>
                                            </div>
                                    </div>
                                    <div class="largerContent">
                                            <v-text-field variant="outlined" hide-details label="Nome"
                                                placeholder="Maria"></v-text-field>
                                            <v-text-field variant="outlined" hide-details label="Último Sobrenome"
                                                placeholder="Silva"></v-text-field>
                                    </div>
                                </div>
                                <div class="divider"></div>
                                <div class="rowDesktop">
                                    <div class="checkoutTitleSection mb-4">
                                        <h3>Documento</h3>
                                    </div>
                                </div>
                                <div class="rowDesktop">
                                    <v-select variant="outlined" hide-details label="País de residência"
                                        :items="['Brasil']"></v-select>

                                    <v-row no-gutters>
                                        <v-col cols="4">
                                            <v-select variant="outlined" hide-details class="mr-4" label="Documento"
                                                :items="['CPF', 'Passaporte', 'RG']"></v-select></v-col>
                                        <v-col cols="8">
                                            <ec_cpf hide-details />
                                        </v-col>
                                    </v-row>
                                    <!-- <div class="divider"></div> -->
                                </div>
                                <div class="rowDesktop">
                                    <v-text-field hide-details variant="outlined" class="" label="Data de nascimento"
                                        type="date" placeholder="00/00/0000"></v-text-field>
                                    <div class="choiceContent">
                                        <h5>Sexo:</h5>

                                        <v-radio-group inline hide-details>
                                            <v-radio class="mr-2" label="Feminino" value="Feminino"></v-radio>
                                            <v-radio label="Masculino" value="Masculino"></v-radio>

                                        </v-radio-group>
                                    </div>
                                </div>
                                <v-divider></v-divider>
                                <div class="rowDesktop">

                                    <div class="checkoutTitleSection mb-1">
                                        <h3>Contatos</h3>
                                    </div>
                                </div>
                                <div class="rowDesktop">
                                    <ec_phone />
                                    <ec_mail />
                                </div>
                                <v-row no-gutters justify="space-between">



                                    <v-dialog max-width="500">
                                                    <template v-slot:activator="{ props: activatorProps }">


                                                            <v-btn  v-bind="activatorProps" class="rounded-xl  font-weight-bold mr-4" color="red" variant="outlined" elevation="0">Excluir conta                                    </v-btn>


                                                    </template>

                                                    <template v-slot:default="{ isActive }">
                                                        <v-card class="deleteDialog pa-2" rounded="large">
                                                            <v-card-title>
                                                                <v-row no-gutters align-items="center" class="ga-2 pt-2">
                                                                    <v-icon icon="mdi-delete-outline" color="red"> </v-icon> <b>Confirmação de exclusão</b>
                                                                </v-row>
                                                            </v-card-title>
                                                            <v-divider></v-divider>
                                                            <v-card-text>
                                                                
                                                                <p>
                                                                    Você gostaria de excluir sua conta do Embarque Certo?
                                                                </p>
                                                                <p class="text-caption">
                                                                    Essa ação não poderá ser desfeita.
                                                                </p>
                                                            </v-card-text>

                                                            <v-card-actions class="mt-2">
                                                                <v-btn text="voltar a minha conta" variant="plain"
                                                                    @click="isActive.value = false"></v-btn>
                                                                    <v-spacer></v-spacer>

                                                                <v-btn text="Excluir minha conta" rounded="xl" variant="outlined"
                                                                    @click="isActive.value = false"></v-btn>
                                                            </v-card-actions>
                                                        </v-card>
                                                    </template>
                                                </v-dialog>

                                                



                                    <div>
                                    <v-btn class="rounded-xl main-btn font-weight-bold" @click="myData = !myData"
                                        elevation="0">Salvar
                                    </v-btn>
                                    </div>
                                </v-row>
                            </v-container>
                        </v-card>
                    </v-bottom-sheet>



                </div>
                <div class="accountContent">
                    <div class="optionContent">
                        <div class="title">
                            <v-icon size="large" icon="mdi-shield-check-outline"></v-icon>
                            <h3>Segurança</h3>
                        </div>
                        <div class="content">
                            <h5>Senha</h5>
                            <p>●●●●●●●●●</p>
                        </div>
                    </div>
                    <div class="ctas">
                        <v-btn variant="outlined" @click="passExchange = !passExchange" elevation="0" rounded="xl">Alterar senha</v-btn>
                        
                    </div>
                </div>

                <v-bottom-sheet elevation="0" v-model="passExchange" inset>
                    <v-card>
                        <v-container fluid>
                            <v-row no-gutters>
                                <v-col cols="10">
                                    <div class="checkoutTitleSection mb-4">
                                        <h2>Alterar senha</h2>
                                    </div>
                                </v-col>
                                <v-col cols="2">
                                    <v-row no-gutters justify="end">
                                        <v-btn class="rounded-xl  font-weight-bold mr-4" icon="mdi-close"
                                            @click="passExchange = !passExchange" variant="outlined" elevation="0"></v-btn>
                                    </v-row>
                                </v-col>
                            </v-row>
                            <ec_passwordRecovery actualPassword/>
                        </v-container>
                    </v-card>
                </v-bottom-sheet>

                <div class="accountContent">
                    <div class="optionContent">
                        <div class="title">
                            <v-icon size="large" icon="mdi-credit-card-outline"></v-icon>
                            <h3>Cartões de Crédito</h3>
                        </div>
                        <div class="subtitle">
                            <p>Agilize o pagamento de suas passagens.</p>
                        </div>
                        <div class="content">
                            <div class="card_info">
                                <img class="creditCardLogo"
                                    src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a4/Mastercard_2019_logo.svg/1200px-Mastercard_2019_logo.svg.png" />
                                <div class="extra-infos">
                                    <p>●● 3413</p>
                                    <v-menu>
                                        <template v-slot:activator="{ props }">
                                            <v-btn v-bind="props" icon="mdi-dots-vertical" variant="text"></v-btn>
                                        </template>
                                        <v-list>
                                            <v-list-item>
                                                <v-list-item-title href="Excluir">Tornar principal</v-list-item-title>
                                            </v-list-item>
                                            <v-list-item>
                                                <v-list-item-title @click="sheet = !sheet">Alterar dados</v-list-item-title>
                                            </v-list-item>
                                            <v-list-item>


                                                <v-dialog max-width="500">
                                                    <template v-slot:activator="{ props: activatorProps }">

                                                        <v-list-item-title v-bind="activatorProps">Excluir
                                                            cartão</v-list-item-title>

                                                    </template>

                                                    <template v-slot:default="{ isActive }">
                                                        <v-card class="deleteDialog pa-2" rounded="large">
                                                            <v-card-title>
                                                                <v-row no-gutters align-items="center" class="ga-2 pt-2">
                                                                    <v-icon icon="mdi-delete-outline" color="red"> </v-icon> <b> Excluir cartão</b>
                                                                </v-row>
                                                            </v-card-title>
                                                            <v-divider></v-divider>
                                                            <v-card-text>
                                                                
                                                                <p>
                                                                    Você tem certeza que quer excluir o cartão final 3413?
                                                                </p>
                                                                <p class="text-caption">
                                                                    Essa ação não poderá ser desfeita.
                                                                </p>
                                                            </v-card-text>

                                                            <v-card-actions class="mt-2">
                                                                <v-btn text="voltar a minha conta" variant="plain"
                                                                    @click="isActive.value = false"></v-btn>
                                                                    <v-spacer></v-spacer>

                                                                <v-btn text="Confirmar exclusão" rounded="xl" variant="outlined"
                                                                    @click="isActive.value = false"></v-btn>
                                                            </v-card-actions>
                                                        </v-card>
                                                    </template>
                                                </v-dialog>





                                            </v-list-item>
                                        </v-list>
                                    </v-menu>
                                </div>
                            </div>
                            <div class="card_info">
                                <img class="creditCardLogo"
                                    src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/89/Hipercard_logo.svg/2560px-Hipercard_logo.svg.png" />
                                <div class="extra-infos">
                                    <p>●● 6029</p>
                                    <v-menu>
                                        <template v-slot:activator="{ props }">
                                            <v-btn v-bind="props" icon="mdi-dots-vertical" variant="text"></v-btn>
                                        </template>
                                        <v-list>
                                            <v-list-item>
                                                <v-list-item-title>Tornar principal</v-list-item-title>
                                            </v-list-item>
                                            <v-list-item>
                                                <v-list-item-title @click="sheet = !sheet">Alterar dados</v-list-item-title>
                                            </v-list-item>
                                            <v-list-item>
                                                <v-dialog max-width="500">
                                                    <template v-slot:activator="{ props: activatorProps }">
                                                        <v-list-item-title v-bind="activatorProps">Excluir
                                                            cartão</v-list-item-title>
                                                    </template>
                                                    <template v-slot:default="{ isActive }">
                                                        <v-card class="deleteDialog pa-2" rounded="large">
                                                            <v-card-title>
                                                                <v-row no-gutters align-items="center" class="ga-2 pt-2">
                                                                    <v-icon icon="mdi-delete-outline" color="red"> </v-icon> <b> Excluir cartão</b>
                                                                </v-row>
                                                            </v-card-title>
                                                            <v-divider></v-divider>
                                                            <v-card-text>
                                                                
                                                                <p>
                                                                    Você tem certeza que quer excluir o cartão final 3413?
                                                                </p>
                                                                <p class="text-caption">
                                                                    Essa ação não poderá ser desfeita.
                                                                </p>
                                                            </v-card-text>

                                                            <v-card-actions class="mt-2">
                                                                <v-btn text="voltar a minha conta" variant="plain"
                                                                    @click="isActive.value = false"></v-btn>
                                                                    <v-spacer></v-spacer>

                                                                <v-btn text="Confirmar exclusão" rounded="xl" variant="outlined"
                                                                    @click="isActive.value = false"></v-btn>
                                                            </v-card-actions>
                                                        </v-card>
                                                    </template>
                                                </v-dialog>
                                            </v-list-item>
                                        </v-list>
                                    </v-menu>
                                </div>
                            </div>
                            <div class="card_info">
                                <img class="creditCardLogo"
                                    src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/fa/American_Express_logo_%282018%29.svg/2052px-American_Express_logo_%282018%29.svg.png" />
                                <div class="extra-infos">
                                    <p>●● 1421</p>
                                    <v-menu>
                                        <template v-slot:activator="{ props }">
                                            <v-btn v-bind="props" icon="mdi-dots-vertical" variant="text"></v-btn>
                                        </template>
                                        <v-list>
                                            <v-list-item>
                                                <v-list-item-title href="Excluir">Tornar principal</v-list-item-title>
                                            </v-list-item>
                                            <v-list-item>
                                                <v-list-item-title @click="sheet = !sheet">Alterar dados</v-list-item-title>
                                            </v-list-item>
                                            <v-list-item>


                                                <v-dialog max-width="500">
                                                    <template v-slot:activator="{ props: activatorProps }">

                                                        <v-list-item-title v-bind="activatorProps">Excluir
                                                            cartão</v-list-item-title>

                                                    </template>

                                                    <template v-slot:default="{ isActive }">
                                                        <v-card class="deleteDialog pa-2" rounded="large">
                                                            <v-card-title>
                                                                <v-row no-gutters align-items="center" class="ga-2 pt-2">
                                                                    <v-icon icon="mdi-delete-outline" color="red"> </v-icon> <b> Excluir cartão</b>
                                                                </v-row>
                                                            </v-card-title>
                                                            <v-divider></v-divider>
                                                            <v-card-text>
                                                                
                                                                <p>
                                                                    Você tem certeza que quer excluir o cartão final 3413?
                                                                </p>
                                                                <p class="text-caption">
                                                                    Essa ação não poderá ser desfeita.
                                                                </p>
                                                            </v-card-text>

                                                            <v-card-actions class="mt-2">
                                                                <v-btn text="voltar a minha conta" variant="plain"
                                                                    @click="isActive.value = false"></v-btn>
                                                                    <v-spacer></v-spacer>

                                                                <v-btn text="Confirmar exclusão" rounded="xl" variant="outlined"
                                                                    @click="isActive.value = false"></v-btn>
                                                            </v-card-actions>
                                                        </v-card>
                                                    </template>
                                                </v-dialog>



                                            </v-list-item>
                                        </v-list>
                                    </v-menu>
                                </div>
                            </div>
                        </div>






                    </div>
                    <div class="ctas">
                        <v-btn @click="sheet = !sheet" variant="outlined" elevation="0" rounded="xl">Adicionar novo
                            cartão</v-btn>
                        <v-bottom-sheet rounded="large" inset v-model="sheet">
                            <v-card>
                                <v-container fluid>
                                    <v-row no-gutters>
                                        <v-col cols="10">
                                            <div class="checkoutTitleSection mb-4">
                                                <h2>Novo cartão de crédito</h2>
                                            </div>
                                        </v-col>
                                        <v-col cols="2">
                                            <v-row no-gutters justify="end">
                                                <v-btn class="rounded-xl  font-weight-bold mr-4" icon="mdi-close"
                                                    @click="sheet = !sheet" variant="outlined" elevation="0"></v-btn>
                                            </v-row>
                                        </v-col>
                                    </v-row>
                                    <ec_creditData></ec_creditData>
                                    <v-row no-gutters justify="end" class="mt-3">
                                        <v-btn class="rounded-xl  font-weight-bold mr-4" variant="outlined"
                                            elevation="0">Limpar dados </v-btn>
                                        <v-btn class="rounded-xl main-btn font-weight-bold" @click="sheet = !sheet"
                                            elevation="0">Salvar
                                        </v-btn>
                                    </v-row>
                                </v-container>
                            </v-card>
                        </v-bottom-sheet>
                    </div>
                </div>
                <div class="accountContent">
                    <div class="optionContent">
                        <div class="title">
                            <v-icon size="large" icon="mdi-seat-recline-extra"></v-icon>
                            <h3>Dados de passageiros</h3>
                        </div>
                        <div class="content">
                            <p>Adicione dados de passageiros recorrentes para facilitar o processo de compra de suas
                                passagens.</p>
                            <div class="passengerInfo">
                                <div class="passengerData">
                                    <h4>João Silva</h4>
                                    <p>412●●●</p>
                                </div>
                                <div class="ctaArea">
                                    <ec_travelersDataInput  filled />
                                </div>
                            </div>
                            <div class="passengerInfo">
                                <div class="passengerData">
                                    <h4>Maria Silva</h4>
                                    <p>464●●●</p>
                                </div>
                                <div class="ctaArea">
                                    <ec_travelersDataInput filled />
                                </div>
                            </div>


                        </div>
                    </div>
                    <div class="ctas">
                        <ec_travelersDataInput cta="novo passageiro" newest />
                    </div>
                </div>

            </div>

        </div>
    </div>
</template>



   

<script setup>
import ec_travelersDataInput from '@/components/organisms/dataOrganisms/travelersDataInput.vue'
import ec_creditData from '@/components/organisms/dataOrganisms/ec_creditData.vue'
import ec_cpf from '@/components/atoms/dataInputs/ec_CPF_input.vue'
import ec_mail from '@/components/atoms/dataInputs/ec_Email_input.vue'
import ec_phone from '@/components/atoms/dataInputs/ec_Phone_input.vue'
import ec_passwordRecovery from '@/components/organisms/dataOrganisms/ec_passwordRecovery.vue'
</script>
   
<script>
export default {
    data: () => ({
        location: 'end',
        sheet: false,
        myData: false,
        passExchange: false,
    }),


}
</script>
   
   