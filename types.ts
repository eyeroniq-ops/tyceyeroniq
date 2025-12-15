export enum ServiceType {
  WEB = 'WEB',
  BRANDING = 'BRANDING',
  SOCIAL = 'SOCIAL',
}

export interface TermItem {
  text: string;
  tooltip: string;
}

export interface SectionContent {
  title: string;
  items: TermItem[];
}

export interface ServiceTerms {
  id: ServiceType;
  name: string;
  icon: string;
  description: string;
  responsibilities: SectionContent;
  revisions: SectionContent;
  inclusions: SectionContent; // What we do
  exclusions: SectionContent; // What we don't do
}

export interface ChatMessage {
  role: 'user' | 'model';
  text: string;
}