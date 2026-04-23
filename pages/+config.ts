import type { Config } from "vike/types";
import vikeVue from "vike-vue/config";

// Default config (can be overridden by pages)
// https://vike.dev/config

const config: Config = {
  // https://vike.dev/head-tags
  title: "Vite SSR app",
  description: "App using Vite + Vike",

  extends: [vikeVue],
};

export default config;
