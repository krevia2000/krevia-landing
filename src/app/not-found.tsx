import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen text-center px-4">
      <h2 className="text-2xl font-bold text-white mb-2">Página no encontrada</h2>
      <p className="text-zinc-400 mb-6">No pudimos encontrar la página que buscás.</p>
      <Link href="/" className="text-krevia-cyan hover:underline">
        Volver al inicio
      </Link>
    </div>
  );
}
