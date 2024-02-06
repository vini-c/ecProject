<template>

<v-navigation-drawer v-bind:width="300" mobile-breakpoint="md" v-if="!isMobile" class="eCfilter filterbar">
  <div class="classArea filterOrdenationContent pt-4 px-4 pb-2">
      <p class="title pb-1">Ordenação</p>
      <v-select placeholder="Melhores opções"
          :items="['Melhores opções ','Mais baratos', 'Voos mais rápidos']"
          variant="outlined" hide-details="true" density="compact"></v-select>
     </div>
      <v-list-item title="Filtros"
        subtitle="Modifique sua busca através dos filtros inteligentes Embarque Certo">
      </v-list-item>
      <div class="filterSection pa-2">
        
        <v-expansion-panels>
          <v-expansion-panel class="appbar" elevation="0">
            <v-expansion-panel-title class="px-2 py-4">
              <v-row class="flex-row align-center justify-space-between" no-gutters>
                <div class="d-flex flex-row align-center">
                  <v-icon size="small" icon="mdi-currency-usd"></v-icon>
                  <p class="text-body pl-2">Preço</p>
                </div>
                <v-chip>Ativo</v-chip>
              </v-row>
            </v-expansion-panel-title>
            <v-expansion-panel-text>
              <div class="priceFilterSectiond flex-row">
                <v-theme-provider theme="dark">
                <v-range-slider class="px-2"></v-range-slider>
              </v-theme-provider>
                <v-row class="justify-space-between px-4 pb-2">
                  <p class="text-caption ">R$ 0.00</p>
                  <p class="text-caption ">R$ 489.924,00</p>
                </v-row>
              </div>
            </v-expansion-panel-text>
          </v-expansion-panel>
          <v-expansion-panel  class="appbar" elevation="0">
            <v-expansion-panel-title class="px-2 py-4">
              <v-row class="flex-row align-center justify-space-between" no-gutters>
                <div class="d-flex flex-row align-center">
                  <v-icon size="small" icon="mdi-middleware-outline"></v-icon>
                  <p class="text-body pl-2">Escalas</p>
                </div>
                <v-chip>Ativo</v-chip>
              </v-row>
            </v-expansion-panel-title>
            <v-expansion-panel-text>
              <v-row class="justify-center pb-4">
                <v-btn variant="tonal" density="compact">Selecionar todas</v-btn>
              </v-row>
              <div class="priceFilterSectiond">
                <v-checkbox density="compact" hide-details="true" label="Direto" value="direct"></v-checkbox>
                <v-checkbox density="compact" hide-details="true" label="1 Escala" value="with1Scale"></v-checkbox>
                <v-checkbox density="compact" hide-details="true" label="+ 2 Escalas" value="withScales"></v-checkbox>
              </div>
            </v-expansion-panel-text>
          </v-expansion-panel>
          <v-expansion-panel class="appbar" elevation="0">
            <v-expansion-panel-title class="px-2 py-4">
              <v-row class="flex-row align-center justify-space-between" no-gutters>
                <div class="d-flex flex-row align-center">
                  <v-icon size="small" icon="mdi-clock-outline"></v-icon>
                  <p class="text-body pl-2">Horários</p>
                </div>
                <v-chip>Ativo</v-chip>
              </v-row>
            </v-expansion-panel-title>
            <v-expansion-panel-text>
              <div class="priceFilterSectiond flex-row">
                <p class="text-caption">Horário de partida</p>
                <v-range-slider class="px-2"></v-range-slider>
                <v-row class="justify-space-between px-4 pb-2">
                  <p class="text-caption ">0:00</p>
                  <p class="text-caption ">23:59</p>
                </v-row>
              </div>
              <div class="priceFilterSectiond flex-row pt-4">
                <p class="text-caption">Horário de retorno</p>
                <v-range-slider class="px-2"></v-range-slider>
                <v-row class="justify-space-between px-4 pb-2">
                  <p class="text-caption ">0:00</p>
                  <p class="text-caption ">23:59</p>
                </v-row>
              </div>

            </v-expansion-panel-text>
          </v-expansion-panel>
          <v-expansion-panel class="appbar" elevation="0">
            <v-expansion-panel-title class="px-2 py-4">
              <v-row class="flex-row align-center justify-space-between" no-gutters>
                <div class="d-flex flex-row align-center">
                  <v-icon size="small" icon="mdi-airplane"></v-icon>
                  <p class="text-body pl-2">Companhias</p>
                </div>
                <v-chip>Ativo</v-chip>
              </v-row>
            </v-expansion-panel-title>
            <v-expansion-panel-text class="pa-2">
              <div class="priceFilterSectiond">
                <v-row class="justify-center pb-4">
                  <v-btn variant="tonal" density="compact">Selecionar todas</v-btn>
                </v-row>
                <v-checkbox  density="compact" hide-details="true" label="ciaName" value="ciaName"></v-checkbox>
                <v-checkbox  density="compact" hide-details="true" label="ciaName" value="ciaName"></v-checkbox>
                <v-checkbox  density="compact" hide-details="true" label="ciaName" value="ciaName"></v-checkbox>
                <v-checkbox  density="compact" hide-details="true" label="ciaName" value="ciaName"></v-checkbox>
                <v-checkbox  density="compact" hide-details="true" label="ciaName" value="ciaName"></v-checkbox>
              </div>
            </v-expansion-panel-text>
          </v-expansion-panel>
          <v-expansion-panel class="appbar" elevation="0">
            <v-expansion-panel-title class="px-2 py-4"> <v-row class="flex-row align-center justify-space-between"
                no-gutters>
                <div class="d-flex flex-row align-center">
                  <v-icon size="small" icon="mdi-bag-suitcase"></v-icon>
                  <p class="text-body pl-2">Bagagens</p>
                </div>
                <v-chip>Ativo</v-chip>
              </v-row>
            </v-expansion-panel-title>
            <v-expansion-panel-text>
              <div class="priceFilterSectiond">
                <v-row class="justify-center pb-4">
                  <v-btn variant="tonal" density="compact">Selecionar todas</v-btn>
                </v-row>
                <v-checkbox density="compact" hide-details="true" label="Itens Pessoais" value="Itens Pessoais"></v-checkbox>
                <v-checkbox density="compact" hide-details="true" label="Mala de mão" value="Mala de mão"></v-checkbox>
                <v-checkbox density="compact" hide-details="true" label="Bagagem Despachada" value="Bagagem Despachada"></v-checkbox>
              </div>
            </v-expansion-panel-text>
          </v-expansion-panel>
          <v-expansion-panel class="appbar" elevation="0">
            <v-expansion-panel-title class="px-2 py-4">
              <v-row class="flex-row align-center justify-space-between" no-gutters>
                <div class="d-flex flex-row align-center">
                  <v-icon size="small" icon="mdi-seat-passenger"></v-icon>
                  <p class="text-body pl-2">Assentos</p>
                </div>
                <v-chip>Ativo</v-chip>
              </v-row>
            </v-expansion-panel-title>
            <v-expansion-panel-text>
              <div class="priceFilterSectiond">
                <v-row class="justify-center pb-4">
                  <v-btn variant="tonal" density="compact">Selecionar todas</v-btn>
                </v-row>
                <v-checkbox density="compact" hide-details="true" label="Econômica" value="Econômica"></v-checkbox>
                <v-checkbox density="compact" hide-details="true" label="Premium Economy" value="Premium Economy"></v-checkbox>
                <v-checkbox density="compact" hide-details="true" label="Executiva" value="Executiva"></v-checkbox>
                <v-checkbox density="compact" hide-details="true" label="Primeira Classe" value="Primeira Classe"></v-checkbox>

              </div>
            </v-expansion-panel-text>
          </v-expansion-panel>
          
        </v-expansion-panels>
      </div>
      <template v-slot:append>
        <v-row class="justify-end pa-5 pt-7">
          <v-btn class="rounded-xl" variant="outlined" elevation="0">Aplicar</v-btn>
        </v-row>
        </template>
    </v-navigation-drawer>


    <v-bottom-sheet v-model="sheet">
            <template v-slot:activator="{ props }">
                  <button v-bind="props" class="ec_filterMobile"> 
                      <p class="py-2 mr-2">
                        <v-icon icon="mdi-filter-multiple-outline" size="small"></v-icon>
                        Filtros e Ordenação
                      </p>
                    <v-chip>
                      3 Ativos
                    </v-chip>
                  </button>
            </template>
            <v-card  class="filterbar">
          <div class="d-flex header pt-4">
                        <p class="headerBottomSheet">Filtros e ordenação</p>
                        <v-btn elevation="0" icon="mdi-close" size="small" @click="sheet = false"></v-btn>
                    </div>
      
      <div class="filterSection pa-2 ">
        <div class="classArea pb-4">
          <div class="filterOrdenationContent">
                            <p class="title">Ordenação</p>
                          </div>
                            <v-select placeholder="Melhores opções"
                                :items="['Melhores opções ','Mais baratos', 'Voos mais rápidos']"
                                variant="outlined" hide-details="true" density="compact"></v-select>
                        </div>
                        <div class="filterOrdenationContent">
                            <p class="title">Filtros</p>
                          </div>
        <v-expansion-panels>
          <v-expansion-panel class="appbar" elevation="0">
            <v-expansion-panel-title class="px-2 py-4">
              <v-row class="flex-row align-center justify-space-between" no-gutters>
                <div class="d-flex flex-row align-center">
                  <v-icon size="small" icon="mdi-currency-usd"></v-icon>
                  <p class="text-body pl-2">Preço</p>
                </div>
                <v-chip>Ativo</v-chip>
              </v-row>
            </v-expansion-panel-title>
            <v-expansion-panel-text>
              <div class="priceFilterSectiond flex-row">
                <v-theme-provider theme="dark">
                <v-range-slider class="px-2"></v-range-slider>
              </v-theme-provider>
                <v-row class="justify-space-between px-4 pb-2">
                  <p class="text-caption ">R$ 0.00</p>
                  <p class="text-caption ">R$ 489.924,00</p>
                </v-row>
              </div>
            </v-expansion-panel-text>
          </v-expansion-panel>
          <v-expansion-panel  class="appbar" elevation="0">
            <v-expansion-panel-title class="px-2 py-4">
              <v-row class="flex-row align-center justify-space-between" no-gutters>
                <div class="d-flex flex-row align-center">
                  <v-icon size="small" icon="mdi-middleware-outline"></v-icon>
                  <p class="text-body pl-2">Escalas</p>
                </div>
                <v-chip>Ativo</v-chip>
              </v-row>
            </v-expansion-panel-title>
            <v-expansion-panel-text>
              <v-row class="justify-center pb-4">
                <v-btn variant="tonal" density="compact">Selecionar todas</v-btn>
              </v-row>
              <div class="tabletFlexSection">
                <v-checkbox density="compact" hide-details="true" label="Direto" value="direct"></v-checkbox>
                <v-checkbox density="compact" hide-details="true" label="1 Escala" value="with1Scale"></v-checkbox>
                <v-checkbox density="compact" hide-details="true" label="+ 2 Escalas" value="withScales"></v-checkbox>
              </div>
            </v-expansion-panel-text>
          </v-expansion-panel>
          <v-expansion-panel class="appbar" elevation="0">
            <v-expansion-panel-title class="px-2 py-4">
              <v-row class="flex-row align-center justify-space-between" no-gutters>
                <div class="d-flex flex-row align-center">
                  <v-icon size="small" icon="mdi-clock-outline"></v-icon>
                  <p class="text-body pl-2">Horários</p>
                </div>
                <v-chip>Ativo</v-chip>
              </v-row>
            </v-expansion-panel-title>
            <v-expansion-panel-text>
              <div class="priceFilterSectiond flex-row">
                <p class="text-caption">Horário de partida</p>
                <v-range-slider class="px-2"></v-range-slider>
                <v-row class="justify-space-between px-4 pb-2">
                  <p class="text-caption ">0:00</p>
                  <p class="text-caption ">23:59</p>
                </v-row>
              </div>
              <div class="priceFilterSectiond flex-row pt-4">
                <p class="text-caption">Horário de retorno</p>
                <v-range-slider class="px-2"></v-range-slider>
                <v-row class="justify-space-between px-4 pb-2">
                  <p class="text-caption ">0:00</p>
                  <p class="text-caption ">23:59</p>
                </v-row>
              </div>

            </v-expansion-panel-text>
          </v-expansion-panel>
          <v-expansion-panel class="appbar" elevation="0">
            <v-expansion-panel-title class="px-2 py-4">
              <v-row class="flex-row align-center justify-space-between" no-gutters>
                <div class="d-flex flex-row align-center">
                  <v-icon size="small" icon="mdi-airplane"></v-icon>
                  <p class="text-body pl-2">Companhias</p>
                </div>
                <v-chip>Ativo</v-chip>
              </v-row>
            </v-expansion-panel-title>
            <v-expansion-panel-text class="pa-2">
              <div class="priceFilterSectiond">
                <v-row class="justify-center pb-4">
                  <v-btn variant="tonal" density="compact">Selecionar todas</v-btn>
                </v-row>
                <v-checkbox  density="compact" hide-details="true" label="ciaName" value="ciaName"></v-checkbox>
                <v-checkbox  density="compact" hide-details="true" label="ciaName" value="ciaName"></v-checkbox>
                <v-checkbox  density="compact" hide-details="true" label="ciaName" value="ciaName"></v-checkbox>
                <v-checkbox  density="compact" hide-details="true" label="ciaName" value="ciaName"></v-checkbox>
                <v-checkbox  density="compact" hide-details="true" label="ciaName" value="ciaName"></v-checkbox>
              </div>
            </v-expansion-panel-text>
          </v-expansion-panel>
          <v-expansion-panel class="appbar" elevation="0">
            <v-expansion-panel-title class="px-2 py-4"> <v-row class="flex-row align-center justify-space-between"
                no-gutters>
                <div class="d-flex flex-row align-center">
                  <v-icon size="small" icon="mdi-bag-suitcase"></v-icon>
                  <p class="text-body pl-2">Bagagens</p>
                </div>
                <v-chip>Ativo</v-chip>
              </v-row>
            </v-expansion-panel-title>
            <v-expansion-panel-text>
                <v-row class="justify-center pb-4">
                  <v-btn variant="tonal" density="compact">Selecionar todas</v-btn>
                </v-row>
                <div class="tabletFlexSection">

                <v-checkbox density="compact" hide-details="true" label="Itens Pessoais" value="Itens Pessoais"></v-checkbox>
                <v-checkbox density="compact" hide-details="true" label="Mala de mão" value="Mala de mão"></v-checkbox>
                <v-checkbox density="compact" hide-details="true" label="Bagagem Despachada" value="Bagagem Despachada"></v-checkbox>
              </div>
            </v-expansion-panel-text>
          </v-expansion-panel>
          <v-expansion-panel class="appbar" elevation="0">
            <v-expansion-panel-title class="px-2 py-4">
              <v-row class="flex-row align-center justify-space-between" no-gutters>
                <div class="d-flex flex-row align-center">
                  <v-icon size="small" icon="mdi-seat-passenger"></v-icon>
                  <p class="text-body pl-2">Assentos</p>
                </div>
                <v-chip>Ativo</v-chip>
              </v-row>
            </v-expansion-panel-title>
            <v-expansion-panel-text>
              <v-row class="justify-center pb-4">
                  <v-btn variant="tonal" density="compact">Selecionar todas</v-btn>
                </v-row>
              <div class="tabletFlexSection">
                
                <v-checkbox density="compact" hide-details="true" label="Econômica" value="Econômica"></v-checkbox>
                <v-checkbox density="compact" hide-details="true" label="Premium Economy" value="Premium Economy"></v-checkbox>
                <v-checkbox density="compact" hide-details="true" label="Executiva" value="Executiva"></v-checkbox>
                <v-checkbox density="compact" hide-details="true" label="Primeira Classe" value="Primeira Classe"></v-checkbox>

              </div>
            </v-expansion-panel-text>
          </v-expansion-panel>
          
        </v-expansion-panels>
      </div>
        <v-row class="justify-end pa-5 pb-6 pt-7">
          <v-btn class="rounded-xl mr-2" variant="outlined" elevation="0">Limpar</v-btn>
          <v-btn class="rounded-xl actionButton" variant="outlined" elevation="0" prepend-icon="mdi-filter-outline" @click="sheet = false">Filtrar</v-btn>
        </v-row>
      </v-card>
      </v-bottom-sheet>









</template>


<script setup>
</script>

<script>
import '@/assets/scss/filters.scss'

export default {
    name: 'eC_filters',
    data: () => ({
        isMobile: true,
        sheet: false,
        drawer: false,
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
    watch: {
      group () {
        this.drawer = false
      },
    },

}
</script>