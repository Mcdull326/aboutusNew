using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.UI;
using System.Web.UI.WebControls;
using System.Web.Services;
using System.IO;

namespace aboutus
{
    public partial class complaint : System.Web.UI.Page
    {
        protected void Page_Load(object sender, EventArgs e) { }

        [WebMethod]
        public static string Post(string yijian)
        {
            string yijianCon = RegularExpressions.MyEncodeInputString(yijian.Trim());
            if (yijianCon == null || yijianCon.Equals(""))
            {
                return "0";
            }
            else
                return "1";
        }

        protected void uPost(object sender, EventArgs e)
        {
            string uname = RegularExpressions.MyEncodeInputString(uName.Value.Trim());
            string usex = RegularExpressions.MyEncodeInputString(male.Checked ? male.Value : female.Value);
            string ubirthday = RegularExpressions.MyEncodeInputString(uBirthday.Value.Trim());
            string ugrade = RegularExpressions.MyEncodeInputString(uGrade.Value.Trim());
            string uqq = RegularExpressions.MyEncodeInputString(uQQ.Value.Trim());
            string umail = RegularExpressions.MyEncodeInputString(uMail.Value.Trim());
            string utel = RegularExpressions.MyEncodeInputString(uTel.Value.Trim());
            string uyijian = RegularExpressions.MyEncodeInputString(yijian.Value.Trim());

            if (uyijian.Equals("") || uyijian == null)
            {
                Response.Write("<script>alert('请填写您对我们的意见或建议！');</script>");
            }
            else
            {
                StreamWriter sw = new StreamWriter("e:/web/aboutus/complaints/" + DateTime.Now.Ticks.ToString() + ".txt");
                sw.WriteLine("姓名：" + uname);
                sw.WriteLine("性别：" + usex);
                sw.WriteLine("出生年月：" + ubirthday);
                sw.WriteLine("年级专业：" + ugrade);
                sw.WriteLine("QQ：" + uqq);
                sw.WriteLine("电子邮件：" + umail);
                sw.WriteLine("电话：" + utel);
                sw.WriteLine("意见：" + uyijian);
                sw.Close();
                Response.Write("<script>alert('感谢您对光华园网站的支持！');self.location='http://ghy.cn'</script>");
            }

        }
    }
}