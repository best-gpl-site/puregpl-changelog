import type { ChangelogEntry } from "@/types";
import { ChangelogDisplay } from "@/components/changelog-display";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { Terminal } from "lucide-react";

async function getChangelogData(): Promise<ChangelogEntry[]> {
  try {
    const response = await fetch(
      "https://apis.puregpl.com/api/v1/script/changelog?raw=true",
      { next: { revalidate: 3600 } } // Revalidate every hour
    );
    if (!response.ok) {
      console.error("Failed to fetch changelog data:", response.statusText);
      return [];
    }
    const data = await response.json();
    if (!Array.isArray(data)) {
      console.error("Fetched data is not an array:", data);
      return [];
    }
    // Sort by date, newest first. Handle invalid dates by pushing them to the end.
    return data.sort((a, b) => {
      const dateA = new Date(a.Date).getTime();
      const dateB = new Date(b.Date).getTime();
      if (isNaN(dateA) && isNaN(dateB)) return 0;
      if (isNaN(dateA)) return 1; // Push invalid dates to the end
      if (isNaN(dateB)) return -1; // Keep valid dates before invalid ones
      return dateB - dateA; // Sort valid dates descending
    });
  } catch (error) {
    console.error("Error fetching changelog data:", error);
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
            Stay updated with the latest product changelogs, all in one convenient place.
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
          <p className="text-sm mt-1">Powered by Next.js and ShadCN UI.</p>
        </footer>
      </div>
    </div>
  );
}
