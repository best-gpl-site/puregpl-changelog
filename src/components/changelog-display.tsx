
"use client";

import type { ChangelogEntry } from "@/types";
import { useState, useMemo, useEffect } from "react";
import { Input } from "@/components/ui/input";
import { ChangelogCard } from "@/components/changelog-card";
import { ChangelogListItem } from "@/components/changelog-list-item";
import { Button } from "@/components/ui/button";
import { PackageSearch, Search, LayoutGrid, List } from "lucide-react";
import { Skeleton } from "@/components/ui/skeleton";
import { cn } from "@/lib/utils";

interface ChangelogDisplayProps {
  initialEntries: ChangelogEntry[];
}

const ITEMS_PER_PAGE = 150;

export function ChangelogDisplay({ initialEntries }: ChangelogDisplayProps) {
  const [searchQuery, setSearchQuery] = useState("");
  const [mounted, setMounted] = useState(false);
  const [viewMode, setViewMode] = useState<"grid" | "list">("list");
  const [currentPage, setCurrentPage] = useState(1);

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

  // Reset to first page when filters change
  useEffect(() => {
    setCurrentPage(1);
  }, [searchQuery]); 

  const totalPages = filteredEntries.length > 0 ? Math.ceil(filteredEntries.length / ITEMS_PER_PAGE) : 0;

  const paginatedEntries = useMemo(() => {
    const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
    const endIndex = startIndex + ITEMS_PER_PAGE;
    return filteredEntries.slice(startIndex, endIndex);
  }, [filteredEntries, currentPage]);


  if (!mounted) {
    return (
      <div className="space-y-6">
        <div className="flex flex-row items-center gap-x-3 w-full">
            <Skeleton className="h-12 flex-grow max-w-[786px]" /> 
            <div className="flex gap-x-1 flex-shrink-0">
              <Skeleton className="h-10 w-10" />
              <Skeleton className="h-10 w-10" />
            </div>
        </div>
        <div className={cn(
            viewMode === "grid" 
              ? "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
              : "flex flex-col gap-4"
          )}>
          {[...Array(viewMode === 'grid' ? 6 : 4)].map((_, i) => (
            viewMode === 'grid' ? <CardSkeleton key={i} /> : <ListItemSkeleton key={i} />
          ))}
        </div>
      </div>
    );
  }
  
  return (
    <div className="space-y-8">
      <div className="flex flex-row items-center gap-x-3 w-full">
        <div className="relative flex-grow max-w-[786px]">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-muted-foreground" />
          <Input
            type="text"
            placeholder="Filter by name, description, version..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-10 pr-4 py-2 text-base border-2 border-border focus:border-primary transition-colors"
            aria-label="Filter changelogs"
          />
        </div>
        <div className="flex gap-x-1 flex-shrink-0">
          <Button
            variant={viewMode === "grid" ? "default" : "outline"}
            size="icon"
            onClick={() => setViewMode("grid")}
            aria-label="Grid view"
            className="rounded-md"
          >
            <LayoutGrid className="h-5 w-5" />
          </Button>
          <Button
            variant={viewMode === "list" ? "default" : "outline"}
            size="icon"
            onClick={() => setViewMode("list")}
            aria-label="List view"
            className="rounded-md"
          >
            <List className="h-5 w-5" />
          </Button>
        </div>
      </div>

      {paginatedEntries.length > 0 ? (
        <>
          <div className={cn(
            viewMode === "grid" 
              ? "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
              : "flex flex-col gap-4"
          )}>
            {paginatedEntries.map((entry) => (
              viewMode === "grid" 
                ? <ChangelogCard key={entry.ID} entry={entry} />
                : <ChangelogListItem key={entry.ID} entry={entry} />
            ))}
          </div>
          {totalPages > 0 && totalPages > 1 && (
            <div className="mt-8 flex items-center justify-center space-x-4">
              <Button
                variant="outline"
                size="sm"
                onClick={() => setCurrentPage((prev) => Math.max(1, prev - 1))}
                disabled={currentPage === 1}
              >
                Previous
              </Button>
              <span className="text-sm text-muted-foreground">
                Page {currentPage} of {totalPages}
              </span>
              <Button
                variant="outline"
                size="sm"
                onClick={() => setCurrentPage((prev) => Math.min(totalPages, prev + 1))}
                disabled={currentPage === totalPages}
              >
                Next
              </Button>
            </div>
          )}
        </>
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
        <Skeleton className="h-16 w-16 rounded-md" />
        <div className="flex-1 space-y-2">
          <Skeleton className="h-6 w-3/4" />
          <Skeleton className="h-4 w-1/2" />
          <Skeleton className="h-5 w-20 mt-1" />
        </div>
      </div>
      <Skeleton className="h-4 w-1/3 mb-3" />
      <Skeleton className="h-4 w-full mb-2" />
      <Skeleton className="h-4 w-full mb-2" />
      <Skeleton className="h-4 w-5/6 mb-4" />
      <Skeleton className="h-8 w-28" />
    </div>
  );
}

function ListItemSkeleton() {
  return (
    <div className="flex items-center gap-4 p-4 border rounded-lg shadow-sm bg-card">
      <Skeleton className="h-12 w-12 rounded-md flex-shrink-0 hidden sm:block" />
      <div className="flex-grow space-y-2">
        <Skeleton className="h-5 w-3/4" />
        <Skeleton className="h-4 w-1/2" />
        <Skeleton className="h-4 w-1/4" />
      </div>
      <Skeleton className="h-8 w-24 flex-shrink-0 hidden sm:inline-flex" />
    </div>
  );
}

