'use strict'

/** @param {import('fastify').FastifyInstance} fastify */

module.exports = async function(fastify, opts) {

  const moviesEntity = fastify.platformatic.entities.movie;

  fastify.get('/test', async (request, reply) => {

    reply.status(200).send({ success: true, message: "Path working fine " })

  })



  fastify.get('/popular', async (request, reply) => {

    try {

      const data = await moviesEntity.find({ "where": { "popularity": { gt: 90 } }, "limit": 3, "orderBy": [{ "field": "popularity", "direction": "ASC" }] });
      if (!data) {
        throw Error(" No Entry found for the given query ")
      }
      return reply.code(201).send({ success: true, data });

    }
    catch (error) {
      return reply.code(400).send({ success: false, error: `${error}` });
    }


  })


  fastify.get('/trending', async (request, reply) => {
    const trending = await moviesEntity.find({
      "where": {
        "releasedYear": {
          "gte": 1990
        }, "votesCount": { "gte": 35000 }
      }
    });
    return { data: trending }
  })


  fastify.get('/search', async (request, reply) => {

    const { search } = request.query;

    try {

      if (!search) {
        throw Error("No search query parameter defined")
      }

      const data = await moviesEntity.find({ "where": { "title": { like: `%${search}%` } } });
      if (!data) {
        throw Error(" No Entry found for the given query ")
      }
      return reply.code(201).send({ success: true, data });

    }
    catch (error) {
      return reply.code(400).send({ success: false, error: `${error}` });
    }

  })


}

