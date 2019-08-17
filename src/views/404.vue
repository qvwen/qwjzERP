<template>
 
<div id="switcher">
    <div class="center">
        <ul>
            <div id="Device">
                <li class="device-monitor"><a href="javascript:"><div class="icon-monitor active"></div></a></li>
                <li class="device-mobile"><a href="javascript:"><div class="icon-tablet"></div></a></li>
                <li class="device-mobile"><a href="javascript:"><div class="icon-mobile-1"></div></a></li>
                <li class="device-mobile-2"><a href="javascript:"><div class="icon-mobile-2"></div></a></li>
                <li class="device-mobile-3"><a href="javascript:"><div class="icon-mobile-3"></div></a></li>
            </div>
            <li class="top2">
                <a href="https://www.17sucai.com/pins/demo-show?id=22093#">手机二维码预览</a>
                <div class="vm">
                    <div id="output"><canvas width="150" height="150"></canvas></div>
                    <p style="color:#808080;margin:10px 0 0 0;">扫一扫，直接在手机上打开</p>
                </div>
            </li>
            <li class="logoTop">
                <a href="https://www.17sucai.com/pins/22093.html">黑色恐怖创意404页面模板代码</a>        
            </script>
            </li><li class="remove_frame"><a href="https://www.17sucai.com/preview/672379/2016-11-24/ftpm_45/index.html" title="移除框架"></a></li>
        </ul>
    </div>
</div>

<div id="iframe-wrap">
    <iframe id="iframe" src="./黑色恐怖创意404页面模板代码_files/index.html" frameborder="0" width="100%" height="620px"></iframe>
</div>
</template>

<script>
//这里可以导入其他文件（比如：组件，工具js，第三方插件js，json文件，图片文件等等）
//例如：import 《组件名称》 from '《组件路径》';
  $(document).ready(function () {
            function fixHeight() {
                var headerHeight = $("#switcher").height();
                $("#iframe").attr("height", $(window).height()-54+ "px");
            }
            $(window).resize(function () {
                fixHeight();
            }).resize();

            $('.icon-monitor').addClass('active');

            $(".icon-mobile-3").click(function () {
                $("#by").css("overflow-y", "auto");
                $('#iframe-wrap').removeClass().addClass('mobile-width-3');
                $('.icon-tablet,.icon-mobile-1,.icon-monitor,.icon-mobile-2,.icon-mobile-3').removeClass('active');
                $(this).addClass('active');
                return false;
            });

            $(".icon-mobile-2").click(function () {
                $("#by").css("overflow-y", "auto");
                $('#iframe-wrap').removeClass().addClass('mobile-width-2');
                $('.icon-tablet,.icon-mobile-1,.icon-monitor,.icon-mobile-2,.icon-mobile-3').removeClass('active');
                $(this).addClass('active');
                return false;
            });

            $(".icon-mobile-1").click(function () {
                $("#by").css("overflow-y", "auto");
                $('#iframe-wrap').removeClass().addClass('mobile-width');
                $('.icon-tablet,.icon-mobile,.icon-monitor,.icon-mobile-2,.icon-mobile-3').removeClass('active');
                $(this).addClass('active');
                return false;
            });

            $(".icon-tablet").click(function () {
                $("#by").css("overflow-y", "auto");
                $('#iframe-wrap').removeClass().addClass('tablet-width');
                $('.icon-tablet,.icon-mobile-1,.icon-monitor,.icon-mobile-2,.icon-mobile-3').removeClass('active');
                $(this).addClass('active');
                return false;
            });

            $(".icon-monitor").click(function () {
                $("#by").css("overflow-y", "hidden");
                $('#iframe-wrap').removeClass().addClass('full-width');
                $('.icon-tablet,.icon-mobile-1,.icon-monitor,.icon-mobile-2,.icon-mobile-3').removeClass('active');
                $(this).addClass('active');
                return false;
            });
        });
export default {
//import引入的组件需要注入到对象中才能使用
components: {},
data() {
//这里存放数据
return {

};
},
//监听属性 类似于data概念
computed: {},
//监控data中的数据变化
watch: {},
//方法集合
methods: {

},
//生命周期 - 创建完成（可以访问当前this实例）
created() {

},
//生命周期 - 挂载完成（可以访问DOM元素）
mounted() {

},
beforeCreate() {}, //生命周期 - 创建之前
beforeMount() {}, //生命周期 - 挂载之前
beforeUpdate() {}, //生命周期 - 更新之前
updated() {}, //生命周期 - 更新之后
beforeDestroy() {}, //生命周期 - 销毁之前
destroyed() {}, //生命周期 - 销毁完成
activated() {}, //如果页面有keep-alive缓存功能，这个函数会触发
}
</script>
<style  scoped>
/*@import url(); 引入公共css类*/

</style>