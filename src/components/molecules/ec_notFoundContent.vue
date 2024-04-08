<template>
   <section class="notFounded">
    <div class="flexNotFounded">
        <div class="illustrationSide">
            <img src="@/assets/notFindable_search.svg" v-if="searchError"/>
            <img src="@/assets/notFindable_page.svg" v-if="notFound" />
        </div>
        <div class="contentSide">
            <h1>{{title}}</h1>
            <p>{{subtitle}}</p>
            <v-row  v-if="mainActionName || secondaryActionName"  no-gutters class="ga-2 mt-4 mobileActions" align="center" justify="flex-start">
                <v-btn  v-if="mainActionName" href={{mainactionValue}} class="rounded-xl main-btn font-weight-bold"  elevation="0">{{mainActionName}}</v-btn>
            <v-btn v-if="secondaryActionName" href={{secondaryActionValue}} class="rounded-xl font-weight-bold"  variant="outlined">{{secondaryActionName}}</v-btn>
            </v-row>    
        </div>
       
    </div>
   </section>
</template>

<script>
import '@/components/molecules/scss/notFounded.scss'
export default {
    name: 'notFoundedContent',
    props: {
      title: String,
      subtitle: String,
      mainAction: Boolean,
      mainActionName: String,
      mainactionValue: String,
      secondaryAction: Boolean,
      secondaryActionName: String,
      secondaryActionValue: String,
      searchError: Boolean,
      notFound: Boolean,
    }
}
</script>