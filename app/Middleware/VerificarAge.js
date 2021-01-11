'use strict'

const Response = require('@adonisjs/framework/src/Response')

/** @typedef {import('@adonisjs/framework/src/Request')} Request */
/** @typedef {import('@adonisjs/framework/src/Response')} Response */
/** @typedef {import('@adonisjs/framework/src/View')} View */

class VerificarAge {
  /**
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Function} next
   */
  async handle ({ request, response }, next) {
    const age = request.post().age
    if (age < 18){
      return response.status(401).json({
        message: 'No podemos registranrte siendo menor de 18', age
      })
    }
    await next()
  }
}

module.exports = VerificarAge
