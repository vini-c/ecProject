<template>
    <v-app-bar class="navBar" :elevation="0">
      <img src="../../assets/ecLogo_full.svg" class="ecLogo ml-4">
      <template v-slot:append>
          <v-btn size="small" class="hide-xs" type="text" density="default">Atendimento</v-btn>
          <v-divider vertical inset></v-divider>
          <v-btn size="small" class="hide-xs" type="text" density="default">Precisa de ajuda</v-btn>
          <v-divider vertical inset></v-divider>
          <v-menu>
            <template v-slot:activator="{ props }">
              <v-btn size="small" class="userMenu" type="text" v-bind="props">
              <p class>Olá Renato</p>
              <v-avatar size="32" image="https://d3njjcbhbojbot.cloudfront.net/api/utilities/v1/imageproxy/https://images.ctfassets.net/wp1lcwdav1p1/HNuAe2M59cQATyNkXb4mR/f3503ac70f716f3bb3e7b0161b4e53bd/edited_iStock-693553358__1_.png?w=1500&h=680&q=60&fit=fill&f=faces&fm=jpg&fl=progressive&auto=format%2Ccompress&dpr=1&w=1000&h="></v-avatar>
              </v-btn>
            </template>
            <v-list>
              <v-list-item
                v-for="(item, index) in items"
                :key="index"
                :value="index"
              >
                <v-list-item-title>{{ item.title }}</v-list-item-title>
              </v-list-item>
            </v-list>
          </v-menu>
        </template>
    </v-app-bar>
</template>

<script>
export default {
    name:'eC_mainNavBar',
    data: () => ({
      items: [
        { title: 'Minha Reservas' },
        { title: 'Minha Conta' },
        { title: 'Sair' },
      ],
    }),
  }
</script>