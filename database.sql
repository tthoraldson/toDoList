CREATE TABLE tasks
(
id serial PRIMARY KEY,
task varchar(200),
complete boolean
);

-- Quick auto populate!
INSERT INTO "public"."tasks"("task", "complete") VALUES('Go for a run', FALSE) RETURNING "id", "task", "complete";
INSERT INTO "public"."tasks"("task", "complete") VALUES('Walk the dog', FALSE) RETURNING "id", "task", "complete";
INSERT INTO "public"."tasks"("task", "complete") VALUES('Pay the bills', TRUE) RETURNING "id", "task", "complete";
INSERT INTO "public"."tasks"("task", "complete") VALUES('Buy an apple', FALSE) RETURNING "id", "task", "complete";
INSERT INTO "public"."tasks"("task", "complete") VALUES('Be a badass', TRUE) RETURNING "id", "task", "complete";
