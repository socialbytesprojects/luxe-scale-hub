import { createFileRoute, Link, useRouter } from "@tanstack/react-router";
import { useState } from "react";
import { toast } from "sonner";
import { supabase } from "@/integrations/supabase/client";

export const Route = createFileRoute("/auth")({
  head: () => ({
    meta: [
      { title: "Admin Sign In — JLD" },
      { name: "description", content: "Secure admin sign in for JLD website managers." },
      { name: "robots", content: "noindex, nofollow" },
    ],
  }),
  component: AuthPage,
});

function AuthPage() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [busy, setBusy] = useState(false);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setBusy(true);
    const { error } = await supabase.auth.signInWithPassword({ email, password });
    setBusy(false);
    if (error) {
      toast.error("Sign in failed", { description: error.message });
      return;
    }
    toast.success("Signed in");
    router.navigate({ to: "/admin" });
  }

  return (
    <div className="min-h-screen bg-ivory flex items-center justify-center px-6">
      <div className="w-full max-w-md">
        <Link to="/" className="block text-center mb-10">
          <span className="font-display text-3xl tracking-wider text-noir">JLD</span>
        </Link>
        <form onSubmit={handleSubmit} className="bg-white border border-champagne/40 p-8 md:p-10 shadow-sm">
          <h1 className="font-display text-2xl text-noir mb-6">Admin Sign In</h1>
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
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full border-b border-noir/20 py-3 text-sm bg-transparent outline-none focus:border-champagne"
              />
            </div>
            <button type="submit" disabled={busy} className="btn-noir w-full disabled:opacity-60">
              {busy ? "Signing in..." : "Sign In"}
            </button>
          </div>
        </form>
        <p className="text-center mt-6 text-sm text-brown">
          <Link to="/" className="hover:text-noir transition-colors">← Back to website</Link>
        </p>
      </div>
    </div>
  );
}
