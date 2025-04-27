import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { getProducts } from '@/lib/products'; // Assuming products data is fetched here

// Simple inline SVG for a leaf icon
const LeafIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5 inline-block mr-1 text-green-700">
    <path d="M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 4.18 2 8 0 5.5-4.78 10-10 10Z"/>
    <path d="M2 21c0-3 1.85-5.36 5.08-6C9.5 14.52 12 13 13 12"/>
  </svg>
);

export default async function HomePage() {
  const products = await getProducts();
  const featuredProducts = products.slice(0, 3); // Display first 3 products as featured

  return (
    <div>
      {/* Hero Section */}
      <section className="relative py-20 md:py-32 bg-secondary">
        <div className="absolute inset-0">
          <Image
            src="https://picsum.photos/seed/jaggerybg/1920/1080" // Placeholder background
            alt="Jaggery Background"
            layout="fill"
            objectFit="cover"
            quality={75}
            className="opacity-20"
          />
           <div className="absolute inset-0 bg-gradient-to-t from-background to-transparent"></div>
        </div>
         <div className="container relative z-10 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-4 text-primary">
            Authentic Taste of Tradition
          </h1>
          <p className="text-lg md:text-xl text-foreground mb-8 max-w-3xl mx-auto">
            Discover the rich, natural sweetness of premium Jaggery and Jaggery Powder from Sardar Ji. Perfect for health-conscious consumers and culinary enthusiasts.
          </p>
          <div className="space-x-4">
            <Button asChild size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground">
              <Link href="/products">Shop Now</Link>
            </Button>
            <Button asChild variant="outline" size="lg">
              <Link href="/contact">Contact Us</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* About Section */}
       <section className="py-16 bg-background">
        <div className="container text-center">
          <h2 className="text-3xl font-semibold mb-4">Why Choose Sardar Ji Jaggery?</h2>
           <p className="text-muted-foreground max-w-2xl mx-auto mb-10">
             We are committed to providing the highest quality, traditionally processed jaggery, sourced directly from trusted farms. Experience the pure, unadulterated sweetness.
           </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="flex flex-col items-center p-6 border rounded-lg shadow-sm bg-card">
               <LeafIcon />
               <h3 className="text-xl font-semibold mt-2 mb-2">100% Natural</h3>
               <p className="text-sm text-muted-foreground">No added chemicals or preservatives. Just pure sugarcane goodness.</p>
            </div>
            <div className="flex flex-col items-center p-6 border rounded-lg shadow-sm bg-card">
               {/* Placeholder for another simple icon */}
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5 inline-block mr-1 text-yellow-600"><path d="M10.6.4c.3.1.5.2.7.4l.2.2C15.7 5.7 18 8 22 8c.6 0 1 .4 1 1s-.4 1-1 1c-2.8 0-4.9-1.3-6.4-3.6-.3-1.2-.7-2.5-1.2-3.9-.1-.3-.1-.5-.1-.6 0-.3.2-.6.5-.7.2 0 .3-.1.4-.1z"/><path d="M13 11.6c.2.1.4.2.5.3l.1.1c2 2.3 3.8 4 6.4 4 .6 0 1 .4 1 1s-.4 1-1 1c-3.8 0-6.1-1.7-7.9-4.2-.1-.1-.1-.2-.2-.3-.5-1.1-1-2.3-1.4-3.6-.1-.3 0-.6.3-.8.2-.1.5-.2.7-.2.1 0 .3 0 .4.1z"/><path d="M3 11c-.6 0-1 .4-1 1s.4 1 1 1c2.8 0 4.9 1.3 6.4 3.6.3 1.2.7 2.5 1.2 3.9.1.3.1.5.1.6 0 .3-.2.6-.5.7-.2 0-.3.1-.4.1-.1 0-.3 0-.4-.1-.3-.1-.5-.2-.7-.4l-.2-.2C5.3 17.3 3 15 0 15c-.6 0-1-.4-1-1s.4-1 1-1c3.8 0 6.1 1.7 7.9 4.2.1.1.1.2.2.3.5 1.1 1 2.3 1.4 3.6.1.3 0 .6-.3.8-.2.1-.5.2-.7.2-.1 0-.3 0-.4-.1z"/><path d="M11 .9c-.2-.1-.4-.2-.5-.3L10.4 0 8.1 2.3C6.7 3.8 5 5 3 5c-.6 0-1 .4-1 1s.4 1 1 1c3.8 0 6.1-1.7 7.9-4.2.1-.1.1-.2.2-.3.5-1.1 1-2.3 1.4-3.6.1-.3 0-.6-.3-.8-.2-.1-.5-.2-.7-.2-.1 0-.3 0-.4.1z"/></svg>
               <h3 className="text-xl font-semibold mt-2 mb-2">Rich Flavor</h3>
               <p className="text-sm text-muted-foreground">Authentic, deep molasses flavor perfect for cooking and beverages.</p>
            </div>
             <div className="flex flex-col items-center p-6 border rounded-lg shadow-sm bg-card">
               {/* Placeholder for export icon */}
               <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5 inline-block mr-1 text-blue-600"><path d="M12 22a10 10 0 1 1 0-20 10 10 0 0 1 0 20Z"/><path d="M12 12a10 10 0 1 0 0-10 10 10 0 0 0 0 10Zm0 0a10 10 0 1 1 0 10 10 10 0 0 1 0-10Z"/><path d="M2 12h20"/><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10Z"/></svg>
               <h3 className="text-xl font-semibold mt-2 mb-2">Export Quality</h3>
               <p className="text-sm text-muted-foreground">We adhere to strict quality standards, making our jaggery ideal for export.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Products Section */}
      <section className="py-16 bg-secondary/50">
        <div className="container">
          <h2 className="text-3xl font-bold text-center mb-10">Featured Products</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredProducts.map((product) => (
              <Card key={product.id} className="overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300">
                <CardHeader className="p-0">
                  <Image
                    src={product.imageUrl}
                    alt={product.name}
                    width={400}
                    height={300}
                    className="object-cover w-full h-48"
                  />
                </CardHeader>
                <CardContent className="p-4">
                  <CardTitle className="text-xl mb-2">{product.name}</CardTitle>
                  <CardDescription className="text-sm text-muted-foreground mb-3 h-10 overflow-hidden"> {/* Fixed height for description */}
                      {product.description.substring(0, 80)}{product.description.length > 80 ? '...' : ''}
                  </CardDescription>
                    
                   <p className="text-xs text-muted-foreground">per {product.weight}</p>
                </CardContent>
                <CardFooter className="p-4 pt-0">
                  <Button asChild variant="outline" className="w-full border-primary text-primary hover:bg-primary/10">
                    <Link href={`/products/${product.slug}`}>View Details</Link>
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
           <div className="text-center mt-12">
             <Button asChild className="bg-accent hover:bg-accent/90 text-accent-foreground">
               <Link href="/products">View All Products</Link>
             </Button>
           </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="py-16 bg-background">
        <div className="container text-center">
          <h2 className="text-3xl font-semibold mb-4">Ready to Experience the Best Jaggery?</h2>
          <p className="text-muted-foreground mb-8 max-w-xl mx-auto">
            Whether you're looking for personal use or bulk export orders, we've got you covered. Get in touch with us for inquiries.
          </p>
          <Button asChild size="lg" className="bg-primary hover:bg-primary/90">
            <Link href="/contact">Contact Our Team</Link>
          </Button>
        </div>
      </section>
    </div>
  );
}
