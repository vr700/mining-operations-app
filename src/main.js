import {createApp} from 'vue'
import App from './App.vue'
import PrimeVue from 'primevue/config';
import 'primeflex/primeflex.css'
import Aura from '@primeuix/themes/aura';
import InputText from 'primevue/inputtext';
import Dropdown from 'primevue/dropdown';
import Calendar from 'primevue/calendar';
import Button from "primevue/button"
import Card from "primevue/card";
import DataTable from 'primevue/datatable';
import Column from 'primevue/column';
import ToastService from 'primevue/toastservice';
import Toast from 'primevue/toast';
import i18n from "@/i18n.js";
import router from "@/router.js";

const app = createApp(App);
app.use(PrimeVue, {
    theme: {
        preset: Aura
    }
});

app.component('pv-input-text', InputText);
app.component('pv-dropdown', Dropdown);
app.component('pv-calendar', Calendar);
app.component('pv-button', Button);
app.component('pv-card', Card);
app.component('pv-data-table', DataTable);
app.component('pv-column', Column);
app.component('pv-toast', Toast);

app.use(ToastService);
app.use(i18n);
app.use(router);
app.mount('#app');