create database db_sfood;
use db_sfood;
create table sfood(
	id INT auto_increment primary key,
    nome VARCHAR(255) not null,
    email VARCHAR(255) NOT NULL unique,
    senha VARCHAR(255) NOT NULL
);

select*from sfood;

drop table sfood;