"use server";

import { auth } from "@clerk/nextjs/server";
import { CreateSupabaseClient } from "@/lib/supabase";

export const createCompanion = async (formData: CreateCompanion) => {
    const { userId: author } = await auth();
    const supabase = CreateSupabaseClient();

    const { data, error } = await supabase
        .from('companions')
        .insert({ author, ...formData })
        .select();
    if (error || !data) {
        throw new Error(error?.message || 'Failed to create companion');
    }

    return data[0];
}