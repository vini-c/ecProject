<template>
    <div v-if="positive === false && waiting === false && error === false" class="ecBanner mb-4">
          <v-row no-gutters align="center">
              <v-icon class="pa-8" icon="mdi-alert-outline" size="large"></v-icon>
            <v-col>
              <h4>{{title}}</h4>
              <p>{{subtitle}}</p>
            </v-col>
          </v-row>
        </div>

        <div v-if="positive === true && waiting === false && error === false" class="ecBanner positive mb-4">
          <v-row no-gutters align="center">
              <v-icon class="pa-8 successIcon" icon="mdi-check-circle-outline" size="x-large"></v-icon>
            <v-col>
              <h4>{{title}}</h4>
              <p>{{subtitle}}</p>
            </v-col>
          </v-row>
        </div>

        <div v-if="waiting === true && positive === false && error === false" class="ecBanner mb-4">
          <v-row no-gutters align="center">
              <v-icon class="pa-8 " icon="mdi-clock-outline" size="x-large"></v-icon>
            <v-col>
              <h4>{{title}}</h4>
              <p>{{subtitle}}</p>
            </v-col>
          </v-row>
        </div> 

        <div v-if="waiting === false && positive === false && error === true" class="ecBanner mb-4">
          <v-row no-gutters align="center">
              <v-icon class="pa-8 errorIcon" icon="mdi-alert-circle-outline" size="x-large"></v-icon>
            <v-col class="py-2">
              <h4>{{title}}</h4>
              <p>{{subtitle}}</p>
              <v-btn size="small" class="mt-2" href={{actionValue}} variant="tonal">{{actionName}}</v-btn>
            </v-col>
          </v-row>
        </div>
</template>

<script setup>
import '@/components/molecules/scss/banner.scss'
</script>
<script>
export default {
    name: 'ec_banner',
    props: {
      title: String,
      subtitle: String,
      positive: Boolean,
      waiting: Boolean,
      error: Boolean,
      actionName: String,
      actionValue: String
    }

}
</script>