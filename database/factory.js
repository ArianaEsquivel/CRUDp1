'use strict'

/*
|--------------------------------------------------------------------------
| Factory
|--------------------------------------------------------------------------
|
| Factories are used to define blueprints for database tables or Lucid
| models. Later you can use these blueprints to seed your database
| with dummy data.
|
*/

/** @type {import('@adonisjs/lucid/src/Factory')} */
 const Factory = use('Factory')
 const Hash = use('Hash')
 Factory.blueprint('App/Models/User', (faker) => {
     const usern = faker.username()
   return {
     username: usern,
     email: usern + '@gmail.com',
     password: '12345',
     name: faker.name(),
     age: Math.floor(Math.random() * 50 ) + 18,
   }
 })



