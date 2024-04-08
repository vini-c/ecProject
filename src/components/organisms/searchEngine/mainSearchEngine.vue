<template>
    <section class="searchEngineBig">
        <div class="widthResizer">
        <h1>As melhores passagens aéreas estão aqui...</h1>
        <p>Busque passagens aéreas no melhor serviço de compra de passagens do Brasil.</p>
        </div>
        <div class="searchEngineContainer searchTopBar_content widthResizer">
            <div class="typeSelector">
                <div class="searchEngineSelector">
                    <v-radio-group class="flightTypeselectorBigSearch " hide-details="true">
                        <v-radio density="compact" label="Somente ida" class="radioButtonSearchArea"
                            value="one-way"></v-radio>

                        <v-radio density="compact" label="Ida e volta" class="radioButtonSearchArea mr-3"
                            value="round-trip"></v-radio>

                    </v-radio-group>
                </div>
                <v-divider vertical class="mx-5"></v-divider>
                <div class="illustrationBrand">

                    <div class="line"></div>
                    <img src="@/assets/ec_plane_white.svg" class="planeSearch">
                </div>
            </div>
            <div class="searchOption">
                <div class="d-flex destinationArea">
                    <div class="d-flex destinationAreaContent">
                        <ec_autocompleteAirportDeparture></ec_autocompleteAirportDeparture>
                        <v-btn icon="mdi-swap-horizontal" class="destinationSwap"></v-btn>
                        <ec_autocompleteAirportDestination></ec_autocompleteAirportDestination>

                    </div>
                </div>
                <div class="d-flex dateArea rounded-lg">
                    <v-menu v-model="calendarDeparture" :close-on-content-click="true" location="bottom">
                        <template v-slot:activator="{ props }">
                            <v-text-field v-bind="props" type="date" hide-details="true" dirt="true" label="De"
                                variant="solo"></v-text-field>

                        </template>

                        <v-card min-width="300">
                            <v-container>
                                <v-row justify="space-around">
                                    <v-date-picker locale="pt"></v-date-picker>
                                </v-row>
                            </v-container>
                        </v-card>
                    </v-menu>
                    <v-menu v-model="arrivalCalendar" :close-on-content-click="true" location="bottom">
                        <template v-slot:activator="{ props }">
                            <v-text-field v-bind="props" type="date" hide-details="true" dirt="true" label="Até"
                                variant="solo"></v-text-field>

                        </template>

                        <v-card min-width="300">
                            <v-container>
                                <v-row justify="space-around">
                                    <v-date-picker locale="pt"></v-date-picker>
                                </v-row>
                            </v-container>
                        </v-card>
                    </v-menu>
                </div>
                <div class="d-flex extraInfosArea rounded-lg">


                    <v-menu v-model="menu" :close-on-content-click="false" location="bottom">
                        <template v-slot:activator="{ props }">
                            <v-select v-bind="props" hide-details="true" dirt="true" label="Viajantes e Classe"
                                variant="solo"></v-select>
                        </template>

                        <v-card class="extraInfosArea" min-width="300">
                            <v-container>
                                <v-row class="px-4 py-2">
                                    <p>Viajantes</p>
                                </v-row>
                                <ec_counterComponent title="Adultos" subtitle="" iconName="mdi-human-non-binary">
                                </ec_counterComponent>
                                <ec_counterComponent title="Crianças" subtitle="até 12 anos" iconName="mdi-car-child-seat">
                                </ec_counterComponent>
                                <ec_counterComponent title="Bebês" subtitle="até 12 meses" iconName="mdi-baby-carriage">
                                </ec_counterComponent>


                                <v-row class="px-4 py-2 pt-4">
                                    <v-divider class="pb-4"></v-divider>
                                    <p>Classe</p>
                                    <v-divider></v-divider>
                                    <v-select class="extraInfosArea" density="compact" placeholder="Qualquer Classe"
                                        :items="['Qualquer Classe', 'Econômica', 'Premium Economy', 'Executiva/Business', 'Primeira Classe']"
                                        variant="outlined"></v-select>
                                </v-row>
                            </v-container>

                            <v-card-actions>
                                <v-spacer></v-spacer>
                                <v-btn rounded="xl" variant="text" @click="menu = false">
                                    Limpar
                                </v-btn>
                                <v-btn rounded="xl" @click="menu = false">
                                    Aplicar
                                </v-btn>
                            </v-card-actions>
                        </v-card>
                    </v-menu>


                </div>
                <div class="d-flex buttonArea">
                    <v-btn href="#/results" class="searchButton rounded-lg px-5 py-5 font-weight-bold rounded-lg"
                        append-icon="mdi-magnify" size="extra-large">Pesquisar</v-btn>
                </div>
            </div>
        </div>
    </section>
</template>


<script setup>
import ec_autocompleteAirportDeparture from '@/components/atoms/autoCompleteAirportDeparture.vue'
import ec_autocompleteAirportDestination from '@/components/atoms/autoCompleteAirportDestination.vue'
import ec_counterComponent from '@/components/atoms/counterComponent.vue'
</script>
<script>
import  '@/components/organisms/searchEngine/scss/searchTopBar.scss'

export default {
    name: 'ec_mainSearchEngine',
    data: () => ({
        fav: false,
        menu: false,
        message: false,
        hints: false,
        calendarDeparture: false,
        arrivalCalendar: false,
        isMobile: true,
        counterNumber: 0,
        sheet: false,
        tabletFlightType: false,
    }),


    mounted() {
        this.onResize();
        window.addEventListener("resize", this.onResize, { passive: true });
    },
    methods: {
        onResize() {
            this.isMobile = window.innerWidth < 600;
        },
        increment() {
            this.counterNumber++;
        },
        decrement() {
            this.counterNumber--;
        },
    },
    beforeDestroy() {
        if (typeof window !== "undefined") {
            window.removeEventListener("resize", this.onResize, { passive: true });
        }
    },

}
</script>