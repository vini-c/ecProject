<template>

<v-row class="px-4 py-2 counterComponent">
    <div class="informationArea">
        <v-icon v-bind:icon=iconName class="mr-2"></v-icon>
        <div>
            <p class="text-body">{{title}}</p>
            <p class="text-caption">{{subtitle }}</p>
        </div>
    </div>
    <div class="interactiveArea">
        <v-row>
        <v-btn variant="flat" density="compact" class="mr-2" icon="mdi-minus" @click="decrement"></v-btn>
        <p class="interactionNumberReturn">{{ number }}</p>
        
        <v-btn variant="flat" density="compact" class="ml-2" icon="mdi-plus" @click="increment"></v-btn>
        </v-row>
    </div>
</v-row>
    
</template>

<script>

import '@/assets/scss/counterComponent.scss'


export default{
    name: 'ec_counterComponent',
    props: {
        title: String,
        subtitle: String,
        iconName: String,

},
    data() {
    return {
      number: 0,
    };
  },
  methods: {
    increment() {
      this.number++;
    },
    decrement() {
      this.number--;
    },
  },
}

</script>