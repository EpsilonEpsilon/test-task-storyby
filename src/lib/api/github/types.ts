export interface IGHRepo {
  name: string;
  id: number;
  created_at: string;
  description: string;
  full_name: string;
  stargazers_count: number;
  html_url: string;
  avatar_url: string;
  updated_at: string;
  open_issues: string;
  language: string;
  owner: {
    avatar_url: string;
    login: string;
  };
}
