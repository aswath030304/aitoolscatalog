export type Tool = {
  id: string;               // unique slug
  name: string;
  category: string;
  pricing: string;          // Free | Freemium | Paid | Open Source
  description: string;
  website: string;
  logo?: string;            // optional logo path
  tags?: string[];
  rating?: number;          // optional rating 0–5
  use_cases?: string[];     // optional use-case list
};
