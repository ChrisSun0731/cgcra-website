<template>
  <q-page class="q-pa-md">
    <q-card flat bordered class="q-pa-xl q-mx-auto shadow-2" style="max-width: 700px; width: 100%">
      <q-card-section class="column items-center">
        <q-img
          src="/icons/LOGO.ico"
          alt="cglogo"
          style="max-width: 40%; max-height: 40%"
          fit="contain"
        />
        <div class="text-h4 text-center q-mt-md">
          <br />
          <strong>聯絡代聯會</strong>
          <br /><br />
        </div>
      </q-card-section>

      <q-separator spaced />

      <q-card-section class="text-canter">
        <div class="text-h5 text-center q-mt-md">
          <strong>學生意見箱回覆</strong> <br /><br />
          <q-btn
            size="l"
            style="color: white; background-color: #40477b"
            class="q-mx-auto"
            @click="goToReplyGoogleDrive"
            >學生意見箱回覆</q-btn
          >
        </div>
      </q-card-section>

      <q-separator spaced />

      <q-card-section style="text-align: center">
        <div class="q-gutter-md">
          <iframe
            src="https://docs.google.com/forms/d/1ccvDMQdWxV_GI4cWGI0un7PL67dW3PMgDAw-VhxNkrw/viewform?edit_requested=true"
            width="100%"
            height="600"
            style="max-width: 100%; max-height: 100%; border: none; border-radius: 3%"
            fit="contain"
          ></iframe>
        </div>
      </q-card-section>
    </q-card>
  </q-page>
</template>

<script lang="ts">
export default {
  methods: {
    goToReplyGoogleDrive() {
      window.open(
        'https://drive.google.com/drive/folders/1JY85CGzynRJtoBMtYpMxTaWAIEF351d1',
        '_blank',
      );
    },
  },
};
</script>
