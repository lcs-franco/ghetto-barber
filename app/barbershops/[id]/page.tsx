import { db } from '@/app/_lib/prisma';
import BarbershopInfo from './_components/barbershopInfo';
import ServiceItem from './_components/serviceItem';

interface BarbershopDetailsPageProps {
  params: any;
}

export default async function BarbershopDetailsPage({
  params,
}: BarbershopDetailsPageProps) {
  const barbershop = await db.barbershop.findUnique({
    where: {
      id: params.id,
    },
    include: {
      services: true,
    },
  });
  if (!barbershop) {
    return null;
  }
  return (
    <div>
      <BarbershopInfo barbershop={barbershop} />

      <div className="px-5 flex flex-col gap-4 py-6">
        {barbershop.services.map((service) => (
          <ServiceItem key={service.id} service={service} />
        ))}
      </div>
    </div>
  );
}
