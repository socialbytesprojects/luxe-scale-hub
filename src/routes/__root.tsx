import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {
  Outlet,
  Link,
  createRootRouteWithContext,
  useRouter,
  HeadContent,
  Scripts,
} from "@tanstack/react-router";
import { useEffect, useState, type ReactNode } from "react";

import appCss from "../styles.css?url";
import { reportLovableError } from "../lib/lovable-error-reporting";

function NotFoundComponent() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="text-7xl font-bold text-foreground">404</h1>
        <h2 className="mt-4 text-xl font-semibold text-foreground">Page not found</h2>
        <p className="mt-2 text-sm text-muted-foreground">
          The page you're looking for doesn't exist or has been moved.
        </p>
        <div className="mt-6">
          <Link
            to="/"
            className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
          >
            Go home
          </Link>
        </div>
      </div>
    </div>
  );
}

function ErrorComponent({ error, reset }: { error: Error; reset: () => void }) {
  console.error(error);
  const router = useRouter();
  useEffect(() => {
    reportLovableError(error, { boundary: "tanstack_root_error_component" });
  }, [error]);

  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="text-xl font-semibold tracking-tight text-foreground">
          This page didn't load
        </h1>
        <p className="mt-2 text-sm text-muted-foreground">
          Something went wrong on our end. You can try refreshing or head back home.
        </p>
        <div className="mt-6 flex flex-wrap justify-center gap-2">
          <button
            onClick={() => {
              router.invalidate();
              reset();
            }}
            className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
          >
            Try again
          </button>
          <a
            href="/"
            className="inline-flex items-center justify-center rounded-md border border-input bg-background px-4 py-2 text-sm font-medium text-foreground transition-colors hover:bg-accent"
          >
            Go home
          </a>
        </div>
      </div>
    </div>
  );
}

export const Route = createRootRouteWithContext<{ queryClient: QueryClient }>()({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "JLD — India's Next Luxury Salon Destination" },
      { name: "description", content: "Experience beauty. Own the brand. A luxury salon house built for clients and franchise partners." },
      { name: "author", content: "JLD" },
      { property: "og:title", content: "JLD — India's Next Luxury Salon Destination" },
      { property: "og:description", content: "Experience beauty. Own the brand. A luxury salon house built for clients and franchise partners." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary" },
      { name: "twitter:site", content: "@Lovable" },
      { name: "twitter:title", content: "JLD — India's Next Luxury Salon Destination" },
      { name: "twitter:description", content: "Experience beauty. Own the brand. A luxury salon house built for clients and franchise partners." },
      { property: "og:image", content: "https://pub-bb2e103a32db4e198524a2e9ed8f35b4.r2.dev/41ca147c-3f08-40b7-85f6-5025157226a3/id-preview-46ef4a90--8913fd1b-a2b2-46e0-85d2-c2420d492538.lovable.app-1780645942255.png" },
      { name: "twitter:image", content: "https://pub-bb2e103a32db4e198524a2e9ed8f35b4.r2.dev/41ca147c-3f08-40b7-85f6-5025157226a3/id-preview-46ef4a90--8913fd1b-a2b2-46e0-85d2-c2420d492538.lovable.app-1780645942255.png" },
    ],
    links: [
      {
        rel: "stylesheet",
        href: appCss,
      },
    ],
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
  errorComponent: ErrorComponent,
});

function RootShell({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <head>
        <HeadContent />
      </head>
      <body>
        {children}
        <Scripts />
      </body>
    </html>
  );
}

function RootComponent() {
  const { queryClient } = Route.useRouteContext();

  return (
    <QueryClientProvider client={queryClient}>
      <SiteHeader />
      <main>
        <Outlet />
      </main>
      <SiteFooter />
      <WhatsAppFloat />
    </QueryClientProvider>
  );
}

const NAV = [
  { to: "/", label: "Home" },
  { to: "/lookbook", label: "Lookbook" },
  { to: "/services", label: "Services" },
  { to: "/franchise", label: "Franchise" },
  { to: "/contact", label: "Contact" },
] as const;

