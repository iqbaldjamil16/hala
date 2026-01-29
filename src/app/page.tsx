'use client';

import { useState, useEffect } from 'react';
import MenuItem from '@/components/menu-item';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { Sheet, SheetContent, SheetTitle } from '@/components/ui/sheet';
import { useToast } from '@/hooks/use-toast';

const menuItemsData = [
  { title: 'Pelayanan Keswan', href: 'https://keswan-pearl.vercel.app/', imageId: 'pelayanan-keswan' },
  { title: 'Vaksin Rabies', href: '#', imageId: 'vaksin-rabies' },
  { title: 'Inseminasi Buatan', href: '#', imageId: 'inseminasi-buatan' },
  { title: 'Kelahiran', href: '#', imageId: 'kelahiran' },
  { title: 'Populasi Ternak', href: 'https://populasi-ternak.vercel.app/', imageId: 'populasi-ternak' },
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
  const [sheetOpen, setSheetOpen] = useState(false);
  const [sheetUrl, setSheetUrl] = useState('');
  const [sheetTitle, setSheetTitle] = useState('');
  const { toast } = useToast();

  useEffect(() => {
    const handlePopState = (event: PopStateEvent) => {
      // Close the sheet if the history state is gone (user pressed back)
      if (!event.state?.webview) {
        setSheetOpen(false);
      }
    };

    window.addEventListener('popstate', handlePopState);
    return () => {
      window.removeEventListener('popstate', handlePopState);
    };
  }, []);

  const openWebView = (href: string, title: string) => {
    if (href && href !== '#') {
      setSheetUrl(href);
      setSheetTitle(title);
      setSheetOpen(true);
      window.history.pushState({ webview: true }, '');
    } else {
      toast({
        title: "Segera Hadir",
        description: "Fitur ini sedang dalam pengembangan.",
      });
    }
  };

  const handleSheetOpenChange = (open: boolean) => {
    setSheetOpen(open);
    if (!open && window.history.state?.webview) {
      // If sheet is closing and we have a history state, go back
      window.history.back();
    }
  };

  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-background p-8">
      <div className="w-full max-w-[16rem]">
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
              onClick={() => openWebView(item.href, item.title)}
              onPasswordSuccess={() => openWebView(item.href, item.title)}
            />
          ))}
        </div>
      </div>
      <Sheet open={sheetOpen} onOpenChange={handleSheetOpenChange}>
        <SheetContent className="w-screen h-screen max-w-none sm:w-3/4 md:w-1/2 p-0">
          <SheetTitle className="sr-only">{sheetTitle}</SheetTitle>
          {sheetUrl && (
              <iframe
                  src={sheetUrl}
                  className="h-full w-full border-0"
                  title={sheetTitle}
                  sandbox="allow-scripts allow-same-origin allow-forms"
              />
          )}
        </SheetContent>
      </Sheet>
    </main>
  );
}
