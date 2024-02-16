export class FeaturedProducts {
  productId!: number;
  productName!: string;
  unit!: string;
  rate!: number;
  categoryId!: number;
  categoryName!: string;
  availableItems!: number;
  parentId!: number;
  images!: [{ imageId: number; image: string }];
  shortDesc!: string;
  highlights!: string;
  description!: string;
  entryDate!: string;
  quantity!: string;
  featured!: boolean;
  userId!: number;
  relatedProducts!: [];
  productDTO!: {};
  newProduct!: boolean;
  discountPercent!: number;
  actualRate!: number;
  merchantId!: [];
  MerchantDTO!: {};

  ReviewDTO!: {};
  nosReview!: number;
  avgRating!: number;
  CategoryDTO!: {};
  totalSoldQuantity!: number;
  productTags!: [];
}
