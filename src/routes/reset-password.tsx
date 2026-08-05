import { createFileRoute, Link, useRouter } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { toast } from "sonner";
import { supabase } from "@/integrations/supabase/client";

export const Route = createFileRoute("/reset-password")({
  ssr: false,
  head: () => ({
    meta: [
      { title: "Reset Password — JLD" },
      { name: "description", content: "Set a new password for your JLD admin account." },
      { name: "robots", content: "noindex, nofollow" },
    ],
  }),
  component: ResetPasswordPage,
});

function ResetPasswordPage() {
  const router = useRouter();
  const [ready, setReady] = useState(false);
  const [password, setPassword] = useState("");
  const [confirm, setConfirm] = useState("");
  const [busy, setBusy] = useState(false);

  useEffect(() => {
    let mounted = true;
    const { data: sub } = supabase.auth.onAuthStateChange((event) => {
      if (event === "PASSWORD_RECOVERY" || event === "SIGNED_IN") setReady(true);
    });
    supabase.auth.getSession().then(({ data }) => {
      if (mounted && data.session) setReady(true);
    });
    return () => {
      mounted = false;
      sub.subscription.unsubscribe();
    };
  }, []);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (password.length < 6) {
      toast.error("Password too short", { description: "Use at least 6 characters." });
      return;
    }
    if (password !== confirm) {
      toast.error("Passwords do not match");
      return;
    }
    setBusy(true);
    const { error } = await supabase.auth.updateUser({ password });
    setBusy(false);
    if (error) {
      toast.error("Could not update password", { description: error.message });
      return;
    }
    toast.success("Password updated", { description: "Sign in with your new password." });
    await supabase.auth.signOut();
    router.navigate({ to: "/auth" });
  }

  return (
    <div className="min-h-screen bg-ivory flex items-center justify-center px-6">
      <div className="w-full max-w-md">
        <Link to="/" className="block text-center mb-10">
          <span className="font-display text-3xl tracking-wider text-noir">JLD</span>
        </Link>
        <form onSubmit={handleSubmit} className="bg-white border border-champagne/40 p-8 md:p-10 shadow-sm">
          <h1 className="font-display text-2xl text-noir mb-2">Set a new password</h1>
          <p className="font-editorial text-sm text-brown mb-6">
            {ready
              ? "Choose a new password for your admin account."
              : "Open this page from the reset link in your email."}
          </p>
          <div className="space-y-5">
            <div>
              <label htmlFor="new-password" className="eyebrow !text-noir/70 block mb-2">New password</label>
              <input
                id="new-password"
                type="password"
                required
                minLength={6}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full border-b border-noir/20 py-3 text-sm bg-transparent outline-none focus:border-champagne"
              />
            </div>
            <div>
              <label htmlFor="confirm-password" className="eyebrow !text-noir/70 block mb-2">Confirm password</label>
              <input
                id="confirm-password"
                type="password"
                required
                minLength={6}
                value={confirm}
                onChange={(e) => setConfirm(e.target.value)}
                className="w-full border-b border-noir/20 py-3 text-sm bg-transparent outline-none focus:border-champagne"
              />
            </div>
            <button type="submit" disabled={busy || !ready} className="btn-noir w-full disabled:opacity-60">
              {busy ? "Updating..." : "Update Password"}
            </button>
          </div>
        </form>
        <p className="text-center mt-6 text-sm text-brown">
          <Link to="/auth" className="hover:text-noir transition-colors">← Back to sign in</Link>
        </p>
      </div>
    </div>
  );
}