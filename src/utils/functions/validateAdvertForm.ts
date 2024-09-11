import { type AdvertisementModel } from '../../models/advertismentSchema';

export const validateAdvertForm = (advert: AdvertisementModel) => {
  let valid = true;
  const errors: Partial<{
    name: string;
    description: string;
    price: string;
    imageUrl: string;
  }> = {};

  if (!advert.name || advert.name.trim().length === 0) {
    errors.name = 'Наименование не может быть пустым';
    valid = false;
  }

  if (!advert.description || advert.description.trim().length === 0) {
    errors.description = 'Описание не может быть пустым';
    valid = false;
  }

  if (advert.price <= 0) {
    errors.price = 'Цена должна быть положительным числом';
    valid = false;
  }

  if (!advert.imageUrl || advert.imageUrl.trim().length === 0) {
    errors.imageUrl = 'Ссылка на изображение не может быть пустой';
    valid = false;
  }

  return { valid, errors };
};
