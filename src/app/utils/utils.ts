import {IAllDays, IVacation} from '../types/types';

export function transformDateOfVocation(vacation): IVacation {
  let { startDate, endDate, type } = vacation;
  const startDateNumbers = startDate.split('.');
  startDate = `${startDateNumbers[2]}/${startDateNumbers[1]}/${startDateNumbers[0]}`;
  const endDateNumbers = endDate.split('.');
  endDate = `${endDateNumbers[2]}/${endDateNumbers[1]}/${endDateNumbers[0]}`;
  return {startDate, endDate, type};
}

export function checkVacationsDate(vacations, date): boolean {
  let result = false;
  vacations.forEach((item) => {
    const vacation = transformDateOfVocation(item);
    const { startDate, endDate } = vacation;
    if (date >= new Date(startDate) && date <= new Date(endDate)) {
      result = true;
    }
  });
  return result;
}

export function checkVacationsType(vacations): boolean {
  let result = false;
  vacations.forEach((item) => {
    item.type === 'Paid' ? result = true : result = false;
  });
  return result;
}

export function counterSumVacationByMonth(vacations, date): number {
  let days = 0;
  const month = new Date(date).getMonth();
  const year = new Date(date).getFullYear();
  vacations.forEach((item) => {
    const vacation = transformDateOfVocation(item);
    const { startDate, endDate } = vacation;
    if (month === new Date(endDate).getMonth()
      && month === +new Date(startDate).getMonth()
      && year === new Date(startDate).getFullYear())
    {
      days += new Date(endDate).getDate() - new Date(startDate).getDate() + 1;
    }
  });
  return days;
}

export function counterSumVacationByDay(vacations, date): number {
  return vacations.reduce((accumulator, item) => {
    const vacation = transformDateOfVocation(item);
    const {startDate, endDate} = vacation;
    if (date.fullDate >= new Date(startDate) && date.fullDate <= new Date(endDate)) {
        accumulator += 1;
    }
    return accumulator;
  }, 0);
}

export function getDaysOfCurrentMonth(currentDate): IAllDays[] {
  const year = currentDate.getFullYear();
  const month = currentDate.getMonth();
  const date = new Date(year, month, 1);
  const days = [];
  while (date.getMonth() === month) {
    const item = new Date(date);
    days.push({
      dayName: item.toLocaleDateString('en-US', {weekday: 'short'}),
      date: item.getDate(),
      isDayOff: item.getDay() === 0 || item.getDay() === 6,
      fullDate: item,
    });
    date.setDate(date.getDate() + 1);
  }
  return days;
}
