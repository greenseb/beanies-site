export interface Tier {
  label: string;
  price: string;
}

export interface Service {
  name: string;
  description: string;
  duration?: string;
  price?: { amount: string; from?: boolean };
  tiers?: Tier[];
  note?: string;
  comingSoon?: boolean;
}

export const services: Service[] = [
  {
    name: "Walks",
    duration: "60 mins",
    price: { amount: "£20" },
    description:
      "Tailored to your pet, these can be solo or small groups. The 60 minutes does not include travel time so your pet gets to enjoy the full hour outdoors. Training can be included at no extra cost.",
  },
  {
    name: "Pop-ins",
    duration: "30 mins",
    price: { amount: "£15" },
    description:
      "Whether you're in the office or on a day out, and your pet needs entertaining or letting out, Beanies can help. Feeding, administering medication, playtime and toilet breaks as required.",
  },
  {
    name: "Chauffeuring",
    price: { amount: "£10", from: true },
    description:
      "A trip to the vets? Want your pet there for the wedding photos but not the reception, or for one last goodbye with a loved one? Choose Beanies as your pet taxi.",
  },
  {
    name: "Grooming",
    price: { amount: "£10", from: true },
    description:
      "Beanies mainly focuses on small mammals (rabbits, guinea pigs, ferrets), however if your pet is looking for a nail trim or basic groom, Beanies can help. If you're looking for a full groom, please ask for recommendations.",
  },
  {
    name: "Sitting",
    description:
      "To keep your pet comfortable in their own environment, Beanies can look after your pet in your home.",
    tiers: [
      { label: "4 hours", price: "from £25" },
      { label: "8 hours", price: "from £45" },
      { label: "24 hours", price: "from £60" },
    ],
  },
  {
    name: "Boarding and day care",
    comingSoon: true,
    description:
      "Beanies offers a home from home experience, to fit all your pet's needs. Boarding includes feeding, daily health checks, enrichment, walks, fun days out and loads of cosy cuddles.",
    tiers: [
      { label: "4 hours", price: "from £25" },
      { label: "8 hours", price: "from £45" },
      { label: "24 hours", price: "from £60" },
    ],
    note: "For both day care and boarding, chauffeuring is available for an extra £10.",
  },
];
