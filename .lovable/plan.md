# Launch prep: SEO + working forms + custom domain

Everything on Lovable: hosting, Lovable Cloud (Postgres + Auth), and a connected custom domain.

## 1. Working forms (backend)

Enable Lovable Cloud (database + logins, no external accounts) and wire the two forms that are currently fake (they just show a "sent" message):

- Appointment requests (Contact page)
- Franchise / investor enquiries (Franchise page)

What happens:

- Two tables store submissions: `appointment_requests` (name, phone, email, service, preferred date/time, notes) and `franchise_enquiries` (name, phone, email, city, investment interest, message).
- Anyone can submit; nobody can read submissions except signed-in admins. Enforced at the database level, not just in the UI.
- Both forms get real validation (required fields, email/phone format, length limits), a loading state, a success confirmation, and a clear error message if something fails.
- Spam protection: honeypot field plus a simple per-submission rate limit.

### Admin area

- `/auth` — email + password sign-in (no public sign-up; your account is created for you).
- `/admin` — login-protected page listing both submission types in tabs, newest first, with contact details, timestamps, and a status toggle (New / Contacted / Closed) so you can work the leads.
- Admin rights live in a separate roles table (not on the user record) so the permission can't be self-granted.

You'll need to give me the email address you want as the first admin account.

## 2. Custom domain

- Publish to the Lovable URL first, then connect your existing domain in **Project Settings → Domains**.
- Add the A records (root + www) and TXT verification record at your registrar/DNS provider, or use the automatic setup if your provider supports it.
- Once DNS propagates, Lovable provisions SSL automatically.
- All canonical URLs and the sitemap will be updated to your domain.

## 3. SEO optimization

- **Per-page metadata**: unique title, description, and social preview text for all 8 pages (Home, About, Services, Lookbook, Franchise, Partners, Contact, plus 404). Currently several pages share generic text.
- **Canonical URLs + og:url** on every page pointing at `https://<your-domain>/...` — this is also required so social previews stop attributing pages to the preview domain. The exact domain will be confirmed before implementation.
- **Sitemap**: fix the base URL (currently blank, so the sitemap is invalid) and add the missing Lookbook and Partners pages.
- **robots.txt**: keep crawling open, add the sitemap reference.
- **Structured data (JSON-LD)**: HairSalon / LocalBusiness on the home page (name, phone 9509502222, email info@jeanlouisdavid.in, brand, price range), Organization sitewide, BreadcrumbList on inner pages, and FAQPage on the franchise page if we keep an FAQ block.
- **Headings**: confirm exactly one H1 per page and a sensible H2/H3 order.
- **Images**: descriptive alt text on the content images (lookbook, story, founders) instead of empty/decorative alt; lazy-load everything below the fold; add width/height where missing to stop layout shift.
- **Performance**: lookbook and slide images served at sane sizes, hero video `preload="none"` with a poster frame so first paint isn't blocked, fonts trimmed to weights actually used.
- **Keyword grounding**: a quick check of real search demand for luxury-salon and salon-franchise terms in India, used to shape the page titles and descriptions (no invented claims, stats, or reviews).

## Technical notes

- Backend uses Lovable Cloud (Postgres + Auth), hosted on Lovable. Tables get row-level security: public `INSERT` only, `SELECT`/`UPDATE` restricted to the admin role via a security-definer role check.
- Form submissions go through server functions with server-side validation (Zod), so the rules can't be bypassed from the browser.
- Admin pages live under the authenticated route group; the submissions list is fetched with an authenticated server function so no data leaks during server rendering.
- Metadata uses each route's `head()`; canonical goes on leaf routes only. Sitemap stays the existing server route at `/sitemap.xml`.
- No email notifications in this pass — submissions are visible in the admin page. Easy to add later.

## Out of scope for now

- Email / WhatsApp alerts on new submissions
- Online payments or deposits
- Multi-location / booking calendar integration
