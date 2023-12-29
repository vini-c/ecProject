<template>
<div v-if="classData.economyClass" class="iconFlexEC EC-colorContentPrimary">
          <v-icon icon="mdi-seat-recline-normal" class="enableContent"></v-icon>
          <p class="observationText">Econômica</p>
        </div>
        <div v-if="classData.PremiumClass" class="iconFlexEC EC-colorContentPrimary">
          <v-icon icon="mdi-seat-recline-extra" class="enableContent"></v-icon>
          <p class="observationText">Premium Economy</p>
        </div>
        <div v-if="classData.ExecutiveClass" class="iconFlexEC EC-colorContentPrimary">
          <v-icon icon="mdi-seat-flat-angled" class="enableContent"></v-icon>
          <p class="observationText">Executiva</p>
 </div>
</template>
<script>
export default{
    name:'ec_classType',
    props: {classData:Object},
}
</script>