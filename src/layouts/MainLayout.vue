<template>
  <q-layout view="lHh Lpr lFf">
    <q-header elevated>
      <q-toolbar>
        <q-btn flat dense round icon="menu" aria-label="Menu" @click="toggleLeftDrawer" />
        <q-toolbar-title>
          <q-avatar>
            <img alt="favicon" src="icons/LOGO.ico" height="38" width="38" />
          </q-avatar>
          成功高中代聯會
        </q-toolbar-title>
      </q-toolbar>
    </q-header>

    <q-drawer v-model="leftDrawerOpen" show-if-above bordered>
      <q-list>
        <q-item-label header> 選單 </q-item-label>
        <EssentialLink v-for="link in linksList" :key="link.title" v-bind="link" />
      </q-list>
    </q-drawer>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import EssentialLink, { type EssentialLinkProps } from 'components/EssentialLink.vue';

const leftDrawerOpen = ref(true);

const linksList: EssentialLinkProps[] = [
  { title: '首頁', icon: 'home', link: '/' },
  { title: '法規、公告與會議紀錄', icon: 'class', link: '/law' },
  { title: '行政', icon: 'people', link: '/administration' },
  { title: '歷史', icon: 'history', link: '/history' },
  { title: '聯絡代聯會', icon: 'mail', link: '/contact' },
  { title: '關於', icon: 'info', link: '/about' },
];

function toggleLeftDrawer() {
  leftDrawerOpen.value = !leftDrawerOpen.value;
}
</script>

<style scoped></style>
