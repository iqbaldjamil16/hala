import {
  Stethoscope,
  Syringe,
  Beaker,
  Baby,
  Users,
  UtensilsCrossed,
  Truck,
  Rabbit,
  Wheat,
  Archive,
} from 'lucide-react';
import MenuItem from '@/components/menu-item';

const menuItems = [
  { title: 'Pelayanan Keswan', icon: Stethoscope, href: '/dashboard' },
  { title: 'Vaksin Rabies', icon: Syringe, href: '#' },
  { title: 'Inseminasi Buatan', icon: Beaker, href: '#' },
  { title: 'Kelahiran', icon: Baby, href: '#' },
  { title: 'Populasi Ternak', icon: Users, href: '#' },
  { title: 'Pemotongan Ternak', icon: UtensilsCrossed, href: '#' },
  { title: 'Lalulintas Ternak', icon: Truck, href: '#' },
  { title: 'Hewan Kurban', icon: Rabbit, href: '#' },
  { title: 'Lahan Pakan', icon: Wheat, href: '#' },
  { title: 'Arsip PKH', icon: Archive, href: '#' },
];

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-background p-8">
      <div className="w-full max-w-sm">
        <header className="mb-12 text-center">
          <h1 className="font-headline text-4xl font-bold tracking-tight text-primary sm:text-6xl whitespace-nowrap">
            PKH Mateng
          </h1>
        </header>
        <div className="grid grid-cols-2 gap-4">
          {menuItems.map((item, index) => (
            <MenuItem
              key={index}
              title={item.title}
              icon={item.icon}
              href={item.href}
            />
          ))}
        </div>
      </div>
    </main>
  );
}
