import { defineStore } from "pinia";
import { ref } from "vue";
// import { auth, usersCollection } from "@/includes/firebase";

export const useUserStore = defineStore("user", () => {
  const userLoggedIn = ref(true);
  function setUserLoggedIn(state: boolean) {
    userLoggedIn.value = state;
  }

  return { userLoggedIn, setUserLoggedIn };
});

// export default defineStore("user", {
//   state: () => ({
//     userLoggedIn: false,
//   }),
//   actions: {
//     setUserLoggedIn(val: boolean) {
//       this.userLoggedIn = val;
//     },
//   },
//   // actions: {
//   //   async register(values) {
//   //     const userCred = await auth.createUserWithEmailAndPassword(
//   //       values.email,
//   //       values.password
//   //     );

//   //     await usersCollection.doc(userCred.user.uid).set({
//   //       name: values.name,
//   //       email: values.email,
//   //       age: values.age,
//   //       country: values.country,
//   //     });

//   //     await userCred.user.updateProfile({
//   //       displayName: values.name,
//   //     });

//   //     this.userLoggedIn = true;
//   //   },
//   //   async authenticate(values) {
//   //     await auth.signInWithEmailAndPassword(values.email, values.password);

//   //     this.userLoggedIn = true;
//   //   },
//   //   async signOut() {
//   //     await auth.signOut();

//   //     this.userLoggedIn = false;
//   //   },
//   // },
// });
