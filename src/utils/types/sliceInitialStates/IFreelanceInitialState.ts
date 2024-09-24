import { AvailableSkill } from "./IFreelancerProfile";

export interface freelanceInitialState {
  vacancies: vacanciesResponse;
  getVacanciesError: any;
  getVacanciesLoading: boolean;
  vacancy: Vacancy | null;
  getVacancyLoading: boolean;
  getVacancyError: any;
  searchValue: string | null;
  services: number[] | null;
  experience: string[] | null;
  skills: number[] | null;
  location: string | null;
  jop_type: number | null;
  min_fixed_price: number | null;
  max_fixed_price: number | null;
  min_hour_price: number | null;
  max_hour_price: number | null;
  payment_verified: boolean | null;
  ordering: string | null;
  test: any;
  queryParams: {
    searchValue?: string | null;
    services?: number[] | null;
    experience?: string[] | null;
    skills?: number[] | null;
    location?: string | null;
    jop_type?: number | null;
    min_fixed_price?: number | null;
    max_fixed_price?: number | null;
    min_hour_price?: number | null;
    max_hour_price?: number | null;
    payment_verified?: boolean | null;
    ordering?: string | null;
  };
}

interface vacanciesResponse {
  count: number;
  next: string | null;
  previous: string | null;
  results: Vacancy[];
}
export interface Vacancy {
  id: number;
  title: string;
  description: string;
  location: string;
  job_type: number;
  skills: AvailableSkill[];
  salary: string;
  posted_by: PostedBy;
  applied_count: string;
  created_at: string;
  modified_at: string;
}

export interface PostedBy {
  id: number;
  mobile: string;
  email: string;
  first_name: string;
  last_name: string;
  is_superuser: boolean;
  is_active: boolean;
  groups: number[];
}
