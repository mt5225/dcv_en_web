var uModel = uModel || {};
uModel.scene = "ubuilder-0.9.1206.unity3d";
uModel.debugging = "0";
uModel.loadJson = "";
uModel.param = "";
uModel.web = {};
uModel.send = function(a, c, d) {
    try {
        if (uModel.web.getUnity()) { uModel.web.getUnity().SendMessage(a, c, d) } } catch (b) {} };
uModel.externalInterface = function() {
    var param1 = arguments[0];
    if (param1 == "homepage") {} else {
        if (param1 == "分享") { ubundle.share.model.init(arguments[1]) } else {
            if (param1 == "教程") {
                var lang = "";
                var stype = "mmd";
                try {
                    var dataObj = eval("(" + uModel.param + ")");
                    if (dataObj.language && dataObj.language == "en") { lang = "en" }
                    if (dataObj.stype == "udcb") { stype = "udcb" } } catch (e) {}
                if (lang != "en") {
                    if (stype == "udcb") { window.location.href = "http://www.uinnova.cn/resource.jsp#studyvideo" } else { window.open("http://www.3dmomoda.com/faq") } } } else {
                if (param1 == "数据点") {
                    var ram = Math.ceil(Math.random() * 1000);
                    if (arguments[2] == "监控器") { ubundle.dialog.win.openurl("datapoint.html?sceneId=" + arguments[1] + "&type=" + encodeURI(arguments[2]) + "&id=" + encodeURI(arguments[3]) + "&time=" + ram, { title: "", bodyWidth: 800, bodyHeight: 500 }) } else {
                        var lang = "";
                        try {
                            var dataObj = eval("(" + uModel.param + ")");
                            if (dataObj.language && dataObj.language == "en") { lang = "en";
                                title = arguments[1] == "CustomTexture" ? "Custom texture manage" : "Base map manager" } } catch (e) {}
                        if (lang == "en") { ubundle.dialog.win.openurl("http://api.3dmmd.com/more.jsp?sceneid=" + arguments[1] + "&type=" + arguments[2] + "&objectid=" + arguments[3] + "&time=" + ram, { title: "", bodyWidth: 500, bodyHeight: 400 }) } else { ubundle.dialog.win.openurl("http://api.3dmomoda.com/more.jsp?sceneid=" + arguments[1] + "&type=" + arguments[2] + "&objectid=" + arguments[3] + "&time=" + ram, { title: "", bodyWidth: 500, bodyHeight: 400 }) } } } else {
                    if (param1 == "texture") {
                        var title = arguments[1] == "CustomTexture" ? "自定义图片管理" : "底图管理";
                        var lang = "";
                        try {
                            var dataObj = eval("(" + uModel.param + ")");
                            if (dataObj.language && dataObj.language == "en") { lang = "_en";
                                title = arguments[1] == "CustomTexture" ? "Custom texture manage" : "Base map manager" } } catch (e) {}
                        ubundle.dialog.win.openurl("photoeditor" + lang + ".html?type=" + arguments[1], { title: title, bodyWidth: 460, bodyHeight: 300 }) } else {
                        if (param1 == "scene") {
                            if (arguments[1] != "") { window.location.href = "browse.html?id=" + arguments[1] } } else {
                            if (param1 == "objectsInfo") {
                                if (arguments[1] != "") { parent.ubundle.util.showBundleInfo(arguments[1]) } } else {
                                if (param1 == "UrlWindow") {
                                    try { ubundle.dialog.win.openurl(arguments[1], { title: arguments[2], bodyWidth: arguments[3], bodyHeight: arguments[4] }) } catch (e) { Pt.dialog.win.openurl(arguments[1], { title: arguments[2], bodyWidth: arguments[3], bodyHeight: arguments[4] }) } } else {
                                    if (param1 == "HtmlWindow") {
                                        try { ubundle.dialog.win.openhtml(arguments[1], { title: arguments[2], bodyWidth: arguments[3], bodyHeight: arguments[4] }) } catch (e) { Pt.dialog.win.openhtml(arguments[1], { title: arguments[2], bodyWidth: arguments[3], bodyHeight: arguments[4] }) } } else {
                                        if (param1 == "HideWindow") { ubundle.dialog.win.hide() } else {
                                            if (param1 == "download") { 

                                                // window.open("rest/web/application/file/down/" + arguments[1], "downloadIframe") 
                                                var link;
        console.log("export scene");
        link = document.createElement('a');
        link.download = "uDCB_export.json";
        link.target = '_blank';
        link.href =  arguments[1];
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);

                                        } else {
                                                if (param1 == "OpenUrl") {
                                                    var params = arguments[2];
                                                    if (params != "") { params = uModel.Trim(params.toLowerCase());
                                                        if (params.indexOf("left") == -1 && params.indexOf("top") == -1) {
                                                            var w = 0;
                                                            var h = 0;
                                                            var strList = params.split(",");
                                                            for (var i = 0; i < strList.length; i++) {
                                                                var p = strList[i];
                                                                var param = p.split("=");
                                                                if (param[0] == "width") { w = param[1].replace(/px/, "") }
                                                                if (param[0] == "height") { h = param[1].replace(/px/, "") } }
                                                            var top = (window.screen.availHeight - 30 - h) / 2;
                                                            var left = (window.screen.availWidth - 10 - w) / 2;
                                                            params = "left=" + left + ",top=" + top + "," + params } }
                                                    window.open(arguments[1], "", params) } else {
                                                    if (param1 == "ExecuteHtmlInterface") { uModel.ExecuteHtmlInterface(arguments[1]) } else {
                                                        if (param1 == "EVENT") {
                                                            var ename = arguments[1];
                                                            if (ename = "LoadComplete") { uModel.OnLoadComplete() } } else {
                                                            if (param1 == "my") { window.open("zone/modellib") } } } } } } } } } } } } } } } };
