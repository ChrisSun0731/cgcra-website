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
        <div>
          <q-btn flat dense icon="brightness_6" @click="toggleDark" />
          <q-btn flat dense icon="fullscreen" @click="toggleFullscreen" />
        </div>
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
import { ref, onMounted } from 'vue';
import EssentialLink, { type EssentialLinkProps } from 'components/EssentialLink.vue';
import { Dark, LocalStorage } from 'quasar';

const leftDrawerOpen = ref<boolean>(true);

const linksList: EssentialLinkProps[] = [
  {
    title: '首頁',
    caption: '',
    icon: 'home',
    link: '/',
  },
  {
    title: '法規',
    caption: '',
    icon: 'class',
    link: '/law',
  },
  {
    title: '行政',
    caption: '',
    icon: 'people',
    link: '/administration',
  },
  {
    title: '歷史',
    caption: '',
    icon: 'history',
    link: '/history',
  },
  {
    title: '聯絡我們',
    caption: '',
    icon: 'mail',
    link: '/contact',
  },
];

onMounted(() => {
  const savedDarkMode = LocalStorage.getItem('dark');
  if (savedDarkMode !== null) {
    if (savedDarkMode === 'true') {
      Dark.set(true);
    } else {
      Dark.set(false);
    }
  }
});

function toggleLeftDrawer(): void {
  leftDrawerOpen.value = !leftDrawerOpen.value;
}

function toggleDark(): void {
  Dark.toggle();
  LocalStorage.set('dark', Dark.isActive);
}

function toggleFullscreen(): void {
  if (document.fullscreenElement) {
    void document.exitFullscreen();
  } else {
    void document.documentElement.requestFullscreen();
  }
}
</script>
