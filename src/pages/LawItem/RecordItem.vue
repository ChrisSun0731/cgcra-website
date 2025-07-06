<template>
  <q-expansion-item expand-separator icon="list" label="會議記錄" default style="text-align: left">
    <div style="text-align: center">
      <br />
      <q-btn
        size="l"
        style="color: white; background-color: #40477b; text-align: center"
        class="q-mx-auto"
        @click="goToLaw6"
        >會議記錄</q-btn
      >
    </div>
    <div><br /></div>
  </q-expansion-item>
</template>

<script lang="ts">
export default {
  methods: {
    goToLaw6() {
      window.open(
        'https://drive.google.com/drive/folders/1upONXjVRPHLK5Pk2bG_wJ6jUpqAOxfSP',
        '_blank',
      );
    },
  },
};
</script>
<style scoped></style>
