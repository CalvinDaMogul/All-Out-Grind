using System;
using System.Collections.Generic;
using System.Data.SqlClient;
using System.Linq;
using System.Threading.Tasks;
using AllOutGrind.DataModels;
using AllOutGrind.Dtos;
using Dapper;

namespace AllOutGrind.Repositories
{
    public class UserRepository:IUserRepository
    {
        string _connectionstring = "Server=localhost;Database=AllOutGrind;Trusted_Connection=True;";
        public bool UserEmailCheck(string newUserEmailCheck)
        {
            using (var db = new SqlConnection( _connectionstring))
            {
                var sql = @"SELECT *
                            FROM [User]
                            WHERE [Email] = @newUserEmailCheck";
                var parameters = new { newUserEmailCheck };
                var emailAddressComesBack = db.Query<User>(sql, parameters);
                if (emailAddressComesBack.Count()! = 0)
                {
                    return true;
                }
                else
                {
                    return false;
                }
            }
        }

        public bool AddNewUser(AddNewUserDto newUser)
        {
            using (var db = new SqlConnection(_connectionstring))
            {
                var emailAddressExists = UserEmailCheck(newUser.Email);
                if (emailAddressExists)
                {
                    return false;
                }
                var sql = @"
                            INSERT INTO [User]
                                (Email,
                                 FirebaseUid)
                            OUTPUT INSERTED.Id
                            VALUES
                               (@email,
                                @firebaseuid)";
                var userId = db.QueryFirst<Guid>(sql, newUser);
                if (userId != null) return true;
                else return false;
            }
        }

        public User GetUserByFirebaseUid(string firebasuid)
        {
            using (var db = new SqlConnection(_connectionstring))
            {
                var sql = @"SELECT  * 
                            FROM [User]
                            WHERE [Firebaseuid] = @firebseuid";
                var parameters = new { firebaseUid };
                var user = db.QueryFirstOrDefault<User>(sql, parameters);
                return user;
            }
        }
    }
}
