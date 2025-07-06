<template>
  <q-page class="q-pa-md">
    <q-card
      flat
      bordered
      class="q-pa-xl q-mx-auto shadow-2 bg-white"
      style="max-width: 700px; width: 100%"
    >
      <q-card-section class="column items-center">
        <q-img
          src="/icons/LOGO.ico"
          alt="cglogo"
          style="max-width: 40%; max-height: 40%"
          fit="contain"
        />
        <div class="text-h4 text-center q-mt-md">
          <br />
          <strong>法規、公告與會議紀錄</strong>
          <br /><br />
        </div>
      </q-card-section>

      <q-separator spaced />

      <q-card-section class="q-pa-md text-center" fit="contain">
        <div class="text-center" style="font-size: 20px">
          <strong>點選查看相關內容</strong><br /><br />
        </div>
        <q-list bordered class="rounded-borders">
          <List_Law />
          <List_Announcement />
          <List_Record />
        </q-list>
      </q-card-section>
    </q-card>
  </q-page>
</template>

<script setup lang="ts">
import List_Law from './LawItem/LawItem.vue';
import List_Announcement from './LawItem/AnnouncementItem.vue';
import List_Record from './LawItem/RecordItem.vue';
</script>

<style scoped></style>
