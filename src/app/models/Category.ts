export class Category {
  categoryId!: number;
  categoryName!: string;
  parentId!: number;
  image!: CategoryImageDTO;
  featured!: boolean;
  offered!: boolean;
  childCategories!: [
    {
      categoryId: number;
      categoryName: string;
      parentId: number;
      image: CategoryImageDTO;
      featured: boolean;
      offered: boolean;
      childCategories: [
        {
          categoryId: number;
          categoryName: string;
          parentId: number;
          image: CategoryImageDTO;
          featured: boolean;
          offered: boolean;
          childCategories: [
            {
              categoryId: number;
              categoryName: string;
              parentId: number;
              image: CategoryImageDTO;
              featured: boolean;
              offered: boolean;
            }
          ];
        }
      ];
    }
  ];
}

export class CategoryImageDTO {
  id!: number;
  categoryId!: number;
  imageName!: string;
  oddImage!: string;
  evenImage!: string;
  bannerImage!: string;
}
