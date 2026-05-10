'use server'

import { createClient } from '@/lib/supabase/server'
import { redirect } from 'next/navigation'
import { revalidatePath } from 'next/cache'

export async function toggleInvoiceStatus(invoiceId: string, currentStatus: string) {
  const supabase = await createClient()

  const {
    data: { user },
  } = await supabase.auth.getUser()

  if (!user) {
    redirect('/login')
  }

  const newStatus = currentStatus === 'paid' ? 'unpaid' : 'paid'

  await supabase
    .from('invoices')
    .update({ status: newStatus })
    .eq('id', invoiceId)
    .eq('user_id', user.id)

  revalidatePath(`/dashboard/invoices/${invoiceId}`)
}

export async function deleteInvoice(invoiceId: string) {
  const supabase = await createClient()

  const {
    data: { user },
  } = await supabase.auth.getUser()

  if (!user) {
    redirect('/login')
  }

  const { error } = await supabase
    .from('invoices')
    .delete()
    .eq('id', invoiceId)
    .eq('user_id', user.id)

  if (error) {
    console.error('Delete error:', error.message)
  }

  revalidatePath('/dashboard')
  redirect('/dashboard')
}
