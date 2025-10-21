-- Create the notes table
create table notes (
  id uuid default gen_random_uuid() primary key,
  content text not null,
  created_at timestamp with time zone default timezone('utc'::text, now()) not null,
  updated_at timestamp with time zone default timezone('utc'::text, now()) not null
);

-- Enable Row Level Security
alter table notes enable row level security;

-- Create policy to allow all operations (you can customize this based on auth requirements)
create policy "Allow all operations on notes"
  on notes
  for all
  using (true)
  with check (true);
