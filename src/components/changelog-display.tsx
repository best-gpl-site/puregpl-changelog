"use client";

import type { ChangelogEntry } from "@/types";
import { useState, useMemo, useEffect } from "react";
import { Input } from "@/components/ui/input";
import { ChangelogCard } from "@/components/changelog-card";
import { PackageSearch, Search } from "lucide-react";
import { Skeleton } from "@/components/ui/skeleton";

interface ChangelogDisplayProps {
  initialEntries: ChangelogEntry[];
}

export function ChangelogDisplay({ initialEntries }: ChangelogDisplayProps) {
  const [searchQuery, setSearchQuery] = useState("");
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const filteredEntries = useMemo(() => {
    if (!searchQuery) {
      return initialEntries;
    }
    const lowercasedQuery = searchQuery.toLowerCase();
    return initialEntries.filter(
      (entry) =>
        entry.Name.toLowerCase().includes(lowercasedQuery) ||
        entry.Description.toLowerCase().includes(lowercasedQuery) ||
        entry.Tags.toLowerCase().includes(lowercasedQuery) ||
        entry.Categories.toLowerCase().includes(lowercasedQuery) ||
        entry.Update.toLowerCase().includes(lowercasedQuery)
    );
  }, [initialEntries, searchQuery]);

  if (!mounted) {
    return (
      <div className="space-y-6">
        <Skeleton className="h-12 w-full max-w-lg mx-auto" />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[...Array(6)].map((_, i) => (
            <CardSkeleton key={i} />
          ))}
        </div>
      </div>
    );
  }
  
  return (
    <div className="space-y-8">
      <div className="relative w-full max-w-lg mx-auto">
        <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-muted-foreground" />
        <Input
          type="text"
          placeholder="Filter by name, description, version, tags..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="w-full pl-10 pr-4 py-2 text-base border-2 border-input focus:border-primary transition-colors"
          aria-label="Filter changelogs"
        />
      </div>

      {filteredEntries.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredEntries.map((entry) => (
            <ChangelogCard key={entry.ID} entry={entry} />
          ))}
        </div>
      ) : (
        <div className="text-center py-12">
          <PackageSearch className="mx-auto h-16 w-16 text-muted-foreground mb-4" />
          <h3 className="text-xl font-semibold text-foreground">No Matching Updates Found</h3>
          <p className="text-muted-foreground mt-2">
            Try adjusting your search query or check back later for new updates.
          </p>
        </div>
      )}
    </div>
  );
}

function CardSkeleton() {
  return (
    <div className="p-4 border rounded-lg shadow-sm bg-card">
      <div className="flex items-start gap-4 mb-4">
        <Skeleton className="h-20 w-20 rounded-md" />
        <div className="flex-1 space-y-2">
          <Skeleton className="h-6 w-3/4" />
          <Skeleton className="h-4 w-1/2" />
        </div>
      </div>
      <Skeleton className="h-4 w-full mb-2" />
      <Skeleton className="h-4 w-full mb-2" />
      <Skeleton className="h-4 w-3/4 mb-4" />
      <div className="flex flex-wrap gap-2 mb-4">
        <Skeleton className="h-6 w-20 rounded-full" />
        <Skeleton className="h-6 w-24 rounded-full" />
      </div>
      <Skeleton className="h-8 w-32" />
    </div>
  );
}
