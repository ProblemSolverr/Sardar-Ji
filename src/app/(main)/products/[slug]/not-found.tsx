import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { PackageX } from 'lucide-react'; // Using PackageX icon

export default function ProductNotFound() {
  return (
    <div className="container flex flex-col items-center justify-center min-h-[calc(100vh-10rem)] text-center py-12">
      <PackageX className="h-16 w-16 text-destructive mb-4" />
      <h1 className="text-4xl font-bold mb-2">Product Not Found</h1>
      <p className="text-muted-foreground mb-6">
        Sorry, we couldn't find the jaggery product you were looking for.
      </p>
      <div className="flex gap-4">
        <Button asChild variant="outline">
           <Link href="/products">View All Products</Link>
        </Button>
         <Button asChild>
           <Link href="/">Go Home</Link>
         </Button>
      </div>
    </div>
  );
}
