"use server";

import { getSupabase } from "@/lib/supabase";

export type ContactState = {
  ok: boolean | null;
  error?: string;
};

export const initialContactState: ContactState = { ok: null };

const EMAIL_RE = /^[^@\s]+@[^@\s]+\.[^@\s]+$/;

export async function submitLead(
  _prev: ContactState,
  formData: FormData
): Promise<ContactState> {
  if (formData.get("website")) {
    return { ok: true };
  }

  const name = String(formData.get("name") ?? "").trim();
  const email = String(formData.get("email") ?? "").trim();
  const message = String(formData.get("message") ?? "").trim();

  if (!name || !email || !message) {
    return { ok: false, error: "Please fill in your name, email, and message." };
  }
  if (!EMAIL_RE.test(email)) {
    return { ok: false, error: "That email address doesn't look right." };
  }
  if (message.length < 5) {
    return { ok: false, error: "A few more words, please." };
  }

  try {
    const supabase = getSupabase();
    const { error } = await supabase.from("leads").insert({
      name,
      email,
      message,
    });

    if (error) {
      console.error("[submitLead] supabase error:", error);
      return {
        ok: false,
        error:
          "Something went wrong on our end. Please try again, or email hello@sweeneynutrition.com directly.",
      };
    }

    return { ok: true };
  } catch (err) {
    console.error("[submitLead] unexpected error:", err);
    return {
      ok: false,
      error:
        "Something went wrong on our end. Please try again, or email hello@sweeneynutrition.com directly.",
    };
  }
}
