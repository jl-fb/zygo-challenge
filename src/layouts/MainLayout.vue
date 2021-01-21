<template>
  <q-layout view="lHh Lpr lFf">
    <q-header>
      <q-toolbar>
        <q-btn
          color="grey-2"
          flat
          dense
          round
          icon="menu"
          aria-label="Menu"
          @click="leftDrawerOpen = !leftDrawerOpen"
        />

        <q-toolbar-title class="text-grey-2">
          Zygo Challenge App
        </q-toolbar-title>
      </q-toolbar>
      <div class="q-px-lg q-pt-xl q-mb-md">
        <div class="text-h3  text-grey-2">Todo</div>
        <div class="q-ml-sm text-indigo-2">{{ todaysDate }}</div>
      </div>
      <q-img
        src="https://cdn.pixabay.com/photo/2014/05/02/23/46/bridge-336475_960_720.jpg"
        class="header-image absolute-top"
      />
    </q-header>
    <q-footer class=" xs">
      <q-tabs>
        <q-route-tab
          v-for="(nav, index) in navs"
          :key="index"
          :to="nav.to"
          :label="nav.label"
          :icon="nav.icon"
        />
      </q-tabs>
    </q-footer>
    <q-drawer
      v-model="leftDrawerOpen"
      show-if-above
      :width="250"
      :breakpoint="614"
    >
      <q-scroll-area
        style="height: calc(100% - 185px); margin-top: 185px; border-right: 1px solid #ddd"
      >
        <q-list padding>
          <q-item-label header>Páginas</q-item-label>
          <q-item
            :to="nav.to"
            exact
            clickable
            v-ripple
            v-for="(nav, index) in navs"
            :key="index"
          >
            <q-item-section avatar>
              <q-icon :name="nav.icon" />
            </q-item-section>

            <q-item-section> {{ nav.label }} </q-item-section>
          </q-item>
        </q-list>
      </q-scroll-area>

      <q-img
        class="absolute-top "
        src="https://cdn.pixabay.com/photo/2014/05/02/23/46/bridge-336475_960_720.jpg"
        style="height: 185px"
      >
        <div class="absolute-bottom bg-transparent">
          <q-avatar size="56px" class="q-mb-sm">
            <img src="https://cdn.quasar.dev/img/boy-avatar.png" />
          </q-avatar>
          <div class="text-weight-bold">Joao Borghezan</div>
          <div>@jlfb_</div>
        </div>
      </q-img>
    </q-drawer>

    <q-page-container>
      <keep-alive>
        <router-view />
      </keep-alive>
    </q-page-container>
  </q-layout>
</template>

<script>
import EssentialLink from "components/EssentialLink.vue";
import { date } from "quasar";
import navs from "../router/navis";

export default {
  name: "MainLayout",
  data() {
    return {
      leftDrawerOpen: false,

      navs: navs
    };
  },
  computed: {
    todaysDate() {
      const timestamp = Date.now();
      return date.formatDate(timestamp, "dddd DD/MM/YY HH:mm");
    }
  }
};
</script>
<style lang="scss">
.header-image {
  height: 100%;
  z-index: -1;
  opacity: 0.4;
}
</style>
