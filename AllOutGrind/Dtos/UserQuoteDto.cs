using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace AllOutGrind.Dtos
{
    public class UserQuoteDto
    {
        public Guid UserId { get; set; }
        public Guid QuoteId { get; set; }
    }
}
