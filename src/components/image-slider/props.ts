export interface ImageSliderProps {
  data: DataContent[];
  autoPlay?: boolean;
  pagination?: boolean;
  preview?: boolean;
}

export interface DataContent {
  BrandIconColor: string;
  BrandIconUrl: string;
  ImageUrl: string;
  BrandPromotionCardParticipationText: string;
  PromotionCardColor: string;
  RemainingText: string;
  SeoName: string;
  Title: string;
  ScenarioType: string;
  Unavailable: boolean;
  Unvisible: boolean;
  ListButtonText: string;
  ListButtonTextBackGroudColor: string;
  CardType: string;
  ExternalUrl: string;
  IsLuckyDay: boolean;
  LuckyDayText: string;
  LuckyDayTextColor: string;
  LuckyDayBackgroundColor: string;
  DaysLeft: number;
}
