import { Category } from './category.model';
import { MerchantDetails } from './merchant.model';
import { SubCategory } from './subcategory.model';

export class Product{
     productId:number;
     productName:string;
     productImage:string;
     productPrice:number;
     productRating:number;
     noOfViews:number;
     productBrand:string;
     noOfProducts:number;
     productInfo:string;
     discount:number;
     subCategory:SubCategory;
     productActivated:boolean;
     isFeatured:boolean;
     merchant:MerchantDetails;
     
}