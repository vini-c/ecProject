<template>  
  <v-container>
    <div class="rowDesktop passRecovery">
        <div class="leftSide">
            <h3 class="mb-4"> 
                Sua nova senha precisa conter os seguintes atributos:
            </h3>
                <p class="mb-2"><v-icon icon="mdi-check-circle-outline" color="green" size="default"></v-icon> <v-icon color="error" icon="mdi-close" size="default"></v-icon> Ao menos 8 caracteres </p>
                <p class="mb-2"><v-icon icon="mdi-check-circle-outline" color="green" size="default"></v-icon> <v-icon color="error" icon="mdi-close" size="default"></v-icon> Ao menos um caractere maiusculo </p>
                <p class="mb-2"><v-icon icon="mdi-check-circle-outline" color="green" size="default"></v-icon> <v-icon color="error" icon="mdi-close" size="default"></v-icon> Ao menos um número </p>
                <p class="mb-2"><v-icon icon="mdi-check-circle-outline" color="green" size="default"></v-icon> <v-icon color="error" icon="mdi-close" size="default"></v-icon> No mínimo um caractere especial (Exemplo: @,$,%...) </p>
        </div>
        <div class="rightSide">
            <v-text-field v-if="actualPassword"  variant="outlined"
            :append-icon="show1 ? 'mdi-eye' : 'mdi-eye-off'"
            :rules="[rules.required, rules.min]"
            :type="show1 ? 'text' : 'password'"
            hint="Ao menos 8 caracteres"
            label="Senha Atual"
            name="actualPass"
            counter
            @click:append="show1 = !show1"
          ></v-text-field>
          <v-text-field  variant="outlined"
            :append-icon="show2 ? 'mdi-eye' : 'mdi-eye-off'"
            :rules="[rules.required, rules.min]"
            :type="show2 ? 'text' : 'password'"
            hint="Ao menos 8 caracteres"
            label="Nova senha"
            name="newPass"
            counter
            @click:append="show2 = !show2"
          ></v-text-field>
          <v-text-field  variant="outlined"
            :append-icon="show3 ? 'mdi-eye' : 'mdi-eye-off'"
            :rules="[rules.required, rules.min]"
            :type="show3 ? 'text' : 'password'"
            hint="Ao menos 8 caracteres"
            label="Confirmação"
            name="verification"
            counter
            @click:append="show3 = !show3"
          ></v-text-field>
        </div>
    </div>
    <v-row no-gutters justify="end">
        <v-btn class="rounded-xl  font-weight-bold mr-4" variant="outlined" elevation="0">Cancelar </v-btn>
        <v-btn class="rounded-xl main-btn font-weight-bold" @click="sheet = !sheet" elevation="0">Alterar senha
        </v-btn>
    </v-row>
</v-container>
</template>

<script>
import '@/components/organisms/dataOrganisms/scss/passwordContent.scss'

export default {
    name: 'ec_passwordRecovery',
    data () {
      return {
        show1: false,
        show2: false,
        show3: false,
        password: 'Password',
        rules: {
          required: value => !!value || 'Obrigatório',
          min: v => v.length >= 8 || 'Ao menos 8 caracteres',
          emailMatch: () => (`The email and password you entered don't match`),
        },
      }
    },
    props: {
        title: String,
        actualPassword: Boolean,
    }
}
</script>