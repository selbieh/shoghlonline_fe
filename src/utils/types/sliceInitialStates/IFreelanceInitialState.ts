import { AvailableSkill } from "./IFreelancerProfile";

export interface freelanceInitialState {
  vacancies: vacanciesResponse;
  getVacanciesError: any;
  getVacanciesLoading: boolean;
  searchValue: string | null;
  vacancy: Vacancy | null;
  getVacancyLoading: boolean;
  getVacancyError: any;
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
