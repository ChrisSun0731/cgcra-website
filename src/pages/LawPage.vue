<template>
  <q-page class="row items-center justify-center">
    <q-card
      flat
      bordered
      class="q-pa-xl q-mx-auto shadow-2 bg-white"
      style="max-width: 800px; width: 100%"
    >
      <q-card-section class="column items-center">
        <q-img
          src="/icons/LOGO.ico"
          alt="cglogo"
          style="max-width: 150px; max-height: 150px"
          fit="contain"
        />
        <div class="text-h5 text-center q-mt-md">
          <strong>法規、公告與會議紀錄</strong>
        </div>
      </q-card-section>

      <q-separator spaced />

      <q-card-section class="q-pa-md text-center" fit="contain">
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
