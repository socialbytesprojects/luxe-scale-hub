import { createFileRoute, Link } from "@tanstack/react-router";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { useState } from "react";
import { toast } from "sonner";
import { supabase } from "@/integrations/supabase/client";
import { createAdminAccount, listSubmissions, updateSubmissionStatus } from "@/lib/admin.functions";

export const Route = createFileRoute("/_authenticated/admin")({
  head: () => ({
    meta: [
      { title: "Admin Dashboard — JLD" },
      { name: "description", content: "Manage appointment requests and franchise enquiries." },
      { name: "robots", content: "noindex, nofollow" },
    ],
  }),
  component: AdminPage,
});

const statusBadge = (status: string) => {
  switch (status) {
    case "new":
      return "bg-champagne/20 text-noir";
    case "contacted":
      return "bg-green-100 text-green-800";
    case "closed":
      return "bg-noir/10 text-noir/60";
    default:
      return "bg-gray-100 text-gray-700";
  }
};

function AdminPage() {
  const queryClient = useQueryClient();
  const [tab, setTab] = useState<"appointments" | "franchise">("appointments");
  const [newAdminEmail, setNewAdminEmail] = useState("");
  const [newAdminPassword, setNewAdminPassword] = useState("");

  const addAdminMutation = useMutation({
    mutationFn: (vars: { email: string; password: string }) => createAdminAccount({ data: vars }),
    onSuccess: () => {
      setNewAdminEmail("");
      setNewAdminPassword("");
      toast.success("Admin account created");
    },
    onError: (err: any) => toast.error("Could not create admin", { description: err?.message }),
  });
  const { data, isLoading, error } = useQuery({
    queryKey: ["submissions"],
    queryFn: () => listSubmissions({}),
  });

  const statusMutation = useMutation({
    mutationFn: updateSubmissionStatus,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["submissions"] });
      toast.success("Status updated");
    },
    onError: (err: any) => toast.error("Update failed", { description: err?.message }),
  });

  async function handleSignOut() {
    await queryClient.cancelQueries();
    queryClient.clear();
    await supabase.auth.signOut();
    toast.success("Signed out");
  }

  if (isLoading) {
    return (
      <div className="min-h-screen bg-ivory flex items-center justify-center">
        <p className="font-editorial text-brown">Loading submissions…</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen bg-ivory flex items-center justify-center px-6">
        <div className="max-w-md text-center">
          <p className="font-editorial text-lg text-noir mb-4">Could not load submissions.</p>
          <p className="text-sm text-brown mb-6">{String(error)}</p>
          <button onClick={handleSignOut} className="btn-noir">Sign Out</button>
        </div>
      </div>
    );
  }

  const items = tab === "appointments" ? data?.appointments ?? [] : data?.franchise ?? [];

  return (
    <div className="min-h-screen bg-ivory pt-24 pb-20">
      <div className="mx-auto max-w-[1400px] px-6 md:px-10">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-10">
          <div>
            <h1 className="font-display text-4xl text-noir">Admin Dashboard</h1>
            <p className="font-editorial text-brown mt-1">Appointment requests and franchise enquiries</p>
          </div>
          <div className="flex items-center gap-3">
            <Link to="/" className="btn-gold">View Website</Link>
            <button onClick={handleSignOut} className="btn-noir">Sign Out</button>
          </div>
        </div>

        <div className="flex gap-4 border-b border-noir/10 mb-8">
          <button
            onClick={() => setTab("appointments")}
            className={`pb-3 text-sm uppercase tracking-widest transition-colors ${tab === "appointments" ? "text-noir border-b-2 border-champagne" : "text-brown hover:text-noir"}`}
          >
            Appointments ({data?.appointments.length ?? 0})
          </button>
          <button
            onClick={() => setTab("franchise")}
            className={`pb-3 text-sm uppercase tracking-widest transition-colors ${tab === "franchise" ? "text-noir border-b-2 border-champagne" : "text-brown hover:text-noir"}`}
          >
            Franchise ({data?.franchise.length ?? 0})
          </button>
        </div>

        <div className="space-y-4">
          {items.length === 0 && (
            <div className="bg-white border border-champagne/30 p-10 text-center">
              <p className="font-editorial text-lg text-brown">No {tab} yet.</p>
            </div>
          )}
          {items.map((item: any) => (
            <div key={item.id} className="bg-white border border-champagne/30 p-6 md:p-8">
              <div className="flex flex-col md:flex-row md:items-start justify-between gap-4 mb-4">
                <div>
                  <h3 className="font-display text-2xl text-noir">{item.name}</h3>
                  <div className="mt-2 flex flex-wrap gap-3 text-sm text-brown font-editorial">
                    <a href={`tel:${item.phone}`} className="hover:text-champagne">{item.phone}</a>
                    {item.email && <a href={`mailto:${item.email}`} className="hover:text-champagne">{item.email}</a>}
                    {tab === "appointments" && item.service && <span>Service: {item.service}</span>}
                    {tab === "franchise" && item.city && <span>Location: {item.city}</span>}
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <span className={`px-3 py-1 text-xs uppercase tracking-wider rounded-full ${statusBadge(item.status)}`}>{item.status}</span>
                  <select
                    value={item.status}
                    onChange={(e) => statusMutation.mutate({ data: { id: item.id, table: tab === "appointments" ? "appointment_requests" : "franchise_enquiries", status: e.target.value as any } })}
                    className="bg-ivory border border-noir/10 text-sm py-1 px-2 outline-none focus:border-champagne"
                  >
                    <option value="new">New</option>
                    <option value="contacted">Contacted</option>
                    <option value="closed">Closed</option>
                  </select>
                </div>
              </div>
              {tab === "appointments" && (
                <div className="grid md:grid-cols-3 gap-4 text-sm text-brown border-t border-noir/5 pt-4">
                  <p><span className="eyebrow !text-noir/60 block">Preferred date</span>{item.preferred_date ? new Date(item.preferred_date).toLocaleDateString() : "—"}</p>
                  <p><span className="eyebrow !text-noir/60 block">Preferred time</span>{item.preferred_time || "—"}</p>
                  <p><span className="eyebrow !text-noir/60 block">Notes</span>{item.notes || "—"}</p>
                </div>
              )}
              {tab === "franchise" && (
                <div className="text-sm text-brown border-t border-noir/5 pt-4">
                  <p><span className="eyebrow !text-noir/60 block">Investment interest</span>{item.investment_interest || "—"}</p>
                  {item.message && <p className="mt-3"><span className="eyebrow !text-noir/60 block">Message</span>{item.message}</p>}
                </div>
              )}
              <p className="mt-4 text-xs text-brown/60">Submitted {new Date(item.created_at).toLocaleString()}</p>
            </div>
          ))}
        </div>

        <div className="mt-16 bg-white border border-champagne/30 p-6 md:p-8 max-w-xl">
          <h2 className="font-display text-2xl text-noir mb-1">Add an admin</h2>
          <p className="font-editorial text-sm text-brown mb-6">Create another account with dashboard access.</p>
          <form
            className="space-y-5"
            onSubmit={(e) => {
              e.preventDefault();
              if (newAdminPassword.length < 6) {
                toast.error("Password too short", { description: "Use at least 6 characters." });
                return;
              }
              addAdminMutation.mutate({ email: newAdminEmail, password: newAdminPassword });
            }}
          >
            <div>
              <label htmlFor="admin-email" className="eyebrow !text-noir/70 block mb-2">Email</label>
              <input
                id="admin-email"
                type="email"
                required
                value={newAdminEmail}
                onChange={(e) => setNewAdminEmail(e.target.value)}
                className="w-full border-b border-noir/20 py-3 text-sm bg-transparent outline-none focus:border-champagne"
              />
            </div>
            <div>
              <label htmlFor="admin-password" className="eyebrow !text-noir/70 block mb-2">Temporary password</label>
              <input
                id="admin-password"
                type="password"
                required
                minLength={6}
                value={newAdminPassword}
                onChange={(e) => setNewAdminPassword(e.target.value)}
                className="w-full border-b border-noir/20 py-3 text-sm bg-transparent outline-none focus:border-champagne"
              />
            </div>
            <button type="submit" disabled={addAdminMutation.isPending} className="btn-noir disabled:opacity-60">
              {addAdminMutation.isPending ? "Creating..." : "Create Admin"}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
