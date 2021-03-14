export function checkVacationsDate(vacations, date): boolean {
  let result = false;
  vacations.forEach((item) => {
    const startDateNumbers = item.startDate.split('.');
    const startDate = `${startDateNumbers[2]}/${startDateNumbers[1]}/${startDateNumbers[0]}`;
    const endDateNumbers = item.endDate.split('.');
    const endDate = `${endDateNumbers[2]}/${endDateNumbers[1]}/${endDateNumbers[0]}`;
    if (date >= new Date(startDate) && date <= new Date(endDate)) {
      result = true;
    }
  });
  return result;
}

export function counterSumVacation(vacations, date): number {
  let days = 0;
  const month = new Date(date).getMonth();
  const year = new Date(date).getFullYear();
  vacations.forEach((item) => {
    const startDateNumbers = item.startDate.split('.');
    const startDate = `${startDateNumbers[2]}/${startDateNumbers[1]}/${startDateNumbers[0]}`;
    const endDateNumbers = item.endDate.split('.');
    const endDate = `${endDateNumbers[2]}/${endDateNumbers[1]}/${endDateNumbers[0]}`;
    if (month === new Date(endDate).getMonth()
      && month === +new Date(startDate).getMonth()
      && year === new Date(startDate).getFullYear())
    {
      days += new Date(endDate).getDate() - new Date(startDate).getDate() + 1;
    }
  });
  return days;
}
