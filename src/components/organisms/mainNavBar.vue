<template>
  <v-navigation-drawer v-model="drawer" location="right" temporary width="310" class="mobileAppNav">
    <div class="d-flex header pt-4">
      <p class="headerBottomSheet">Menu</p>
      <v-btn elevation="0" icon="mdi-close" size="small" @click="drawer = false"></v-btn>
    </div>
    <section class="myAccountSection">
      <div class="borderArea">
      <div class="Nav_userData">
        <v-avatar size="64" class="avatar_border hideDesktopNav"
          image="https://d3njjcbhbojbot.cloudfront.net/api/utilities/v1/imageproxy/https://images.ctfassets.net/wp1lcwdav1p1/HNuAe2M59cQATyNkXb4mR/f3503ac70f716f3bb3e7b0161b4e53bd/edited_iStock-693553358__1_.png?w=1500&h=680&q=60&fit=fill&f=faces&fm=jpg&fl=progressive&auto=format%2Ccompress&dpr=1&w=1000&h="></v-avatar>
        <div>
          <p class="text-body">User Name</p>
          <p class="text-caption">Qualquer info relevante</p>
        </div>
      </div>
      <div class="UsercardDetail">
        <div class="userCardLine"></div><v-icon size="x-small" icon="mdi-airplane-takeoff"></v-icon>

      </div>
      <div class="myAccountNavBtns">
        <v-btn density="default" variant="tonal" size="small">Minha conta</v-btn>
        <v-btn density="default" class="logoutBtn" color="red" variant="tonal" size="small"
          append-icon="mdi-logout">Sair</v-btn>
      </div>
    </div>
    </section>
    <section class="navBarMobile">
      <v-list :items="items"></v-list>
    </section>

    <template v-slot:append>
        <v-row class="justify-end pa-5 pt-7">
          <p class="legalonNav">
            <v-icon icon="mdi-security" size="x-small"></v-icon><p class="versionState">Ambiente Protegido | Embarque Certo V1.0.0</p>
          </p>
        </v-row>
        </template>
  </v-navigation-drawer>
  <v-app-bar class="navBar" :elevation="0">
    <img src="../../assets/ecLogo_full.svg" class="ecLogo ml-4">
    <template v-slot:append>
      <v-btn size="small" class="hideTablet" type="plain" density="default">Atendimento</v-btn>
      <v-divider vertical class="hideTablet" inset></v-divider>
      <v-btn size="small" class="hideTablet" type="plain" density="default">Precisa de ajuda</v-btn>
      <v-divider vertical class="hideTablet" inset></v-divider>
      <v-menu class="hideTablet">
        <template v-slot:activator="{ props }">
          <v-btn size="small" class="userMenu hideTablet" type="plain" v-bind="props">
            <p class="pr-2 hideTablet">Olá User name</p>
            <v-avatar size="38" class="avatar_border hideTablet"
              image="https://d3njjcbhbojbot.cloudfront.net/api/utilities/v1/imageproxy/https://images.ctfassets.net/wp1lcwdav1p1/HNuAe2M59cQATyNkXb4mR/f3503ac70f716f3bb3e7b0161b4e53bd/edited_iStock-693553358__1_.png?w=1500&h=680&q=60&fit=fill&f=faces&fm=jpg&fl=progressive&auto=format%2Ccompress&dpr=1&w=1000&h="></v-avatar>
          </v-btn>
        </template>
        <v-list>
          <v-list-item v-for="(itemsDesktop, index) in items" :key="index" :value="index">
            <v-list-item-title>{{ itemsDesktop.title }}</v-list-item-title>
          </v-list-item>
        </v-list>
      </v-menu>
      <v-btn @click.stop="drawer = !drawer" size="default" icon="mdi-menu" class="hideDesktopNav" type="plain"
        density="default"></v-btn>

    </template>
  </v-app-bar>
</template>

<script>
import '@/assets/scss/mainNavBar.scss'
export default {
  name: 'eC_mainNavBar',
  data: () => ({
    itemsDesktop: [
      { title: 'Minha Reservas' },
      { title: 'Minha Conta' },
      { title: 'Sair' },
    ],
    drawer: false,
    items: [
      {
        title: 'Minha conta',
        value: 'bookings',
      },
      {
        title: 'Atendimento',
        value: 'attendance',
      },
      {
        title: 'Preciso de Ajuda',
        value: 'helpcenter',
      }
    ],
  }),
}
</script>