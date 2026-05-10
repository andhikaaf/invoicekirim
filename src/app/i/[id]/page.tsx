import { createClient } from '@/lib/supabase/server'
import { notFound } from 'next/navigation'

function formatRupiah(value: number): string {
  return `Rp ${value.toLocaleString('id-ID')}`
}

function formatDate(date: string): string {
  return new Date(date).toLocaleDateString('id-ID', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  })
}

export default async function PublicInvoicePage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params
  const supabase = await createClient()

  const { data: invoice } = await supabase
    .from('invoices')
    .select('*')
    .eq('id', id)
    .single()

  if (!invoice) {
    notFound()
  }

  return (
    <div className="min-h-screen bg-black text-white print:bg-white print:text-zinc-900">
      <div className="max-w-3xl mx-auto px-6 py-12">
        {/* Header */}
        <div className="flex items-start justify-between mb-12">
          <div>
            <h1 className="text-3xl font-bold tracking-tight">
              Invoice<span className="text-accent">Kirim</span>
            </h1>
          </div>
          <div className="text-right">
            <p className="text-2xl font-bold">{invoice.invoice_number}</p>
            <p className="text-zinc-400 mt-1">{formatDate(invoice.created_at)}</p>
          </div>
        </div>

        {/* Status */}
        <div className="mb-10">
          {invoice.status === 'paid' ? (
            <span className="inline-flex px-4 py-1.5 rounded-full text-sm font-semibold bg-green-500/10 text-green-400 print:bg-green-100 print:text-green-700">
              Lunas
            </span>
          ) : (
            <span className="inline-flex px-4 py-1.5 rounded-full text-sm font-semibold bg-yellow-500/10 text-yellow-400 print:bg-yellow-100 print:text-yellow-700">
              Menunggu Pembayaran
            </span>
          )}
        </div>

        {/* From / To */}
        <div className="grid grid-cols-2 gap-8 mb-10 print:gap-16">
          <div>
            <p className="text-xs font-semibold text-zinc-500 uppercase tracking-wider mb-2">From</p>
            <p className="font-medium">{invoice.user_email || 'Pengirim'}</p>
          </div>
          <div>
            <p className="text-xs font-semibold text-zinc-500 uppercase tracking-wider mb-2">To</p>
            <p className="font-medium">{invoice.client_name}</p>
            {invoice.client_email && (
              <p className="text-zinc-400 text-sm mt-0.5">{invoice.client_email}</p>
            )}
          </div>
        </div>

        {/* Due Date */}
        {invoice.due_date && (
          <div className="mb-10">
            <p className="text-sm text-zinc-400">
              Jatuh Tempo: <span className="font-medium text-white print:text-zinc-900">{formatDate(invoice.due_date)}</span>
            </p>
          </div>
        )}

        {/* Items Table */}
        <div className="border border-zinc-800 rounded-xl overflow-hidden mb-8 print:border-zinc-200 print:rounded-none">
          <table className="w-full">
            <thead>
              <tr className="bg-zinc-900 text-left text-xs font-semibold text-zinc-500 uppercase tracking-wider print:bg-zinc-100">
                <th className="px-6 py-4">Item</th>
                <th className="px-6 py-4 text-right">Qty</th>
                <th className="px-6 py-4 text-right">Harga</th>
                <th className="px-6 py-4 text-right">Subtotal</th>
              </tr>
            </thead>
            <tbody>
              {invoice.items.map((item: { name: string; quantity: number; price: number }, index: number) => (
                <tr key={index} className="border-t border-zinc-800/50 print:border-zinc-100">
                  <td className="px-6 py-4 font-medium">{item.name}</td>
                  <td className="px-6 py-4 text-right text-zinc-400 print:text-zinc-600">{item.quantity}</td>
                  <td className="px-6 py-4 text-right text-zinc-400 print:text-zinc-600">{formatRupiah(item.price)}</td>
                  <td className="px-6 py-4 text-right font-medium">{formatRupiah(item.quantity * item.price)}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Total */}
        <div className="flex justify-end mb-10">
          <div className="text-right">
            <p className="text-sm text-zinc-400 mb-1">Total</p>
            <p className="text-4xl font-bold">{formatRupiah(invoice.total)}</p>
          </div>
        </div>

        {/* Notes */}
        {invoice.notes && (
          <div className="border-t border-zinc-800 pt-6 mb-10 print:border-zinc-200">
            <p className="text-xs font-semibold text-zinc-500 uppercase tracking-wider mb-2">Catatan</p>
            <p className="text-zinc-400 whitespace-pre-wrap print:text-zinc-600">{invoice.notes}</p>
          </div>
        )}

        {/* Footer */}
        <div className="border-t border-zinc-800 pt-6 text-center print:fixed print:bottom-4 print:left-0 print:right-0 print:border-zinc-200">
          <p className="text-xs text-zinc-500">
            Dibuat dengan{' '}
            <span className="font-semibold text-zinc-300 print:text-zinc-600">
              Invoice<span className="text-accent print:text-red-600">Kirim</span>
            </span>
          </p>
        </div>
      </div>
    </div>
  )
}
