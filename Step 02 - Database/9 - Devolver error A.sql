BEGIN TRY
    BEGIN TRANSACTION
		
		select * from VA_USER

		insert into VA_USER
		select 1, 'Admon','password', 'Admon', 'Admon', 'admon@gmail.com', GETDATE(), GETDATE();

    COMMIT
END TRY
BEGIN CATCH
	SELECT 
		 ERROR_NUMBER() AS errNumber
       , ERROR_SEVERITY() AS errSeverity  
       , ERROR_STATE() AS errState
       , ERROR_PROCEDURE() AS errProcedure
       , ERROR_LINE() AS errLine
       , ERROR_MESSAGE() AS errMessage
	ROLLBACK;
END CATCH 