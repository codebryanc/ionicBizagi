--select * from VA_USER

USE [VAL]
GO

DECLARE @RC int
DECLARE @usrName varchar(48) = 'Admon'
DECLARE @usrPassword varchar(128) = 'password'
DECLARE @usrFirstName varchar(128) = 'Admon'
DECLARE @usrLastName varchar(128) = 'Admon'
DECLARE @usrMail varchar(128) = 'admon@gmail.com'

-- TODO: Set parameter values here.

EXECUTE @RC = [dbo].[SP_NET_INSERT_VA_USER] 
   @usrName
  ,@usrPassword
  ,@usrFirstName
  ,@usrLastName
  ,@usrMail
GO

