// tina/config.ts
import { defineConfig } from "tinacms";
var config_default = defineConfig({
  branch: process.env.GITHUB_BRANCH || "main",
  clientId: process.env.TINA_PUBLIC_CLIENT_ID || null,
  token: process.env.TINA_TOKEN || null,
  build: {
    outputFolder: "admin",
    publicFolder: "public"
  },
  media: {
    tina: {
      mediaRoot: "images",
      publicFolder: "public"
    }
  },
  schema: {
    collections: [
      // ─── SITE SETTINGS ──────────────────────────────────────────
      {
        name: "settings",
        label: "Site Settings",
        path: "src/content/settings",
        format: "json",
        ui: {
          allowedActions: { create: false, delete: false }
        },
        fields: [
          {
            type: "image",
            name: "heroVideo",
            label: "Hero video (optional)",
            description: "Upload an MP4 video. When set, the video plays instead of the hero image. Use a compressed H.264 MP4 for best browser support."
          },
          {
            type: "image",
            name: "heroImage",
            label: "Hero image (fallback)",
            description: "Recommended: 2200 \xD7 1240px (landscape, 16:9 or wider). Cropped to centre. Used when no video is set."
          },
          {
            type: "string",
            name: "bio",
            label: "Bio",
            ui: { component: "textarea" },
            required: true
          },
          {
            type: "string",
            name: "projectDescription",
            label: "Project page description (sticky, used as default)",
            ui: { component: "textarea" }
          },
          {
            type: "string",
            name: "location",
            label: "Location"
          },
          {
            type: "string",
            name: "timezone",
            label: "Timezone"
          },
          {
            type: "string",
            name: "copyright",
            label: "Copyright"
          }
        ]
      },
      // ─── PROJECTS ───────────────────────────────────────────────
      {
        name: "projects",
        label: "Projects",
        path: "src/content/projects",
        format: "json",
        fields: [
          {
            type: "string",
            name: "client",
            label: "Client",
            isTitle: true,
            required: true
          },
          {
            type: "number",
            name: "order",
            label: "Display order (lower = first)"
          },
          {
            type: "image",
            name: "cardImage",
            label: "Card image (home page thumbnail)",
            description: "Recommended: 1200 \xD7 1200px (square, 1:1). Cropped to centre."
          },
          {
            type: "image",
            name: "cardImageOverlay",
            label: "Card image overlay (optional, stacks on top)",
            description: "Same size as card image: 1200 \xD7 1200px square."
          },
          {
            type: "string",
            name: "cardDescription",
            label: "Card description",
            ui: { component: "textarea" }
          },
          {
            type: "string",
            name: "stickyDescription",
            label: "Project sticky description (overrides site default)",
            ui: { component: "textarea" }
          },
          {
            type: "object",
            name: "imageBlocks",
            label: "Image blocks",
            list: true,
            templates: [
              {
                name: "fullWidth",
                label: "Full width image",
                fields: [
                  {
                    type: "image",
                    name: "src",
                    label: "Image",
                    description: "Recommended: 2000 \xD7 1130px (landscape, ~16:9). Cropped to centre. On mobile crops to ~16:10."
                  },
                  { type: "string", name: "alt", label: "Alt text" }
                ]
              },
              {
                name: "fullWidthVideo",
                label: "Full width video",
                fields: [
                  {
                    type: "image",
                    name: "src",
                    label: "Video (MP4)",
                    description: "Upload a compressed H.264 MP4. Recommended: 2000 \xD7 1130px (landscape, ~16:9). Autoplays muted and loops."
                  }
                ]
              },
              {
                name: "pair",
                label: "Image pair (side by side)",
                fields: [
                  {
                    type: "image",
                    name: "leftSrc",
                    label: "Left image",
                    description: "Recommended: 1200 \xD7 1340px (portrait, ~9:10). On mobile stacks full-width and crops to ~1:1."
                  },
                  { type: "string", name: "leftAlt", label: "Left alt text" },
                  {
                    type: "image",
                    name: "leftVideoSrc",
                    label: "Left video (MP4, overrides image)",
                    description: "Optional. Upload an MP4 to use video instead of an image on the left. Autoplays muted and loops."
                  },
                  {
                    type: "image",
                    name: "rightSrc",
                    label: "Right image",
                    description: "Recommended: 1200 \xD7 1340px (portrait, ~9:10). On mobile stacks full-width and crops to ~1:1."
                  },
                  { type: "string", name: "rightAlt", label: "Right alt text" },
                  {
                    type: "image",
                    name: "rightVideoSrc",
                    label: "Right video (MP4, overrides image)",
                    description: "Optional. Upload an MP4 to use video instead of an image on the right. Autoplays muted and loops."
                  }
                ]
              }
            ]
          }
        ]
      }
    ]
  }
});
export {
  config_default as default
};
