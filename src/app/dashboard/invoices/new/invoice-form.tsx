'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { saveInvoice } from './actions'

interface Item {
  name: string
  quantity: number
  price: number
}

function formatRupiah(value: number): string {
  return `Rp ${value.toLocaleString('id-ID')}`
}

export default function InvoiceForm({ invoiceNumber }: { invoiceNumber: string }) {
  const router = useRouter()
  const [items, setItems] = useState<Item[]>([{ name: '', quantity: 1, price: 0 }])

  const total = items.reduce((sum, item) => sum + item.quantity * item.price, 0)

  const addItem = () => {
    setItems([...items, { name: '', quantity: 1, price: 0 }])
  }

  const removeItem = (index: number) => {
    if (items.length === 1) return
    setItems(items.filter((_, i) => i !== index))
  }

  const updateItem = (index: number, field: keyof Item, value: string | number) => {
    const updated = [...items]
    updated[index] = { ...updated[index], [field]: value }
    setItems(updated)
  }

  const handleSubmit = async (formData: FormData) => {
    formData.set('item_count', String(items.length))
    items.forEach((item, i) => {
      formData.set(`item_name_${i}`, item.name)
      formData.set(`item_qty_${i}`, String(item.quantity))
      formData.set(`item_price_${i}`, String(item.price))
    })
    await saveInvoice(formData)
  }

  return (
    <form action={handleSubmit} className="max-w-3xl mx-auto space-y-8">
      {/* Nomor Invoice */}
      <div>
        <label className="block text-sm font-medium mb-2">Nomor Invoice</label>
        <input
          type="text"
          name="invoice_number"
          value={invoiceNumber}
          readOnly
          className="w-full px-4 py-3 bg-zinc-800 border border-zinc-700 rounded-lg text-zinc-400 cursor-not-allowed"
        />
      </div>

      {/* Client Info */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label className="block text-sm font-medium mb-2">
            Nama Client <span className="text-accent">*</span>
          </label>
          <input
            type="text"
            name="client_name"
            required
            placeholder="Nama client"
            className="w-full px-4 py-3 bg-zinc-800 border border-zinc-700 rounded-lg text-white placeholder-zinc-500 focus:outline-none focus:border-accent transition-colors"
          />
        </div>
        <div>
          <label className="block text-sm font-medium mb-2">Email Client</label>
          <input
            type="email"
            name="client_email"
            placeholder="email@client.com"
            className="w-full px-4 py-3 bg-zinc-800 border border-zinc-700 rounded-lg text-white placeholder-zinc-500 focus:outline-none focus:border-accent transition-colors"
          />
        </div>
      </div>

      {/* Items */}
      <div>
        <div className="flex items-center justify-between mb-4">
          <label className="block text-sm font-medium">
            Items <span className="text-accent">*</span>
          </label>
          <button
            type="button"
            onClick={addItem}
            className="px-4 py-2 text-sm text-accent border border-accent/30 rounded-lg hover:bg-accent/10 transition-colors"
          >
            + Tambah Item
          </button>
        </div>

        <div className="space-y-4">
          {items.map((item, index) => (
            <div key={index} className="flex gap-3 items-start">
              <div className="flex-1">
                <input
                  type="text"
                  value={item.name}
                  onChange={(e) => updateItem(index, 'name', e.target.value)}
                  placeholder="Nama item"
                  required
                  className="w-full px-4 py-3 bg-zinc-800 border border-zinc-700 rounded-lg text-white placeholder-zinc-500 focus:outline-none focus:border-accent transition-colors"
                />
              </div>
              <div className="w-24">
                <input
                  type="number"
                  value={item.quantity}
                  onChange={(e) => updateItem(index, 'quantity', parseInt(e.target.value) || 0)}
                  placeholder="Qty"
                  min={1}
                  required
                  className="w-full px-4 py-3 bg-zinc-800 border border-zinc-700 rounded-lg text-white placeholder-zinc-500 focus:outline-none focus:border-accent transition-colors"
                />
              </div>
              <div className="w-40">
                <input
                  type="number"
                  value={item.price || ''}
                  onChange={(e) => updateItem(index, 'price', parseInt(e.target.value) || 0)}
                  placeholder="Harga satuan"
                  min={0}
                  required
                  className="w-full px-4 py-3 bg-zinc-800 border border-zinc-700 rounded-lg text-white placeholder-zinc-500 focus:outline-none focus:border-accent transition-colors"
                />
              </div>
              <div className="w-32 py-3 text-sm text-zinc-400 text-right">
                {formatRupiah(item.quantity * item.price)}
              </div>
              <button
                type="button"
                onClick={() => removeItem(index)}
                disabled={items.length === 1}
                className="px-3 py-3 text-zinc-500 hover:text-red-400 transition-colors disabled:opacity-30 disabled:cursor-not-allowed"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                </svg>
              </button>
            </div>
          ))}
        </div>

        {/* Total */}
        <div className="flex justify-end mt-6 pt-4 border-t border-zinc-800">
          <div className="text-right">
            <span className="text-sm text-zinc-400">Total</span>
            <p className="text-2xl font-bold">{formatRupiah(total)}</p>
          </div>
        </div>
      </div>

      {/* Notes */}
      <div>
        <label className="block text-sm font-medium mb-2">Catatan</label>
        <textarea
          name="notes"
          rows={3}
          placeholder="Catatan tambahan (opsional)"
          className="w-full px-4 py-3 bg-zinc-800 border border-zinc-700 rounded-lg text-white placeholder-zinc-500 focus:outline-none focus:border-accent transition-colors resize-none"
        />
      </div>

      {/* Due Date */}
      <div className="w-64">
        <label className="block text-sm font-medium mb-2">Jatuh Tempo</label>
        <input
          type="date"
          name="due_date"
          className="w-full px-4 py-3 bg-zinc-800 border border-zinc-700 rounded-lg text-white focus:outline-none focus:border-accent transition-colors"
        />
      </div>

      {/* Actions */}
      <div className="flex gap-4 pt-4">
        <button
          type="submit"
          className="px-8 py-3 bg-accent text-white font-semibold rounded-lg hover:bg-red-600 transition-colors"
        >
          Simpan Invoice
        </button>
        <button
          type="button"
          onClick={() => router.push('/dashboard')}
          className="px-8 py-3 border border-zinc-700 text-zinc-300 font-semibold rounded-lg hover:bg-zinc-800 transition-colors"
        >
          Batal
        </button>
      </div>
    </form>
  )
}
