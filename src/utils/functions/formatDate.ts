export const formatDate = (dateString: string): string => {
  const date = new Date(dateString);

  // Настройки для отображения даты
  const optionsDate: Intl.DateTimeFormatOptions = {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  };

  // Настройки для отображения времени
  const optionsTime: Intl.DateTimeFormatOptions = {
    hour: '2-digit',
    minute: '2-digit',
  };

  // Получаем строку даты и времени
  const formattedDate = date.toLocaleDateString('ru-RU', optionsDate); // Пример: "12 февраля 2024"
  const formattedTime = date.toLocaleTimeString('ru-RU', optionsTime); // Пример: "17:30"

  return `${formattedDate} в ${formattedTime}`;
};
