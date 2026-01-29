import type { FC } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Card } from '@/components/ui/card';
import { cn } from '@/lib/utils';

type MenuItemProps = {
  title: string;
  href: string;
  imageUrl: string;
  imageHint: string;
  className?: string;
};

const MenuItem: FC<MenuItemProps> = ({ title, href, imageUrl, imageHint, className }) => {
  return (
    <Link href={href} className={cn("group", className)}>
      <Card className="h-full flex flex-col items-center justify-center overflow-hidden rounded-xl bg-card transition-all duration-300 ease-in-out hover:shadow-lg hover:-translate-y-1 hover:border-accent/80">
        <div className="p-2">
          <Image
            src={imageUrl}
            alt={title}
            width={100}
            height={100}
            className="object-contain rounded-md transition-transform duration-300 group-hover:scale-105"
            data-ai-hint={imageHint}
          />
        </div>
      </Card>
    </Link>
  );
};

export default MenuItem;
