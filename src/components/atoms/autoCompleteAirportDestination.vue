<template>
    <v-autocomplete
        class="dateFixVisual" menu-icon=""
          v-model="friends"
          :disabled="isUpdating"
          :items="airportList"
          item-title="City"
          item-value="City"
          label="Para onde?"
          hide-details="true" 
          dirt="true" 
          variant="solo"
          chips
          :custom-filter="customFilter"

        >
        <template v-slot:chip="{ props, item }">
            <v-chip variant="text"
              v-bind="props" class="airportSelectorResult"
            > <p class="citySelector">{{item.raw.City}}</p><span class="iataSelector">{{item.raw.iata}}</span> </v-chip>
          </template>
          <template v-slot:item="{ props, item }">
            <div
              v-bind="props" class="autoCompleteAirportOption"
              density="compact"
              title=""
              subtitle=""
              >
              <div class="airportContentSelector">
                <div class="airportCityDisplay">
                    <span class="citySelector">{{item.raw.City}}, {{item.raw.state}} - {{item.raw.country}}</span>

                    <span class="iataSelector">{{item.raw.iata}}</span>
                </div>
                <span class="airportSelector">{{item.raw.airport}}</span>
            </div>
            </div>
          </template>
        </v-autocomplete>
</template>
<script>
export default {
name: 'ec_autocompleteAirportDestination',
props: {data:Object},
data () {
  return {
    autoUpdate: true,
    isUpdating: false,
    friends:[],
    name: 'Midnight Crew',
    airportList: [
    { City: 'Miami', state:'Florida', country:'Estados Unidos da América', iata: 'MIA',airport: 'Miami Airport International' },
          { City: 'Guarulhos', state:'São Paulo', country:'Brasil', iata: 'GRU', airport:'Aeroporto Internacional Guarulhos' },
          { City: 'San Francisco', state:'California', country:'Estados Unidos da América', iata: 'SFO', airport:'San Francisco International Airport' },
          { City: 'San Carlos de Bariloche', state:'Bariloche', country:'Argentina', iata: 'BRC', airport:'Aeroporto Internacional Teniente Luis Candelaria' },
          { City: 'Congonhas', state:'São Paulo', country:'Brasil', iata: 'CGH', airport:'Aeroporto de Congonhas' },

    ],
    title: 'The summer breeze',
    timeout: null,
  }
},

methods: {
  customFilter (itemTitle, queryText, item) {
    const textOne = item.raw.City.toLowerCase()
    const textTwo = item.raw.state.toLowerCase()
    const textThree = item.raw.iata.toLowerCase()
    const textFour = item.raw.airport.toLowerCase()
    const searchText = queryText.toLowerCase()

    return textOne.indexOf(searchText) > -1 ||
      textTwo.indexOf(searchText) > -1 || 
      textThree.indexOf(searchText) > -1 ||
      textFour.indexOf(searchText) > -1
  } },

watch: {
  isUpdating (val) {
    clearTimeout(this.timeout)

    if (val) {
      this.timeout = setTimeout(() => (this.isUpdating = false), 3000)
    }
  },
},
}
</script>











