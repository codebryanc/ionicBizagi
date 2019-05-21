select * from VA_USER

insert into VA_USER
select 'Admon', 'password', 'Admon', 'Admon', 'admon@gmail.com', GETDATE(), getdate();

select @@IDENTITY;