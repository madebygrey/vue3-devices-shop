!
<template>
  <div class="modal fade" :class="{ show: show }">
    <div class="modal-dialog modal-dialog-centered">
      <div class="modal-content">
        <div class="modal-header">
          <h1 class="modal-title fs-5" id="exampleModalLabel">Добавить тип</h1>
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
                placeholder="Введите название типа"
                v-model="newType.name" />
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
          <button type="button" class="btn btn-primary" @click="addNewType">
            Добавить
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
  import { useDevicesStore } from "@/stores/devices";
  import { ref } from "vue";
  const props = defineProps(["show", "onHide"]);
  const emits = defineEmits(["onHide"]);
  const devicesStore = useDevicesStore();
  const newType = ref({ id: Date.now(), name: "" });

  function addNewType() {
    devicesStore.addType(newType.value);
    newType.value = { id: 0, name: "" };
    emits("onHide", false);
  }
</script>

<style scoped>
  .show {
    display: block;
  }
</style>
