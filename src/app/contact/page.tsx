import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Mail } from "lucide-react";

export default function ContactPage() {
  return (
    <section id="contact" className="mx-auto max-w-3xl px-6 py-24">
      <div className="text-center">
        <p className="text-sm uppercase tracking-widest text-muted-foreground">
          Contact
        </p>
        <h1 className="mt-4 font-heading text-4xl sm:text-5xl tracking-tight text-foreground">
          Let&rsquo;s talk.
        </h1>
        <p className="mt-5 text-lg text-foreground/75 leading-relaxed">
          Tell me a little about what brought you here. I read every message,
          and I&rsquo;ll get back within 1–2 business days.
        </p>
      </div>

      <Card className="mt-12 border-border/60 bg-card/60">
        <CardContent className="p-8">
          <form className="space-y-5">
            <div className="grid gap-5 sm:grid-cols-2">
              <div className="space-y-2">
                <Label htmlFor="name">Name</Label>
                <Input id="name" name="name" placeholder="Your name" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  placeholder="you@example.com"
                />
              </div>
            </div>
            <div className="space-y-2">
              <Label htmlFor="message">What&rsquo;s on your mind?</Label>
              <Textarea
                id="message"
                name="message"
                placeholder="A few sentences is plenty — what you've been carrying, what you're hoping for."
                rows={6}
              />
            </div>
            <p className="text-xs text-muted-foreground">
              Form not yet wired up — Supabase integration coming.
            </p>
            <Button type="button" size="lg" className="w-full text-base">
              Send message
            </Button>
          </form>
        </CardContent>
      </Card>

      <div className="mt-10 text-center text-sm text-muted-foreground">
        <p className="inline-flex items-center gap-2">
          <Mail className="h-4 w-4" />
          Or email directly: <span className="text-foreground/85">hello@sweeneynutrition.com</span>
        </p>
      </div>
    </section>
  );
}
