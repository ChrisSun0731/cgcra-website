<template>
  <q-expansion-item expand-separator icon="list" label="法規" default style="text-align: left">
    <div style="text-align: center">
      <br />
      <q-btn
        size="l"
        style="color: white; background-color: #40477b"
        class="q-mx-auto"
        @click="goToLaw1"
        >代聯會組織章程</q-btn
      >
      <br />
      <br />
      <q-btn
        size="l"
        style="color: white; background-color: #40477b"
        class="q-mx-auto"
        @click="goToLaw2"
        >班代大會詢答辦法</q-btn
      >
      <br />
      <br />
      <q-btn
        size="l"
        style="color: white; background-color: #40477b"
        class="q-mx-auto"
        @click="goToLaw4"
        >學生申訴案件處理要點</q-btn
      >
      <br />
      <br />
      <q-btn
        size="l"
        style="color: white; background-color: #40477b"
        class="q-mx-auto"
        @click="goToLaw3"
        >校務會議學生代表產生暨職權行使辦法</q-btn
      >
    </div>
    <div><br /></div>
  </q-expansion-item>
</template>

<script lang="ts">
export default {
  methods: {
    goToLaw1() {
      window.open(
        'https://drive.google.com/file/d/1k8oLIpDw4uP2L9kdyJwz6eHXCDcmw6uk/view?usp=sharing',
        '_blank',
      );
    },
    goToLaw2() {
      window.open(
        'https://drive.google.com/file/d/1F7t19xyzRo_tJBu9I8udFiGQBGY_fSB4/view?usp=sharing',
        '_blank',
      );
    },
    goToLaw3() {
      window.open(
        'https://drive.google.com/file/d/1OEh9uGyilimrFe51Zql6O2aKe1E4uVAq/view?usp=sharing',
        '_blank',
      );
    },
    goToLaw4() {
      window.open(
        'https://drive.google.com/file/d/1VgHlVnWW4Qhxk5HofcFAwPboIDhajuEW/view?usp=sharing',
        '_blank',
      );
    },
  },
};
</script>

<style scoped></style>
