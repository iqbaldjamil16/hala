import type { FC, ElementType } from 'react';
import Link from 'next/link';
import { Card, CardContent } from '@/components/ui/card';
import { cn } from '@/lib/utils';

type MenuItemProps = {
  title: string;
  icon: ElementType;
  href: string;
  className?: string;
};

const MenuItem: FC<MenuItemProps> = ({ title, icon: Icon, href, className }) => {
  return (
    <Link href={href} className={cn("group", className)}>
      <Card className="h-full overflow-hidden rounded-xl bg-card transition-all duration-300 ease-in-out hover:shadow-lg hover:-translate-y-1.5 hover:border-accent/80">
        <CardContent className="flex flex-col items-center justify-center p-8 text-center">
          <Icon className="mb-4 h-12 w-12 text-primary transition-colors duration-300 group-hover:text-accent" />
          <h3 className="text-lg font-semibold text-card-foreground">{title}</h3>
        </CardContent>
      </Card>
    </Link>
  );
};

export default MenuItem;
