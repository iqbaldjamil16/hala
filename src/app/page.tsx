'use client';

import { useState, useEffect } from 'react';
import MenuItem from '@/components/menu-item';
import { PlaceHolderImages } from '@/lib/placeholder-images';
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
  const [webViewOpen, setWebViewOpen] = useState(false);
  const [webViewUrl, setWebViewUrl] = useState('');
  const [webViewTitle, setWebViewTitle] = useState('');
  const { toast } = useToast();

  useEffect(() => {
    const handlePopState = (event: PopStateEvent) => {
      // Close the webview if the history state is gone (user pressed back)
      if (!event.state?.webview) {
        setWebViewOpen(false);
      }
    };

    window.addEventListener('popstate', handlePopState);
    return () => {
      window.removeEventListener('popstate', handlePopState);
    };
  }, []);

  const openWebView = (href: string, title: string) => {
    if (href && href !== '#') {
      setWebViewUrl(href);
      setWebViewTitle(title);
      setWebViewOpen(true);
      window.history.pushState({ webview: true }, '');
    } else {
      toast({
        title: "Segera Hadir",
        description: "Fitur ini sedang dalam pengembangan.",
      });
    }
  };

  if (webViewOpen) {
    return (
      <div className="fixed inset-0 z-50 bg-background">
        {webViewUrl && (
            <iframe
                src={webViewUrl}
                className="h-full w-full border-0"
                title={webViewTitle}
                sandbox="allow-scripts allow-same-origin allow-forms"
            />
        )}
      </div>
    );
  }

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
    </main>
  );
}
