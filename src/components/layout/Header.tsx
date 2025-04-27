import Link from 'next/link';
import { Package } from 'lucide-react'; // Using Package icon as a simple logo placeholder
import { Button } from '@/components/ui/button';

export function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-14 items-center">
        <Link href="/" className="mr-6 flex items-center space-x-2">
          <Package className="h-6 w-6 text-primary" />
          <span className="font-bold inline-block text-lg">Sardar Ji</span>
        </Link>
        <nav className="flex items-center space-x-4 lg:space-x-6 flex-1">
          <Link href="/" className="text-sm font-medium transition-colors hover:text-primary">
            Home
          </Link>
          <Link href="/products" className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary">
            Products
          </Link>
          <Link href="/contact" className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary">
            Contact Us
          </Link>
        </nav>
         <div className="flex items-center space-x-2">
           {/* Placeholder for potential future elements like Cart or Account */}
           {/* <Button variant="ghost" size="icon">
              <ShoppingCart className="h-5 w-5" />
              <span className="sr-only">Cart</span>
           </Button> */}
         </div>
      </div>
    </header>
  );
}
