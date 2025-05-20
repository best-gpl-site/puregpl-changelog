
import type { ChangelogEntry } from "@/types";
import { ChangelogDisplay } from "@/components/changelog-display";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { Terminal } from "lucide-react";
import { mockApiResponse, type RawMockDateGroup, type RawMockChangelogItem } from '@/lib/mock-changelog-data';

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
    const rawData: RawMockDateGroup[] = mockApiResponse.data;

    if (!Array.isArray(rawData)) {
      console.error("Mock data is not an array:", rawData);
      return [];
    }

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
          Date: cleanedDate, // Use the cleaned date string
          Description: `This update for ${item.title} (version ${item.productVersion}) brings various improvements and new features. Check the product page for full details.`,
          Image: "", // ChangelogCard will use its placeholder logic
          Categories: "Software, Tools", // Placeholder categories
          Tags: item.isNew ? "New Release, Update" : "Update, Maintenance", // Example tags based on isNew
          Type: "Product Update", // Placeholder type
          Status: item.isNew ? "Newly Added" : "Updated", // Placeholder status
          Link: `/product/${productSlug}`, // Use the cleaned string for the link
        });
      });
    });

    // Sort by date, newest first. Handle invalid dates by pushing them to the end.
    return allEntries.sort((a, b) => {
      const dateA = new Date(a.Date).getTime();
      const dateB = new Date(b.Date).getTime();
      if (isNaN(dateA) && isNaN(dateB)) return 0;
      if (isNaN(dateA)) return 1; // Push invalid dates to the end
      if (isNaN(dateB)) return -1; // Keep valid dates before invalid ones
      return dateB - dateA; // Sort valid dates descending
    });
  } catch (error) {
    console.error("Error processing mock changelog data:", error);
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
            Stay updated with the latest product changelogs, all in one convenient place. (Using Mock Data)
          </p>
        </header>

        <main>
          {changelogData.length === 0 && (
            <Alert variant="default" className="max-w-lg mx-auto bg-card border-primary shadow-md">
              <Terminal className="h-5 w-5 text-primary" />
              <AlertTitle className="text-primary font-semibold">No Updates Available</AlertTitle>
              <AlertDescription className="text-card-foreground">
                We couldn&apos;t find any changelog updates from the mock data at this moment.
              </AlertDescription>
            </Alert>
          )}
          {changelogData.length > 0 && <ChangelogDisplay initialEntries={changelogData} />}
        </main>

        <footer className="mt-16 pt-8 border-t text-center text-muted-foreground">
          <p>&copy; {new Date().getFullYear()} ChangeHub. All rights reserved.</p>
          <p className="text-sm mt-1">Powered by Next.js and ShadCN UI.</p>
        </footer>
      </div>
    </div>
  );
}
