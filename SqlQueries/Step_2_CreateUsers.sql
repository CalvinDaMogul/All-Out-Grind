DECLARE @user1 UNIQUEIDENTIFIER
DECLARE @user2 UNIQUEIDENTIFIER
DECLARE @user3 UNIQUEIDENTIFIER

INSERT INTO [user]
([UserName],
 [FirstName],
 [LastName],
 [Email])
 VALUES
 ('CalvinDaMogul',
  'Calvin',
   'Foster',
    'cal.j.foster@gmail.com'),
 ('Glenn.io',
  'Glenn',
   'Dixon',
    'glenndixon19@gmail.com'),
 ('TrevOfEv',
  'Trevor',
  'Guinn',
   'tdguinn87@gmail.com')