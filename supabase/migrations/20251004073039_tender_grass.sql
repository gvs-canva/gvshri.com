/*
  # Create contact form submissions table

  1. New Tables
    - `contact_form_submissions`
      - `id` (uuid, primary key)
      - `full_name` (text, required)
      - `email` (text, required)
      - `company_name` (text, optional)
      - `industry` (text, optional)
      - `biggest_challenge` (text, required)
      - `timeline` (text, optional)
      - `status` (text, default 'new')
      - `created_at` (timestamp)

  2. Security
    - Enable RLS on `contact_form_submissions` table
    - Add policy for public form submissions
    - Add policy for authenticated users to read submissions
*/

CREATE TABLE IF NOT EXISTS contact_form_submissions (
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

ALTER TABLE contact_form_submissions ENABLE ROW LEVEL SECURITY;

-- Allow anyone to insert contact form submissions (for the public form)
CREATE POLICY "Anyone can submit contact form"
  ON contact_form_submissions
  FOR INSERT
  TO anon
  WITH CHECK (true);

-- Only authenticated users can read submissions
CREATE POLICY "Authenticated users can read submissions"
  ON contact_form_submissions
  FOR SELECT
  TO authenticated
  USING (true);