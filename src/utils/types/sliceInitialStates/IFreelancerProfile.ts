export interface FreelancerProfileInitialState {
  loadingGetFreelancerProfileData: boolean;
  getFreelancerProfileDataServerError: any | null;
  freelancerProfileData: any | null;
  loadingGetAvailableSkills: boolean;
  getAvailableSkillsServerError: any | null;
  availableSkills: availableSkillsResponse | null;
  skillsList: any[];
  loadingGetAvailableServices: boolean;
  getAvailableServicesServerError: any | null;
  availableServices: any[] | [];
}

interface availableSkillsResponse {
  count: number;
  next: string | null;
  previous: string | null;
  results: AvailableSkill[];
}
interface AvailableSkill {
  id: number;
  name: string;
  created_at: string;
}
