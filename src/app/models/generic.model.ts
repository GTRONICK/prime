export interface GenericModel {
    name: string;
    value: number;
}

export const Qualities: GenericModel[] = [
  { name: 'Normal', value: 1 },
  { name: 'Good', value: 2 },
  { name: 'Outstanding', value: 3 },
  { name: 'Excellent', value: 4 },
  { name: 'Masterpiece', value: 5 },
];

export const Enchantments: GenericModel[] = [
  { name: 'One', value: 1 },
  { name: 'Two', value: 2 },
  { name: 'Three', value: 3 }
];