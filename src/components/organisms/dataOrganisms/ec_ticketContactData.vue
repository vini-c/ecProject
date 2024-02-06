<template>
    <section class="ticketContact">
        <!-- Contatos -->
        <!-- dados do contato -->
        <div class="checkoutTitleSection mb-4">
            <h2>Dados para Contato</h2>
            <p>Estes dados são fundamentais para que você receba seus tickets de embarque e informação importante sobre a
                sua viagem.</p>
        </div>
            <ec_mail/>
            <ec_phone/>
    </section>
</template>

<script setup>
import ec_mail from '@/components/atoms/dataInputs/ec_Email_Input.vue'
import ec_phone from '@/components/atoms/dataInputs/ec_Phone_input.vue'
</script>

<script>
export default {
    name: 'ec_contactTicketData',
}
</script>