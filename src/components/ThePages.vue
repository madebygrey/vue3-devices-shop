<template>
  <nav>
    <ul class="pagination">
      <li class="page-item" v-for="page in pages">
        <a
          class="page-link"
          :class="{ active: devicesStore.page === page }"
          @click="devicesStore.setPage(page)"
          href="#"
          >{{ page }}</a
        >
      </li>
    </ul>
  </nav>
</template>

<script setup lang="ts">
  import { useDevicesStore } from "@/stores/devices";
  import { ref } from "vue";

  const devicesStore = useDevicesStore();
  const pagesCount = Math.ceil(devicesStore.totalCount / devicesStore.limit);
  const pages = ref([1]);

  for (let i = 1; i < pagesCount; i++) {
    pages.value.push(i + 1);
  }
</script>

<style scoped></style>
