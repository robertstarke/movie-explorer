import { z, defineCollection } from "astro:content";

const movieCollection = defineCollection({
  type: "data",
  schema: z.object({
    id: z.string(),
    mediaId: z.string(),
    title: z.string(),
    language: z.enum(["en", "de", "fr", "eg", "jp"]),
    favorite: z.boolean().optional(),
    genres: z.array(z.string()).optional(),
    directors: z.array(z.string()).optional(),
    actors: z.array(z.string()).optional(),
    cover: z
      .string()
      .regex(/\w{1,}\.(?:png|jpg)/)
      .default("fallback.jpg"),
    childSafe: z.boolean().default(false),
  }),
});

const playlistCollection = defineCollection({
  type: "data",
  schema: z.object({
    id: z.string(),
    mediaId: z.string(),
    title: z.string(),
    favorite: z.boolean().optional(),
    cover: z
      .string()
      .regex(/\w{1,}\.(?:png|jpg)/)
      .default("fallback.jpg"),
  }),
});

export const collections = {
  movies: movieCollection,
  playlists: playlistCollection,
};
