export interface ICalendar {
  id: number;
  teams: ITeam[];
}

export interface ITeam {
  name: string;
  percentageOfAbsent: number[];
  members: ITeamMember[];
}

export interface ITeamMember {
  name: string;
  vacations: IVacation[];
}

export interface IVacation {
  endDate: string;
  startDate: string;
  type: string;
}

export interface IVacationsType {
  type: string;
  description: string;
}

export interface IAllDays {
  dayName: string;
  date: number;
  isDayOff: boolean;
  fullDate: Date;
}

export interface ISelectedData {
  startDate: string
  endDate: string
  team: string
  user: string
  type: string
}
