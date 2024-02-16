import { Category } from "./Category";
import { Image } from "./Image";
import { Merchant } from "./Merchant";
import { Review } from "./Review";

export class Product {
  productId!: number;
  productName!: string;
  unit!: string;
  rate!: number;
  categoryId!: number;
  categoryName!: string;
  availableItems!: number; // number of available items in the inventory
  parentId!: number; // parentId of the category
  images!: [Image];
  shortDesc!: string;
  highlights!: string;
  description!: string;
  entryDate!: string;
  quantity!: number;
  featured!: boolean;
  userId!: number;
  relatedProducts!: [number];
  relatedProductDtos!: [Product];
  newProduct!: boolean;
  discountPercent!: number;
  actualRate!: number;
  merchantId!: [number];
  merchant !: [Merchant];
  reviewDtos !: [Review];
  nosReview!: number;
  avgRating!: number;
  ancestorCategories!: [Category];
  totalSoldQuantity!: number;
  productTags!: [string];
}
