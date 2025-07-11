export async function useSafeFetch<T = any>(url: string, options = {}) {
    const res = await useFetch<T>(url, options)
    
    if (res.error.value) {
      const err = res.error.value as any
      throw createError({
        statusCode: err.statusCode || 500,
        statusMessage: err.message || 'Terjadi kesalahan saat mengambil data'
      })
    }
  
    return res.data
  }
