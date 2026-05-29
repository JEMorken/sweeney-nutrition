"use client";

import { useState, useRef, useEffect } from "react";
import { Card, CardContent } from "@/components/ui/card";

export function EditableReflection({
  initial,
  dayLabel,
}: {
  initial: string;
  dayLabel: string;
}) {
  const [text, setText] = useState(initial);
  const [saved, setSaved] = useState(false);
  const ref = useRef<HTMLTextAreaElement | null>(null);
  const initialMount = useRef(true);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    el.style.height = "auto";
    el.style.height = el.scrollHeight + "px";
  }, [text]);

  useEffect(() => {
    if (initialMount.current) {
      initialMount.current = false;
      return;
    }
    setSaved(false);
    const t = setTimeout(() => setSaved(true), 600);
    return () => clearTimeout(t);
  }, [text]);

  return (
    <Card className="border-border/60 bg-card/70">
      <CardContent className="p-6">
        <div className="flex items-center justify-between">
          <h2 className="font-heading text-2xl text-foreground">
            Your reflection on the day
          </h2>
          <span className="text-sm text-muted-foreground">{dayLabel}</span>
        </div>
        <textarea
          ref={ref}
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder="What stood out today? Anything you want Caroline to see?"
          className="mt-4 w-full resize-none bg-transparent font-heading text-lg leading-relaxed text-foreground/90 italic outline-none placeholder:not-italic placeholder:font-sans placeholder:text-muted-foreground/60 focus-visible:outline-none"
          rows={3}
        />
        <div className="mt-3 flex items-center justify-between text-xs text-muted-foreground">
          <span>{text.length} characters · auto-saves as you write</span>
          <span
            className={
              saved ? "text-primary opacity-100 transition-opacity" : "opacity-0 transition-opacity"
            }
          >
            Saved
          </span>
        </div>
      </CardContent>
    </Card>
  );
}
