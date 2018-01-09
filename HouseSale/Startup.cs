using Microsoft.Owin;
using Owin;

[assembly: OwinStartupAttribute(typeof(HouseSale.Startup))]
namespace HouseSale
{
    public partial class Startup
    {
        public void Configuration(IAppBuilder app)
        {
            ConfigureAuth(app);
        }
    }
}
