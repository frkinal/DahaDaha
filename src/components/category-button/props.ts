export interface CategoryButtonProps {
  contents: CategoryButtonContent;
  selectedVal: {
    Id: number;
    Name: string;
    IconUrl: string;
    Rank: number;
  };
  setSelectedVal: React.Dispatch<
    React.SetStateAction<{
      Id: number;
      Name: string;
      IconUrl: string;
      Rank: number;
    }>
  >;
  first?: boolean;
}
export interface CategoryButtonContent {
  Id: number;
  Name: string;
  IconUrl: string;
  Rank: number;
}
