import supabase from "./supabase";

export async function getSkills() {
  let { data: skills, error } = await supabase.from("skills").select("*");
  if (error) throw new Error(error.message);
  return skills;
}
