import {
  Card,
  CardHeader,
  CardContent,
} from "./ui/card";
import { Badge } from "./ui/badge";

interface ProjectCardProps {
  title: string;
  description: string;
  tags: readonly string[];
  link?: string;
}

export function ProjectCard({
  title,
  description,
  tags,
  link,
}: ProjectCardProps) {
  return (
    <Card className="flex flex-col overflow-hidden border border-muted p-3">
      <CardHeader className="p-0">
        <div className="space-y-1">
          <h3 className="font-semibold leading-none">
            {link ? (
              <a
                href={link}
                target="_blank"
                className="inline-flex items-center gap-1 hover:underline"
              >
                {title}
              </a>
            ) : (
              title
            )}
          </h3>
        </div>
      </CardHeader>
      <CardContent className="mt-2 p-0 text-xs">
        {description}
      </CardContent>
      <div className="mt-auto flex flex-wrap gap-1">
        {tags.map((tag) => (
          <Badge
            key={tag}
            variant="secondary"
            className="inline-flex items-center rounded px-2 py-0.5 text-xs font-semibold"
          >
            {tag}
          </Badge>
        ))}
      </div>
    </Card>
  );
}
