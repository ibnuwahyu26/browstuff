// interfaces/type.ts
export interface Item {
  id: number
  name: string
  price: number
  status?: string
  img: string
  duration?: string
  startDate?: string
  endDate?: string
}

export interface FormData {
  namaLengkap: string
  noHandphone: string
  email: string
  alamat: string
  jaminan: string
  fotoKTP: File | null
}
