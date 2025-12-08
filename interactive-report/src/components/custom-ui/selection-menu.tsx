"use client";

import * as React from "react";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import {
  Highlighter,
  Copy,
  Save,
  FilePlus,
  Wrench,
  ChevronLeft,
  Share2,
  Quote,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";

interface Position {
  top: number;
  left: number;
}

export function SelectionMenu() {
  const [open, setOpen] = React.useState(false);
  const [showMore, setShowMore] = React.useState(false);
  const [position, setPosition] = React.useState<Position>({ top: 0, left: 0 });

  React.useEffect(() => {
    const handleMouseUp = (e: MouseEvent) => {
      const selection = window.getSelection();

      if (!selection || selection.isCollapsed) {
        setOpen(false);
        // Delay resetting the view so the user doesn't see it snap back while fading out
        setTimeout(() => setShowMore(false), 200);
        return;
      }

      const range = selection.getRangeAt(0);
      const rect = range.getBoundingClientRect();

      setPosition({
        // Position slightly higher to avoid covering text
        top: rect.top + window.scrollY - 12,
        left: rect.left + window.scrollX + rect.width / 2,
      });

      setOpen(true);
    };

    document.addEventListener("mouseup", handleMouseUp);
    return () => document.removeEventListener("mouseup", handleMouseUp);
  }, []);

  const handleCopy = () => {
    const text = window.getSelection()?.toString();
    if (text) navigator.clipboard.writeText(text);
    setOpen(false);
  };

  const handleHighlight = () => {
    //TODO
    setOpen(false);
  };

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <div
          className="fixed w-0 h-0"
          style={{ top: position.top, left: position.left }}
        />
      </PopoverTrigger>

      <PopoverContent
        className="w-auto p-1 rounded-full border border-border/50 bg-background/80 backdrop-blur-md shadow-2xl flex items-center gap-1"
        side="top"
        align="center"
        sideOffset={10}
        onOpenAutoFocus={(e) => e.preventDefault()}
        onCloseAutoFocus={(e) => e.preventDefault()}
      >
        {!showMore ? (
          /* --- MAIN VIEW --- */
          <div className="flex items-center gap-1 animate-in fade-in zoom-in duration-200">
            <ActionButton
              icon={<Highlighter className="w-4 h-4" />}
              label="Highlight"
              onClick={handleHighlight}
            />

            <ActionButton
              icon={<Copy className="w-4 h-4" />}
              label="Copy"
              onClick={handleCopy}
            />

            {/* Vertical Separator */}
            <Separator
              orientation="vertical"
              className="h-5 bg-border/50 mx-1"
            />

            <Button
              variant="ghost"
              size="sm"
              className="h-8 rounded-full px-3 text-xs font-medium hover:bg-primary/10 hover:text-primary transition-colors"
              onClick={() => setShowMore(true)}
            >
              <Wrench className="w-3.5 h-3.5 mr-1.5" />
              More
            </Button>
          </div>
        ) : (
          /* --- SUB MENU VIEW --- */
          <div className="flex items-center gap-1 animate-in slide-in-from-right-2 duration-200">
            <Button
              variant="ghost"
              size="icon"
              className="h-8 w-8 rounded-full hover:bg-muted"
              onClick={() => setShowMore(false)}
            >
              <ChevronLeft className="w-4 h-4" />
            </Button>

            <Separator
              orientation="vertical"
              className="h-5 bg-border/50 mx-1"
            />

            <ActionButton
              icon={<Save className="w-4 h-4" />}
              label="Save"
              onClick={() => alert("Saved")}
            />

            <ActionButton
              icon={<Share2 className="w-4 h-4" />}
              label="Share"
              onClick={() => alert("Shared")}
            />
          </div>
        )}
      </PopoverContent>
    </Popover>
  );
}

function ActionButton({
  icon,
  label,
  onClick,
}: {
  icon: React.ReactNode;
  label: string;
  onClick: () => void;
}) {
  return (
    <Button
      variant="ghost"
      size="sm"
      onClick={onClick}
      className="h-8 rounded-full px-3 text-xs font-medium hover:bg-primary/10 hover:text-primary transition-colors"
    >
      <span className="mr-2 opacity-70 group-hover:opacity-100">{icon}</span>
      {label}
    </Button>
  );
}
