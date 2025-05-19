export interface ChangelogEntry {
  ID: string;
  Name: string;
  Slug: string;
  Update: string;
  Date: string;
  Description: string;
  Image: string; // URL to product image
  Categories: string; // Comma-separated string
  Tags: string; // Comma-separated string
  Type: string; // e.g., "Plugin", "Theme"
  Status: string;
  Link: string; // URL to product page
}
