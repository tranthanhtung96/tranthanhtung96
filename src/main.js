import { createApp } from "vue";
import "./style.css";
import App from "./App.vue";

// import 'vuetify/styles'
import { createVuetify } from "vuetify";
import * as components from "vuetify/components";
import * as directives from "vuetify/directives";

import { vi } from "vuetify/locale";

const vuetify = createVuetify({
  components,
  directives,
  locale: {
    locale: "vi",
    messages: { vi },
  },
});

createApp(App).use(vuetify).mount("#app");
