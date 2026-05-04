import Link from 'next/link'
import { createClient } from '@/lib/supabase/server'
import { redirect } from 'next/navigation'

export default async function DashboardPage() {
  const supabase = await createClient()

  const {
    data: { user },
  } = await supabase.auth.getUser()

  if (!user) {
    redirect('/login')
  }

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Navbar */}
      <nav className="border-b border-zinc-800 px-6 py-4">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <Link href="/dashboard" className="text-xl font-bold tracking-tight">
            Invoice<span className="text-accent">Kirim</span>
          </Link>

          <div className="flex items-center gap-4">
            <span className="text-zinc-400 text-sm">{user.email}</span>
            <form action="/auth/logout" method="post">
              <button
                type="submit"
                className="px-4 py-2 text-sm text-zinc-400 hover:text-white transition-colors"
              >
                Logout
              </button>
            </form>
          </div>
        </div>
      </nav>

      {/* Content */}
      <main className="max-w-7xl mx-auto px-6 py-12">
        <h1 className="text-3xl font-bold mb-8">Dashboard</h1>

        <div className="bg-zinc-900 border border-zinc-800 rounded-2xl p-8 text-center">
          <p className="text-zinc-400">Selamat datang di InvoiceKirim!</p>
          <p className="text-zinc-500 text-sm mt-2">
            Dashboard akan dikembangkan di sesi berikutnya.
          </p>
        </div>
      </main>
    </div>
  )
}
