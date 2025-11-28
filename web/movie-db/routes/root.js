'use strict'

/** @param {import('fastify').FastifyInstance} fastify */

module.exports = async function(fastify, opts) {

  fastify.get('/example', async (request, reply) => {
    return { hello: fastify.example }
  })

  fastify.get('/allmovies', async (request, reply) => {


    const moviesEntity = fastify.platformatic.entities.movie;
    const count = await moviesEntity.count({});
    return { moviesCount: count }

  })




}

