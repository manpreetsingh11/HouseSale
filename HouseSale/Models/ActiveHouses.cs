using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace CollegeCourse.Models
{
    public class ActiveHouses
    {
        public string imagePath { get; set; }
        public string price { get; set; }
        public string address { get; set; }
        public  bool favUnfav { get; set; }
        public int totalPics { get; set; }
        public string currentMarket { get; set; }
        public string beds { get; set; }
        public string bath { get; set; }
        public string sqft { get; set; }
    }
}