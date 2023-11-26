export interface Photo {
  id: number;
  url: string;
  title: string;
  description: string;
  user: number;
}

export interface FetchDataResponse {
  limit: number;
  message: string;
  offset: number;
  photos: Photo[];
  success: boolean;
  total_photos: number;
}
