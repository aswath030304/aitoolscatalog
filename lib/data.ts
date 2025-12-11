import toolsData from "../data/tools.json";
import { Tool } from "./types";

// Return full list
export function getAllTools(): Tool[] {
  return toolsData;
}

// Return one tool
export function getToolById(id: string): Tool | undefined {
  return toolsData.find((tool) => tool.id === id);
}

// Unique categories
export function getCategories(): string[] {
  return Array.from(new Set(toolsData.map((t) => t.category))).sort();
}
