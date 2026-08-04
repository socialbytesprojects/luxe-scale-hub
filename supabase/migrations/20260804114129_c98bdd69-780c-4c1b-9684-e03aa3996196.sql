-- Add SELECT policy on user_roles so RLS-enabled table has a policy
CREATE POLICY "Users can read their own roles"
  ON public.user_roles
  FOR SELECT
  TO authenticated
  USING (user_id = auth.uid());

-- Replace has_role to use auth.uid() internally (no user_id argument)
CREATE OR REPLACE FUNCTION public.has_role(_role public.app_role)
RETURNS BOOLEAN
LANGUAGE sql
STABLE
SECURITY DEFINER
SET search_path = public
AS $$
  SELECT EXISTS (
    SELECT 1
    FROM public.user_roles
    WHERE user_id = auth.uid()
      AND role = _role
  )
$$;

-- Revoke execute from public/anon; keep for authenticated (RLS needs it) and service_role
REVOKE EXECUTE ON FUNCTION public.has_role(public.app_role) FROM PUBLIC;
GRANT EXECUTE ON FUNCTION public.has_role(public.app_role) TO authenticated;
GRANT EXECUTE ON FUNCTION public.has_role(public.app_role) TO service_role;

-- Update policies to use the new signature
DROP POLICY IF EXISTS "Admins can view and update appointment requests" ON public.appointment_requests;
CREATE POLICY "Admins can view and update appointment requests"
  ON public.appointment_requests
  FOR ALL
  TO authenticated
  USING (public.has_role('admin'))
  WITH CHECK (public.has_role('admin'));

DROP POLICY IF EXISTS "Admins can view and update franchise enquiries" ON public.franchise_enquiries;
CREATE POLICY "Admins can view and update franchise enquiries"
  ON public.franchise_enquiries
  FOR ALL
  TO authenticated
  USING (public.has_role('admin'))
  WITH CHECK (public.has_role('admin'));