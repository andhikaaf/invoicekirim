import { createClient } from '@/lib/supabase/server'

export async function generateInvoiceNumber(userId: string): Promise<string> {
  const supabase = await createClient()

  const { data } = await supabase
    .from('invoices')
    .select('invoice_number')
    .eq('user_id', userId)
    .order('created_at', { ascending: false })
    .limit(1)

  if (!data || data.length === 0) {
    return 'INV-001'
  }

  const lastNumber = parseInt(data[0].invoice_number.replace('INV-', ''), 10)
  return `INV-${String(lastNumber + 1).padStart(3, '0')}`
}
