//全局
var 
    _me_basepath = "http://ghy.cn/aboutus/",
    _me_link={
        "关于光华园网站":"data/11.txt",
        "关于前进动力":"data/12.txt",
        "活动剪影":"data/13.txt",

        "目前成员":"data/21.txt",
        "历届成员":"data/22.txt",
        "GHYer风采":"data/23.txt",

        "招募对象":"data/31.txt",
        "技术大咖带你飞":"data/32.txt",
        "我们的需要":"data/33.txt",

        "广告宣传":"data/41.txt",

        "合作伙伴":"data/51.txt",

        "意见反馈": "complaint.aspx"
    },
    _me_class=function(name,children){
        this.name=name;
        this.children=children;
    },
    _me_classtree={
        "关于我们":"ABOUT US;关于光华园网站;关于前进动力;活动剪影",
        "成员名单":"INFORMATION;目前成员;历届成员;GHYer风采",
        "加入我们":"JOIN US;招募对象;技术大咖带你飞;我们的需要",
        "广告宣传":"ADVERTISEMENT;广告宣传",
        "合作伙伴":"COOPERATIVE PARTNER;合作伙伴",
        "意见反馈": "COMPLAINT FEEDBACK;意见反馈"
    },
    _me_databind=function(src){
        var url=_me_basepath+src;
        $.ajax({
            url:url,
            type:'get',
            success:function(data){
                $(".section-panel").animate({
                    paddingTop:'50px',
                    opacity:'0'
                },500,function(){
                    $(".content-left").html(data);
                    $(".section-panel").css({
                        paddingTop:'50px',
                        opacity:'0'
                    });
                    $(".section-panel").animate({
                        paddingTop:'0px',
                        opacity:'1'
                    },500);
                });
                
            },
            error:function(err){
                console.log("加载出现问题！");
            }
        });
    },
    _me_loadTitle=function(index){
        var conTitle=_me_classtree[index].split(";");
        var conRight=$(".content-right");
        //更新顶部nav active
        if($(".navlist li a").hasClass("active")){
            $(".navlist li a.active").removeClass("active");
        }
        $(".navlist li a[title='"+index+"']").addClass("active");
        //更新content-title
        $(".content-title").html(index+"<small>"+conTitle[0]+"</small>");
        //更新content-right二级分类导航
        var i=1;
        conRight.html("");
        while(i<conTitle.length){
            conRight.html(conRight.html()+"<a href=javascript:_me_loadpage('"+index+"','"+conTitle[i]+"') title=''>"+conTitle[i]+"</a>");
            i++;
        }
        _me_loadpage(index,conTitle[1]);
    },
    _me_loadpage=function(index,target){
        //index:一级分类,target:二级分类
        //更新页面title
        $("title").html(index+"-"+target);
        //更新content-left
        _me_databind(_me_link[target]);
    };
(function () {
    _me_loadTitle("关于我们");
})();