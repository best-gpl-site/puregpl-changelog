
import type { ChangelogEntry } from "@/types";
import { ChangelogDisplay } from "@/components/changelog-display";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { Terminal } from "lucide-react";

// Interfaces for the raw API response structure
interface RawMockChangelogItem {
  id: number;
  title: string;
  productVersion: string;
  isNew: number; // 0 or 1
}

interface RawMockDateGroup {
  name: string; // Date string e.g., "May 17th, 2025"
  rows: RawMockChangelogItem[];
}

interface RawMockApiResponse {
  message: string;
  error: boolean;
  data: RawMockDateGroup[];
}

// Helper function to generate product links from title
function cleanString(inputString: string): string {
  let specialString = inputString.replace(/[^\w\s-]/gi, '');
  specialString = specialString.replace(/\s+/g, '-');
  return specialString.toLowerCase();
}

// Helper function to clean date strings by removing ordinal suffixes
function cleanDateString(dateStr: string): string {
  return dateStr.replace(/(\d+)(st|nd|rd|th)/, '$1');
}

async function getChangelogData(): Promise<ChangelogEntry[]> {
  try {
    const response = await fetch('https://apis.puregpl.com/api/v1/script/changelog', { cache: 'no-store' });

    if (!response.ok) {
      console.error("Failed to fetch changelog data:", response.status, response.statusText);
      const errorBody = await response.text();
      console.error("Error body:", errorBody);
      return [];
    }

    const apiResponse: RawMockApiResponse = await response.json();

    if (apiResponse.error || !Array.isArray(apiResponse.data)) {
      console.error("API response error or data is not an array:", apiResponse);
      return [];
    }

    const rawData: RawMockDateGroup[] = apiResponse.data;
    const allEntries: ChangelogEntry[] = [];

    rawData.forEach((dateGroup: RawMockDateGroup) => {
      const cleanedDate = cleanDateString(dateGroup.name);
      dateGroup.rows.forEach((item: RawMockChangelogItem) => {
        const productSlug = cleanString(item.title);
        allEntries.push({
          ID: String(item.id),
          Name: item.title,
          Slug: productSlug,
          Update: item.productVersion,
          Date: cleanedDate,
          Description: `This update for ${item.title} (version ${item.productVersion}) brings various improvements and new features. Check the product page for full details.`,
          Image: "", // ChangelogCard will use its placeholder logic
          Categories: "Software, Tools", // Placeholder categories
          Tags: item.isNew ? "New Release, Update" : "Update, Maintenance", // Example tags based on isNew
          Type: "Product Update", // Placeholder type
          Status: item.isNew ? "Newly Added" : "Updated", // Placeholder status
          Link: `https://puregpl.com/downloads/${productSlug}`,
        });
      });
    });

    // Sort by date, newest first. Handle invalid dates by pushing them to the end.
    return allEntries.sort((a, b) => {
      const dateA = new Date(a.Date).getTime();
      const dateB = new Date(b.Date).getTime();
      if (isNaN(dateA) && isNaN(dateB)) return 0;
      if (isNaN(dateA)) return 1;
      if (isNaN(dateB)) return -1;
      return dateB - dateA;
    });
  } catch (error) {
    console.error("Error fetching or processing changelog data:", error);
    return [];
  }
}

export default async function Home() {
  const changelogData = await getChangelogData();

  return (
    <div className="min-h-screen bg-background text-foreground selection:bg-accent selection:text-accent-foreground">
      <div className="container mx-auto px-4 py-8 md:px-6 md:py-12">
        <header className="mb-10 text-center">
          <h1 className="text-5xl md:text-6xl font-extrabold text-primary tracking-tight">
            Change<span className="text-accent">Hub</span>
          </h1>
          <p className="mt-3 text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
            Track all the latest product updates and changelogs in one place — always stay in the loop with what's new on PureGPL.
          </p>
        </header>

        <main>
          {changelogData.length === 0 && (
            <Alert variant="default" className="max-w-lg mx-auto bg-card border-primary shadow-md">
              <Terminal className="h-5 w-5 text-primary" />
              <AlertTitle className="text-primary font-semibold">No Updates Available</AlertTitle>
              <AlertDescription className="text-card-foreground">
                We couldn&apos;t fetch any changelog updates at this moment. Please check back later.
              </AlertDescription>
            </Alert>
          )}
          {changelogData.length > 0 && <ChangelogDisplay initialEntries={changelogData} />}
        </main>

        <footer className="mt-16 pt-8 border-t text-center text-muted-foreground">
          <p>&copy; {new Date().getFullYear()} ChangeHub. All rights reserved.</p>
          <p className="text-sm mt-1">Powered by PureGPL.</p>
        </footer>
      </div>
    </div>
  );
}
