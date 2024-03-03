import {PromotionDetails} from '.';

export interface ImageSlider {
  data: PromotionDetails[];
  pagination?: boolean;
  preview?: boolean;
}

export interface ImageSliderPagination {
  data: PromotionDetails[];
  x: any;
  size: number;
  color: string;
}
