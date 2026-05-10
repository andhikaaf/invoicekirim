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

  const { data: invoices } = await supabase
    .from('invoices')
    .select('*')
    .eq('user_id', user.id)
    .order('created_at', { ascending: false })

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
        <div className="flex items-center justify-between mb-8">
          <div>
            <h1 className="text-3xl font-bold">Halo, {user.email}!</h1>
            <p className="text-zinc-400 mt-1">Kelola invoice kamu di sini.</p>
          </div>
          <Link
            href="/dashboard/invoices/new"
            className="px-6 py-3 bg-accent text-white font-semibold rounded-lg hover:bg-red-600 transition-colors"
          >
            + Bikin Invoice Baru
          </Link>
        </div>

        {invoices && invoices.length > 0 ? (
          <div className="bg-zinc-900 border border-zinc-800 rounded-2xl overflow-hidden">
            <table className="w-full">
              <thead>
                <tr className="border-b border-zinc-800 text-left text-sm text-zinc-400">
                  <th className="px-6 py-4 font-medium">Nomor Invoice</th>
                  <th className="px-6 py-4 font-medium">Client</th>
                  <th className="px-6 py-4 font-medium">Total</th>
                  <th className="px-6 py-4 font-medium">Status</th>
                  <th className="px-6 py-4 font-medium">Tanggal</th>
                </tr>
              </thead>
              <tbody>
                {invoices.map((invoice) => (
                  <tr key={invoice.id} className="border-b border-zinc-800/50 hover:bg-zinc-800/30 transition-colors">
                    <td className="px-6 py-4">
                      <Link href={`/dashboard/invoices/${invoice.id}`} className="text-white hover:text-accent transition-colors">
                        {invoice.invoice_number}
                      </Link>
                    </td>
                    <td className="px-6 py-4 text-zinc-300">{invoice.client_name}</td>
                    <td className="px-6 py-4 text-zinc-300">
                      Rp {Number(invoice.total).toLocaleString('id-ID')}
                    </td>
                    <td className="px-6 py-4">
                      {invoice.status === 'paid' ? (
                        <span className="inline-flex px-3 py-1 rounded-full text-xs font-medium bg-green-500/10 text-green-400">
                          Lunas
                        </span>
                      ) : (
                        <span className="inline-flex px-3 py-1 rounded-full text-xs font-medium bg-yellow-500/10 text-yellow-400">
                          Belum Dibayar
                        </span>
                      )}
                    </td>
                    <td className="px-6 py-4 text-zinc-400 text-sm">
                      {new Date(invoice.issue_date).toLocaleDateString('id-ID', {
                        day: 'numeric',
                        month: 'long',
                        year: 'numeric',
                      })}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        ) : (
          <div className="bg-zinc-900 border border-zinc-800 rounded-2xl p-12 text-center">
            <p className="text-zinc-400 text-lg mb-4">Belum ada invoice.</p>
            <Link
              href="/dashboard/invoices/new"
              className="text-accent hover:underline font-medium"
            >
              Yuk bikin yang pertama!
            </Link>
          </div>
        )}
      </main>
    </div>
  )
}
