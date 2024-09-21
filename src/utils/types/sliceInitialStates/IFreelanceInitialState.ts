import { AvailableSkill } from "./IFreelancerProfile";

export interface freelanceInitialState {
  vacancies: vacancy[];
  getVacanciesError: any;
  getVacanciesLoading: boolean;
}

interface vacancy {
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

interface PostedBy {
  id: number;
  mobile: string;
  email: string;
  first_name: string;
  last_name: string;
  is_superuser: boolean;
  is_active: boolean;
  groups: number[];
}
