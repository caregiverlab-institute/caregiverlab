import { defineCollection, z } from "astro:content";

const baseSchema = z.object({
  title:       z.string(),
  summary:     z.string().optional(),
  description: z.string().optional(),
  date:        z.coerce.date(),
  updatedDate: z.coerce.date().optional(),
  draft:       z.boolean().optional().default(false),
  tags:        z.array(z.string()).optional().default([]),
  ogImage:     z.string().optional(),
});

/* ── Research: 데이터·분석·브리프 ── */
const research = defineCollection({
  type: "content",
  schema: baseSchema.extend({
    type: z.enum(["brief", "data", "report", "guide", "review"]).default("brief"),
    source:     z.string().optional(),
    confidence: z.enum(["high", "mid", "low"]).optional(),
    featured:   z.boolean().optional().default(false),
  }),
});

/* ── Insights: 인터뷰·제도해석·전망·노트 ── */
const insights = defineCollection({
  type: "content",
  schema: baseSchema.extend({
    type: z.enum([
      "interview",   // 전문가 인터뷰 (변호사·의사·세무사 등)
      "analysis",    // 제도 해석·독자 분석
      "outlook",     // 향후 전망
      "note",        // 짧은 현장 노트
    ]).default("note"),
    interviewee: z.string().optional(),  // 인터뷰 대상자
    profession:  z.string().optional(),  // 직종 (변호사, 의사 등)
    featured:    z.boolean().optional().default(false),
  }),
});

export const collections = { research, insights };
