import { formatISO } from 'date-fns';

export const ORDER = {
  id: 10,
  petId: 10,
  quantity: 7,
  shipDate: formatISO(new Date()),
  status: 'approved',
  complete: true,
};