export interface CartItem {
    'Id': number,
    'Name': string,
    'Description': string,
    'Quantity': number,
    'Unit': string,
    'Сurrency': string,
    'Price': number,
    'DiscountedPrice': number,
    'Images': [
        {
            'FileName': string,
            'FileExtension': string,
            'Image': string
        }
    ]

}

export interface BaskedSummary {
    'TotalProducts': number,
    'Discount': number,
    'Total': number
  }

export interface UserCartSlice {
    status: string | null;
    LogoImg: string,
    UserGuid: string,
    UseName: string,
    loadingBaskedSumary: boolean,
    CartItems: CartItem[],
    BaskedSummary: BaskedSummary,
}
