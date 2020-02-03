using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace AllOutGrind.DataModels
{
    public class Quotes
    {
        public Guid Id { get; set; }
        public string Quote { get; set; }
        public string ArtistName { get; set; }
        public string SongName { get; set; }
    }
}
