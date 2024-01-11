<script setup>
import ec_autocompleteAirportDeparture from '../atoms/autoCompleteAirportDeparture.vue'
import ec_autocompleteAirportDestination from '../atoms/autoCompleteAirportDestination.vue'
import ec_counterComponent from '../atoms/counterComponent.vue'
</script>

<template>
    <v-app-bar class="navBar searchTopBar" v-if="!isMobile" scroll-behavior="hide" scroll-threshold="300" height="98"
        :elevation="0">
        <div class="d-flex searchTopBar_area">
            <div class="d-flex searchTopBar_content">
                <div class="d-flex tripTypeArea">
                    <div class="desktopFlightSelector">
                        <v-radio-group class="flightTypeselector " hide-details="true">
                            <v-radio density="compact" label="Somente ida" class="radioButtonSearchArea"
                                value="one-way"></v-radio>
                            <v-radio density="compact" label="Ida e volta" class="radioButtonSearchArea"
                                value="round-trip"></v-radio>
                        </v-radio-group>
                    </div>
                    <div class="tabletFlightSelector">
                        <v-menu v-model="tabletFlightType" :close-on-content-click="true" location="bottom">
                            <template v-slot:activator="{ props }">
                                <v-text-field v-bind="props" hide-details="true" dirt="true" label="Tipo de Voo"
                                    variant="solo"></v-text-field>
                            </template>
                            <v-card min-width="300">
                                <v-container>
                                    <v-radio-group class="flightTypeselector " hide-details="true">
                                        <v-radio density="compact" label="Somente ida" class="radioButtonSearchArea"
                                            value="one-way"></v-radio>
                                        <v-radio density="compact" label="Ida e volta" class="radioButtonSearchArea"
                                            value="round-trip"></v-radio>
                                    </v-radio-group>
                                </v-container>
                            </v-card>
                        </v-menu>
                    </div>
                </div>
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

                                <v-btn rounded="xl"  variant="text" @click="menu = false">
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
                    <v-btn class="searchButton rounded-lg px-5 py-5 font-weight-bold rounded-lg" append-icon="mdi-magnify"
                        size="extra-large">Pesquisar</v-btn>
                </div>
            </div>
        </div>
    </v-app-bar>
    <v-app-bar class="searchMobileTopBar" v-if="isMobile" scroll-behavior="hide" scroll-threshold="500" height="64"
        :elevation="0">

        <v-bottom-sheet v-model="sheet">
            <template v-slot:activator="{ props }">
                <div v-bind="props" class="d-flex searchTopBar_area isMobile">
                    <div class="d-flex destinationArea">
                        <div class="d-flex destinationAreaContent align-center">
                            <div class="flightInfos departure">
                                <p class="iata">GRU</p>
                                <p class="date">04/12</p>
                            </div>
                            <v-icon icon="mdi-arrow-left-right" size="x-small" class="iconDescription"></v-icon>
                            <div class="flightInfos arrival">
                                <p class="iata">GRU</p>
                                <p class="date">04/12</p>
                            </div>
                        </div>
                    </div>
                    <v-divider vertical></v-divider>
                    <div class="d-flex passengerArea align-center">
                        <v-icon icon="mdi-human-non-binary" class="iconDescription"></v-icon>
                        <p>2</p>
                    </div>
                    <v-divider vertical></v-divider>

                    <div class="d-flex classArea rounded-lg align-center ">
                        <v-icon icon="mdi-seat-recline-extra" class="iconDescription"></v-icon>
                        <p>Qualquer Classe</p>

                    </div>
                    <div class="d-flex buttonArea">
                        <v-btn icon="mdi-pen" class="searchButton font-weight-bold rounded-lg" size="small"></v-btn>
                    </div>
                </div>
            </template>
            <v-card>

                <section class="mobileSearchArea">
                    <div class="d-flex header">
                        <p class="headerBottomSheet">Buscar passagens</p>
                        <v-btn elevation="0" icon="mdi-close" size="small" @click="sheet = false"></v-btn>
                    </div>
                    <div class="d-flex tripTypeArea">
                        <v-radio-group class="flightTypeselector" hide-details="true">
                            <v-radio density="compact" label="Somente ida" class="radioButtonSearchArea"
                                value="one-way"></v-radio>
                            <v-radio density="compact" label="Ida e volta" class="radioButtonSearchArea"
                                value="round-trip"></v-radio>
                        </v-radio-group>
                    </div>
                    <div class="d-flex destinationAreaContent">
                        <ec_autocompleteAirportDeparture></ec_autocompleteAirportDeparture>
                        <v-btn elevation="0" icon="mdi-swap-vertical" class="destinationSwap"></v-btn>
                        <ec_autocompleteAirportDestination></ec_autocompleteAirportDestination>
                    </div>
                    <div class="d-flex dateArea rounded-lg">
                        <!-- <v-menu v-model="calendarDeparture" :close-on-content-click="true" location="bottom">
                            <template v-slot:activator="{ props }"> -->
                                <v-text-field type="date" v-bind="props" hide-details="true" dirt="true" label="De"
                                    variant="solo"></v-text-field>
                            <!-- </template>

                            <v-card min-width="300">
                                <v-container>
                                    <v-row justify="space-around">
                                        <v-date-picker locale="pt"></v-date-picker>
                                    </v-row>
                                </v-container>
                            </v-card>
                        </v-menu>
                        <v-menu v-model="arrivalCalendar" :close-on-content-click="true" location="bottom">
                            <template v-slot:activator="{ props }"> -->
                                <v-text-field  type="date" v-bind="props" hide-details="true" dirt="true" label="Até"
                                    variant="solo"></v-text-field>

                            <!-- </template>

                            <v-card min-width="300">
                                <v-container>
                                    <v-row justify="space-around">
                                        <v-date-picker locale="pt"></v-date-picker>
                                    </v-row>
                                </v-container>
                            </v-card>
                        </v-menu> -->
                    </div>
                    <div class="d-flex extraInfosArea">
                        <ec_counterComponent title="Adultos" subtitle="" iconName="mdi-human-non-binary">
                        </ec_counterComponent>
                        <ec_counterComponent title="Crianças" subtitle="até 12 anos" iconName="mdi-car-child-seat">
                        </ec_counterComponent>
                        <ec_counterComponent title="Bebês" subtitle="até 12 meses" iconName="mdi-baby-carriage">
                        </ec_counterComponent>
                        <div class="classArea">
                            <p>Classe</p>
                            <v-select placeholder="Qualquer Classe"
                                :items="['Qualquer Classe', 'Econômica', 'Premium Economy', 'Executiva/Business', 'Primeira Classe']"
                                variant="outlined" hide-details="true" density="compact"></v-select>
                        </div>
                    </div>
                    <div class="d-flex buttonArea">
                        <v-btn class="searchButton rounded-lg px-5 font-weight-bold rounded-lg" elevation="0"
                            append-icon="mdi-magnify" size="default">Pesquisar</v-btn>
                    </div>
                </section>


            </v-card>
        </v-bottom-sheet>
    </v-app-bar>
</template>
<script>
import '@/assets/scss/searchTopBar.scss'

export default {
    name: 'eC_searchMainBar',
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