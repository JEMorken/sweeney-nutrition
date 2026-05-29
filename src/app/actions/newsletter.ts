"use server";

import { getSupabase } from "@/lib/supabase";

export type NewsletterState = {
  ok: boolean | null;
  error?: string;
};

export const initialNewsletterState: NewsletterState = { ok: null };

const EMAIL_RE = /^[^@\s]+@[^@\s]+\.[^@\s]+$/;

export async function subscribeToNewsletter(
  _prev: NewsletterState,
  formData: FormData
): Promise<NewsletterState> {
  if (formData.get("website")) {
    return { ok: true };
  }

  const email = String(formData.get("email") ?? "").trim();

  if (!email || !EMAIL_RE.test(email)) {
    return { ok: false, error: "Please enter a valid email." };
  }

  try {
    const supabase = getSupabase();
    const { error } = await supabase
      .from("newsletter_signups")
      .insert({ email });

    if (error) {
      if (error.code === "23505") {
        return { ok: true };
      }
      console.error("[subscribeToNewsletter] supabase error:", error);
      return {
        ok: false,
        error: "Something went wrong. Please try again in a moment.",
      };
    }

    return { ok: true };
  } catch (err) {
    console.error("[subscribeToNewsletter] unexpected error:", err);
    return {
      ok: false,
      error: "Something went wrong. Please try again in a moment.",
    };
  }
}
