using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using AllOutGrind.DataModels;

namespace AllOutGrind.Repositories
{
    public interface IQuoteRepository
    {
        Quotes GetQuotesById(Guid quoteId);

        IEnumerable<Quotes> GetAllQuotes();
        IEnumerable<Quotes> GetUsersQuote(Guid userId);
    }
}
