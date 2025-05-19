
"use client";

import type { ChangelogEntry } from "@/types";
import Image from "next/image";
import Link from "next/link";
import { format } from "date-fns";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { CalendarDays, ExternalLink, Info, Package, Tag } from "lucide-react";

interface ChangelogCardProps {
  entry: ChangelogEntry;
}

export function ChangelogCard({ entry }: ChangelogCardProps) {
  const formattedDate = entry.Date ? format(new Date(entry.Date), "PPP") : "N/A";
  const tags = entry.Tags ? entry.Tags.split(",").map(tag => tag.trim()).filter(tag => tag) : [];
  const categories = entry.Categories ? entry.Categories.split(",").map(cat => cat.trim()).filter(cat => cat) : [];

  return (
    <Card className="group w-full shadow-md hover:shadow-lg transition-all duration-300 ease-in-out rounded-xl border border-border overflow-hidden flex flex-col h-full">
      <CardHeader className="p-5 flex flex-row items-start gap-4 bg-card">
        <Image
          src={`https://placehold.co/64x64.png?text=${entry.Name.substring(0,2)}`}
          alt={`${entry.Name} logo`}
          width={64}
          height={64}
          className="rounded-lg border border-border bg-muted object-cover"
          data-ai-hint="software logo"
        />
        <div className="flex-1">
          <CardTitle className="text-xl font-semibold text-primary group-hover:text-accent transition-colors">
            <Link href={entry.Link} target="_blank" rel="noopener noreferrer" className="hover:underline">
              {entry.Name}
            </Link>
          </CardTitle>
          <CardDescription className="text-xs text-muted-foreground mt-1">
            Version: {entry.Update}
          </CardDescription>
        </div>
      </CardHeader>
      <CardContent className="p-5 space-y-4 flex-grow bg-card">
        <div className="flex items-center text-xs text-muted-foreground">
          <CalendarDays className="mr-2 h-4 w-4 text-accent" />
          <span>{formattedDate}</span>
        </div>
        
        <div className="space-y-1">
          <h4 className="text-sm font-medium text-foreground flex items-center">
            <Info className="mr-2 h-4 w-4 text-accent" />
            Description
          </h4>
          <p className="text-sm text-foreground/80 leading-relaxed line-clamp-3 group-hover:line-clamp-none transition-all duration-200 ease-in-out">
            {entry.Description || "No description available."}
          </p>
        </div>

        {categories.length > 0 && (
          <div className="space-y-2">
            <h4 className="text-sm font-medium text-foreground flex items-center">
              <Package className="mr-2 h-4 w-4 text-accent" />
              Categories
            </h4>
            <div className="flex flex-wrap gap-2">
              {categories.map((category) => (
                <Badge key={category} variant="secondary" className="text-xs">{category}</Badge>
              ))}
            </div>
          </div>
        )}

        {tags.length > 0 && (
          <div className="space-y-2">
            <h4 className="text-sm font-medium text-foreground flex items-center">
              <Tag className="mr-2 h-4 w-4 text-accent" />
              Tags
            </h4>
            <div className="flex flex-wrap gap-2">
              {tags.map((tag) => (
                <Badge key={tag} variant="outline" className="text-xs">{tag}</Badge>
              ))}
            </div>
          </div>
        )}
      </CardContent>
      <CardFooter className="p-5 border-t border-border bg-card">
        <Button asChild variant="link" size="sm" className="text-accent p-0 h-auto hover:underline">
          <Link href={entry.Link} target="_blank" rel="noopener noreferrer">
            View Product
            <ExternalLink className="ml-1.5 h-3.5 w-3.5" />
          </Link>
        </Button>
      </CardFooter>
    </Card>
  );
}
