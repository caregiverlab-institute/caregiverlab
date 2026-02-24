import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap";

export default defineConfig({
  site: "https://caregiverlab.co.kr",

  integrations: [
    sitemap({
      // 드래프트 페이지 제외 (자동 처리)
      filter: (page) => !page.includes("/draft/"),
    }),
  ],

  // 빌드 최적화
  build: {
    inlineStylesheets: "auto",
  },

  // 향후 Nuxt/PWA 마이그레이션 대비:
  // - 콘텐츠는 src/content/ 마크다운으로 유지 (Nuxt Content 호환)
  // - API 라우트가 필요해지면 /src/pages/api/ 하위에 추가
  // - PWA는 @vite-pwa/astro 또는 Nuxt PWA 모듈로 전환

  vite: {
    build: {
      cssMinify: true,
    },
  },
});
