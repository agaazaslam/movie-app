
const sqlite3 = require("sqlite3").verbose();

const db = new sqlite3.Database("db.sqlite");

const insertData = () => {
  const sql1 = `
INSERT INTO movies 
(id, title, description, released_year, popularity, poster_url, rating, votes_count, vote_average)
VALUES
(1, 'Inception', 'A skilled thief enters dreams to steal valuable secrets and plant ideas.', 2010, 95, 'https://image.tmdb.org/t/p/original/inception.jpg', 8.8, 32000, 8.8),
(2, 'Interstellar', 'A group of explorers travel through a wormhole to save humanity.', 2014, 92, 'https://image.tmdb.org/t/p/original/interstellar.jpg', 8.6, 29000, 8.6),
(3, 'The Dark Knight', 'Batman faces Joker who brings chaos to Gotham City.', 2008, 98, 'https://image.tmdb.org/t/p/original/dark_knight.jpg', 9.0, 41000, 9.0),
(4, 'Avatar', 'A Marine travels to Pandora and becomes part of the Na''vi tribe.', 2009, 88, 'https://image.tmdb.org/t/p/original/avatar.jpg', 7.8, 21000, 7.8),
(5, 'Titanic', 'Two young lovers fight for survival aboard the doomed RMS Titanic.', 1997, 96, 'https://image.tmdb.org/t/p/original/titanic.jpg', 8.2, 35000, 8.2),
(6, 'The Matrix', 'A hacker discovers the true nature of reality and joins a rebellion.', 1999, 94, 'https://image.tmdb.org/t/p/original/matrix.jpg', 8.7, 30000, 8.7),
(7, 'Gladiator', 'A betrayed Roman general seeks revenge against a corrupt emperor.', 2000, 91, 'https://image.tmdb.org/t/p/original/gladiator.jpg', 8.5, 27000, 8.5),
(8, 'Pulp Fiction', 'The lives of two hitmen, a boxer, and others intertwine in chaotic ways.', 1994, 89, 'https://image.tmdb.org/t/p/original/pulp_fiction.jpg', 8.9, 33000, 8.9),
(9, 'Avengers: Endgame', 'The Avengers assemble for one final mission to undo Thanos'' actions.', 2019, 93, 'https://image.tmdb.org/t/p/original/endgame.jpg', 8.4, 36000, 8.4),
(10, 'The Shawshank Redemption', 'Two imprisoned men bond and find solace through acts of decency.', 1994, 99, 'https://image.tmdb.org/t/p/original/shawshank.jpg', 9.3, 45000, 9.3);
`;

  const sql2 = `

INSERT INTO movies 
(id, title, description, released_year, popularity, poster_url, rating, votes_count, vote_average)
VALUES
(11, 'Fight Club', 'An office worker forms an underground fight club with a soap maker.', 1999, 94, 'https://image.tmdb.org/t/p/original/fight_club.jpg', 8.8, 34000, 8.8),
(12, 'Forrest Gump', 'A kind-hearted man unintentionally influences major historical events.', 1994, 97, 'https://image.tmdb.org/t/p/original/forrest_gump.jpg', 8.8, 38000, 8.8),
(13, 'The Godfather', 'The patriarch of a crime family transfers control to his reluctant son.', 1972, 99, 'https://image.tmdb.org/t/p/original/godfather.jpg', 9.2, 60000, 9.2),
(14, 'The Godfather Part II', 'The early life of Vito Corleone is shown alongside Michael''s rise.', 1974, 98, 'https://image.tmdb.org/t/p/original/godfather2.jpg', 9.0, 55000, 9.0),
(15, 'The Prestige', 'Two rival magicians engage in a dangerous battle of illusions.', 2006, 92, 'https://image.tmdb.org/t/p/original/prestige.jpg', 8.5, 24000, 8.5),
(16, 'The Social Network', 'The rise of Facebook and the conflicts around its creation.', 2010, 88, 'https://image.tmdb.org/t/p/original/social_network.jpg', 7.8, 21000, 7.8),
(17, 'Whiplash', 'A drummer is pushed to his limits by an abusive music instructor.', 2014, 90, 'https://image.tmdb.org/t/p/original/whiplash.jpg', 8.5, 20000, 8.5),
(18, 'Parasite', 'A poor family infiltrates a wealthy household with unforeseen consequences.', 2019, 94, 'https://image.tmdb.org/t/p/original/parasite.jpg', 8.6, 30000, 8.6),
(19, 'Joker', 'A mentally troubled man becomes Gotham''s infamous clown criminal.', 2019, 91, 'https://image.tmdb.org/t/p/original/joker.jpg', 8.4, 28000, 8.4),
(20, 'Django Unchained', 'A freed slave teams up with a bounty hunter to rescue his wife.', 2012, 90, 'https://image.tmdb.org/t/p/original/django.jpg', 8.4, 26000, 8.4),

(21, 'Mad Max: Fury Road', 'In a post-apocalyptic wasteland, a drifter and a rebel join forces.', 2015, 93, 'https://image.tmdb.org/t/p/original/mad_max.jpg', 8.1, 22000, 8.1),
(22, 'La La Land', 'A jazz musician and an actress fall in love in Los Angeles.', 2016, 91, 'https://image.tmdb.org/t/p/original/lalaland.jpg', 8.0, 23000, 8.0),
(23, 'The Revenant', 'A frontiersman fights for survival after being left for dead.', 2015, 89, 'https://image.tmdb.org/t/p/original/revenant.jpg', 8.0, 20000, 8.0),
(24, 'The Wolf of Wall Street', 'A stockbroker rises to wealth through corruption and fraud.', 2013, 88, 'https://image.tmdb.org/t/p/original/wolf_wall_street.jpg', 8.2, 28000, 8.2),
(25, 'Shutter Island', 'Two U.S. marshals investigate a disappearance on a remote island.', 2010, 87, 'https://image.tmdb.org/t/p/original/shutter_island.jpg', 8.1, 26000, 8.1),
(26, 'The Green Mile', 'A prison guard develops a bond with an inmate with healing abilities.', 1999, 95, 'https://image.tmdb.org/t/p/original/green_mile.jpg', 8.6, 32000, 8.6),
(27, 'Seven', 'Two detectives hunt a serial killer who uses the seven deadly sins.', 1995, 90, 'https://image.tmdb.org/t/p/original/seven.jpg', 8.6, 30000, 8.6),
(28, 'Saving Private Ryan', 'A team of soldiers is sent to rescue a paratrooper behind enemy lines.', 1998, 93, 'https://image.tmdb.org/t/p/original/saving_ryan.jpg', 8.6, 29000, 8.6),
(29, 'The Silence of the Lambs', 'A young FBI cadet seeks help from a manipulative serial killer.', 1991, 94, 'https://image.tmdb.org/t/p/original/silence_lambs.jpg', 8.6, 31000, 8.6),
(30, 'Interstellar 2 (Fictional)', 'Humanity continues its search for habitable planets.', 2026, 85, 'https://image.tmdb.org/t/p/original/interstellar2.jpg', 7.9, 15000, 7.9),

(31, 'Blade Runner 2049', 'A young blade runner unearths a long-hidden secret.', 2017, 89, 'https://image.tmdb.org/t/p/original/blade_runner_2049.jpg', 8.0, 21000, 8.0),
(32, 'Logan', 'An aging Wolverine cares for a frail Professor X while fighting enemies.', 2017, 92, 'https://image.tmdb.org/t/p/original/logan.jpg', 8.1, 23000, 8.1),
(33, 'The Lion King', 'A lion cub must reclaim his kingdom from his treacherous uncle.', 1994, 96, 'https://image.tmdb.org/t/p/original/lion_king.jpg', 8.5, 35000, 8.5),
(34, 'Toy Story', 'Toys come to life and grapple with jealousy and friendship.', 1995, 93, 'https://image.tmdb.org/t/p/original/toy_story.jpg', 8.3, 29000, 8.3),
(35, 'Coco', 'A young musician enters the Land of the Dead to find his ancestor.', 2017, 94, 'https://image.tmdb.org/t/p/original/coco.jpg', 8.4, 26000, 8.4),
(36, 'Up', 'An old man floats his house to South America with balloons.', 2009, 91, 'https://image.tmdb.org/t/p/original/up.jpg', 8.2, 24000, 8.2),
(37, 'WALL·E', 'A waste-collecting robot discovers the meaning of humanity.', 2008, 90, 'https://image.tmdb.org/t/p/original/walle.jpg', 8.4, 25000, 8.4),
(38, 'Inside Out', 'A girl''s emotions struggle to guide her through life changes.', 2015, 88, 'https://image.tmdb.org/t/p/original/inside_out.jpg', 8.1, 21000, 8.1),
(39, 'The Truman Show', 'A man discovers his entire life has been a televised show.', 1998, 92, 'https://image.tmdb.org/t/p/original/truman_show.jpg', 8.2, 27000, 8.2),
(40, 'The Imitation Game', 'Alan Turing leads a team to break the Enigma code.', 2014, 89, 'https://image.tmdb.org/t/p/original/imitation_game.jpg', 8.0, 23000, 8.0);


`;



  db.run(sql2, (err) => {
    if (err) {
      console.error("SQL Error:", err);
    } else {
      console.log("Movies inserted successfully!");
    }
  });
};

insertData();


