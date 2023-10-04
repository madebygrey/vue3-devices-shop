import { defineStore } from "pinia";
import { ref } from "vue";

export const useDevicesStore = defineStore("devices", () => {
  const types = ref([
    { id: 1, name: "Холодильники" },
    { id: 2, name: "Смартфоны" },
    { id: 3, name: "Ноутбуки" },
    { id: 4, name: "Телевизоры" },
  ]);
  const brands = ref([
    { id: 1, name: "Samsung" },
    { id: 2, name: "Apple" },
    { id: 3, name: "Lenovo" },
    { id: 4, name: "Asus" },
  ]);
  const devices = ref([
    {
      id: 1,
      name: "Iphone 12 Pro",
      price: 25000,
      rating: 5,
      img: "https://5.imimg.com/data5/SELLER/Default/2021/1/WI/AB/HP/14753644/iphone-12-pro-max-2-.jpg",
    },
    {
      id: 2,
      name: "Iphone 12 Pro",
      price: 15000,
      rating: 3,
      img: "https://5.imimg.com/data5/SELLER/Default/2021/1/WI/AB/HP/14753644/iphone-12-pro-max-2-.jpg",
    },
    {
      id: 3,
      name: "Iphone 12 Pro",
      price: 5000,
      rating: 5,
      img: "https://5.imimg.com/data5/SELLER/Default/2021/1/WI/AB/HP/14753644/iphone-12-pro-max-2-.jpg",
    },
    {
      id: 4,
      name: "Iphone 5",
      price: 2000,
      rating: 1,
      img: "https://5.imimg.com/data5/SELLER/Default/2021/1/WI/AB/HP/14753644/iphone-12-pro-max-2-.jpg",
    },
    {
      id: 5,
      name: "Iphone 12 Pro",
      price: 5000,
      rating: 5,
      img: "https://5.imimg.com/data5/SELLER/Default/2021/1/WI/AB/HP/14753644/iphone-12-pro-max-2-.jpg",
    },
    {
      id: 6,
      name: "Iphone 5",
      price: 2000,
      rating: 1,
      img: "https://5.imimg.com/data5/SELLER/Default/2021/1/WI/AB/HP/14753644/iphone-12-pro-max-2-.jpg",
    },
  ]);
  const selectedType = ref({ id: 0, name: "" });
  const selectedBrand = ref({ id: 0, name: "" });
  const page = ref(1);
  const totalCount = ref(devices.value.length);
  const limit = ref(3);

  function setSelectedType(state) {
    selectedType.value = state;
  }
  function setSelectedBrand(state) {
    selectedBrand.value = state;
  }
  function getDeviceById(id: number) {
    return devices.value.filter((device) => device.id == id);
  }
  function addType(type: { id: number; name: string }) {
    types.value.push(type);
  }
  function addBrand(brand: { id: number; name: string }) {
    brands.value.push(brand);
  }
  function addDevice(device: {
    id: number;
    name: string;
    price: number;
    rating: number;
    img: string;
  }) {
    devices.value.push(device);
  }

  function setPage(state: number) {
    page.value = state;
  }
  function setTotalCount(state: number) {
    totalCount.value = state;
  }
  function setLimit(state: number) {
    limit.value = state;
  }

  return {
    types,
    brands,
    devices,
    selectedType,
    selectedBrand,
    setSelectedType,
    setSelectedBrand,
    getDeviceById,
    addType,
    addBrand,
    addDevice,
    page,
    totalCount,
    limit,
    setPage,
  };
});
