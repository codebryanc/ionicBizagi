SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
-- =============================================
-- Author:		Bryan Alejandro Cubillos Prieto
-- Create date: 19/MAY/2019
-- Description:	Insert new user
-- =============================================
CREATE PROCEDURE SP_NET_INSERT_DB
	@usrName varchar(48),
	@usrPassword varchar(128),
	@usrFirstName varchar(128),
	@usrLastName varchar(128),
	@usrMail varchar(128)
AS
BEGIN
	SET NOCOUNT ON;

	INSERT INTO VAL_USER
	SELECT @usrName, @usrPassword, @usrFirstName, @usrLastName, @usrMail, GETDATE(), NULL;

	IF(@@ERROR = 0)
	BEGIN
		SELECT @@IDENTITY;
	END
	ELSE
	BEGIN
		SELECT -2;
	END
END
GO