uModel.load = function(a) {
    if (a == null) { a = "" }
    try {
        if (uModel.param == "") {
            var d = ubundle.remote.user.getCurrent(true);
            if (d.content != "请先登录") { uModel.param = '{"userid":"' + d.content["userid"] + '"}';
                uModel.loadParam(uModel.param) } } else {
            var c = $.parseJSON(uModel.param);
            if (c) {
                var d = ubundle.remote.user.getCurrent(true);
                if (d.content != "请先登录") { c.userid = d.content["userid"];
                    uModel.param = $.toJSON(c) }
                uModel.loadParam(uModel.param) } } } catch (b) {}
    uModel.send("WebCall", "EditScene", a) };
uModel.loadPreview = function(a) {
    if (a == null) { a = "" }
    uModel.send("WebCall", "PreviewScene", a) };
uModel.loadPreviewModel = function(a) {
    if (a == null) {
        return }
    uModel.send("WebCall", "LoadModel", a) };
uModel.loadParam = function(a) {
    if (a == null) { a = "" }
    uModel.send("WebCall", "SetSceneParam", a) };
uModel.RunCommand = function(b, a) {
    if (b == null) {
        return }
    if (a === undefined || a == null) { uModel.send("WebCall", "SetCommandImmediate", b) } else {
        if (a == true) { uModel.send("WebCall", "SetCommandImmediate", b) } else { uModel.send("WebCall", "SetCommand", b) } } };
uModel.RunFunction = function(a, b) {
    if (a == null && a != "") {
        return }
    if (b == null) { b = "" }
    uModel.send("WebCall", a, b) };
uModel.GetInfoCallbackFunc = function() {};
uModel.GetInfo = function(a, b) {
    if (b == null) {
        return }
    uModel.GetInfoCallbackFunc = b;
    uModel.send("WebCall", "GetInfo", a) };
uModel.OnLoadComplete = function() {};
uModel.OnApplicationFocus = function(a) {};
uModel.ExecuteHtmlInterface = function(a) {};
uModel.downloadImg = function(a) { window.open("down.jsp?file=" + a, "downloadImag") };
uModel.login = function() { login_win(function() {
        try {
            if (uModel.param == "") {
                var c = ubundle.remote.user.getCurrent(true);
                if (c.content != "请先登录") { uModel.param = '{"userid":"' + c.content["userid"] + '"}';
                    uModel.loadParam(uModel.param) } } else {
                var b = $.parseJSON(uModel.param);
                if (b) {
                    var c = ubundle.remote.user.getCurrent(true);
                    if (c.content != "请先登录") { b.userid = c.content["userid"];
                        uModel.param = $.toJSON(b) }
                    uModel.loadParam(uModel.param) } } } catch (a) {}
        uModel.send("WebCall", "LoginCallback", "ok") }) };
