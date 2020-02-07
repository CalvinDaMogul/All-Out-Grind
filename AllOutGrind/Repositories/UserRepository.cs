using System;
using System.Collections.Generic;
using System.Data.SqlClient;
using System.Linq;
using AllOutGrind.DataModels;
using AllOutGrind.Dtos;
using Dapper;

namespace AllOutGrind.Repositories
{
    public class UserRepository
    {
        string _connectionString = "Server=localhost;Database=AllOutGrind;Trusted_Connection=True;";
        public IEnumerable<User> GetAllUsers()
        {
            using (var db = new SqlConnection(_connectionString))
            {
                var users = db.Query<User>(@"SELECT * FROM [User]");
                return users;
            }
        }

        public User GetUser(Guid userId)
        {
            using (var db = new SqlConnection(_connectionString))
            {
                var sql = @"select *
                            from [User]
                            where Id =@UserId";
                var parameters = new
                {
                    UserId = userId
                };
                var user = db.QueryFirst<User>(sql, parameters);
                return user;
            }
        }

        //public bool AddNewUser(AddNewUserDto newUser)
        //{
        //    using (var db = new SqlConnection(_connectionString))
        //    {
        //        var emailAddressExists = UserEmailCheck(newUser.Email);
        //        if (emailAddressExists)
        //        {
        //            return false;
        //        }
        //        var sql = @"
        //                    INSERT INTO [User]
        //                        (Email,
        //                         FirebaseUid)
        //                    OUTPUT INSERTED.Id
        //                    VALUES
        //                       (@email,
        //                        @firebaseuid)";
        //        var userId = db.QueryFirst<Guid>(sql, newUser);
        //        if (userId != null) return true;
        //        else return false;
        //    }
        //}



        public User GetUserByEmail(string Email)
        {
            using (var db = new SqlConnection(_connectionString))
            {
                var sql = @"SELECT  * 
                            FROM [User]
                            WHERE [Email] = @Email";
                var parameters = new { Email };
                var user = db.QueryFirstOrDefault<User>(sql, parameters);
                return user;
            }
        }

        public bool updatedUser(User UserToUpdate, Guid Id)
        {
            using (var connection = new SqlConnection(_connectionString))
            {
                connection.Open();

                var sql = @"UPDATE [dbo].[User]
	                            SET [UserName] = @username,

                                    [Email] = @email
	                        WHERE [Id] = @id";

                UserToUpdate.Id = Id;

                return connection.Execute(sql, UserToUpdate) == 1;
            }
        }
    }
}
