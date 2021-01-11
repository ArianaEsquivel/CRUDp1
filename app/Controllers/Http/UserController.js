'use strict'
const { validate } = use('Validator')

class UserController {
    async index ({ request, response }) {
        const User = use('App/Models/User')
        const users = await User.all()
        return users
    }

    async store ({ request, session, response }) {
    const rules = {
        username: 'required',
        email: 'required',
        password: 'required',
        name: 'required',
        age: 'required',
    }

    const validation = await validate(request.all(), rules)

    if (validation.fails()) {
        return "Ingresa todos los datos necesarios"
    }
    const Hash = use('Hash')
    const User = use('App/Models/User')
    const safePassword = await Hash.make(request.input('password'))
    const users = request.collect(['username', 'password', 'email', 'name', 'age'])
    const user = await User
    .query()
    .where('username', users)
    .where('email', users)
    .fetch()
    //if (!user)
    //{
        await User.createMany(users)
        return 'Usuario registrado con éxito'
    //}
    //return 'Tu username o email ya han sido registrados intenta con otro'
    }

    async update ({ request, session, response }) {

        const User = use('App/Models/User')
        const rules = {
            username: 'required',
            name: 'required',
            age: 'required',
        }
        const validation = await validate(request.all(), rules)
    
        if (validation.fails()) {
            return "Ingresa los datos del username del que desea cambiar el name y age"
        }

        const users = request.all()
        const user =  await User
        .query()
        .where('username', '=', users.username)
        .fetch()
        await User
        .query()
        .where('username', users.username)
        .update({ age: users.age, name: users.name })
        return 'Has actualizado tus datos'
   }

   async delete ({ request, response }) {
    const User = use('App/Models/User')
    const id  = request.all()
    const user = await User.find(id.id)
    
    await user.delete()
    return 'Has eliminado el usuario'
    }

    async crear ({ request, response }) {
        const Factory = use('Factory')
        const user = await Factory
        .model('App/Models/User')
        .create()
    }
}

module.exports = UserController

