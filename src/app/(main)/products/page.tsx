import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { getProducts } from '@/lib/products'; // Import product fetching function

export const metadata = {
  title: 'Our Products - Sardar Ji',
  description: 'Browse our range of premium Jaggery Blocks, Powder, Cubes, and more.',
};

export default async function ProductsPage() {
  const products = await getProducts();

  return (
    <div className="container py-12 md:py-16">
      <h1 className="text-3xl md:text-4xl font-bold text-center mb-10 text-primary">
        Our Jaggery Products
      </h1>
      <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
        Explore our collection of high-quality, natural jaggery products. Perfect for everyday use, traditional recipes, and export.
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
        {products.map((product) => (
          <Card key={product.id} className="flex flex-col overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300">
            <CardHeader className="p-0">
              <Image
                src={product.imageUrl}
                alt={product.name}
                width={400}
                height={300}
                className="object-cover w-full h-48"
              />
            </CardHeader>
            <CardContent className="p-4 flex-grow">
              <CardTitle className="text-xl mb-2">{product.name}</CardTitle>
              <CardDescription className="text-sm text-muted-foreground mb-3 h-16 overflow-hidden"> {/* Adjust height as needed */}
                {product.description.substring(0, 100)}{product.description.length > 100 ? '...' : ''}
              </CardDescription>
              
              <p className="text-xs text-muted-foreground">{product.weight}</p>
            </CardContent>
            <CardFooter className="p-4 pt-0 mt-auto">
              <Button asChild variant="outline" className="w-full border-primary text-primary hover:bg-primary/10">
                <Link href={`/products/${product.slug}`}>View Details</Link>
              </Button>
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  );
}
