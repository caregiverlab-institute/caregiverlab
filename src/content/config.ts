import { defineCollection, z } from "astro:content";

const base = z.object({
  title: z.string(),
  date: z.date(),
  summary: z.string(),
  tags: z.array(z.string()).default([]),
  audience: z.array(z.enum(["언론", "법무", "기업", "학계", "일반"])).default(["일반"]),
  type: z.enum(["brief", "report", "checklist", "guide", "faq", "note"]).default("note"),
  draft: z.boolean().default(false),
});

export const collections = {
  research: defineCollection({ type: "content", schema: base }),
  library: defineCollection({ type: "content", schema: base }),
  notes: defineCollection({ type: "content", schema: base }),
};