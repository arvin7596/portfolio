import supabase from "./supabase";

export async function getProjects() {
  const { data: projects, error } = await supabase.from("projects").select("*");

  if (error) throw new Error(error.message);

  return projects;
}
