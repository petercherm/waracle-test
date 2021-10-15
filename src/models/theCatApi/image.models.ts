export interface ImageType {
  breed_ids: string | null;
  breeds: any[];
  created_at: string;
  height: number;
  id: string;
  original_filename: string;
  sub_id: string;
  url: string;
  width: number;
}

export type ImageResponse = ImageType[];
