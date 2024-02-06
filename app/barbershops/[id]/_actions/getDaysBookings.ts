'use server';

import { db } from '@/app/_lib/prisma';
import { endOfDay, startOfDay } from 'date-fns';

export async function getDaysBookings(barbershopId: string, date: Date) {
  const booking = await db.booking.findMany({
    where: {
      barbershopId,
      date: {
        lte: endOfDay(date),
        gte: startOfDay(date),
      },
    },
  });

  return booking;
}
