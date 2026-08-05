import { createFileRoute, useRouter } from "@tanstack/react-router";
import { useState } from "react";
import { toast } from "sonner";
import { createFirstAdmin } from "@/lib/admin.functions";

export const Route = createFileRoute("/setup-admin")({
  head: () => ({
    meta: [
      { title: "Setup Admin — JLD" },
      { name: "description", content: "One-time admin account setup for JLD." },
      { name: "robots", content: "noindex, nofollow" },
    ],
  }),
  component: SetupAdminPage,
});

function SetupAdminPage() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [busy, setBusy] = useState(false);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (password.length < 6) {
      toast.error("Password too short", { description: "Use at least 6 characters." });
      return;
    }
    setBusy(true);
    try {
      await createFirstAdmin({ data: { email, password } });
      toast.success("Admin created", { description: "You can now sign in at /auth" });
      router.navigate({ to: "/auth" });
    } catch (err: any) {
      toast.error("Setup failed", { description: err?.message || "Could not create admin." });
    } finally {
      setBusy(false);
    }
  }

  return (
    <div className="min-h-screen bg-ivory flex items-center justify-center px-6">
      <form onSubmit={handleSubmit} className="w-full max-w-md bg-white border border-champagne/40 p-8 md:p-10 shadow-sm">
        <h1 className="font-display text-2xl text-noir mb-2">Create first admin</h1>
        <p className="font-editorial text-sm text-brown mb-6">This page works only while no admin exists.</p>
        <div className="space-y-5">
          <div>
            <label className="eyebrow !text-noir/70 block mb-2">Email</label>
            <input
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full border-b border-noir/20 py-3 text-sm bg-transparent outline-none focus:border-champagne"
            />
          </div>
          <div>
            <label className="eyebrow !text-noir/70 block mb-2">Password</label>
            <input
              type="password"
              required
              minLength={6}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full border-b border-noir/20 py-3 text-sm bg-transparent outline-none focus:border-champagne"
            />
          </div>
          <button type="submit" disabled={busy} className="btn-noir w-full disabled:opacity-60">
            {busy ? "Creating..." : "Create Admin"}
          </button>
        </div>
      </form>
    </div>
  );
}
