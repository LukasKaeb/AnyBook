import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import { createPinia } from "pinia";
// register the Base components
import BaseCard from "./components/ui/BaseCard.vue";
import BaseButton from "./components/ui/BaseButton.vue";
import TheHeader from "./components/ui/TheHeader.vue";

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDWF33xhnXFzGq_9dPFJcDkXQmrmy7wJNU",
  authDomain: "anybook-12bb9.firebaseapp.com",
  databaseURL:
    "https://anybook-12bb9-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "anybook-12bb9",
  storageBucket: "anybook-12bb9.appspot.com",
  messagingSenderId: "200611605386",
  appId: "1:200611605386:web:2d41265d12113a77fcf673",
};

// Initialize Firebase
initializeApp(firebaseConfig);

const app = createApp(App);
app.use(router);
app.use(createPinia());
app.component("base-card", BaseCard);
app.component("base-button", BaseButton);
app.component("the-header", TheHeader);

app.mount("#app");
