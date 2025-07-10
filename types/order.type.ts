export type DetailPesananInputProps = {
  nama_pesanan: string,
  harga: number,
  amount: number
}

export type OrderInputProps = {
	nama_pemesan: string,
	detail_pesanan: DetailPesananInputProps[],
	total_harga: number
}