import { links, type Link, type InsertLink } from "@shared/schema";
import { db } from "./db";
import { eq } from "drizzle-orm";

export interface IStorage {
  getLinks(): Promise<Link[]>;
  createLink(link: InsertLink): Promise<Link>;
}

export class DatabaseStorage implements IStorage {
  async getLinks(): Promise<Link[]> {
    return await db.select().from(links).orderBy(links.order);
  }

  async createLink(insertLink: InsertLink): Promise<Link> {
    const [link] = await db
      .insert(links)
      .values(insertLink)
      .returning();
    return link;
  }
}

export const storage = new DatabaseStorage();
