export interface CategoryButton {
  contents: CategoryButtonContent;
  selectedVal: CategoryButtonContent;
  setSelectedVal: React.Dispatch<React.SetStateAction<CategoryButtonContent>>;
  first?: boolean;
}
export interface CategoryButtonContent {
  Id: number;
  Name: string;
  IconUrl: string;
  Rank: number;
}
