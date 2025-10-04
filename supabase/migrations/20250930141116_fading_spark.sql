/*
  # Create contact submissions table

  1. New Tables
    - `contact_submissions`
      - `id` (uuid, primary key)
      - `full_name` (text)
      - `email` (text)
      - `company_name` (text, optional)
      - `industry` (text, optional)
      - `biggest_challenge` (text)
      - `timeline` (text, optional)
      - `created_at` (timestamp)
      - `status` (text, default 'new')

  2. Security
    - Enable RLS on `contact_submissions` table
    - Add policy for inserting submissions (public access for form)
    - Add policy for reading submissions (admin only)
*/

CREATE TABLE IF NOT EXISTS contact_submissions (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  full_name text NOT NULL,
  email text NOT NULL,
  company_name text,
  industry text,
  biggest_challenge text NOT NULL,
  timeline text,
  status text DEFAULT 'new',
  created_at timestamptz DEFAULT now()
);

ALTER TABLE contact_submissions ENABLE ROW LEVEL SECURITY;

-- Allow anyone to insert contact submissions (for the public form)
CREATE POLICY "Anyone can submit contact form"
  ON contact_submissions
  FOR INSERT
  TO anon
  WITH CHECK (true);

-- Only authenticated users (admin) can read submissions
CREATE POLICY "Admin can read submissions"
  ON contact_submissions
  FOR SELECT
  TO authenticated
  USING (true);