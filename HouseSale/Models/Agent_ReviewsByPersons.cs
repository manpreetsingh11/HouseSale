using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace CollegeCourse.Models
{
    public class Agent_ReviewsByPersons
    {

        public string name { get; set; }

        public string rating {get;set;}
        public string review { get; set; }
        public string address { get; set; }
        public string date { get; set; }
        public List<PersonSkills> lstSkils { get; set; }
    }
}