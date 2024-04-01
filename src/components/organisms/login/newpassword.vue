<template>
    <section class="LoginScreen">
            <div class="loginColumn form">
                <section class="subscrition">
                    <div class="newPassword pt-2">
                        <v-row no-gutters align="center">
                            <ec_passwordRecovery recovery />
                        </v-row>
                    </div>
                </section>
            </div>
    </section>
</template>

<script setup>
import ec_passwordRecovery  from '@/components/organisms/dataOrganisms/ec_passwordRecovery.vue'
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