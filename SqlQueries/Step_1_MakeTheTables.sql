--CREATE DATABASE [AllOutGrind]

IF not exists (SELECT * FROM sys.tables WHERE [name] = 'User')
	BEGIN
	CREATE TABLE [User]
	( 
		[Id] UNIQUEIDENTIFIER PRIMARY KEY DEFAULT NEWID(),
		[UserName] NVARCHAR(255)not null,
		[FirstName]NVARCHAR(255)not null,
		[LastName]NVARCHAR(255)not null,
	)
	END
	ELSE
		PRINT 'User table already exists'

IF not exists (SELECT * FROM sys.tables WHERE [name] = 'Quote')
	BEGIN
	CREATE TABLE [Quote]
	(
		[Id] UNIQUEIDENTIFIER PRIMARY KEY DEFAULY NEWID()
		[quote] NVARCHAR(255)not null,
		[ArtistName]NVARCHAR(255) not null,
		[SongName] NVARCHAR(255) not null,
	)
	END
	ELSE
		PRINT 'User table already exists'