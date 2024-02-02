import { defineConfig } from "umi";

export default defineConfig({
  routes: [
    {
      path: "/",
      component: "@/layouts/index",
    },
  ],
  npmClient: "pnpm",
  outputPath: "dist",
  publicPath: "/",
  title: "迪捷公司官网首页重构",
  favicons: ["/favicon.png"],
});
