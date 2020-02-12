using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace AllOutGrind.DataModels
{
    public class UserQuote
    {
        public int Id { get; set; }
        public Guid UserId { get; set; }
        public Guid QuoteId { get; set; }
    }
}
