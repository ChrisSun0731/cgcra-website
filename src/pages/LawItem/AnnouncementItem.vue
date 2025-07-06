<template>
  <q-expansion-item expand-separator icon="list" label="公告" default style="text-align: left">
    <div style="text-align: center">
      <br />
      <q-btn
        size="l"
        style="color: white; background-color: #40477b"
        class="q-mx-auto"
        @click="goToLaw5"
        >公告</q-btn
      >
    </div>
    <div><br /></div>
  </q-expansion-item>
</template>

<script lang="ts">
export default {
  methods: {
    goToLaw5() {
      window.open(
        'https://drive.google.com/drive/folders/1H6dYdMdd_86qTK-6cZuNpXIQiTZgrdql',
        '_blank',
      );
    },
  },
};
</script>
<style scoped></style>
