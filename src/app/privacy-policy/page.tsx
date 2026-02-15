import Link from "next/link";

export const metadata = {
  title: "Privacy Policy — InvoiceKirim",
  description: "Kebijakan privasi InvoiceKirim mengenai pengumpulan dan penggunaan data pengguna.",
};

export default function PrivacyPolicyPage() {
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
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Privacy <span className="text-accent">Policy</span>
          </h1>
          <p className="text-zinc-500 mb-12">Terakhir diperbarui: 15 Februari 2025</p>

          <div className="prose prose-invert prose-lg max-w-none space-y-8">
            <section>
              <h2 className="text-2xl font-semibold mb-4">1. Pendahuluan</h2>
              <p className="text-zinc-400 leading-relaxed">
                InvoiceKirim (&quot;kami&quot;) berkomitmen untuk melindungi privasi pengguna kami. Kebijakan privasi ini menjelaskan bagaimana kami mengumpulkan, menggunakan, dan melindungi informasi pribadi Anda saat menggunakan layanan InvoiceKirim.
              </p>
              <p className="text-zinc-400 leading-relaxed mt-4">
                Dengan menggunakan layanan kami, Anda menyetujui pengumpulan dan penggunaan informasi sesuai dengan kebijakan ini.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">2. Data yang Kami Kumpulkan</h2>
              <p className="text-zinc-400 leading-relaxed mb-4">Kami mengumpulkan informasi berikut:</p>
              <ul className="space-y-2 text-zinc-400">
                <li className="flex items-start gap-3">
                  <span className="text-accent mt-1">•</span>
                  <span><strong className="text-white">Informasi Akun:</strong> Nama, alamat email, dan kata sandi saat Anda mendaftar</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-accent mt-1">•</span>
                  <span><strong className="text-white">Data Invoice:</strong> Informasi yang Anda masukkan dalam invoice seperti nama klien, alamat, dan detail transaksi</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-accent mt-1">•</span>
                  <span><strong className="text-white">Data Penggunaan:</strong> Informasi tentang bagaimana Anda menggunakan layanan kami (halaman yang dikunjungi, fitur yang digunakan)</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-accent mt-1">•</span>
                  <span><strong className="text-white">Data Teknis:</strong> Alamat IP, jenis browser, sistem operasi, dan informasi perangkat</span>
                </li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">3. Penggunaan Data</h2>
              <p className="text-zinc-400 leading-relaxed mb-4">Kami menggunakan data yang dikumpulkan untuk:</p>
              <ul className="space-y-2 text-zinc-400">
                <li className="flex items-start gap-3">
                  <span className="text-accent mt-1">•</span>
                  <span>Menyediakan dan memelihara layanan InvoiceKirim</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-accent mt-1">•</span>
                  <span>Memproses pembayaran dan mengirim konfirmasi</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-accent mt-1">•</span>
                  <span>Mengirim notifikasi terkait akun dan layanan</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-accent mt-1">•</span>
                  <span>Meningkatkan layanan dan mengembangkan fitur baru</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-accent mt-1">•</span>
                  <span>Mengirim informasi promosi (dengan persetujuan Anda)</span>
                </li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">4. Keamanan Data</h2>
              <p className="text-zinc-400 leading-relaxed">
                Kami menerapkan langkah-langkah keamanan yang wajar untuk melindungi data Anda dari akses tidak sah, perubahan, pengungkapan, atau penghancuran. Ini termasuk:
              </p>
              <ul className="space-y-2 text-zinc-400 mt-4">
                <li className="flex items-start gap-3">
                  <span className="text-accent mt-1">•</span>
                  <span>Enkripsi data saat transit (HTTPS)</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-accent mt-1">•</span>
                  <span>Penyimpanan kata sandi dengan hashing</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-accent mt-1">•</span>
                  <span>Akses terbatas ke data pribadi hanya untuk karyawan yang membutuhkan</span>
                </li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">5. Berbagi Data</h2>
              <p className="text-zinc-400 leading-relaxed">
                Kami tidak menjual, menyewakan, atau membagikan data pribadi Anda kepada pihak ketiga untuk tujuan pemasaran mereka. Kami hanya dapat membagikan data Anda dalam situasi berikut:
              </p>
              <ul className="space-y-2 text-zinc-400 mt-4">
                <li className="flex items-start gap-3">
                  <span className="text-accent mt-1">•</span>
                  <span>Dengan persetujuan eksplisit Anda</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-accent mt-1">•</span>
                  <span>Kepada penyedia layanan yang membantu operasional kami (dengan perjanjian kerahasiaan)</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-accent mt-1">•</span>
                  <span>Jika diwajibkan oleh hukum</span>
                </li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">6. Hak Pengguna</h2>
              <p className="text-zinc-400 leading-relaxed mb-4">Anda memiliki hak untuk:</p>
              <ul className="space-y-2 text-zinc-400">
                <li className="flex items-start gap-3">
                  <span className="text-accent mt-1">•</span>
                  <span><strong className="text-white">Mengakses data:</strong> Meminta salinan data pribadi yang kami simpan</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-accent mt-1">•</span>
                  <span><strong className="text-white">Memperbarui data:</strong> Meminta koreksi data yang tidak akurat</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-accent mt-1">•</span>
                  <span><strong className="text-white">Menghapus data:</strong> Meminta penghapusan akun dan data terkait</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-accent mt-1">•</span>
                  <span><strong className="text-white">Berhenti berlangganan:</strong> Tidak menerima email marketing dari kami</span>
                </li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">7. Cookie</h2>
              <p className="text-zinc-400 leading-relaxed">
                Kami menggunakan cookie untuk meningkatkan pengalaman pengguna, menganalisis lalu lintas situs, dan untuk personalisasi. Anda dapat mengatur browser Anda untuk menolak cookie, namun beberapa fitur mungkin tidak berfungsi dengan baik.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">8. Perubahan Kebijakan</h2>
              <p className="text-zinc-400 leading-relaxed">
                Kami dapat memperbarui kebijakan privasi ini dari waktu ke waktu. Perubahan signifikan akan diberitahukan melalui email atau pemberitahuan di aplikasi. Tanggal &quot;Terakhir diperbarui&quot; di bagian atas halaman ini menunjukkan versi terbaru.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">9. Hubungi Kami</h2>
              <p className="text-zinc-400 leading-relaxed">
                Jika Anda memiliki pertanyaan tentang kebijakan privasi ini, silakan hubungi kami melalui:
              </p>
              <ul className="space-y-2 text-zinc-400 mt-4">
                <li className="flex items-start gap-3">
                  <span className="text-accent mt-1">•</span>
                  <span>Email: <a href="mailto:privacy@invoicekirim.id" className="text-accent hover:underline">privacy@invoicekirim.id</a></span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-accent mt-1">•</span>
                  <span>Halaman <Link href="/kontak" className="text-accent hover:underline">Kontak</Link></span>
                </li>
              </ul>
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
