/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export async function seed(knex) {
  await knex('jobs').insert([
    {
      id: 1,
      title: 'title',
      description: 'something',
      location: '',
      date: '11 July 2024',
      time: '10:00',
      complete: false,
      price: 100,
      review: 'good',
      worked_hours: 2,
      employee_id: 1,
      client_id: 1,
      manager_id: 1,
    },
    {
      id: 2,
      title: 'title',
      description: 'something',
      location: '',
      date: '11 July 2024',
      time: '10:00',
      complete: true,
      price: 100,
      review: 'good',
      worked_hours: 2,
      employee_id: 2,
      client_id: 2,
      manager_id: 1,
    },
    {
      id: 3,
      title: 'title',
      description: 'something',
      location: '',
      date: '11 July 2024',
      time: '10:00',
      complete: false,
      price: 100,
      review: 'good',
      worked_hours: 2,
      employee_id: 3,
      client_id: 3,
      manager_id: 1,
    },
  ])
}
