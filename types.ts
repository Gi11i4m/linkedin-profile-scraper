export interface LinkedInProfileData {
  personal?: LinkedInPersonalData;
  featuredLinks?: string[];
}

export interface LinkedInPersonalData {
  name: string;
  title: string;
  about: string;
  currentLocation: string;
}
