
export interface Product {
    id: number,
    title: string,
    price: number,
    description: string,
    category: Category,
    images: string[],
    quantity?: number,
  }
  
  export interface Category {
    id: number,
    name: string,
    image: string,
  }