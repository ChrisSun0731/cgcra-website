<template>
  <q-layout view="lHh Lpr lFf">
    <q-header elevated>
      <q-toolbar>
        <q-btn flat dense round icon="menu" aria-label="Menu" @click="toggleLeftDrawer" />
        <q-toolbar-title>
          <q-avatar>
            <img alt="favicon" src="icons/LOGO.ico" height="38" width="38" />
          </q-avatar>
          <span v-if="$q.screen.gt.xs" class="q-pl-sm">成功高中班級代表聯席會</span>
          <span v-else class="q-pl-sm">成功高中代聯會</span>
        </q-toolbar-title>
        <q-btn
          v-if="$q.screen.gt.xs"
          :icon="Dark.isActive ? 'dark_mode' : 'nights_stay'"
          flat
          @click="toggleDark"
          aria-label="切換暗色模式"
        />
      </q-toolbar>
    </q-header>

    <q-drawer v-model="leftDrawerOpen" show-if-above bordered>
      <q-list>
        <q-item-label header style="background-color: #40477b; color: white">選單</q-item-label>
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
import { Dark, LocalStorage } from 'quasar';
import EssentialLink, { type EssentialLinkProps } from 'components/EssentialLink.vue';

const leftDrawerOpen = ref(true);

const linksList: EssentialLinkProps[] = [
  { title: '首頁', icon: 'home', link: '/' },
  { title: '中成特約', icon: 'store', link: '/shops' },
  { title: '法規、公告與會議紀錄', icon: 'class', link: '/law' },
  { title: '行政', icon: 'people', link: '/administration' },
  { title: '歷史', icon: 'history', link: '/history' },
  { title: '聯絡代聯會', icon: 'mail', link: '/contact' },
  { title: '關於', icon: 'info', link: '/about' },
];

function toggleLeftDrawer() {
  leftDrawerOpen.value = !leftDrawerOpen.value;
}

function toggleDark() {
  Dark.toggle();
  LocalStorage.set('dark', Dark.isActive);
}

onMounted(() => {
  const saved = LocalStorage.getItem('dark');
  if (saved === true || saved === false) {
    Dark.set(saved);
  } else {
    Dark.set(Dark.isActive); // fallback to system
  }
});
</script>

<style scoped></style>
