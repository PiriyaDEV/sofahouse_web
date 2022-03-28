-- Sofa House Database Tables --

-- Create Admins Table
CREATE TABLE IF NOT EXISTS admins(
  id                INT             NOT NULL  AUTO_INCREMENT,
  username          VARCHAR(64)     NOT NULL  UNIQUE,
  password          VARCHAR(100)    NOT NULL,
  status            BOOLEAN         NOT NULL,
  last_login        BIGINT          NOT NULL,
  created_at        BIGINT          NOT NULL,
  updated_at        BIGINT          NOT NULL,
  PRIMARY KEY (id)
);

-- Create Musics Table
CREATE TABLE IF NOT EXISTS musics(
  id                INT             NOT NULL  AUTO_INCREMENT,
  title             VARCHAR(255)    NOT NULL,
  artist            VARCHAR(255)    NOT NULL,
  duration          INT             NOT NULL,
  cover_url         VARCHAR(255)    NOT NULL,
  music_url         VARCHAR(255)    NOT NULL,
  cat_lyrics_song   BOOLEAN         NOT NULL,
  cat_music_prod    BOOLEAN         NOT NULL,
  cat_vocal_rec     BOOLEAN         NOT NULL,
  cat_music_score   BOOLEAN         NOT NULL,
  cat_mix_master    BOOLEAN         NOT NULL,
  show_homepage     BOOLEAN         NOT NULL,
  status            BOOLEAN         NOT NULL,
  created_at        BIGINT          NOT NULL,
  updated_at        BIGINT          NOT NULL,
  PRIMARY KEY (id)
);