import { getProductBySlug, getProducts } from '@/lib/products';
import Image from 'next/image';
import { notFound } from 'next/navigation';
import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';
import Link from 'next/link';
import { Metadata } from 'next';
import { Info, Utensils } from 'lucide-react'; // Icons for details

type Props = {
  params: { slug: string };
};

// Generate metadata dynamically
export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const product = await getProductBySlug(params.slug);

  if (!product) {
    return {
      title: 'Product Not Found',
    };
  }

  return {
    title: `${product.name} - Sardar Ji`,
    description: product.description.substring(0, 160), // Use first 160 chars for meta description
  };
}

// Generate static paths for better performance
export async function generateStaticParams() {
  const products = await getProducts();
  return products.map((product) => ({
    slug: product.slug,
  }));
}


export default async function ProductDetailPage({ params }: Props) {
  const { slug } = params;
  const product = await getProductBySlug(slug);

  if (!product) {
    notFound(); // Trigger 404 page if product not found
  }

  return (
    <div className="container py-12 md:py-20">
      <div className="grid md:grid-cols-2 gap-8 lg:gap-12 items-start">
        {/* Product Image */}
        <div className="aspect-square rounded-lg overflow-hidden border shadow-sm">
           <Image
            src={product.imageUrl}
            alt={product.name}
            width={600}
            height={600}
            className="object-cover w-full h-full"
          />
        </div>

        {/* Product Details */}
        <div className="flex flex-col h-full">
          <h1 className="text-3xl md:text-4xl font-bold mb-3 text-primary">{product.name}</h1>
          <p className="text-lg font-semibold text-accent mb-2">{product.price}</p>
          <p className="text-sm text-muted-foreground mb-4">Weight: {product.weight}</p>

          <Separator className="my-4" />

           <p className="text-foreground leading-relaxed mb-6">{product.description}</p>

          <Separator className="my-4" />

          {/* Nutritional Info & Usage */}
          <div className="space-y-6 mb-8">
             <div>
              <h2 className="text-xl font-semibold mb-2 flex items-center gap-2"><Info className="h-5 w-5 text-primary"/>Nutritional Information</h2>
              <p className="text-sm text-muted-foreground">{product.nutritionalInfo}</p>
            </div>
             <div>
               <h2 className="text-xl font-semibold mb-2 flex items-center gap-2"><Utensils className="h-5 w-5 text-primary"/>Usage Suggestions</h2>
               <p className="text-sm text-muted-foreground">{product.usageSuggestions}</p>
             </div>
          </div>

          <div className="mt-auto"> {/* Pushes button to the bottom */}
             <Button asChild size="lg" className="w-full md:w-auto bg-accent hover:bg-accent/90 text-accent-foreground">
               <Link href="/contact">Inquire Now</Link>
             </Button>
             <p className="text-xs text-muted-foreground mt-2 text-center md:text-left">
               For bulk orders and export inquiries, please contact us.
             </p>
          </div>
        </div>
      </div>
    </div>
  );
}
