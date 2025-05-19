
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
    <Card className="group w-full shadow-lg hover:shadow-xl transition-shadow duration-300 ease-in-out rounded-lg border border-border overflow-hidden">
      <CardHeader className="p-5 flex flex-row items-start gap-4">
        <Image
          src={`https://placehold.co/96x96.png?text=${entry.Name.substring(0,2)}`}
          alt={`${entry.Name} logo`}
          width={96}
          height={96}
          className="rounded-lg border border-border bg-muted object-cover"
          data-ai-hint="software logo"
        />
        <div className="flex-1">
          <CardTitle className="text-2xl font-semibold text-primary hover:underline group-hover:text-accent transition-colors">
            <Link href={entry.Link} target="_blank" rel="noopener noreferrer">
              {entry.Name}
            </Link>
          </CardTitle>
          <CardDescription className="text-sm text-muted-foreground mt-1">
            Version: {entry.Update}
          </CardDescription>
        </div>
      </CardHeader>
      <CardContent className="p-5 space-y-4">
        <div className="flex items-center text-xs text-muted-foreground">
          <CalendarDays className="mr-2 h-4 w-4 text-accent" />
          <span>Last Updated: {formattedDate}</span>
        </div>
        <div className="space-y-1">
          <h4 className="font-semibold text-foreground flex items-center">
            <Info className="mr-2 h-4 w-4 text-accent" />
            Description
          </h4>
          <p className="text-sm text-foreground/90 leading-relaxed whitespace-pre-wrap">
            {entry.Description || "No description available."}
          </p>
        </div>
        {categories.length > 0 && (
          <div className="space-y-2">
            <h4 className="font-semibold text-foreground flex items-center">
              <Package className="mr-2 h-4 w-4 text-accent" />
              Categories
            </h4>
            <div className="flex flex-wrap gap-2">
              {categories.map((category) => (
                <Badge key={category} variant="secondary">{category}</Badge>
              ))}
            </div>
          </div>
        )}
        {tags.length > 0 && (
          <div className="space-y-2">
            <h4 className="font-semibold text-foreground flex items-center">
              <Tag className="mr-2 h-4 w-4 text-accent" />
              Tags
            </h4>
            <div className="flex flex-wrap gap-2">
              {tags.map((tag) => (
                <Badge key={tag} variant="outline">{tag}</Badge>
              ))}
            </div>
          </div>
        )}
      </CardContent>
      <CardFooter className="p-5 border-t border-border">
        <Button asChild variant="link" className="text-accent p-0 h-auto">
          <Link href={entry.Link} target="_blank" rel="noopener noreferrer">
            View Product
            <ExternalLink className="ml-2 h-4 w-4" />
          </Link>
        </Button>
      </CardFooter>
    </Card>
  );
}
