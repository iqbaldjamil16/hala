
import {
  Stethoscope,
  Syringe,
  Beaker,
  Baby,
  Users,
  UtensilsCrossed,
  Truck,
  Wheat,
  Archive,
} from 'lucide-react';
import MenuItem from '@/components/menu-item';
import type { FC } from 'react';

const CowIcon: FC<{ className?: string }> = ({ className }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    <path d="M18.8 8.02A6.45 6.45 0 0 0 12.06 2C5.42 2 2 5.42 2 12.06c0 6.64 3.42 10.06 10.06 10.06 6.64 0 10.06-3.42 10.06-10.06 0-3.32-1.71-6.14-4.32-8.04" />
    <path d="M8 12v.01" />
    <path d="M16 12v.01" />
    <path d="M7.5 15.5c2-2.5 7-2.5 9 0" />
    <path d="M5.5 10.5c-1.5 0-2.5.5-2.5 1.5" />
    <path d="M18.5 10.5c1.5 0 2.5.5 2.5 1.5" />
  </svg>
);

const menuItems = [
  { title: 'Pelayanan Keswan', icon: Stethoscope, href: '/dashboard' },
  { title: 'Vaksin Rabies', icon: Syringe, href: '#' },
  { title: 'Inseminasi Buatan', icon: Beaker, href: '#' },
  { title: 'Kelahiran', icon: Baby, href: '#' },
  { title: 'Populasi Ternak', icon: Users, href: '#' },
  { title: 'Pemotongan Ternak', icon: UtensilsCrossed, href: '#' },
  { title: 'Lalulintas Ternak', icon: Truck, href: '#' },
  { title: 'Hewan Kurban', icon: CowIcon, href: '#' },
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
