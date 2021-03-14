export interface IVacationsType {
  type: string
  description: string
}

export interface IVacation {
  startDate: string
  endDate: string
  type: string
}

export interface IMember {
  memberId?: number
  name: string
  vacations: Array<IVacation>
}

export interface ITeam {
  name: string
  percentageOfAbsent: Array<Number>
  members: Array<IMember>
}

export interface ITeams {
  teams: Array<ITeam>
}