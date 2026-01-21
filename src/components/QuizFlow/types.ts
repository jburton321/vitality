export interface FormData {
  age: string;
  travel: string;
  spouseFirstName: string;
  spouseLastName: string;
  housing: string;
  employment: string;
  payment: string;
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  marketingConsent: boolean;
  acknowledgements: {
    attendWithSpouse: boolean;
    completeSession: boolean;
    meetCriteria: boolean;
  };
  scheduledDate: string;
  scheduledTime: string;
}

export const initialFormData: FormData = {
  age: "",
  travel: "",
  spouseFirstName: "",
  spouseLastName: "",
  housing: "",
  employment: "",
  payment: "",
  firstName: "",
  lastName: "",
  email: "",
  phone: "",
  marketingConsent: false,
  acknowledgements: {
    attendWithSpouse: false,
    completeSession: false,
    meetCriteria: false,
  },
  scheduledDate: "",
  scheduledTime: "",
};
