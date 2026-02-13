import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { insertLinkSchema } from "@shared/schema";

export async function registerRoutes(
  httpServer: Server,
  app: Express,
): Promise<Server> {
  app.get("/api/links", async (_req, res) => {
    const links = await storage.getLinks();
    res.json(links);
  });

  // Seed initial data if empty
  const existingLinks = await storage.getLinks();
  if (existingLinks.length === 0) {
    await storage.createLink({
      title: "Purchase Tickets & Tables",
      url: "https://soonerstateqc.muradbid.com",
      icon: "Ticket",
      order: 1,
      isVisible: true,
    });
    await storage.createLink({
      title: "2026 Event Flyer",
      url: "/documents/flyer.pdf",
      icon: "FileText",
      order: 2,
      isVisible: true,
    });
    await storage.createLink({
      title: "Sponsorship Form",
      url: "/documents/sponsorship_form.pdf",
      icon: "FileText",
      order: 3,
      isVisible: true,
    });
    await storage.createLink({
      title: "Visit Quail Coalition",
      url: "https://www.quailcoalition.org/",
      icon: "Globe",
      order: 4,
      isVisible: true,
    });
  }

  return httpServer;
}
