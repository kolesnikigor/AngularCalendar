const teamDepartments = {
  teams: [
    {
      name: 'Frontend Team',
      percentageOfAbsent: [0, 2, 0, 0, 1, 22, 2, 2, 2, 2, 11, 1],
      teamId: 0,
      members: [
        {
          name: 'FE_Team_User1',
          vacations: [
            { startDate: '20.02.2021', endDate: '22.03.2021', type: 'Paid' },
            { startDate: '20.11.2020', endDate: '22.11.2020', type: 'Paid' },
          ],
        },
        {
          name: 'FE_Team_User2',
          vacations: [
            { startDate: '20.02.2020', endDate: '22.02.2020', type: 'UnPaid' },
            { startDate: '20.03.2020', endDate: '22.03.2020', type: 'UnPaid' },
          ],
        },
      ],
    },
    {
      name: 'Backend Team',
      percentageOfAbsent: [0, 2, 0, 0, 1, 2, 2, 2, 2, 2, 1, 1],
      teamId: 1,
      members: [
        {
          name: 'BE_Team_User1',
          vacations: [
            { startDate: '15.02.2020', endDate: '22.02.2020', type: 'UnPaid' },
            { startDate: '20.03.2020', endDate: '22.03.2020', type: 'UnPaid' },
          ],
        },
        {
          name: 'BE_Team_User2',
          vacations: [
            { startDate: '20.02.2020', endDate: '22.02.2020', type: 'UnPaid' },
            { startDate: '20.03.2020', endDate: '22.03.2020', type: 'UnPaid' },
          ],
        },
      ],
    },
    {
      name: 'Designer Team',
      percentageOfAbsent: [0, 2, 0, 0, 1, 22, 2, 2, 2, 2, 11, 1],
      teamId: 2,
      members: [
        {
          name: 'DE_Team_User1',
          vacations: [
            { startDate: '20.02.2021', endDate: '22.03.2021', type: 'Paid' },
            { startDate: '20.11.2020', endDate: '22.11.2020', type: 'Paid' },
          ],
        },
        {
          name: 'DE_Team_User2',
          vacations: [
            { startDate: '20.02.2020', endDate: '22.02.2020', type: 'UnPaid' },
            { startDate: '20.03.2020', endDate: '22.03.2020', type: 'UnPaid' },
          ],
        },
      ],
    },
  ],
}

export default teamDepartments