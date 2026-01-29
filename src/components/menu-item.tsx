"use client";

import type { FC } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { useState } from 'react';

import { Card } from '@/components/ui/card';
import { cn } from '@/lib/utils';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogFooter,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";
import { Label } from "@/components/ui/label";

type MenuItemProps = {
  title: string;
  href: string;
  imageUrl: string;
  imageHint: string;
  className?: string;
  passwordProtected?: boolean;
  password?: string;
};

const MenuItem: FC<MenuItemProps> = ({ title, href, imageUrl, imageHint, className, passwordProtected = false, password: correctPassword }) => {
  const router = useRouter();
  const { toast } = useToast();
  const [open, setOpen] = useState(false);
  const [passwordInput, setPasswordInput] = useState('');

  const handlePasswordSubmit = () => {
    if (passwordInput === correctPassword) {
      setOpen(false);
      router.push(href);
    } else {
      toast({
        title: "Password Salah",
        description: "Silakan coba lagi.",
        variant: "destructive",
      });
      setPasswordInput('');
    }
  };
  
  const cardContent = (
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
  );

  if (passwordProtected) {
    return (
        <Dialog open={open} onOpenChange={setOpen}>
            <DialogTrigger asChild>
                <div className={cn("group cursor-pointer", className)}>
                    {cardContent}
                </div>
            </DialogTrigger>
            <DialogContent className="sm:max-w-[425px]">
                <DialogHeader>
                    <DialogTitle>Akses Terbatas</DialogTitle>
                    <DialogDescription>
                        Halaman ini dilindungi kata sandi. Silakan masukkan kata sandi untuk melanjutkan.
                    </DialogDescription>
                </DialogHeader>
                <div className="grid gap-4 py-4">
                    <div className="grid grid-cols-4 items-center gap-4">
                        <Label htmlFor="password"className="text-right">
                            Sandi
                        </Label>
                        <Input
                            id="password"
                            type="password"
                            value={passwordInput}
                            onChange={(e) => setPasswordInput(e.target.value)}
                            className="col-span-3"
                            onKeyDown={(e) => {
                                if (e.key === 'Enter') {
                                    handlePasswordSubmit();
                                }
                            }}
                        />
                    </div>
                </div>
                <DialogFooter>
                    <Button onClick={handlePasswordSubmit}>Lanjut</Button>
                </DialogFooter>
            </DialogContent>
        </Dialog>
    );
  }

  return (
    <Link href={href} className={cn("group", className)}>
        {cardContent}
    </Link>
  );
};

export default MenuItem;
