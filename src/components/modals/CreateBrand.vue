!
<template>
  <div class="modal fade" :class="{ show: show }">
    <div class="modal-dialog modal-dialog-centered">
      <div class="modal-content">
        <div class="modal-header">
          <h1 class="modal-title fs-5" id="exampleModalLabel">
            Добавить бренд
          </h1>
          <button
            type="button"
            class="btn-close"
            data-bs-dismiss="modal"
            aria-label="Close"
            @click="$emit('onHide', false)"></button>
        </div>
        <div class="modal-body">
          <form>
            <div class="mb-3">
              <input
                type="text"
                class="form-control"
                placeholder="Введите название бренда"
                v-model="newBrand.name" />
            </div>
          </form>
        </div>
        <div class="modal-footer">
          <button
            type="button"
            class="btn btn-secondary"
            data-bs-dismiss="modal"
            @click="$emit('onHide', false)">
            Закрыть
          </button>
          <button type="button" class="btn btn-primary" @click="addNewBrand">
            Добавить
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
  import { ref } from "vue";
  import { useDevicesStore } from "@/stores/devices";
  const props = defineProps(["show", "onHide"]);
  const emits = defineEmits(["onHide"]);
  const devicesStore = useDevicesStore();
  const newBrand = ref({ id: Date.now(), name: "" });

  function addNewBrand() {
    devicesStore.addBrand(newBrand.value);
    newBrand.value = { id: 0, name: "" };
    emits("onHide", false);
  }
</script>

<style scoped>
  .show {
    display: block;
  }
</style>
