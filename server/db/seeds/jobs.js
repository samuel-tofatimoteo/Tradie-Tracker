/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export async function seed(knex) {
  // Deletes ALL existing entries
  await knex('table_name').del()
  await knex('table_name').insert([
    {
      title: 'title',
      description: 'something',
      location: '',
      date: '11 July 2024',
      time: '10:00',
      complete: false,
      price: 100,
      reviews: 'good',
      worked_hours: 2,
      employee_id: 1,
      client_id: 1,
      manager_id: 1,
    },
    {
      title: 'title',
      description: 'something',
      location: '',
      date: '11 July 2024',
      time: '10:00',
      complete: false,
      price: 100,
      reviews: 'good',
      worked_hours: 2,
      employee_id: 2,
      client_id: 2,
      manager_id: 1,
    },
    {
      title: 'title',
      description: 'something',
      location: '',
      date: '11 July 2024',
      time: '10:00',
      complete: false,
      price: 100,
      reviews: 'good',
      worked_hours: 2,
      employee_id: 3,
      client_id: 3,
      manager_id: 1,
    },
  ])
}
