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
          alt="cklogo"
          style="max-width: 150px; max-height: 150px"
          fit="contain"
        />
        <div class="text-h5 text-center q-mt-md">
          <strong>臺北市立成功高級中學代班級代表聯席會</strong>
        </div>
      </q-card-section>

      <q-separator spaced />

      <q-card-section class="q-pa-md">
        <div class="text-h6 text-center q-mb-md"><strong>關於代聯會</strong></div>
        <div class="text-body1">
          成功高中代聯會分為行政部門及班代大會，行政部門又分為學權、活動、公關、美宣、總務及秘書六個常設組，
          任內辦理各式活動、講座，也會向學校爭取權益並參與校內重大會議。
          班代大會負責監督制衡行政部門，其權責為審理預算、制定法案、表決提案。
        </div>
      </q-card-section>

      <q-separator spaced />

      <q-card-section class="q-pa-md text-center">
        <div class="text-h6 q-mb-md"><strong>聯絡代聯會</strong></div>
        <q-btn flat round size="xl" color="grey-2" class="q-pa-none" @click="goToInstagram">
          <q-img
            src="/icons/instagram.svg"
            alt="Instagram"
            style="width: 100px; height: 100px"
            fit="contain"
          />
        </q-btn>
        <div class="text-subtitle1 q-mt-sm"><strong>Instagram</strong></div>
      </q-card-section>
    </q-card>
  </q-page>
</template>

<script lang="ts">
export default {
  methods: {
    goToInstagram() {
      window.open('https://www.instagram.com/cgcra69_official/', '_blank');
    },
  },
};
</script>

<style scoped></style>
