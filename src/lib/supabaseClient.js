import { createClient } from "@supabase/supabase-js";

export const supabase = createClient(
	"https://ckbndxkirgrlukrancuf.supabase.co",
	"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImNrYm5keGtpcmdybHVrcmFuY3VmIiwicm9sZSI6ImFub24iLCJpYXQiOjE2NzY5OTcwOTUsImV4cCI6MTk5MjU3MzA5NX0.eSiANanw7-rmQ-YZQ5vS5vWoMY8DtiifYBunaykWMSQ",
);
