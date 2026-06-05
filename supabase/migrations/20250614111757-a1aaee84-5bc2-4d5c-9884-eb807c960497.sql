
-- Create a table to store booking submissions
CREATE TABLE public.bookings (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  name TEXT NOT NULL,
  email TEXT NOT NULL,
  company TEXT NOT NULL,
  website TEXT,
  challenge TEXT NOT NULL,
  time_slot TEXT NOT NULL,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  status TEXT DEFAULT 'pending'
);

-- Enable Row Level Security (RLS) - but allow public access for now since this is a contact form
ALTER TABLE public.bookings ENABLE ROW LEVEL SECURITY;

-- Create policy that allows anyone to insert bookings (public contact form)
CREATE POLICY "Anyone can create bookings" 
  ON public.bookings 
  FOR INSERT 
  WITH CHECK (true);

-- Create policy that allows reading bookings (you can restrict this later)
CREATE POLICY "Anyone can view bookings" 
  ON public.bookings 
  FOR SELECT 
  USING (true);
