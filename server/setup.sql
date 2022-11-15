DROP TABLE IF EXISTS projects;

CREATE TABLE projects (
    id SERIAL PRIMARY KEY,
    project_name VARCHAR(255) NOT NULL, 
    project_picture_url TEXT NOT NULL,
     /* tags TEXT[], */
    about TEXT NOT NULL,
    more_pictures TEXT[],
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);


INSERT INTO projects(project_name, project_picture_url, about)
VALUES ('ASTEROID', '/media/Asteroid.png', 
'Du siehst hier voll das geile Projekt von Alex Wittchen. Viel Spaß beim Anschauen! Mit ihm werden deine Projekte richtig toll!
Du siehst hier voll das geile Projekt von Alex Wittchen. Viel Spaß beim Anschauen! Mit ihm werden deine Projekte richtig toll!
Du siehst hier voll das geile Projekt von Alex Wittchen. Viel Spaß beim Anschauen! Mit ihm werden deine Projekte richtig toll!
Du siehst hier voll das geile Projekt von Alex Wittchen. Viel Spaß beim Anschauen! Mit ihm werden deine Projekte richtig toll!');

INSERT INTO projects(project_name, project_picture_url, about, more_pictures)
VALUES ('EYEWEAR', '/media/Eyewear/BrilleParam.png', 
'Du siehst hier voll das geile Projekt von Alex Wittchen. Viel Spaß beim Anschauen! Mit ihm werden deine Projekte richtig toll!
Du siehst hier voll das geile Projekt von Alex Wittchen. Viel Spaß beim Anschauen! Mit ihm werden deine Projekte richtig toll!
Du siehst hier voll das geile Projekt von Alex Wittchen. Viel Spaß beim Anschauen! Mit ihm werden deine Projekte richtig toll!
Du siehst hier voll das geile Projekt von Alex Wittchen. Viel Spaß beim Anschauen! Mit ihm werden deine Projekte richtig toll!',
ARRAY [TEXT '/media/Burger.jpg', TEXT '/media/Herz.png']);

INSERT INTO projects(project_name, project_picture_url, about)
VALUES ('BURGER', '/media/Burger.jpg', 
'Du siehst hier voll das geile Projekt von Alex Wittchen. Viel Spaß beim Anschauen! Mit ihm werden deine Projekte richtig toll!
Du siehst hier voll das geile Projekt von Alex Wittchen. Viel Spaß beim Anschauen! Mit ihm werden deine Projekte richtig toll!
Du siehst hier voll das geile Projekt von Alex Wittchen. Viel Spaß beim Anschauen! Mit ihm werden deine Projekte richtig toll!
Du siehst hier voll das geile Projekt von Alex Wittchen. Viel Spaß beim Anschauen! Mit ihm werden deine Projekte richtig toll!');
INSERT INTO projects(project_name, project_picture_url, about)

VALUES ('HERZ', '/media/Herz.png', 
'Du siehst hier voll das geile Projekt von Alex Wittchen. Viel Spaß beim Anschauen! Mit ihm werden deine Projekte richtig toll!
Du siehst hier voll das geile Projekt von Alex Wittchen. Viel Spaß beim Anschauen! Mit ihm werden deine Projekte richtig toll!
Du siehst hier voll das geile Projekt von Alex Wittchen. Viel Spaß beim Anschauen! Mit ihm werden deine Projekte richtig toll!
Du siehst hier voll das geile Projekt von Alex Wittchen. Viel Spaß beim Anschauen! Mit ihm werden deine Projekte richtig toll!');

INSERT INTO projects(project_name, project_picture_url, about)
VALUES ('ISS', '/media/ISS1.png', 
'Du siehst hier voll das geile Projekt von Alex Wittchen. Viel Spaß beim Anschauen! Mit ihm werden deine Projekte richtig toll!
Du siehst hier voll das geile Projekt von Alex Wittchen. Viel Spaß beim Anschauen! Mit ihm werden deine Projekte richtig toll!
Du siehst hier voll das geile Projekt von Alex Wittchen. Viel Spaß beim Anschauen! Mit ihm werden deine Projekte richtig toll!
Du siehst hier voll das geile Projekt von Alex Wittchen. Viel Spaß beim Anschauen! Mit ihm werden deine Projekte richtig toll!');

INSERT INTO projects(project_name, project_picture_url, about)
VALUES ('GNÄRZLA', '/media/PP_Gnärzla1.JPG', 
'Du siehst hier voll das geile Projekt von Alex Wittchen. Viel Spaß beim Anschauen! Mit ihm werden deine Projekte richtig toll!
Du siehst hier voll das geile Projekt von Alex Wittchen. Viel Spaß beim Anschauen! Mit ihm werden deine Projekte richtig toll!
Du siehst hier voll das geile Projekt von Alex Wittchen. Viel Spaß beim Anschauen! Mit ihm werden deine Projekte richtig toll!
Du siehst hier voll das geile Projekt von Alex Wittchen. Viel Spaß beim Anschauen! Mit ihm werden deine Projekte richtig toll!');

INSERT INTO projects(project_name, project_picture_url, about)
VALUES ('SCHUH', '/media/Schuh.JPG', 
'Du siehst hier voll das geile Projekt von Alex Wittchen. Viel Spaß beim Anschauen! Mit ihm werden deine Projekte richtig toll!
Du siehst hier voll das geile Projekt von Alex Wittchen. Viel Spaß beim Anschauen! Mit ihm werden deine Projekte richtig toll!
Du siehst hier voll das geile Projekt von Alex Wittchen. Viel Spaß beim Anschauen! Mit ihm werden deine Projekte richtig toll!
Du siehst hier voll das geile Projekt von Alex Wittchen. Viel Spaß beim Anschauen! Mit ihm werden deine Projekte richtig toll!');

INSERT INTO projects(project_name, project_picture_url, about)
VALUES ('TESTGIF', '/media/Testgif.gif', 
'Du siehst hier voll das geile Projekt von Alex Wittchen. Viel Spaß beim Anschauen! Mit ihm werden deine Projekte richtig toll!
Du siehst hier voll das geile Projekt von Alex Wittchen. Viel Spaß beim Anschauen! Mit ihm werden deine Projekte richtig toll!
Du siehst hier voll das geile Projekt von Alex Wittchen. Viel Spaß beim Anschauen! Mit ihm werden deine Projekte richtig toll!
Du siehst hier voll das geile Projekt von Alex Wittchen. Viel Spaß beim Anschauen! Mit ihm werden deine Projekte richtig toll!');

INSERT INTO projects(project_name, project_picture_url, about)
VALUES ('WASCHBECKEN', '/media/Waschbecken1.png', 
'Du siehst hier voll das geile Projekt von Alex Wittchen. Viel Spaß beim Anschauen! Mit ihm werden deine Projekte richtig toll!
Du siehst hier voll das geile Projekt von Alex Wittchen. Viel Spaß beim Anschauen! Mit ihm werden deine Projekte richtig toll!
Du siehst hier voll das geile Projekt von Alex Wittchen. Viel Spaß beim Anschauen! Mit ihm werden deine Projekte richtig toll!
Du siehst hier voll das geile Projekt von Alex Wittchen. Viel Spaß beim Anschauen! Mit ihm werden deine Projekte richtig toll!');

INSERT INTO projects(project_name, project_picture_url, about)
VALUES ('WINDOW', '/media/Window1.png', 
'Du siehst hier voll das geile Projekt von Alex Wittchen. Viel Spaß beim Anschauen! Mit ihm werden deine Projekte richtig toll!
Du siehst hier voll das geile Projekt von Alex Wittchen. Viel Spaß beim Anschauen! Mit ihm werden deine Projekte richtig toll!
Du siehst hier voll das geile Projekt von Alex Wittchen. Viel Spaß beim Anschauen! Mit ihm werden deine Projekte richtig toll!
Du siehst hier voll das geile Projekt von Alex Wittchen. Viel Spaß beim Anschauen! Mit ihm werden deine Projekte richtig toll!');

