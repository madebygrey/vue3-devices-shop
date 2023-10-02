import { defineStore } from "pinia";

export default defineStore("devices", {
  state: () => ({
    types: [
      { id: 1, name: "Холодильники" },
      { id: 2, name: "Смартфоны" },
    ],
    brands: [
      { id: 1, name: "Samsung" },
      { id: 2, name: "Apple" },
    ],
    devices: [
      {
        id: 1,
        name: "Iphone 12 Pro",
        price: 25000,
        raing: 5,
        img: "https://5.imimg.com/data5/SELLER/Default/2021/1/WI/AB/HP/14753644/iphone-12-pro-max-2-.jpg",
      },
    ],
  }),
  getters: {
    getTypes(state) {
        return state.types
    },
    getBrands(state) {
        return state.brands
    },
    getDevices(state) {
        return state.devices
    }
  }
  // actions: {
  //   async register(values) {
  //     const userCred = await auth.createUserWithEmailAndPassword(
  //       values.email,
  //       values.password
  //     );

  //     await usersCollection.doc(userCred.user.uid).set({
  //       name: values.name,
  //       email: values.email,
  //       age: values.age,
  //       country: values.country,
  //     });

  //     await userCred.user.updateProfile({
  //       displayName: values.name,
  //     });

  //     this.userLoggedIn = true;
  //   },
  //   async authenticate(values) {
  //     await auth.signInWithEmailAndPassword(values.email, values.password);

  //     this.userLoggedIn = true;
  //   },
  //   async signOut() {
  //     await auth.signOut();

  //     this.userLoggedIn = false;
  //   },
  // },
});
