<template>
    <v-layout>
      <v-main>
    <eC_mainNavBar />
    <ec_helpCenter v-bind:helpCenter="helpCenter"></ec_helpCenter>
    <ec_footer/>
  </v-main>
  </v-layout>
  </template>
  <script setup>
//   import '@/components/organisms/helpcenter/scss/hel.scss'
  import eC_mainNavBar from '@/components/organisms/nav/mainNavBar.vue'
  import ec_footer from '@/components/organisms/nav/footer.vue'
  import ec_helpCenter from '@/components/organisms/helpcenter/helpcenter.vue'
  </script>
  
<script>
    export default {
        data() {
          return {
              helpCenter: [
                  {
                      //General flight Infos
                      title: 'Título da dúvida',
                      answer: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent interdum, est vel tristique dictum, enim dolor mollis magna, tincidunt viverra neque dolor ut metus. Ut rhoncus mattis turpis, non egestas libero pellentesque vel. Etiam dapibus ex est, eget maximus nisl ultricies et. Nullam egestas vehicula tellus vitae fringilla. Nullam eu est justo. Nunc aliquam dui et metus rhoncus iaculis. Maecenas dignissim hendrerit mi id faucibus.',
                      callToAction: 'Nome do link',
                      url: '#/attendance'
                  },
                  {
                      //General flight Infos
                      title: 'Título da dúvida 2',
                      answer: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent interdum, est vel tristique dictum, enim dolor mollis magna, tincidunt viverra neque dolor ut metus. Ut rhoncus mattis turpis, non egestas libero pellentesque vel. Etiam dapibus ex est, eget maximus nisl ultricies et. Nullam egestas vehicula tellus vitae fringilla. Nullam eu est justo. Nunc aliquam dui et metus rhoncus iaculis. Maecenas dignissim hendrerit mi id faucibus.',                      
                  },
                  {
                      //General flight Infos
                      title: 'Título da dúvida 3',
                      answer: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent interdum, est vel tristique dictum, enim dolor mollis magna, tincidunt viverra neque dolor ut metus. Ut rhoncus mattis turpis, non egestas libero pellentesque vel. Etiam dapibus ex est, eget maximus nisl ultricies et. Nullam egestas vehicula tellus vitae fringilla. Nullam eu est justo. Nunc aliquam dui et metus rhoncus iaculis. Maecenas dignissim hendrerit mi id faucibus.',
                      callToAction: 'Nome do link',
                      url: '#/account'
                  }
                  
              ]
          }
      }
  }
  </script>
  
  