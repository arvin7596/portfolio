import supabase from "./supabase";

export async function getResume() {
  const { data: resume, error } = await supabase.from("experience").select("*");

  if (error) throw new Error(error.message);

  return resume;
}
