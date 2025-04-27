export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t bg-background">
      <div className="container py-8 flex justify-center items-center">
        <p className="text-sm text-muted-foreground">
          &copy; {currentYear} Sardar Ji. All rights reserved.
        </p>
        {/* Add other footer links if needed */}
      </div>
    </footer>
  );
}
