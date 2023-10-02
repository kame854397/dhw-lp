import { defineConfig } from 'astro/config';
import relativeLinks from 'astro-relative-links';
import react from "@astrojs/react";
import { astroImageTools } from 'astro-imagetools';

// https://astro.build/config
export default defineConfig({
  integrations: [relativeLinks(),react(),astroImageTools]
});