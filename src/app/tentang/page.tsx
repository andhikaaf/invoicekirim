import Link from "next/link";

export const metadata = {
  title: "Tentang Kami — InvoiceKirim",
  description: "Kenali lebih jauh tentang InvoiceKirim dan misi kami membantu freelancer Indonesia.",
};

export default function TentangPage() {
  return (
    <div className="min-h-screen bg-black text-white">
      {/* NAVBAR */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-black/80 backdrop-blur-md border-b border-zinc-800">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <Link href="/" className="text-xl font-bold tracking-tight">
            Invoice<span className="text-accent">Kirim</span>
          </Link>
          <div className="hidden md:flex items-center gap-8">
            <Link href="/#fitur" className="text-zinc-400 hover:text-white transition-colors">Fitur</Link>
            <Link href="/#harga" className="text-zinc-400 hover:text-white transition-colors">Harga</Link>
            <Link href="/#login" className="text-zinc-400 hover:text-white transition-colors">Login</Link>
          </div>
          <button className="px-5 py-2 bg-accent text-white font-semibold rounded-lg hover:bg-red-600 transition-colors">
            Mulai Gratis
          </button>
        </div>
      </nav>

      {/* CONTENT */}
      <main className="pt-32 pb-24 px-6">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold mb-8">
            Tentang <span className="text-accent">InvoiceKirim</span>
          </h1>

          <div className="prose prose-invert prose-lg max-w-none">
            <section className="mb-12">
              <h2 className="text-2xl font-semibold mb-4">Misi Kami</h2>
              <p className="text-zinc-400 text-lg leading-relaxed">
                InvoiceKirim lahir dari satu masalah sederhana: terlalu banyak freelancer dan UMKM di Indonesia yang masih kesulitan membuat invoice profesional. Sebagian pakai Excel, sebagian pakai Word, dan tidak sedikit yang malah nggak pakai invoice sama sekali.
              </p>
              <p className="text-zinc-400 text-lg leading-relaxed mt-4">
                Kami percaya setiap pekerja lepas dan pemilik usaha kecil berhak mendapatkan alat yang memudahkan mereka menagih hasil kerja keras mereka — tanpa ribet, tanpa mahal.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-semibold mb-4">Apa yang Kami Tawarkan</h2>
              <ul className="space-y-3 text-zinc-400 text-lg">
                <li className="flex items-start gap-3">
                  <span className="text-accent mt-1">•</span>
                  <span><strong className="text-white">Invoice Instan</strong> — Buat invoice dalam hitungan detik, bukan menit</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-accent mt-1">•</span>
                  <span><strong className="text-white">Share Link</strong> — Kirim link invoice ke client, mereka buka langsung di browser</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-accent mt-1">•</span>
                  <span><strong className="text-white">Tracking Status</strong> — Pantau mana invoice yang sudah dibayar dan yang belum</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-accent mt-1">•</span>
                  <span><strong className="text-white">Harga Terjangkau</strong> — Mulai gratis, upgrade ketika butuh lebih</span>
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-semibold mb-4">Siapa di Balik InvoiceKirim</h2>
              <p className="text-zinc-400 text-lg leading-relaxed">
                InvoiceKirim dibangun oleh tim kecil yang terdiri dari freelancer dan developer yang paham betul tantangan menjadi pekerja lepas di Indonesia. Kami membangun produk yang kami sendiri ingin pakai.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">Hubungi Kami</h2>
              <p className="text-zinc-400 text-lg leading-relaxed">
                Punya pertanyaan, masukan, atau cuma mau say hi? Jangan ragu untuk{" "}
                <Link href="/kontak" className="text-accent hover:underline">menghubungi kami</Link>.
              </p>
            </section>
          </div>
        </div>
      </main>

      {/* FOOTER */}
      <footer className="border-t border-zinc-800 py-12 px-6">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="text-xl font-bold tracking-tight">
            Invoice<span className="text-accent">Kirim</span>
          </div>
          <div className="flex items-center gap-8">
            <Link href="/tentang" className="text-zinc-400 hover:text-white transition-colors">Tentang</Link>
            <Link href="/kontak" className="text-zinc-400 hover:text-white transition-colors">Kontak</Link>
            <Link href="/privacy-policy" className="text-zinc-400 hover:text-white transition-colors">Privacy Policy</Link>
          </div>
          <div className="text-zinc-500 text-sm">© 2025 InvoiceKirim. All rights reserved.</div>
        </div>
      </footer>
    </div>
  );
}
