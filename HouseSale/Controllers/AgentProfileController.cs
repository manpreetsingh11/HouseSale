using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using CollegeCourse.Models;
namespace CollegeCourse.Controllers
{
    public class AgentProfileController : Controller
    {
        // GET: AgentProfile
        public ActionResult Profile()
        {

            PersonSkills pskills1 = new PersonSkills() { skill = "Local knowledge", rating = "4.5"};
            PersonSkills pskills2 = new PersonSkills() { skill = "Process expertise", rating = "4.9" };
            PersonSkills pskills3 = new PersonSkills() { skill = "Responsiveness", rating = "4.2" };
            PersonSkills pskills4 = new PersonSkills() { skill = "Negotiation Skills", rating = "4.3" };

            List<PersonSkills> lstpSkills = new List<PersonSkills>();

            lstpSkills.Add(pskills1);
            lstpSkills.Add(pskills2);
            lstpSkills.Add(pskills3);
            lstpSkills.Add(pskills4);

            PastSale ps1 = new PastSale() { imagePath = "~/Content/house/images/property/home1.jpg", location = "Jamul, CA", address = "3247 Greystone Dr • Jamul, CA 91935",info=" 7 bed,4 bath,6,150 sqft",date ="Sold date: 09 / 12 / 2017", represented = "Seller", price = "900,000" };
            PastSale ps2 = new PastSale() { imagePath = "~/Content/house/images/property/home12.jpg", location = "Jamul, CA", address = "3247 Greystone Dr • Jamul, CA 91935", info = " 7 bed,4 bath,6,150 sqft", date = "Sold date: 09 / 12 / 2017", represented = "Buyer", price = "450,000" };
            PastSale ps3 = new PastSale() { imagePath = "~/Content/house/images/property/home3.jpg", location = "Jamul, CA", address = "3247 Greystone Dr • Jamul, CA 91935", info = " 7 bed,4 bath,6,150 sqft", date = "Sold date: 09 / 12 / 2017", represented = "Buyer", price = "450,000" };
            PastSale ps4 = new PastSale() { imagePath = "~/Content/house/images/property/home4.jpg", location = "Jamul, CA", address = "3247 Greystone Dr • Jamul, CA 91935", info = " 7 bed,4 bath,6,150 sqft", date = "Sold date: 09 / 12 / 2017", represented = "Buyer", price = "450,000" };
            PastSale ps5 = new PastSale() { imagePath = "~/Content/house/images/property/home8.jpg", location = "Jamul, CA", address = "3247 Greystone Dr • Jamul, CA 91935", info = " 7 bed,4 bath,6,150 sqft", date = "Sold date: 09 / 12 / 2017", represented = "Buyer", price = "450,000" };

            List<PastSale> lstPS = new List<PastSale>();
            lstPS.Add(ps1);
            lstPS.Add(ps2);
            lstPS.Add(ps3);
            lstPS.Add(ps4);
            lstPS.Add(ps5);

            AgentProfile ap = new AgentProfile() { lstSkills = lstpSkills, name = "Melissa Crosby", imagePath = "~/Content/house/images/agents/agent5.png", totalRating="6.6",totalReviews=49,specialties= "Property Management, Buyer’s Agent, Listing Agent…",licenseNumber= "#5452129",brokerage= "Berkshire Hathaway HomeServices Elite Real Estate", about= @"Being a full-service Realtor since 2007, I have been baptized by fire in a very tough housing market. I have successfully closed over 60 transactions and processed over 70 short sales both as the listing agent and some for other agents. I am very knowledgeable about lenders and their processes. I strive to exceed expectations and never forget that I am always accountable to my clients.My objective is to establish relationships for life, not just for the current transaction. I enjoy assisting home buyers and sellers to get moved to a better place, one that is exciting." };



            Agent_ReviewsByPersons arbp1 = new Agent_ReviewsByPersons() {lstSkils=lstpSkills, rating="4.5",address= "3247 Greystone Dr • Jamul, CA 91935",date="09/10/2018",name="Jack",review= @"Being a full-service Realtor since 2007, I have been baptized by fire in a very tough housing market. I have successfully closed over 60 transactions and processed over 70 short sales both as the listing agent and some for other agents. I am very knowledgeable about lenders and their processes. I strive to exceed expectations and never forget that I am always accountable to my clients." };
            Agent_ReviewsByPersons arbp2 = new Agent_ReviewsByPersons() { lstSkils = lstpSkills, rating = "4.5", address = "3247 Greystone Dr • Jamul, CA 91935", date = "09/10/2018", name = "Jack", review = @"Being a full-service Realtor since 2007, I have been baptized by fire in a very tough housing market. I have successfully closed over 60 transactions and processed over 70 short sales both as the listing agent and some for other agents. I am very knowledgeable about lenders and their processes. I strive to exceed expectations and never forget that I am always accountable to my clients." };

            List<Agent_ReviewsByPersons> lstARBP = new List<Agent_ReviewsByPersons>();

            lstARBP.Add(arbp1);
            lstARBP.Add(arbp2);


            ActiveHouses ah1 = new ActiveHouses { imagePath = "~/Content/house/images/property/home6.jpg",currentMarket="6,5",totalPics=12,address= "3247 Greystone Dr • Jamul, CA 91935",bath="4",beds="8.0",favUnfav=true,price="693,4568",sqft="2785" };
            ActiveHouses ah2 = new ActiveHouses { imagePath = "~/Content/house/images/property/home7.jpg",currentMarket="8,5",totalPics=25 ,address = "3247 Greystone Dr • Jamul, CA 91935", bath = "6", beds = "7", favUnfav = true, price = "593,3568", sqft = "2500" };
            ActiveHouses ah3 = new ActiveHouses { imagePath = "~/Content/house/images/property/home8.jpg", currentMarket="6,5",totalPics=17,address = "3247 Greystone Dr • Jamul, CA 91935", bath = "4", beds = "6", favUnfav = true, price = "493,7568", sqft = "1300" };

            List<ActiveHouses> lstAH = new List<ActiveHouses>();

            lstAH.Add(ah1);
            lstAH.Add(ah2);
            lstAH.Add(ah3);


            ViewBag.lstPastSale = lstPS;
            ViewBag.AgentProfile = ap;
            ViewBag.ARBP = lstARBP;

            ViewBag.lstAHouse = lstAH;

           
            return View();
        }
    }
}