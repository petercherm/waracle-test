export interface VotesType {
  country_code: string | null;
  created_at: string;
  id: number;
  image_id: string;
  sub_id: string | null;
  value: number;
}

export type VoteResponse = VotesType[];
