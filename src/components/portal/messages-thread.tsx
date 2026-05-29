import { Card, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import type { CarolineMessage } from "./portal-data";

function formatDate(iso: string) {
  const d = new Date(iso + "T12:00:00");
  return d.toLocaleDateString("en-US", {
    weekday: "short",
    month: "short",
    day: "numeric",
  });
}

export function MessagesThread({ messages }: { messages: CarolineMessage[] }) {
  const sorted = [...messages].sort((a, b) => (a.date < b.date ? 1 : -1));

  return (
    <Card className="border-border/60 bg-card/70">
      <CardContent className="p-5">
        <div className="flex items-baseline justify-between">
          <h3 className="font-heading text-lg text-foreground">
            Messages with Caroline
          </h3>
          <button className="text-xs text-primary hover:underline">
            View all
          </button>
        </div>

        <ul className="mt-4 space-y-4">
          {sorted.map((m, i) => (
            <li key={m.id}>
              {i > 0 && <Separator className="mb-4" />}
              <div className="flex items-baseline justify-between">
                <span className="text-sm font-medium text-foreground">
                  {m.from === "caroline" ? "Caroline" : "You"}
                </span>
                <span className="text-xs text-muted-foreground">
                  {formatDate(m.date)}
                </span>
              </div>
              <p
                className={
                  m.from === "caroline"
                    ? "mt-1.5 text-sm leading-relaxed text-foreground/85"
                    : "mt-1.5 text-sm leading-relaxed text-muted-foreground italic"
                }
              >
                {m.text}
              </p>
            </li>
          ))}
        </ul>
      </CardContent>
    </Card>
  );
}
