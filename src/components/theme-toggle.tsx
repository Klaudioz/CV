"use client";

import { SunIcon, MoonIcon } from "lucide-react";
import { Button } from "./ui/button";
import { useEffect, useState } from "react";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "./ui/tooltip";

export function ThemeToggle() {
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.code === "Space") {
        event.preventDefault();
        setIsDark(prev => !prev);
        document.body.classList.add('animation-ready');
        document.body.classList.toggle('dark');
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, []);

  return (
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger asChild>
          <Button
            variant="ghost"
            size="icon"
            className="fixed top-4 right-4 h-10 w-10 rounded-full bg-transparent hover:bg-transparent"
            onClick={() => {
              setIsDark(prev => !prev);
              document.body.classList.add('animation-ready');
              document.body.classList.toggle('dark');
            }}
          >
            <SunIcon
              className="h-5 w-5 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0"
            />
            <MoonIcon
              className="absolute h-5 w-5 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100"
            />
            <span className="sr-only">Toggle theme</span>
          </Button>
        </TooltipTrigger>
        <TooltipContent>
          press <kbd className="px-1 rounded bg-muted">space</kbd> to toggle the sun
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
} 