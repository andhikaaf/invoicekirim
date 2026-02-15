import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen bg-black text-white">
      {/* NAVBAR */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-black/80 backdrop-blur-md border-b border-zinc-800">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <Link href="/" className="text-xl font-bold tracking-tight">
            Invoice<span className="text-accent">Kirim</span>
          </Link>

          <div className="hidden md:flex items-center gap-8">
            <Link href="#fitur" className="text-zinc-400 hover:text-white transition-colors">
              Fitur
            </Link>
            <Link href="#harga" className="text-zinc-400 hover:text-white transition-colors">
              Harga
            </Link>
            <Link href="#login" className="text-zinc-400 hover:text-white transition-colors">
              Login
            </Link>
          </div>

          <button className="px-5 py-2 bg-accent text-white font-semibold rounded-lg hover:bg-red-600 transition-colors">
            Mulai Gratis
          </button>
        </div>
      </nav>

      {/* HERO SECTION */}
      <section className="pt-32 pb-24 px-6">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-12">
          <div className="flex-1 text-center lg:text-left">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight leading-tight mb-6">
              Bikin Invoice Profesional dalam{" "}
              <span className="text-accent">30 Detik</span>
            </h1>
            <p className="text-lg md:text-xl text-zinc-400 max-w-xl mb-8">
              Nggak perlu Excel, nggak perlu template ribet.
              Isi form, klik kirim, selesai.
            </p>
            <button className="px-8 py-4 bg-accent text-white font-semibold rounded-lg hover:bg-red-600 transition-colors text-lg">
              Mulai Gratis — Tanpa Kartu Kredit
            </button>
          </div>

          {/* Invoice Preview */}
          <div className="flex-1 w-full max-w-lg">
            <div className="bg-white text-zinc-900 rounded-xl shadow-2xl overflow-hidden">
              {/* Invoice Header */}
              <div className="bg-zinc-900 text-white p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <div className="text-xl font-bold text-white">INVOICE</div>
                    <div className="text-zinc-400 text-sm">#INV-2025-0042</div>
                  </div>
                  <div className="text-right">
                    <div className="text-white font-semibold">InvoiceKirim</div>
                    <div className="text-zinc-400 text-sm">Tanggal: 15 Feb 2025</div>
                  </div>
                </div>
              </div>

              {/* Invoice Body */}
              <div className="p-6 space-y-6">
                {/* Bill To */}
                <div>
                  <div className="text-xs text-zinc-500 uppercase tracking-wide mb-1">Tagih Kepada</div>
                  <div className="font-semibold">PT Maju Bersama</div>
                  <div className="text-sm text-zinc-600">Jl. Sudirman No. 123, Jakarta</div>
                </div>

                {/* Items Table */}
                <div className="border border-zinc-200 rounded-lg overflow-hidden">
                  <table className="w-full text-sm">
                    <thead className="bg-zinc-50">
                      <tr>
                        <th className="text-left py-2 px-3 text-zinc-600">Deskripsi</th>
                        <th className="text-right py-2 px-3 text-zinc-600">Jumlah</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-zinc-100">
                      <tr>
                        <td className="py-2 px-3">Desain Logo Brand</td>
                        <td className="py-2 px-3 text-right">Rp 1.500.000</td>
                      </tr>
                      <tr>
                        <td className="py-2 px-3">Desain Social Media (10 post)</td>
                        <td className="py-2 px-3 text-right">Rp 2.500.000</td>
                      </tr>
                    </tbody>
                  </table>
                </div>

                {/* Total */}
                <div className="flex justify-between items-center pt-4 border-t border-zinc-200">
                  <span className="text-zinc-600">Total</span>
                  <span className="text-2xl font-bold">Rp 4.000.000</span>
                </div>

                {/* Status Badge */}
                <div className="flex items-center justify-between pt-2">
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-amber-100 text-amber-700 text-sm font-medium rounded-full">
                    <span className="w-2 h-2 bg-amber-500 rounded-full"></span>
                    Menunggu Pembayaran
                  </span>
                  <span className="text-sm text-zinc-500">Jatuh tempo: 22 Feb 2025</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FITUR SECTION */}
      <section id="fitur" className="py-24 px-6 bg-zinc-950">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
            Fitur yang Memudahkan Hidupmu
          </h2>
          <p className="text-zinc-400 text-center mb-16 max-w-2xl mx-auto">
            Semua yang kamu butuhkan untuk bikin dan kirim invoice, dalam satu platform sederhana.
          </p>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Card 1 */}
            <div className="bg-zinc-900 border border-zinc-800 rounded-2xl p-8 hover:border-zinc-700 transition-colors">
              <div className="w-12 h-12 bg-accent/10 rounded-xl flex items-center justify-center mb-6">
                <svg className="w-6 h-6 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-3">Invoice Instan</h3>
              <p className="text-zinc-400">
                Isi form sederhana, invoice langsung jadi. Tinggal kirim ke client.
              </p>
            </div>

            {/* Card 2 */}
            <div className="bg-zinc-900 border border-zinc-800 rounded-2xl p-8 hover:border-zinc-700 transition-colors">
              <div className="w-12 h-12 bg-accent/10 rounded-xl flex items-center justify-center mb-6">
                <svg className="w-6 h-6 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-3">Share Link</h3>
              <p className="text-zinc-400">
                Kirim invoice lewat link, client buka di browser. Nggak perlu attachment email.
              </p>
            </div>

            {/* Card 3 */}
            <div className="bg-zinc-900 border border-zinc-800 rounded-2xl p-8 hover:border-zinc-700 transition-colors">
              <div className="w-12 h-12 bg-accent/10 rounded-xl flex items-center justify-center mb-6">
                <svg className="w-6 h-6 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-3">Track Status</h3>
              <p className="text-zinc-400">
                Tau mana invoice yang udah dibayar, mana yang belum. Dashboard lengkap.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* SOCIAL PROOF SECTION */}
      <section className="py-24 px-6">
        <div className="max-w-7xl mx-auto">
          {/* Stats */}
          <div className="flex flex-col md:flex-row items-center justify-center gap-12 md:gap-24 mb-20">
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-accent mb-2">500+</div>
              <div className="text-zinc-400">Invoice Dibuat</div>
            </div>
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-accent mb-2">Rp 2M+</div>
              <div className="text-zinc-400">Total Tertagih</div>
            </div>
          </div>

          {/* Testimonials */}
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-zinc-900 border border-zinc-800 rounded-2xl p-6">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 bg-accent/20 rounded-full flex items-center justify-center text-accent font-semibold">
                  R
                </div>
                <div>
                  <div className="font-semibold">Rina Sari</div>
                  <div className="text-sm text-zinc-500">Freelance Designer</div>
                </div>
              </div>
              <p className="text-zinc-300">
                "Dulu pake Excel, sekarang tinggal klik-klik. Invoice langsung ke klien, aku juga bisa track mana yang belum dibayar."
              </p>
            </div>

            <div className="bg-zinc-900 border border-zinc-800 rounded-2xl p-6">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 bg-accent/20 rounded-full flex items-center justify-center text-accent font-semibold">
                  B
                </div>
                <div>
                  <div className="font-semibold">Budi Setiawan</div>
                  <div className="text-sm text-zinc-500">Owner Digital Agency</div>
                </div>
              </div>
              <p className="text-zinc-300">
                "Timku nggak perlu lagi pusing bikin invoice. InvoiceKirim urus semuanya. Worth it banget!"
              </p>
            </div>

            <div className="bg-zinc-900 border border-zinc-800 rounded-2xl p-6">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 bg-accent/20 rounded-full flex items-center justify-center text-accent font-semibold">
                  A
                </div>
                <div>
                  <div className="font-semibold">Anisa Putri</div>
                  <div className="text-sm text-zinc-500">Content Creator</div>
                </div>
              </div>
              <p className="text-zinc-300">
                "Gampang banget dipakainya. Tinggal isi, kirim link ke brand, beres. Invoice profesional dalam hitungan detik!"
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* PRICING SECTION */}
      <section id="harga" className="py-24 px-6 bg-zinc-950">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
            Pilih Paket yang Cocok
          </h2>
          <p className="text-zinc-400 text-center mb-16">
            Mulai gratis, upgrade kapanpun kamu butuh.
          </p>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Gratis */}
            <div className="bg-zinc-900 border border-zinc-800 rounded-2xl p-8">
              <h3 className="text-xl font-semibold mb-2">Gratis</h3>
              <div className="text-3xl font-bold mb-6">Rp 0</div>
              <ul className="space-y-3 mb-8">
                <li className="flex items-center gap-3 text-zinc-300">
                  <svg className="w-5 h-5 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  5 invoice/bulan
                </li>
                <li className="flex items-center gap-3 text-zinc-300">
                  <svg className="w-5 h-5 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  1 template standar
                </li>
                <li className="flex items-center gap-3 text-zinc-300">
                  <svg className="w-5 h-5 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  Share via link
                </li>
              </ul>
              <button className="w-full py-3 border border-zinc-700 text-white font-semibold rounded-lg hover:bg-zinc-800 transition-colors">
                Mulai Gratis
              </button>
            </div>

            {/* Pro */}
            <div className="bg-zinc-900 border-2 border-accent rounded-2xl p-8 relative">
              <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-3 py-1 bg-accent text-white text-sm font-semibold rounded-full">
                Populer
              </div>
              <h3 className="text-xl font-semibold mb-2">Pro</h3>
              <div className="text-3xl font-bold mb-1">Rp 49.000<span className="text-lg font-normal text-zinc-400">/bulan</span></div>
              <ul className="space-y-3 mb-8 mt-6">
                <li className="flex items-center gap-3 text-zinc-300">
                  <svg className="w-5 h-5 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <strong>Unlimited</strong> invoice
                </li>
                <li className="flex items-center gap-3 text-zinc-300">
                  <svg className="w-5 h-5 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  Custom branding (logo, warna)
                </li>
                <li className="flex items-center gap-3 text-zinc-300">
                  <svg className="w-5 h-5 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  Priority support
                </li>
                <li className="flex items-center gap-3 text-zinc-300">
                  <svg className="w-5 h-5 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  Export PDF
                </li>
              </ul>
              <button className="w-full py-3 bg-accent text-white font-semibold rounded-lg hover:bg-red-600 transition-colors">
                Upgrade ke Pro
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* CTA SECTION */}
      <section className="py-24 px-6">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Mulai Bikin Invoice Sekarang
          </h2>
          <p className="text-zinc-400 text-lg mb-8">
            Bergabung dengan ratusan freelancer dan UMKM yang sudah menggunakan InvoiceKirim.
          </p>
          <button className="px-10 py-4 bg-accent text-white font-semibold rounded-lg hover:bg-red-600 transition-colors text-lg">
            Daftar Gratis
          </button>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="border-t border-zinc-800 py-12 px-6">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="text-xl font-bold tracking-tight">
            Invoice<span className="text-accent">Kirim</span>
          </div>

          <div className="flex items-center gap-8">
            <Link href="/tentang" className="text-zinc-400 hover:text-white transition-colors">
              Tentang
            </Link>
            <Link href="/kontak" className="text-zinc-400 hover:text-white transition-colors">
              Kontak
            </Link>
            <Link href="/privacy-policy" className="text-zinc-400 hover:text-white transition-colors">
              Privacy Policy
            </Link>
          </div>

          <div className="text-zinc-500 text-sm">
            © 2025 InvoiceKirim. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
}
