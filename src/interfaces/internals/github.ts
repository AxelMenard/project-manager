export interface IRepository {
  name: string;
  full_name: string;
  private: boolean;
  html_url: string;
  description: string | null;
}
