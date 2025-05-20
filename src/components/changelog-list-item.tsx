
"use client";

import type { ChangelogEntry } from "@/types";
import Image from "next/image";
import Link from "next/link";
import { format } from "date-fns";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { CalendarDays, ExternalLink } from "lucide-react";

interface ChangelogListItemProps {
  entry: ChangelogEntry;
}

export function ChangelogListItem({ entry }: ChangelogListItemProps) {
  const formattedDate = entry.Date ? format(new Date(entry.Date), "PPP") : "N/A";

  return (
    <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 p-4 border border-border bg-card rounded-lg shadow-sm hover:shadow-md transition-shadow duration-200">
      <Image
        src={`https://placehold.co/48x48.png?text=${entry.Name.substring(0,2)}`}
        alt={`${entry.Name} logo`}
        width={48}
        height={48}
        className="rounded-md border border-border bg-muted object-cover flex-shrink-0"
        data-ai-hint="software logo"
      />
      <div className="flex-grow">
        <div className="flex flex-col sm:flex-row sm:justify-between sm:items-baseline">
          <Link href={entry.Link} target="_blank" rel="noopener noreferrer" className="hover:underline sm:mr-2">
            <h3 className="text-lg font-semibold text-primary hover:text-accent transition-colors">
              {entry.Name}
            </h3>
          </Link>
          <Badge 
            variant={entry.Status === "Newly Added" ? "default" : "secondary"} 
            className="text-xs mt-1 sm:mt-0 whitespace-nowrap flex-shrink-0"
          >
            {entry.Status}
          </Badge>
        </div>
        <p className="text-xs text-muted-foreground mt-0.5">Version: {entry.Update}</p>
        <div className="flex items-center text-xs text-muted-foreground mt-1">
          <CalendarDays className="mr-1.5 h-3.5 w-3.5 text-accent" />
          <span>{formattedDate}</span>
        </div>
      </div>
      <Button asChild variant="outline" size="sm" className="mt-2 sm:mt-0 sm:ml-auto flex-shrink-0">
        <Link href={entry.Link} target="_blank" rel="noopener noreferrer">
          View Product
          <ExternalLink className="ml-1.5 h-3.5 w-3.5" />
        </Link>
      </Button>
    </div>
  );
}

