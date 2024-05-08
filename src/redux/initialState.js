const initialState = {
  tables: [
    {
      id: "1",
      description: "2nd window table",
    },
    {
      id: "2",
      description: "1st window table",
    },
    {
      id: "3",
      description: "1st bar table",
    },
    {
      id: "4",
      description: "2nd bar table",
    },
  ],

  reservations: [
    {
      id: "1",
      date: "2021-09-30",
      time: "12:00",
      length: 2,
      table: "1",
      name: "John Doe",
      phone: "123456789",
    },
    {
      id: "2",
      date: "2021-09-30",
      time: "12:00",
      length: 2,
      table: "2",
      name: "John Deer",
      phone: "987654321",
    },
  ],
};

export default initialState;
