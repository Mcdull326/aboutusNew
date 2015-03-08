<%@ Page Language="C#" AutoEventWireup="true" CodeBehind="complaint.aspx.cs" Inherits="aboutus.complaint" %>

<div class="section-panel col-md-8 col-sm-12">
    <h2 class="section-title">个人信息</h2>
    <form class="form-horizontal" runat="server">
        <div class="form-group">
            <label class="col-sm-3 control-label">姓名</label>
            <div class="col-sm-9 controls">
                <input type="text" class="form-control input-lg" id="uName" runat="server" />
            </div>
        </div>
        <div class="form-group">
            <label class="col-sm-3 control-label">性别</label>
            <div class="col-sm-9">
                <div class="radio">
                    <label>
                        <input type="radio" checked name="sex" value="男" id="male" runat="server">
                        男
                    </label>
                    <label>
                        <input type="radio" name="sex" value="女" id="female" runat="server">
                        女
                    </label>
                </div>
            </div>
        </div>
        <div class="form-group">
            <label class="col-sm-3 control-label">出生年月</label>
            <div class="col-sm-9 controls">
                <input type="text" class="form-control input-lg" id="uBirthday" runat="server" />
            </div>
        </div>
        <div class="form-group">
            <label class="col-sm-3 control-label">年级专业</label>
            <div class="col-sm-9 controls">
                <input type="text" class="form-control input-lg" id="uGrade" runat="server" />
            </div>
        </div>
        <div class="form-group">
            <label class="col-sm-3 control-label">QQ</label>
            <div class="col-sm-9 controls">
                <input type="text" class="form-control" id="uQQ" runat="server" />
            </div>
        </div>
        <div class="form-group">
            <label class="col-sm-3 control-label">邮箱</label>
            <div class="col-sm-9 controls">
                <input type="text" class="form-control input-lg" id="uMail" runat="server" />
            </div>
        </div>
        <div class="form-group">
            <label class="col-sm-3 control-label">手机号码</label>
            <div class="col-sm-9 controls">
                <input type="text" class="form-control input-lg" id="uTel" runat="server" />
            </div>
        </div>
        <p class="describe">请留下您的宝贵意见，帮助我们能够不断进步与成长，我们会尽快处理您的意见</p>
        <h2 class="section-title">反馈栏：</h2>
        <div class="form-group">
            <div class="col-sm-12">
                <textarea rows="5" class="form-control" id="yijian" runat="server"></textarea>
            </div>
        </div>
        <div class="form-group">
            <div class="col-sm-12">
                <button type="submit" class="btn btn-lg btn-default" onserverclick="uPost" runat="server">提交</button>
            </div>
        </div>
    </form>
</div>
