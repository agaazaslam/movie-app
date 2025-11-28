import { Entity, EntityHooks, Entities as DatabaseEntities, PlatformaticDatabaseConfig, PlatformaticDatabaseMixin } from '@platformatic/db'
import { PlatformaticApplication, PlatformaticServiceConfig } from '@platformatic/service'
import { type FastifyInstance } from 'fastify'

import { Actor } from './actor'
import { Movie } from './movie'

export { Actor } from './actor'
export { Movie } from './movie'

export interface Entities extends DatabaseEntities {
  actor: Entity<Actor>
  movie: Entity<Movie>
}

export interface EntityTypes {
  actor: Actor
  movie: Movie
}

export interface EntitiesHooks {
  addEntityHooks(entityName: 'actor', hooks: EntityHooks<Actor>): any
  addEntityHooks(entityName: 'movie', hooks: EntityHooks<Movie>): any
}

export interface SchemaGetters {
  getSchema(schemaId: 'actor'): {
    '$id': string,
    title: string,
    description: string,
    type: string,
    properties: { [x in keyof Actor]: { type: string, nullable?: boolean } },
    required: string[]
  }

getSchema(schemaId: 'movie'): {
    '$id': string,
    title: string,
    description: string,
    type: string,
    properties: { [x in keyof Movie]: { type: string, nullable?: boolean } },
    required: string[]
  }
}

export type ServerInstance<Configuration = PlatformaticDatabaseConfig> = FastifyInstance & {
  platformatic: PlatformaticApplication<Configuration> & PlatformaticDatabaseMixin<Entities> & EntitiesHooks & SchemaGetters
}
