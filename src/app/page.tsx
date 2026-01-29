
import MenuItem from '@/components/menu-item';
import { PlaceHolderImages } from '@/lib/placeholder-images';

const menuItemsData = [
  { title: 'Pelayanan Keswan', href: '/dashboard', imageId: 'pelayanan-keswan' },
  { title: 'Vaksin Rabies', href: '#', imageId: 'vaksin-rabies' },
  { title: 'Inseminasi Buatan', href: '#', imageId: 'inseminasi-buatan' },
  { title: 'Kelahiran', href: '#', imageId: 'kelahiran' },
  { title: 'Populasi Ternak', href: '/populasi-ternak', imageId: 'populasi-ternak' },
  { title: 'Pemotongan Ternak', href: '#', imageId: 'pemotongan-ternak' },
  { title: 'Lalulintas Ternak', href: '#', imageId: 'lalulintas-ternak' },
  { title: 'Hewan Kurban', href: '#', imageId: 'hewan-kurban' },
  { title: 'Lahan Pakan', href: '#', imageId: 'lahan-pakan' },
  { title: 'Arsip PKH', href: '#', imageId: 'arsip-pkh', passwordProtected: true, password: 'pkhm46' },
];

const menuItems = menuItemsData.map(item => {
    const placeholder = PlaceHolderImages.find(p => p.id === item.imageId);
    return {
        ...item,
        imageUrl: placeholder?.imageUrl || "https://picsum.photos/seed/placeholder/200/200",
        imageHint: placeholder?.imageHint || "placeholder",
    }
});

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-background p-8">
      <div className="w-full max-w-[16rem]">
        <header className="mb-8 text-center">
          <h1 className="font-headline text-3xl tracking-tight text-primary sm:text-5xl whitespace-nowrap [text-shadow:0_4px_0_hsl(var(--accent)/0.5)]">
            PKH Mateng
          </h1>
        </header>
        <div className="grid grid-cols-2 gap-4">
          {menuItems.map((item: any, index) => (
            <MenuItem
              key={index}
              title={item.title}
              href={item.href}
              imageUrl={item.imageUrl}
              imageHint={item.imageHint}
              passwordProtected={item.passwordProtected}
              password={item.password}
            />
          ))}
        </div>
      </div>
    </main>
  );
}
