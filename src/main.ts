import { ViteSSG } from "vite-ssg/single-page";
// import { createApp } from "vue";
import "./style.css";
import App from "./App.vue";

export const createApp = ViteSSG(App);
