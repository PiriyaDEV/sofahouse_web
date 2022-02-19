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
  title             VARCHAR(64)     NOT NULL,
  artist            VARCHAR(64)     NOT NULL,
  url               VARCHAR(255)    NOT NULL,
  category          VARCHAR(64)     NOT NULL,
  status            BOOLEAN         NOT NULL,
  created_at        BIGINT          NOT NULL,
  updated_at        BIGINT          NOT NULL,
  PRIMARY KEY (id)
);