--creation de la table users
CREATE TABLE Users (
    id VARCHAR(255) NOT NULL,
    username VARCHAR(255) NOT NULL,
    CONSTRAINT PK_Users PRIMARY KEY (id)
);

--creation de la table Channels
CREATE TABLE Channels (
    id VARCHAR(255) NOT NULL,
    name VARCHAR(255) NOT NULL,
    CONSTRAINT PK_Channels PRIMARY KEY (id)
);


--creation de la table Message
CREATE TABLE Messages (
    id VARCHAR(255) NOT NULL,
    content TEXT NOT NULL,
    user_id VARCHAR(255) NOT NULL,
    channel_id VARCHAR(255) NOT NULL,
    created_at TIMESTAMP NOT NULL,
    CONSTRAINT PK_Messages PRIMARY KEY (id),
    CONSTRAINT FK_Messages_Users FOREIGN KEY (user_id) REFERENCES Users(id),
    CONSTRAINT FK_Messages_Channels FOREIGN KEY (channel_id) REFERENCES Channels(id)
);

--insertion pour Users
INSERT INTO Users (id, username) VALUES ('1', 'john_doe');
INSERT INTO Users (id, username) VALUES ('2', 'jane_smith');
INSERT INTO Users (id, username) VALUES ('3', 'alice_jones');

--insertion Channels
INSERT INTO Channels (id, name) VALUES ('17532', 'general');
INSERT INTO Channels (id, name) VALUES ('21984', 'random');
INSERT INTO Channels (id, name) VALUES ('3258', 'development');

--insertion messages
INSERT INTO Messages (id, content, user_id, channel_id, created_at) 
VALUES ('1', 'Hello everyone!', '1', '17532', '2024-05-14 10:00:00');

INSERT INTO Messages (id, content, user_id, channel_id, created_at) 
VALUES ('2', 'ca joue a lol !!', '2', '21984', '2024-05-14 11:00:00');

INSERT INTO Messages (id, content, user_id, channel_id, created_at) 
VALUES ('3', 'je suis plus laaa.', '3', '3258', '2024-05-14 12:00:00');

INSERT INTO Messages (id, content, user_id, channel_id, created_at) 
VALUES ('4', 'jarrive', '2', '21984', '2024-05-14 17:20:08');

INSERT INTO Messages (id, content, user_id, channel_id, created_at) 
VALUES ('5', 'j aime beaucoupp', '1', '17532', '2024-05-14 1:04:10');

INSERT INTO Messages (id, content, user_id, channel_id, created_at) 
VALUES ('6', 'je suis en licence', '2', '21984', '2024-05-14 12:40:40');

INSERT INTO Messages (id, content, user_id, channel_id, created_at) 
VALUES ('7', 'je vous deteste', '3', '3258', '2024-05-14 15:00:01');
