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
		[Id] UNIQUEIDENTIFIER PRIMARY KEY DEFAULT NEWID()
		[Quote] NVARCHAR(255)not null,
		[ArtistName]NVARCHAR(255)not null,
		[SongName] NVARCHAR(255)not null,
	)
	END
	ELSE
		PRINT 'Quote table already exists'

If not exists (SELECT * FROM sys.tables WHERE [name] = 'User/Quotes')
	BEGIN
	CREATE TABLE [User/Quotes]

	(
		[UserId] UNIQUEIDENTIFIER not null,
		[QuoteId] UNIQUEIDENTIFIER not null,
	)
	END
	ELSE
		PRINT 'User_Quotes table already exists'

IF not exists (SELECT * FROM sys.tables WHERE [name] = 'Friends')
	BEGIN 
	CREATE TABLE [Friends]

	(
		[UserId]UNIQUEIDENTIFIER not null,
		[FriendId] UNIQUEIDENTIFIER not null,
	)
	END 
	ELSE 
		PRINT 'Friends table already exists'

	IF not exists (SELECT * FROM sys.foreign_keys WHERE [name] = 'FK_User_Quote_User')
		BEGIN
		ALTER TABLE [User_Quotes]
		ADD CONSTRAINT FK_UserQuote_User
			FOREIGN KEY (Id)
			REFERENCES Users(Id)
	END
	ELSE 
		PRINT 'User Id Foreign Key '