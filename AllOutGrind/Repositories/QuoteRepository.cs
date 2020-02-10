using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using AllOutGrind.Dtos;
using AllOutGrind.DataModels;
using System.Data.SqlClient;
using Dapper;

namespace AllOutGrind.Repositories
{
    public class QuoteRepository : IQuoteRepository
    {
        string _connectionString = "Server=localhost;Database=AllOutGrind;Trusted_Connection=True;";

        public IEnumerable<Quotes> GetAllQuotes()
        {
            using (var db = new SqlConnection(_connectionString))
            {
                var sql = @"SELECT * 
                            FROM [Quotes]";

                var parameters = new { };
                return db.Query<Quotes>(sql, parameters);
            }
        }

        public Quotes GetQuotesById(Guid QuoteId)
        {
            using (var db = new SqlConnection(_connectionString))
            {
                var sql = @"SELECT * 
                            FROM [Quotes]
                            WHERE [Id] = @QuoteId";

                var parameters = new { QuoteId };
                var quote = db.QueryFirstOrDefault<Quotes>(sql, parameters);
                return quote;
            }
        }
        //Create a getusersquote function 
        public IEnumerable<Quotes> GetUsersQuote(Guid UserId)
        {
            using (var db = new SqlConnection(_connectionString))
            {
                var sql = @"SELECT * FROM Quotes 
                            JOIN User_Quotes on Id = QuoteId
                            WHERE User_Quotes.UserId = @userid";

                var parameters = new { UserId };
                var quotes = db.Query<Quotes>(sql, parameters);
                return quotes;
            }
        }

        public Quotes AddQuotes(AddNewQuotesDto newQuote)
        {
            using (var db = new SqlConnection(_connectionString))
            {
                var sql = @"INSERT INTO QUOTES 
                                    ([Quote],
                                    [ArtistName],
                                    [SongName])
                                output inserted
                             VALUES (@Quote
                                    ,@ArtistName
                                    ,@SongName)";

                var parameters = new { };
                var quotes = db.Query<Quotes>(sql, parameters);
                return quotes;
            }
            }




        }
    }
}
