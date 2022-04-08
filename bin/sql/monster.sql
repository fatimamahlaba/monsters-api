CREATE TABLE monsters(
    id serial,
    name character varying(50),
    personlality character varying(50)
);

CREATE TABLE habitat(
    id serial,
    name character varying(50),
    climate character varying(50),
    temperature int
);
CREATE TABLE lives(
    monster character varying(50),
    habitat character varying(50)
);

INSERT INTO monsters(name, personlality)
VALUES
('Fluffy', 'aggressive'),
('Noodles', 'impatient'),
('Rusty', 'passionate');

INSERT INTO habitat(name, climate, temperature)
VALUES
('desert', 'dry', 100),
('forrest', 'haunted', 70),
('mountain', 'icy', 30);

INSERT INTO lives(monster, habitat)
VALUES
('Fliffy', 'desert'),
('Noodles', 'forrest'),
('Rusty', 'mountain');
