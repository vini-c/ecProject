<template>
    <v-app-bar class="navBar searchTopBar" scroll-behavior="hide" scroll-threshold="300" height="98" :elevation="0">
        <div class="d-flex searchTopBar_area">
            <div class="d-flex searchTopBar_content">
                <div class="d-flex tripTypeArea">
                    <v-select  class="rounded-xl"  flat="true" hide-details="true"
                    label="Tipo de voo"
                    :items="['Ida e volta', 'Somente Ida']"
                    variant="solo"
                    ></v-select>
                </div>
                <div class="d-flex destinationArea">
                    <div class="d-flex destinationAreaContent">
                    <v-autocomplete class="dateFixVisual" menu-icon=""
                    :items="['California', 'Colorado', 'Florida', 'Georgia', 'Texas', 'Wyoming']"
                    flat="true" hide-details="true" dirt="true" label="Origem" variant="solo"
                    ></v-autocomplete>
                    <v-btn icon="mdi-swap-horizontal" class="destinationSwap" variant="default"></v-btn>
                    <v-autocomplete class="dateFixVisual" menu-icon=""
                    :items="['California', 'Colorado', 'Florida', 'Georgia', 'Texas', 'Wyoming']"
                    flat="true" hide-details="true" dirt="true" label="Destino" variant="solo"
                    ></v-autocomplete>
                    </div>
                </div>
                <div class="d-flex dateArea rounded-lg">
                    <v-text-field flat="true" hide-details="true" dirt="true" label="De" variant="solo"></v-text-field>
                    <v-text-field flat="true" hide-details="true" dirt="true" label="Até" variant="solo"></v-text-field>
                </div>
                <div class="d-flex extraInfosArea rounded-lg">
                    <v-select flat="true" hide-details="true" dirt="true" label="Viajantes e Assentos" variant="solo"></v-select>
                </div>
                <div class="d-flex buttonArea">
                    <v-btn class="searchButton rounded-lg px-8 py-5 font-weight-bold rounded-lg" append-icon="mdi-magnify" size="extra-large" variant="default">Pesquisar</v-btn>
                </div>
            </div>
        </div>
    </v-app-bar>
</template>
<script>
import '@/assets/scss/searchTopBar.scss'

export default {
    name:'eC_searchMainBar',
}
    </script>