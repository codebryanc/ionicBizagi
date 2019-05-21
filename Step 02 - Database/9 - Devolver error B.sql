insert into VA_USER
select 1, 'Admon','password', 'Admon', 'Admon', 'admon@gmail.com', GETDATE(), GETDATE();
SELECT CAST(@@ERROR as int);
