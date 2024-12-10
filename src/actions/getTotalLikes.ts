'use server'

import prisma from "@/lib/db";

export async function getTotalLikes() {
    // Retorna a contagem total de likes
    const totalLikes = await prisma.like.count();
    return totalLikes;
  }