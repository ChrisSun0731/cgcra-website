<template>
  <q-page class="q-pa-md">
    <q-card flat bordered class="q-pa-lg q-mx-auto" style="max-width: 700px; width: 100%">
      <q-card-section class="column items-center">
        <q-img
          src="../../public/icons/LOGO.ico"
          alt="cglogo"
          style="max-width: 50%; max-height: 50%"
          fit="contain"
        />
        <br />
        <h4 class="text-center"><strong>成功高中代聯會</strong></h4>
      </q-card-section>

      <q-separator spaced />

      <q-card-section>
        <div class="q-pb-xs">
          此平台是由建國中學班聯會80屆上主席暨班級代表大會79屆下副議長孫逢邦及成功高中代聯會70屆學權呂晨韶共同製做。
        </div>
        <div class="q-pb-xs">
          此平台仍於開發階段，尚有不足之處，希望各界能提供意見與建議，以利系統之改進。
        </div>
        <div class="q-pb-xs">歡迎聯絡成功代聯會或寄信至chris20090731@gmail.com</div>
      </q-card-section>
    </q-card>
  </q-page>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
export default defineComponent({
  name: 'AboutPage',
});
</script>
