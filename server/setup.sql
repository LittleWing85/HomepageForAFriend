DROP TABLE IF EXISTS projects;

CREATE TABLE projects (
    id SERIAL PRIMARY KEY,
    project_name VARCHAR(255) NOT NULL, 
    project_picture_url TEXT NOT NULL,
     /* tags TEXT[], */
    about TEXT NOT NULL,
    gallery_pictures VARCHAR[],
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);


INSERT INTO projects(project_name, project_picture_url, about, gallery_pictures)
VALUES ('Marie, das Damwildbaby', '/media/Andere1/Andere1.JPG', 
'Tatsächlich handelt es sich hier um ein Hirschbaby!', ARRAY ['/media/Andere1/Marie1.JPG', '/media/Andere1/Marie2.JPG', '/media/Andere1/Marie3.jpg', '/media/Andere1/Marie4.jpg', '/media/Andere1/Marie5.jpg', '/media/Andere1/Marie6.jpg', '/media/Andere1/Marie7.jpg']);


INSERT INTO projects(project_name, project_picture_url, about)
VALUES ('Zutraulicher Waschbär', '/media/Waschbär1/Waschbär1.JPG', 
'Flaschenkinder vergessen ihre Zieheltern niemals :-)');

INSERT INTO projects(project_name, project_picture_url, about)
VALUES ('Süßer Waschbär', '/media/Waschbär2/Waschbär2.JPG', 
'Waschbärenkinder lieben es, zu turnen!');

INSERT INTO projects(project_name, project_picture_url, about)
VALUES ('Eichhörnchen beim Trinken auf dem Rücken', '/media/Eichhörnchen1/Eichhörnchen1.JPG', 
'Die Rückenlage beim Trinken sollte vermieden werden - außer in Ausnahmefällen, wenn das Tier z.B. ausschließlich in dieser Position trinkt.');

INSERT INTO projects(project_name, project_picture_url, about)
VALUES ('Rehkitz', '/media/Andere2/Andere2.JPG', 
'Ist das Rehkitz nicht süß?');

INSERT INTO projects(project_name, project_picture_url, about)
VALUES ('Kleines Eichhörnchenbaby', '/media/Eichhörnchen3/Eichhörnchen3.jpg', 
'Sehr junges Eichhörnchenbaby, nur wenige Tage alt.');

INSERT INTO projects(project_name, project_picture_url, about)
VALUES ('Fred & Frieda', '/media/Waschbär3/Waschbär3.jpg', 
'Das kitzelt ganz schön :-)');

INSERT INTO projects(project_name, project_picture_url, about)
VALUES ('Eichhörnchen in der Tasse', '/media/Eichhörnchen2/Eichhörnchen2.JPG', 
'Nanu? Eigentlich wollte ich ja einen Kaffee trinken...');

INSERT INTO projects(project_name, project_picture_url, about)
VALUES ('Eichhörnchen schläft', '/media/Eichhörnchen4/Eichhörnchen4.jpg', 
'Eichhörnchenkinder machen es sich gerne bei ihren Zieheltern gemütlich.');

