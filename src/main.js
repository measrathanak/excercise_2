import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import router from './routes'
import { createI18n } from 'vue-i18n'

// Optional third-party libraries
import $ from "jquery";
import _ from "lodash";
import noUiSlider from "nouislider";
import "datatables.net";
import "dropzone/dist/dropzone-min.js";
import * as VanillaCalendarPro from "vanilla-calendar-pro";

window._ = _;
window.$ = $;
window.jQuery = $;
window.DataTable = $.fn.dataTable;
window.noUiSlider = noUiSlider;
window.VanillaCalendarPro = VanillaCalendarPro;

// Preline UI
import("preline/dist/index.js");

/**
 * About
Register
User
Services
Projects
Setting
 */
const i18n = createI18n({
    locale: 'en',
    fallbackLocale: 'khm',
    messages: {
        en: {
            Register: 'Register',
            about: 'About',
            careers: 'careers',
            history: 'history',
            services: 'Services',
            project: 'project',
            setting: 'Setting',
            users:'users',
            login:'login'
        },
        khm: {
            Register: 'ចុះឈ្មោះ',
            about: 'អំពីយើង',
            careers: 'មុខរបរ',
            history: 'ប្រវត្តិ',
            services: 'សេវាកម្ម',
            project: 'គម្រោង',
            setting: 'ការកំណត់',
            users:'អ្នកប្រើប្រាស់',
            login:'ចូលប្រព័ន្ធ'
        }
    }
}
)
const app = createApp(App)
app.use(router)
app.use(i18n)
app.mount('#app')
