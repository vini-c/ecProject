<template>
    <div class="ecBanner" :class="type" >
      <v-row no-gutters class="ga-2" align="center">
          <v-icon  icon="mdi-alert-outline" size="large"  v-if="type === 'warning'"></v-icon>
          <v-icon class="successIcon" icon="mdi-check-circle-outline" size="x-large" v-if="type === 'positive'"></v-icon>
          <v-icon  icon="mdi-clock-outline" size="x-large"  v-if="type === 'waiting'"></v-icon>
          <v-icon class=" errorIcon" icon="mdi-alert-circle-outline" size="x-large" v-if="type === 'error'"></v-icon>
        <v-col>
          <h4>{{title}}</h4>
          <p>{{subtitle}}</p>              
          <v-btn size="small" class="mt-2" v-if="actionName" :href=actionValue variant="tonal">{{actionName}}</v-btn>
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
      type: String,
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