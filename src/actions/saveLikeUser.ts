'use server'

import prisma from "@/lib/db"; // Certifique-se de que a conexão do Prisma esteja configurada corretamente.

export async function createLikeUser(userId: string, ip: string) {
  const existingLike = await prisma.like.findUnique({
    where: {
      userId_ipId: {
        userId,
        ipId: ip,
      },
    },
  });

  if (existingLike) {
    return { success: false, message: 'Você já curtiu esta página' };
  }

  await prisma.like.create({
    data: {
      userId,
      ipId: ip,
    },
  });

  return { success: true, message: 'Like registrado com sucesso' };
}
