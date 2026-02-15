"use client";

import Link from "next/link";
import { useState } from "react";

export default function KontakPage() {
  const [form, setForm] = useState({
    nama: "",
    email: "",
    pesan: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: Implement actual form submission
    setSubmitted(true);
  };

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
        <div className="max-w-2xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Hubungi <span className="text-accent">Kami</span>
          </h1>
          <p className="text-zinc-400 text-lg mb-12">
            Punya pertanyaan, masukan, atau butuh bantuan? Isi form di bawah dan kami akan merespons dalam 1x24 jam.
          </p>

          {submitted ? (
            <div className="bg-zinc-900 border border-zinc-800 rounded-2xl p-8 text-center">
              <div className="w-16 h-16 bg-green-500/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <h2 className="text-2xl font-semibold mb-2">Pesan Terkirim!</h2>
              <p className="text-zinc-400">Terima kasih sudah menghubungi kami. Kami akan segera membalas pesanmu.</p>
              <button
                onClick={() => setSubmitted(false)}
                className="mt-6 px-6 py-2 border border-zinc-700 rounded-lg hover:bg-zinc-800 transition-colors"
              >
                Kirim Pesan Lain
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="nama" className="block text-sm font-medium mb-2">Nama Lengkap</label>
                <input
                  type="text"
                  id="nama"
                  required
                  value={form.nama}
                  onChange={(e) => setForm({ ...form, nama: e.target.value })}
                  className="w-full px-4 py-3 bg-zinc-900 border border-zinc-800 rounded-lg focus:outline-none focus:border-accent transition-colors"
                  placeholder="Nama kamu"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium mb-2">Email</label>
                <input
                  type="email"
                  id="email"
                  required
                  value={form.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                  className="w-full px-4 py-3 bg-zinc-900 border border-zinc-800 rounded-lg focus:outline-none focus:border-accent transition-colors"
                  placeholder="email@contoh.com"
                />
              </div>

              <div>
                <label htmlFor="pesan" className="block text-sm font-medium mb-2">Pesan</label>
                <textarea
                  id="pesan"
                  required
                  rows={5}
                  value={form.pesan}
                  onChange={(e) => setForm({ ...form, pesan: e.target.value })}
                  className="w-full px-4 py-3 bg-zinc-900 border border-zinc-800 rounded-lg focus:outline-none focus:border-accent transition-colors resize-none"
                  placeholder="Tulis pesanmu di sini..."
                />
              </div>

              <button
                type="submit"
                className="w-full py-3 bg-accent text-white font-semibold rounded-lg hover:bg-red-600 transition-colors"
              >
                Kirim Pesan
              </button>
            </form>
          )}

          {/* Contact Info */}
          <div className="mt-16 grid sm:grid-cols-2 gap-6">
            <div className="bg-zinc-900 border border-zinc-800 rounded-xl p-6">
              <div className="flex items-center gap-3 mb-2">
                <svg className="w-5 h-5 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                <span className="font-medium">Email</span>
              </div>
              <a href="mailto:halo@invoicekirim.id" className="text-zinc-400 hover:text-accent transition-colors">
                halo@invoicekirim.id
              </a>
            </div>

            <div className="bg-zinc-900 border border-zinc-800 rounded-xl p-6">
              <div className="flex items-center gap-3 mb-2">
                <svg className="w-5 h-5 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                </svg>
                <span className="font-medium">WhatsApp</span>
              </div>
              <a href="https://wa.me/6281234567890" className="text-zinc-400 hover:text-accent transition-colors">
                +62 812-3456-7890
              </a>
            </div>
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
