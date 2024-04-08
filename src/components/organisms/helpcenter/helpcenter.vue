<template>
    <div class="bg-body helpCenter">
        <div class="accountSection pb-6 pt-2">
            <h1 class="mb-0">Ajuda</h1>
            <p class="pb-4">Preparamos os tópicos e perguntas mais comuns para facilitar a sua busca:</p>
            <v-expansion-panels class="pb-3" >
                <v-expansion-panel elevation="0"  v-for="(item, x) in helpCenter" :key="x">
                        <v-expansion-panel-title expand-icon="mdi-menu-down">
                            <h3>{{item.title}}</h3>
                        </v-expansion-panel-title>
                        <v-expansion-panel-text>
                            <p>{{item.answer}}</p>
                            <v-btn v-if="item.callToAction" :href="item.url" class="mt-2" variant="tonal">{{item.callToAction}}</v-btn>
                        </v-expansion-panel-text>
                </v-expansion-panel>
            </v-expansion-panels>
                <ec_banner class="pa-4" 
                    title="Dúvidas específicas?" 
                    subtitle="Entre em contato conosco, realizamos atendimentos via e-mail com total agilidade." 
                    actionName="Enviar e-mail" 
                    actionValue="#/attendance" 
                />
        </div>
    </div>
</template>

<script setup>
import ec_banner from '@/components/molecules/ec_banner.vue'
</script>
<script>
export default {
    name: "ec_helpCenter",
    props: { helpCenter: Array },
}
</script>