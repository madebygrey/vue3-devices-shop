!
<template>
  <div class="modal fade" :class="{ show: show }">
    <div class="modal-dialog modal-dialog-centered">
      <div class="modal-content">
        <div class="modal-header">
          <h1 class="modal-title fs-5">Добавить устройство</h1>
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
              <select class="form-select">
                <option selected>Выберите тип:</option>
                <option :value="item.id" :key="item.id" v-for="item of types">
                  {{ item.name }}
                </option>
              </select>
            </div>
            <div class="mb-3">
              <select class="form-select">
                <option selected>Выберите бренд:</option>
                <option
                  :value="brand.id"
                  :key="brand.id"
                  v-for="brand of brands">
                  {{ brand.name }}
                </option>
              </select>
            </div>
            <div class="mb-3">
              <input
                type="email"
                class="form-control"
                placeholder="Название устройства"
                v-model="newDevice.name" />
            </div>
            <div class="mb-3">
              <input
                type="number"
                class="form-control"
                placeholder="Стоимоть устройства"
                v-model="newDevice.price" />
            </div>
            <div class="mb-3">
              <input type="file" class="form-control" />
            </div>
            <hr />
            <button type="button" class="btn btn-primary" @click="addInfo()">
              Добавить новое свойство
            </button>
            <div class="row mt-3" v-for="item in info" :key="item.number">
              <div class="col-md-4">
                <input
                  type="text"
                  class="form-control"
                  placeholder="Введите название свойства" />
              </div>
              <div class="col-md-4">
                <input
                  type="text"
                  class="form-control"
                  placeholder="Введите описание свойства" />
              </div>
              <div class="col-md-4">
                <button
                  type="button"
                  class="btn btn-danger"
                  @click="removeInfo(item.number)">
                  Удалить
                </button>
              </div>
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
          <button type="button" class="btn btn-primary" @click="addNewDevice">
            Добавить
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
  import { ref } from "vue";
  import { storeToRefs } from "pinia";
  import { useDevicesStore } from "@/stores/devices";

  const devicesStore = useDevicesStore();
  const { types, brands } = storeToRefs(devicesStore);
  const props = defineProps(["show", "onHide"]);
  const emits = defineEmits(["onHide"]);
  const newDevice = ref({
    id: Date.now(),
    name: "",
    price: 0,
    rating: 0,
    img: "",
  });
  function addNewDevice() {
    devicesStore.addDevice(newDevice.value);
    newDevice.value = {
      id: 0,
      name: "",
      price: 0,
      rating: 0,
      img: "",
    };
    emits("onHide", false);
  }

  const info = ref([]);
  function addInfo() {
    info.value = [
      ...info.value,
      { title: "", description: "", number: Date.now() },
    ];
  }
  function removeInfo(number) {
    info.value = info.value.filter((i) => i.number !== number);
  }
</script>

<style scoped>
  .show {
    display: block;
  }
</style>