uModel.SendMessage = function(a) { uModel.send("WebCall", "NotifyMessage", a) };
uModel.SetBaseMap = function(a) { uModel.send("WebCall", "SetBaseMap", a) };
uModel.state = -1;
uModel.initHeight = 600;
uModel.callback;
uModel.start3d = function() {
    var a = Math.ceil(Math.random() * 1000);
    var b = { height: function() {
            return uModel.initHeight }, autoInstall: false, enableJava: false, enableJVMPreloading: false, enableClickOnce: false, enableUnityAnalytics: false, enableGoogleAnalytics: false, fullInstall: true, params: { enableDebugging: uModel.debugging, disableContextMenu: true, logoimage: "images/loading_toplogo.png?" + a, progressbarimage: "images/loading_buttom_loading.png?" + a, progressframeimage: "images/loading_buttombg.png?" + a, fullInstall: true, autoInstall: false, enableJava: false, enableJVMPreloading: false, enableClickOnce: false, enableUnityAnalytics: false, enableGoogleAnalytics: false } };
    try {
        var f = $.parseJSON(uModel.param);
        if (f.stype == "udcb") { b.params.logoimage = "images/loading_toplogo_dcb.png?" + a }
        if (f.loadinglogo != undefined) { b.params.logoimage = f.loadinglogo + "?" + a } } catch (d) {}
    uModel.web = new UnityObject2(b);
    uModel.web.PluginVersion = "";
    var g = jQuery("#missing");
    var c = jQuery("#unityPlayer").find(".broken");
    g.hide();
    c.hide();
    uModel.web.observeProgress(function(e) {
        switch (e.pluginStatus) {
            case "unsupported":
                g.show();
                uModel.unsupported();
                break;
            case "broken":
                d.stopPropagation();
                d.preventDefault();
                uModel.broken();
                break;
            case "missing":
                g.show();
                break;
            case "installed":
                g.remove();
                if (uModel.callback) { uModel.callback() }
                break;
            case "first":
                uModel.firstFrameCallback();
                break } });
    uModel.web.initPlugin(jQuery("#unityPlayer")[0], "javascripts/" + uModel.scene);
    uModel.web.detectUnity(function(h, e) {
        var j = "";
        switch (h) {
            case "installed":
                j = e.plugin;
                break }
        uModel.web.PluginVersion = j;
        return }, true) };
uModel.broken = function() {};
uModel.unsupported = function() {};
uModel.firstFrameCallback = function() {
    if (uModel.state == 0) { uModel.loadParam(uModel.param);
        uModel.load(uModel.loadJson) } else {
        if (uModel.state == -1) { uModel.loadParam(uModel.param);
            uModel.loadPreview(uModel.loadJson) } else {
            if (uModel.state == 1) { uModel.loadPreviewModel(uModel.loadJson) } } } };
uModel.resize = function(b, c) {
    try {
        var a = b.replace(/px/, "");
        var d = c.replace(/px/, "");
        uModel.web.getUnity().style.width = a + "px";
        uModel.web.getUnity().style.height = d + "px" } catch (f) {
        try { uModel.web.getUnity().style.width = b + "px";
            uModel.web.getUnity().style.height = c + "px" } catch (f) {} } };
uModel.getParam = function(a) { paramValue = "";
    isFound = false;
    if (location.search.indexOf("?") == 0 && location.search.indexOf("=") > 1) { arrSource = unescape(location.search).substring(1, location.search.length).split("&");
        i = 0;
        while (i < arrSource.length && !isFound) {
            if (arrSource[i].indexOf("=") > 0) {
                if (arrSource[i].split("=")[0].toLowerCase() == a.toLowerCase()) { paramValue = arrSource[i].split("=")[1];
                    isFound = true } }
            i++ } }
    return paramValue };
uModel.getMapSize = function(c) {
    var b = 0;
    for (var a in c) { b += 1 }
    return b };
uModel.setClipboard = function(d) {
    if (window.clipboardData) {
        return (window.clipboardData.setData("Text", d)) } else {
        if (window.netscape) { netscape.security.PrivilegeManager.enablePrivilege("UniversalXPConnect");
            var c = Components.classes["@mozilla.org/widget/clipboard;1"].createInstance(Components.interfaces.nsIClipboard);
            if (!c) {
                return }
            var b = Components.classes["@mozilla.org/widget/transferable;1"].createInstance(Components.interfaces.nsITransferable);
            if (!b) {
                return }
            b.addDataFlavor("text/unicode");
            var f = new Object();
            var a = new Object();
            var f = Components.classes["@mozilla.org/supports-string;1"].createInstance(Components.interfaces.nsISupportsString);
            var g = d;
            f.data = g;
            b.setTransferData("text/unicode", f, g.length * 2);
            var e = Components.interfaces.nsIClipboard;
            if (!c) {
                return false }
            c.setData(b, null, e.kGlobalClipboard);
            return true } }
    return false };
uModel.Trim = function(b) {
    var a;
    a = b.replace(/(^\s+)|(\s+$)/g, "");
    a = a.replace(/\s/g, "");
    return a };
