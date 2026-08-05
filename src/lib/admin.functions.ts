import { createServerFn } from "@tanstack/react-start";
import { z } from "zod";
import { requireSupabaseAuth } from "@/integrations/supabase/auth-middleware";

const statusSchema = z.object({
  id: z.string().uuid(),
  table: z.enum(["appointment_requests", "franchise_enquiries"]),
  status: z.enum(["new", "contacted", "closed"]),
});

const createAdminSchema = z.object({
  email: z.string().email(),
  password: z.string().min(6),
});

export const listSubmissions = createServerFn({ method: "GET" })
  .middleware([requireSupabaseAuth])
  .handler(async ({ context }) => {
    const { data: isAdmin } = await context.supabase.rpc("has_role", { _role: "admin" });
    if (!isAdmin) throw new Error("Forbidden");

    const [{ data: appointments, error: aErr }, { data: franchise, error: fErr }] = await Promise.all([
      context.supabase.from("appointment_requests").select("*").order("created_at", { ascending: false }),
      context.supabase.from("franchise_enquiries").select("*").order("created_at", { ascending: false }),
    ]);

    if (aErr || fErr) {
      console.error("List submissions error:", aErr, fErr);
      throw new Error("Unable to load submissions.");
    }

    return {
      appointments: appointments ?? [],
      franchise: franchise ?? [],
    };
  });

export const updateSubmissionStatus = createServerFn({ method: "POST" })
  .middleware([requireSupabaseAuth])
  .inputValidator((data) => statusSchema.parse(data))
  .handler(async ({ data, context }) => {
    const { data: isAdmin } = await context.supabase.rpc("has_role", { _role: "admin" });
    if (!isAdmin) throw new Error("Forbidden");

    const { error } = await context.supabase
      .from(data.table)
      .update({ status: data.status })
      .eq("id", data.id);

    if (error) {
      console.error("Update status error:", error);
      throw new Error("Unable to update status.");
    }

    return { ok: true };
  });

export const createFirstAdmin = createServerFn({ method: "POST" })
  .inputValidator((data) => createAdminSchema.parse(data))
  .handler(async ({ data }) => {
    const { supabaseAdmin } = await import("@/integrations/supabase/client.server");

    const { count, error: countErr } = await supabaseAdmin
      .from("user_roles")
      .select("id", { count: "exact", head: true })
      .eq("role", "admin");

    if (countErr) {
      console.error("Count admins error:", countErr);
      throw new Error("Unable to verify admin setup.");
    }

    if ((count ?? 0) > 0) {
      throw new Error("An admin already exists.");
    }

    const { data: userData, error: authError } = await supabaseAdmin.auth.admin.createUser({
      email: data.email,
      password: data.password,
      email_confirm: true,
    });

    if (authError || !userData.user) {
      console.error("Create user error:", authError);
      throw new Error(authError?.message ?? "Failed to create admin account.");
    }

    const { error: roleError } = await supabaseAdmin.from("user_roles").insert({
      user_id: userData.user.id,
      role: "admin",
    });

    if (roleError) {
      console.error("Create role error:", roleError);
      throw new Error("Account created but role assignment failed. Contact support.");
    }

    return { ok: true };
  });

export const createAdminAccount = createServerFn({ method: "POST" })
  .middleware([requireSupabaseAuth])
  .inputValidator((data) => createAdminSchema.parse(data))
  .handler(async ({ data, context }) => {
    const { data: isAdmin } = await context.supabase.rpc("has_role", { _role: "admin" });
    if (!isAdmin) throw new Error("Forbidden");

    const { supabaseAdmin } = await import("@/integrations/supabase/client.server");

    const { data: userData, error: authError } = await supabaseAdmin.auth.admin.createUser({
      email: data.email,
      password: data.password,
      email_confirm: true,
    });

    if (authError || !userData.user) {
      console.error("Create admin user error:", authError);
      throw new Error(authError?.message ?? "Failed to create admin account.");
    }

    const { error: roleError } = await supabaseAdmin.from("user_roles").insert({
      user_id: userData.user.id,
      role: "admin",
    });

    if (roleError) {
      console.error("Assign admin role error:", roleError);
      throw new Error("Account created but role assignment failed.");
    }

    return { ok: true };
  });
