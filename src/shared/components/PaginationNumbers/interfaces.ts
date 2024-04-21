export interface IPaginationNumbers {
  totalPages: number
  currentPage: number
}

export interface IPaginationNumbersEmits {
  (e: 'changePage', page: number): void
}
