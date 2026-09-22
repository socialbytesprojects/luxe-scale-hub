import { createServerFn } from "@tanstack/react-start";
import { z } from "zod";

const appointmentSchema = z.object({
  name: z.string().trim().min(1, "Name is required").max(100),
  phone: z.string().trim().min(6, "Phone number is required").max(30),
  email: z.string().trim().email("Invalid email").max(255).optional().or(z.literal("")),
  location: z.enum(["HSR Layout, Bangalore"]),
  service: z.string().trim().max(100).optional().or(z.literal("")),
  preferredDate: z.string().trim().max(50).optional().or(z.literal("")),
  preferredTime: z.string().trim().max(50).optional().or(z.literal("")),
  notes: z.string().trim().max(1000).optional().or(z.literal("")),
  honeypot: z.string().max(10).optional().or(z.literal("")),
});

const franchiseSchema = z.object({
  name: z.string().trim().min(1, "Name is required").max(100),
  phone: z.string().trim().min(6, "Phone number is required").max(30),
  email: z.string().trim().email("Invalid email").max(255).optional().or(z.literal("")),
  city: z.string().trim().max(100).optional().or(z.literal("")),
  investmentInterest: z.string().trim().max(100).optional().or(z.literal("")),
  message: z.string().trim().max(2000).optional().or(z.literal("")),
  honeypot: z.string().max(10).optional().or(z.literal("")),
});

async function checkRateLimit(supabase: any, table: string, phone: string, minutes: number) {
  const cutoff = new Date(Date.now() - minutes * 60 * 1000).toISOString();
  const { count, error } = await supabase
    .from(table)
    .select("*", { count: "exact", head: true })
    .eq("phone", phone)
    .gte("created_at", cutoff);
  if (error) throw new Error("Unable to verify submission. Please try again later.");
  return (count ?? 0) > 0;
}

export const submitAppointmentRequest = createServerFn({ method: "POST" })
  .inputValidator((data) => appointmentSchema.parse(data))
  .handler(async ({ data }) => {
    if (data.honeypot) {
      throw new Error("Invalid submission.");
    }

    const { createClient } = await import("@supabase/supabase-js");
    const supabase = createClient(
      process.env["SUPABASE_URL"]!,
      process.env["SUPABASE_PUBLISHABLE_KEY"]!,
      {
        auth: { persistSession: false, autoRefreshToken: false },
      },
    );

    const recentlySubmitted = await checkRateLimit(supabase, "appointment_requests", data.phone, 5);
    if (recentlySubmitted) {
      throw new Error("You recently submitted a request. Please wait a few minutes before trying again.");
    }

    const { error } = await supabase.from("appointment_requests").insert({
      name: data.name,
      phone: data.phone,
      email: data.email || null,
      location: data.location,
      service: data.service || null,
      preferred_date: data.preferredDate || null,
      preferred_time: data.preferredTime || null,
      notes: data.notes || null,
      status: "new",
    });

    if (error) {
      console.error("Appointment insert error:", error);
      throw new Error("We couldn't save your request. Please try again or call us directly.");
    }

    return { ok: true };
  });

export const submitFranchiseEnquiry = createServerFn({ method: "POST" })
  .inputValidator((data) => franchiseSchema.parse(data))
  .handler(async ({ data }) => {
    if (data.honeypot) {
      throw new Error("Invalid submission.");
    }

    const { createClient } = await import("@supabase/supabase-js");
    const supabase = createClient(
      process.env["SUPABASE_URL"]!,
      process.env["SUPABASE_PUBLISHABLE_KEY"]!,
      {
        auth: { persistSession: false, autoRefreshToken: false },
      },
    );

    const recentlySubmitted = await checkRateLimit(supabase, "franchise_enquiries", data.phone, 5);
    if (recentlySubmitted) {
      throw new Error("You recently submitted an enquiry. Please wait a few minutes before trying again.");
    }

    const { error } = await supabase.from("franchise_enquiries").insert({
      name: data.name,
      phone: data.phone,
      email: data.email || null,
      city: data.city || null,
      investment_interest: data.investmentInterest || null,
      message: data.message || null,
      status: "new",
    });

    if (error) {
      console.error("Franchise insert error:", error);
      throw new Error("We couldn't save your enquiry. Please try again or WhatsApp us directly.");
    }

    return { ok: true };
  });
