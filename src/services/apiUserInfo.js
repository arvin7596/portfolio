import supabase from "./supabase"

export async function getUserInfo() {
    const { data, error } = await supabase
        .from('user-info')
        .select('*')
    if (error) throw new Error(error.message);

    return data[0]
}