import {
  LayoutDashboard,
  BarChart3,
  Package,
  ShoppingCart,
  Users,
  Settings,
  LifeBuoy,
  FileText,
  Puzzle,
} from 'lucide-react';
import MenuItem from '@/components/menu-item';

const menuItems = [
  { title: 'Pelayanan Keswan', icon: LayoutDashboard, href: '/dashboard' },
  { title: 'Vaksin Rabies', icon: BarChart3, href: '#' },
  { title: 'Inseminasi Buatan', icon: Package, href: '#' },
  { title: 'Kelahiran', icon: ShoppingCart, href: '#' },
  { title: 'Populasi Ternak', icon: Users, href: '#' },
  { title: 'Pemotongan Ternak', icon: Settings, href: '#' },
  { title: 'Lalulintas Ternak', icon: LifeBuoy, href: '#' },
  { title: 'Hewan Kurban', icon: FileText, href: '#' },
  { title: 'Integrations', icon: Puzzle, href: '#' },
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
