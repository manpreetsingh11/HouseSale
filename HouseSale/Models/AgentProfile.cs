using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace CollegeCourse.Models
{
    public class AgentProfile
    {

        public string name { get; set; }
        public string imagePath { get; set; }
        public List<PersonSkills> lstSkills { get; set; }
        public string totalRating { get; set; }
        public int totalReviews { get; set; }
        public string about { get; set; }   
        public string specialties { get; set; }
        public string brokerage { get; set; }
        public string licenseNumber { get; set; }

    }

}