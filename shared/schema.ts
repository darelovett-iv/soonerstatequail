import { pgTable, text, serial, boolean, integer } from "drizzle-orm/pg-core";
import { createInsertSchema } from "drizzle-zod";
import { z } from "zod";

export const links = pgTable("links", {
  id: serial("id").primaryKey(),
  title: text("title").notNull(),
  url: text("url").notNull(),
  icon: text("icon").notNull(), // Lucide icon name
  isVisible: boolean("is_visible").default(true).notNull(),
  order: integer("order").notNull().default(0),
});

export const insertLinkSchema = createInsertSchema(links).omit({ id: true });

export type Link = typeof links.$inferSelect;
export type InsertLink = z.infer<typeof insertLinkSchema>;
