<template>
    <div class="EC-colorContentPrimary d-flex centered" v-if="lugaggeData.checkedBag">
                    <v-icon icon="mdi-bag-personal" size="x-small" class="enableContent"></v-icon>
                    <v-icon icon="mdi-bag-carry-on" size="x-small" class="enableContent"></v-icon>
                    <v-icon icon="mdi-bag-suitcase" size="x-small" class="enableContent"></v-icon>
                    <p class="observationText ">Bagagem Despachada</p>
                </div>
    <div class="EC-colorContentPrimary d-flex centered" v-if="lugaggeData.boardBag">
        <v-icon icon="mdi-bag-personal" size="x-small" class="enableContent"></v-icon>
        <v-icon icon="mdi-bag-carry-on" size="x-small" class="enableContent"></v-icon>
        <v-icon icon="mdi-bag-suitcase-off-outline" size="x-small" class="disableContent"></v-icon>
        <p class="observationText ">Bagagem de Mão</p>

    </div>
    <div class="EC-colorContentPrimary d-flex centered" v-if="lugaggeData.personalBag">
        <v-icon icon="mdi-bag-personal" class="enableContent" size="x-small"></v-icon>
        <v-icon icon="mdi-bag-carry-on-off" class="disableContent" size="x-small"></v-icon>
        <v-icon icon="mdi-bag-suitcase-off-outline" class="disableContent" size="x-small"></v-icon>
        <p class="observationText ">Bagagem Pessoal</p>

    </div>
</template>
<script>
export default {
    name: "ec_luggageType",
    props: {lugaggeData:Object},
}
</script>