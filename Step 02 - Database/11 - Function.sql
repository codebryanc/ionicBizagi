SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
-- =============================================
-- Author:		Bryan Alejandro Cubillos Prieto
-- Create date: 19/05/2019
-- Description:	Get tomorrow date
-- =============================================
CREATE FUNCTION FN_NET_GET_TOMORROW_DATE
(
)
RETURNS DATE
AS
BEGIN
	DECLARE @RESULT DATETIME;
	SET @RESULT = CAST(DATEADD(DAY, +1, GETDATE()) as DATETIME);
	RETURN @RESULT;
END
GO