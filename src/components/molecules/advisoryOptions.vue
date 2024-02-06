<template>

    <v-sheet class="mx-auto" elevation="0">
        <v-slide-group v-model="model" class="" selected-class="advisoryChoosed" prev-icon="false" mext-icon="false">
            <v-slide-group-item v-for="(item, x) in flightOptionData" :key="x"
                v-slot="{ isSelected, toggle, selectedClass }">
                <v-card class="aiAdivisoryOption" elevation="0" :class="['ma-4', selectedClass]" @click="toggle">
                    <div class="d-flex advisoryContent">
                        <img v-bind:src="item.ciaLogo" class="ciaLogo" />
                        <h3 class="pt-2 pb-0 font-weight-bold justify-end">{{ item.finalPrice }}</h3>
                    </div>
                </v-card>
            </v-slide-group-item>
        </v-slide-group>
    </v-sheet>

</template>
<script>

import '@/assets/scss/advisoryAi.scss'

export default {
    name: 'ec_advisoryOptions',
    props: { flightOptionData: Array },
    data: () => ({
        model: null,
    }),
}
</script>