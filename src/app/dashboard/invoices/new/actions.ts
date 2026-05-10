'use server'

import { createClient } from '@/lib/supabase/server'
import { redirect } from 'next/navigation'

export async function saveInvoice(formData: FormData) {
  const supabase = await createClient()

  const {
    data: { user },
  } = await supabase.auth.getUser()

  if (!user) {
    redirect('/login')
  }

  const invoiceNumber = formData.get('invoice_number') as string
  const clientName = formData.get('client_name') as string
  const clientEmail = formData.get('client_email') as string
  const notes = formData.get('notes') as string
  const dueDate = formData.get('due_date') as string

  const itemCount = parseInt(formData.get('item_count') as string, 10)
  const items = []
  let total = 0

  for (let i = 0; i < itemCount; i++) {
    const name = formData.get(`item_name_${i}`) as string
    const quantity = parseInt(formData.get(`item_qty_${i}`) as string, 10)
    const price = parseInt(formData.get(`item_price_${i}`) as string, 10)

    if (name && quantity > 0 && price >= 0) {
      items.push({ name, quantity, price })
      total += quantity * price
    }
  }

  if (!clientName || items.length === 0) {
    return
  }

  await supabase.from('invoices').insert({
    user_id: user.id,
    sender_email: user.email,
    invoice_number: invoiceNumber,
    client_name: clientName,
    client_email: clientEmail || null,
    total,
    items,
    notes: notes || null,
    due_date: dueDate || null,
  })

  redirect('/dashboard')
}