function SiteHeader() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled ? "bg-noir/95 backdrop-blur-sm py-3" : "bg-transparent py-6"
      }`}
    >
      <div className="mx-auto flex max-w-[1400px] items-center justify-between px-6 md:px-10">
        <Link to="/" className="flex items-baseline gap-2">
          <span className="font-display text-ivory text-2xl tracking-wider">JLD</span>
          <span className="font-display italic text-champagne text-sm tracking-[0.3em] hidden sm:inline">Jean Louis David</span>
        </Link>
        <nav className="hidden md:flex items-center gap-10">
          {NAV.map((n) => (
            <Link
              key={n.to}
              to={n.to}
              className="text-ivory/85 hover:text-champagne text-[0.7rem] uppercase tracking-[0.28em] transition-colors"
              activeProps={{ className: "text-champagne text-[0.7rem] uppercase tracking-[0.28em]" }}
              activeOptions={{ exact: true }}
            >
              {n.label}
            </Link>
          ))}
        </nav>
        <div className="hidden md:flex items-center gap-3">
          <Link to="/contact" className="btn-gold !py-3 !px-6 !text-[0.65rem]">Book</Link>
        </div>
        <button
          onClick={() => setOpen((o) => !o)}
          className="md:hidden text-ivory text-2xl"
          aria-label="Toggle menu"
        >
          {open ? "✕" : "☰"}
        </button>
      </div>
      {open && (
        <div className="md:hidden bg-noir border-t border-champagne/20 px-6 py-6">
          <nav className="flex flex-col gap-5">
            {NAV.map((n) => (
              <Link
                key={n.to}
                to={n.to}
                onClick={() => setOpen(false)}
                className="text-ivory text-sm uppercase tracking-[0.28em]"
              >
                {n.label}
              </Link>
            ))}
            <Link to="/contact" onClick={() => setOpen(false)} className="btn-gold mt-2">
              Book Appointment
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}

function SiteFooter() {
  return (
    <footer className="bg-noir text-ivory">
      <div className="mx-auto max-w-[1400px] px-6 md:px-10 py-20">
        <div className="grid md:grid-cols-4 gap-12">
          <div>
            <div className="flex items-baseline gap-2 mb-6">
              <span className="font-display text-2xl tracking-wider">JLD</span>
              <span className="font-display italic text-champagne text-sm tracking-[0.3em]">Jean Louis David</span>
            </div>
            <p className="font-editorial text-lg text-ivory/70 leading-relaxed">
              A house of beauty, built for the modern connoisseur and the visionary entrepreneur.
            </p>
          </div>
          <div>
            <h4 className="eyebrow !text-champagne mb-5">Explore</h4>
            <ul className="space-y-3 text-sm text-ivory/75">
              {NAV.map((n) => (
                <li key={n.to}>
                  <Link to={n.to} className="hover:text-champagne transition-colors">{n.label}</Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="eyebrow !text-champagne mb-5">Connect</h4>
            <ul className="space-y-3 text-sm text-ivory/75">
              <li>+91 98XXX XXX XX</li>
              <li>hello@maisonnoir.in</li>
              <li>franchise@maisonnoir.in</li>
              <li>Mumbai · Delhi · Bengaluru</li>
            </ul>
          </div>
          <div>
            <h4 className="eyebrow !text-champagne mb-5">Newsletter</h4>
            <p className="text-sm text-ivory/70 mb-4">Editorials, openings, invitations.</p>
            <form className="flex border-b border-ivory/30">
              <input
                type="email"
                placeholder="Your email"
                className="bg-transparent text-sm py-2 flex-1 outline-none placeholder:text-ivory/40"
              />
              <button type="button" className="text-champagne text-xs tracking-widest">→</button>
            </form>
          </div>
        </div>
        <div className="mt-16 pt-8 border-t border-ivory/10 flex flex-col md:flex-row justify-between gap-4 text-xs text-ivory/50">
          <p>© {new Date().getFullYear()} JLD · Jean Louis David. All rights reserved.</p>
          <p className="tracking-[0.2em] uppercase">A house of quiet luxury</p>
        </div>
      </div>
    </footer>
  );
}

function WhatsAppFloat() {
  return (
    <a
      href="https://wa.me/919999999999"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-40 h-14 w-14 rounded-full bg-champagne text-noir flex items-center justify-center shadow-lg hover:scale-110 transition-transform"
      aria-label="WhatsApp"
    >
      <svg viewBox="0 0 24 24" className="h-7 w-7" fill="currentColor">
        <path d="M17.5 14.4c-.3-.1-1.7-.8-2-.9-.3-.1-.4-.1-.6.1-.2.3-.7.9-.8 1-.2.2-.3.2-.6.1-1.7-.8-2.8-1.5-3.9-3.5-.3-.5.3-.5.8-1.5.1-.2 0-.3 0-.5s-.6-1.4-.8-1.9c-.2-.5-.4-.4-.6-.4h-.5c-.2 0-.5.1-.7.3-.2.3-.9.9-.9 2.2 0 1.3.9 2.5 1 2.7.1.2 1.8 2.8 4.4 3.9 1.6.7 2.3.8 3.1.7.5-.1 1.7-.7 1.9-1.4.2-.7.2-1.3.2-1.4 0-.1-.2-.2-.5-.3zM12 2C6.5 2 2 6.5 2 12c0 1.8.5 3.5 1.3 5L2 22l5.2-1.3c1.4.8 3.1 1.2 4.8 1.2 5.5 0 10-4.5 10-10S17.5 2 12 2z"/>
      </svg>
    </a>
  );
}
