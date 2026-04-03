import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";

export default function NotFound() {
  return (
    <section className="min-h-[70dvh] flex items-center justify-center bg-white">
      <Container className="text-center py-24">
        <p className="font-mono text-[8rem] sm:text-[10rem] md:text-[12rem] font-bold leading-none tracking-tighter text-[#EBEBEB] select-none">
          404
        </p>
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#1A1A1A] tracking-tighter leading-[1.05] text-balance mt-4">
          Pagina niet gevonden
        </h1>
        <p className="text-[#6B6B6B] mt-3 text-base md:text-lg max-w-md mx-auto">
          De pagina die je zoekt bestaat niet of is verplaatst.
        </p>
        <div className="mt-8">
          <Button href="/" variant="primary" size="lg">
            Terug naar home
          </Button>
        </div>
      </Container>
    </section>
  );
}
