'use client'

import { useState } from 'react'
import Link from 'next/link'
import { toggleInvoiceStatus, deleteInvoice } from './actions'

interface Item {
  name: string
  quantity: number
  price: number
}

interface Invoice {
  id: string
  invoice_number: string
  client_name: string
  client_email: string | null
  items: Item[]
  total: number
  status: string
  issue_date: string
  due_date: string | null
  notes: string | null
}

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

export default function InvoiceDetailClient({ invoice }: { invoice: Invoice }) {
  const [showDeleteConfirm, setShowDeleteConfirm] = useState(false)
  const [copied, setCopied] = useState(false)

  const handleToggleStatus = async () => {
    await toggleInvoiceStatus(invoice.id, invoice.status)
  }

  const handleDelete = async () => {
    await deleteInvoice(invoice.id)
  }

  const handleCopyLink = () => {
    const url = `${window.location.origin}/i/${invoice.id}`
    navigator.clipboard.writeText(url)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Navbar */}
      <nav className="border-b border-zinc-800 px-6 py-4">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <Link href="/dashboard" className="text-xl font-bold tracking-tight">
            Invoice<span className="text-accent">Kirim</span>
          </Link>
        </div>
      </nav>

      <main className="max-w-3xl mx-auto px-6 py-12">
        {/* Header */}
        <div className="flex items-start justify-between mb-8">
          <div>
            <h1 className="text-3xl font-bold">{invoice.invoice_number}</h1>
            <p className="text-zinc-400 mt-1">{formatDate(invoice.issue_date)}</p>
          </div>
          {invoice.status === 'paid' ? (
            <span className="inline-flex px-4 py-1.5 rounded-full text-sm font-medium bg-green-500/10 text-green-400">
              Lunas
            </span>
          ) : (
            <span className="inline-flex px-4 py-1.5 rounded-full text-sm font-medium bg-yellow-500/10 text-yellow-400">
              Belum Dibayar
            </span>
          )}
        </div>

        {/* Client Info */}
        <div className="bg-zinc-900 border border-zinc-800 rounded-2xl p-6 mb-6">
          <h2 className="text-sm font-medium text-zinc-400 mb-3">Client</h2>
          <p className="text-white font-medium">{invoice.client_name}</p>
          {invoice.client_email && (
            <p className="text-zinc-400 text-sm mt-1">{invoice.client_email}</p>
          )}
        </div>

        {/* Items Table */}
        <div className="bg-zinc-900 border border-zinc-800 rounded-2xl overflow-hidden mb-6">
          <table className="w-full">
            <thead>
              <tr className="border-b border-zinc-800 text-left text-sm text-zinc-400">
                <th className="px-6 py-4 font-medium">Item</th>
                <th className="px-6 py-4 font-medium text-right">Qty</th>
                <th className="px-6 py-4 font-medium text-right">Harga</th>
                <th className="px-6 py-4 font-medium text-right">Subtotal</th>
              </tr>
            </thead>
            <tbody>
              {invoice.items.map((item, index) => (
                <tr key={index} className="border-b border-zinc-800/50">
                  <td className="px-6 py-4 text-white">{item.name}</td>
                  <td className="px-6 py-4 text-zinc-300 text-right">{item.quantity}</td>
                  <td className="px-6 py-4 text-zinc-300 text-right">{formatRupiah(item.price)}</td>
                  <td className="px-6 py-4 text-white text-right">
                    {formatRupiah(item.quantity * item.price)}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>

          {/* Total */}
          <div className="flex justify-end px-6 py-5 border-t border-zinc-800">
            <div className="text-right">
              <span className="text-sm text-zinc-400">Total</span>
              <p className="text-3xl font-bold">{formatRupiah(invoice.total)}</p>
            </div>
          </div>
        </div>

        {/* Notes & Due Date */}
        {(invoice.notes || invoice.due_date) && (
          <div className="bg-zinc-900 border border-zinc-800 rounded-2xl p-6 mb-8 space-y-4">
            {invoice.due_date && (
              <div>
                <h2 className="text-sm font-medium text-zinc-400 mb-1">Jatuh Tempo</h2>
                <p className="text-white">{formatDate(invoice.due_date)}</p>
              </div>
            )}
            {invoice.notes && (
              <div>
                <h2 className="text-sm font-medium text-zinc-400 mb-1">Catatan</h2>
                <p className="text-zinc-300 whitespace-pre-wrap">{invoice.notes}</p>
              </div>
            )}
          </div>
        )}

        {/* Actions */}
        <div className="flex flex-wrap gap-3">
          <button
            onClick={handleToggleStatus}
            className="px-6 py-3 border border-zinc-700 text-white font-semibold rounded-lg hover:bg-zinc-800 transition-colors"
          >
            {invoice.status === 'paid' ? 'Tandai Belum Bayar' : 'Tandai Lunas'}
          </button>

          <button
            onClick={handleCopyLink}
            className="px-6 py-3 border border-zinc-700 text-white font-semibold rounded-lg hover:bg-zinc-800 transition-colors"
          >
            {copied ? 'Link Tersalin!' : 'Share Link'}
          </button>

          <button
            onClick={() => setShowDeleteConfirm(true)}
            className="px-6 py-3 border border-red-500/30 text-red-400 font-semibold rounded-lg hover:bg-red-500/10 transition-colors"
          >
            Hapus Invoice
          </button>

          <Link
            href="/dashboard"
            className="px-6 py-3 text-zinc-400 font-semibold rounded-lg hover:text-white transition-colors"
          >
            Kembali ke Dashboard
          </Link>
        </div>

        {/* Delete Confirmation */}
        {showDeleteConfirm && (
          <div className="fixed inset-0 bg-black/70 flex items-center justify-center z-50">
            <div className="bg-zinc-900 border border-zinc-800 rounded-2xl p-8 max-w-md w-full mx-6">
              <h2 className="text-xl font-bold mb-3">Hapus Invoice?</h2>
              <p className="text-zinc-400 mb-6">
                Invoice {invoice.invoice_number} akan dihapus permanen. Tindakan ini tidak bisa dibatalkan.
              </p>
              <div className="flex gap-3">
                <button
                  onClick={handleDelete}
                  className="px-6 py-3 bg-red-600 text-white font-semibold rounded-lg hover:bg-red-700 transition-colors"
                >
                  Ya, Hapus
                </button>
                <button
                  onClick={() => setShowDeleteConfirm(false)}
                  className="px-6 py-3 border border-zinc-700 text-zinc-300 font-semibold rounded-lg hover:bg-zinc-800 transition-colors"
                >
                  Batal
                </button>
              </div>
            </div>
          </div>
        )}
      </main>
    </div>
  )
}
