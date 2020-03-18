
CREATE TABLE Tags
(
	id int NOT NULL AUTO_INCREMENT,
	Tag1 varchar(50) NOT NULL,
	Tag2 varchar(50),
    Tag3 varchar(50),
    Tag4 varchar(50),
    Tag5 varchar(50),
	PRIMARY KEY (id)
);


CREATE TABLE Video
(
    id int NOT NULL AUTO_INCREMENT,
    URL varchar(250) NOT NULL,
    tags varchar(250) NOT NULL,
    startTime int NOT NULL,
    endTime int,
    PRIMARY KEY (id)
)





