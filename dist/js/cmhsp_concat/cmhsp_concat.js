var app=angular.module("myApp",["ionic"]);app.config(["$ionicConfigProvider",function(e){e.tabs.position("bottom")}]),app.config(["$stateProvider","$urlRouterProvider",function(e,t){t.otherwise("/tabs/test"),e.state("slides",{url:"/slides",views:{main:{templateUrl:"html/hello_slides.html"}}}).state("tabs",{url:"/tabs",views:{main:{"abstract":!0,templateUrl:"html/tabs.html",controller:"tabsCtrl"}}}).state("tabs.test",{url:"/test",views:{"test-tab":{templateUrl:"html/tab_test.html",controller:"tabTestCtrl"}}}).state("tabs.startAnswer",{url:"/startAnswer",views:{"test-tab":{templateUrl:"html/tab_test_startAnswer.html",controller:"tabTestStartAnswerCtrl"}}}).state("tabs.historyRecords",{url:"/historyRecords",views:{"test-tab":{templateUrl:"html/tab_test_historyRecords.html",controller:"tabTestHistoryRecordsCtrl"}}}).state("tabs.social",{url:"/social",views:{"social-tab":{templateUrl:"html/tab_social.html",controller:"tabSocialCtrl"}}}).state("tabs.radio",{url:"/radio",views:{"radio-tab":{templateUrl:"html/tab_radio.html",controller:"tabRadioCtrl"}}}).state("tabs.reading",{url:"/reading",views:{"reading-tab":{templateUrl:"html/tab_reading.html"}}}).state("tabs.user",{url:"/user",views:{"user-tab":{templateUrl:"html/tab_user.html",controller:"tabUserCtrl"}}}).state("tabs.userDataAnalysis",{url:"/userDataAnalysis",views:{"user-tab":{templateUrl:"html/tab_user_dataAnalysis.html",controller:"tabUserDataAnalysisCtrl"}}}).state("tabs.userMessages",{url:"/userMessages",views:{"user-tab":{templateUrl:"html/tab_user_messages.html",controller:"tabUserMessagesCtrl"}}}).state("tabs.userInformationSettings",{url:"/userInformationSettings",views:{"user-tab":{templateUrl:"html/tab_user_information_settings.html",controller:"tabUserInformationSettingsCtrl"}}}).state("tabs.userInformationSettingsSetHeadPicture",{url:"/setHeadPicture",views:{"user-tab":{templateUrl:"html/tab_user_information_settings_set_head_picture.html",controller:"setHeadPictureCtrl"}}}).state("tabs.facts",{url:"/facts",views:{"home-tab":{templateUrl:"html/facts.html"}}}).state("tabs.facts2",{url:"/facts2",views:{"home-tab":{prefetchTemplate:!1,templateUrl:"html/facts2.html"}}})}]),app.controller("tabsCtrl",["$scope",function(e){e.show_question_windows=!1}]),app.controller("helloSlidersCtrl",["$scope"," $ionicSlideBoxDelegate",function(e,t){e.show_question_windows=!1,e.slides=[{title:"Welcome to the Docs!",description:"The <b>Ionic Component Documentation</b> showcases a number of useful components that are included out of the box with Ionic.",image:"https://ionicframework.com/dist/preview-app/www/assets/img/ica-slidebox-img-1.png"},{title:"What is Ionic?",description:"<b>Ionic Framework</b> is an open source SDK that enables developers to build high quality mobile apps with web technologies like HTML, CSS, and JavaScript.",image:"assets/img/ica-slidebox-img-2.png"},{title:"What is Ionic Cloud?",description:"The <b>Ionic Cloud</b> is a cloud platform for managing and scaling Ionic apps with integrated services like push notifications, native builds, user auth, and live updating.",image:"assets/img/ica-slidebox-img-3.png"}],e.nextSlide=function(){t.next()}}]),app.controller("tabRadioCtrl",["$scope",function(e){e.show_play_box0=!1,e.fn_change_show_play_box0=function(){e.show_play_box1=!1,e.show_play_box2=!1,e.show_play_box3=!1,e.show_play_box0=!e.show_play_box0},e.show_play_box1=!1,e.fn_change_show_play_box1=function(){e.show_play_box0=!1,e.show_play_box2=!1,e.show_play_box3=!1,e.show_play_box1=!e.show_play_box1},e.show_play_box2=!1,e.fn_change_show_play_box2=function(){e.show_play_box0=!1,e.show_play_box1=!1,e.show_play_box3=!1,e.show_play_box2=!e.show_play_box2},e.show_play_box3=!1,e.fn_change_show_play_box3=function(){e.show_play_box0=!1,e.show_play_box1=!1,e.show_play_box2=!1,e.show_play_box3=!e.show_play_box3},e.show_start_button=!0}]),app.controller("tabReadingCtrl",["$scope",function(e){e.show_question_windows=!1}]),app.controller("tabSocialCtrl",["$scope","$http",function(e,t){e.doRefresh=function(){t({method:"get",url:"http://localhost:8080/ti/1",headers:{"Content-Type":"application/x-www-form-urlencoded"}}).success(function(t){e.items=t})["finally"](function(){e.$broadcast("scroll.refreshComplete")})}}]),app.controller("tabTestCtrl",["$scope","$rootScope","$http",function(e,t,o){t.questions={},e.fn_get_questions_data=function(){o({method:"get",url:"http://localhost:8080/ti/1",headers:{"Content-Type":"application/x-www-form-urlencoded"}}).success(function(e){t.questions=e,console.log(t.questions)}).error(function(e){})},e.fn_get_questions_data()}]),app.controller("tabTestHistoryRecordsCtrl",["$scope","$ionicLoading","$ionicPopup","ajax_service","$http","$timeout",function(e,t,o,n,a,i){e.show=!1,i(function(){e.items=[{id:0},{id:1},{id:2},{id:3},{id:4},{id:5},{id:6},{id:7},{id:8},{id:9},{id:10},{id:11},{id:12},{id:13},{id:14},{id:15},{id:16},{id:17},{id:18},{id:19},{id:20},{id:21},{id:22},{id:23},{id:24},{id:25},{id:26},{id:27},{id:28},{id:29},{id:30},{id:31},{id:32},{id:33},{id:34},{id:35},{id:36},{id:37},{id:38},{id:39},{id:40},{id:41},{id:42},{id:43},{id:44},{id:45},{id:46},{id:47},{id:48},{id:49},{id:50}]},1e3),e.data={showDelete:!1},e.edit=function(e){alert("Edit Item: "+e.id)},e.share=function(e){alert("Share Item: "+e.id)},e.moveItem=function(t,o,n){e.items.splice(o,1),e.items.splice(n,0,t)},e.onItemDelete=function(t){e.items.splice(e.items.indexOf(t),1)},e.showPopup=function(){e.data={};var t=o.show({template:'<input type="password" ng-model="data.wifi">',title:"Enter Wi-Fi Password",subTitle:"Please use normal things",scope:e,buttons:[{text:"Cancel"},{text:"<b>Save</b>",type:"button-positive",onTap:function(t){return e.data.wifi?e.data.wifi:void t.preventDefault()}}]});t.then(function(e){console.log("Tapped!",e)}),i(function(){t.close()},3e3)},e.showConfirm=function(t){var n=o.confirm({title:"删除记录",template:"您确定要删除"+t.id+"吗?"});n.then(function(o){o?(e.onItemDelete(t),console.log("You are sure")):console.log("You are not sure")})},e.showAlert=function(e){var t=o.alert({title:e.id+"的详细信息",template:e.id+"您上次的得分为100分"});t.then(function(e){console.log("Thank you for not eating my delicious ice cream cone")})}}]),app.controller("tabTestStartAnswerCtrl",["$scope","$ionicSlideBoxDelegate","$ionicLoading","ajax_service","$http","$timeout","$rootScope",function(e,t,o,n,a,i,s){o.show({content:"Loading",animation:"fade-in",showBackdrop:!0,maxWidth:200,showDelay:0}),i(function(){o.hide()},500),e.nextSlide=function(){t.next(),t.enableSlide(!1)},e.total_score=0,e.fn_calculate_score=function(t){e.total_score=e.total_score+t,console.log(e.total_score)},e.show_view_results=!1;var r=[];r=s.questions.questionsConclusion,e.last_results={},e.fn_view_results=function(t){for(var o=0,n=r.length;o<n;o++)if(t<=r[o].scoreRange)return e.last_results=r[o],void console.log(e.last_results)};e.user_test_results={device_number:"",modbus_id:"",modbus_type:"",data:"",open_address:"",open_channel:""},e.fn_user_test_results=function(){return e.user_test_results.device_number=e.plcChannelAdd.device_number,""===e.user_test_results.device_number?void s.fn_common_showAlertTxt("请输入PLC设备地址！",1):isNaN(e.user_test_results.device_number)?void s.fn_common_showAlertTxt("PLC设备地址只能输入数字！",1):0!=e.user_test_results.data&&1!=e.user_test_results.data?void s.fn_common_showAlertTxt("下发数据只能输入 0 或 1！",1):void a({method:"post",url:n.write_plcChannel(),data:JSON.stringify(e.user_test_results),cache:!0,headers:{"Content-Type":"application/x-www-form-urlencoded"}}).success(function(e){s.fn_common_WaitingDivShow(!1),0==e.error_code?s.fn_common_showAlertTxt("下发数据测试成功！",1):s.fn_common_showAlertTxt(e.data,1)}).error(function(e){s.fn_common_WaitingDivShow(!1),s.fn_common_showAlertTxt(s.var_common_notAllowString,1)})}}]),app.controller("tabUserCtrl",["$scope","$ionicModal",function(e,t){e.settingsList=[{text:"Wireless",checked:!0},{text:"GPS",checked:!1},{text:"Bluetooth",checked:!1}],e.pushNotificationChange=function(){console.log("Push Notification Change",e.pushNotification.checked)},e.pushNotification={checked:!0},e.emailNotification="Subscribed",e.contacts=[{name:"Gordon Freeman"},{name:"Barney Calhoun"},{name:"Lamarr the Headcrab"}],t.fromTemplateUrl("html/user_login_modal.html",{scope:e,animation:"slide-in-up"}).then(function(t){e.modal=t}),e.createContact=function(t){e.contacts.push({name:t.firstName+" "+t.lastName}),e.modal.hide()},e.openModal=function(){e.modal.show()},e.closeModal=function(){e.modal.hide()},e.$on("$destroy",function(){e.modal.remove()}),e.$on("modal.hidden",function(){}),e.$on("modal.removed",function(){})}]),app.controller("tabUserDataAnalysisCtrl",["$scope",function(e){e.show_question_windows=!1;var t=echarts.init(document.getElementById("echarts_test1")),o={title:{},tooltip:{},legend:{data:[""]},xAxis:{data:["1","2","3","4","5","6","6","6","6","6"]},yAxis:{},series:[{name:"分数",type:"bar",data:[5,20,36,10,10,20,20,20,20,20]}]};t.setOption(o);var n=echarts.init(document.getElementById("echarts_test2")),a={title:{},tooltip:{},legend:{data:[""]},xAxis:{data:["1","2","3","4","5","6","6","6","6","6"]},yAxis:{},series:[{name:"分数",type:"line",data:[5,20,36,10,10,20,20,20,20,20]}]};n.setOption(a);var i=echarts.init(document.getElementById("echarts_test3")),s={tooltip:{trigger:"item",formatter:"{a} <br/>{b}: {c} ({d}%)"},legend:{orient:"vertical",x:"left",data:["直接访问","邮件营销","联盟广告","视频广告","搜索引擎"]},series:[{name:"访问来源",type:"pie",radius:["50%","70%"],avoidLabelOverlap:!1,label:{normal:{show:!1,position:"center"},emphasis:{show:!0,textStyle:{fontSize:"30",fontWeight:"bold"}}},labelLine:{normal:{show:!1}},data:[{value:335,name:"直接访问"},{value:310,name:"邮件营销"},{value:234,name:"联盟广告"},{value:135,name:"视频广告"},{value:1548,name:"搜索引擎"}]}]};i.setOption(s);var r=[[55,9,56,.46,18,6,1],[25,11,21,.65,34,9,2],[56,7,63,.3,14,5,3],[33,7,29,.33,16,6,4],[42,24,44,.76,40,16,5],[82,58,90,1.77,68,33,6],[74,49,77,1.46,48,27,7],[78,55,80,1.29,59,29,8],[267,216,280,4.8,108,64,9],[185,127,216,2.52,61,27,10],[39,19,38,.57,31,15,11],[41,11,40,.43,21,7,12],[64,38,74,1.04,46,22,13],[108,79,120,1.7,75,41,14],[108,63,116,1.48,44,26,15],[33,6,29,.34,13,5,16],[94,66,110,1.54,62,31,17],[186,142,192,3.88,93,79,18],[57,31,54,.96,32,14,19],[22,8,17,.48,23,10,20],[39,15,36,.61,29,13,21],[94,69,114,2.08,73,39,22],[99,73,110,2.43,76,48,23],[31,12,30,.5,32,16,24],[42,27,43,1,53,22,25],[154,117,157,3.05,92,58,26],[234,185,230,4.09,123,69,27],[160,120,186,2.77,91,50,28],[134,96,165,2.76,83,41,29],[52,24,60,1.03,50,21,30],[46,5,49,.28,10,6,31]],l=[[26,37,27,1.163,27,13,1],[85,62,71,1.195,60,8,2],[78,38,74,1.363,37,7,3],[21,21,36,.634,40,9,4],[41,42,46,.915,81,13,5],[56,52,69,1.067,92,16,6],[64,30,28,.924,51,2,7],[55,48,74,1.236,75,26,8],[76,85,113,1.237,114,27,9],[91,81,104,1.041,56,40,10],[84,39,60,.964,25,11,11],[64,51,101,.862,58,23,12],[70,69,120,1.198,65,36,13],[77,105,178,2.549,64,16,14],[109,68,87,.996,74,29,15],[73,68,97,.905,51,34,16],[54,27,47,.592,53,12,17],[51,61,97,.811,65,19,18],[91,71,121,1.374,43,18,19],[73,102,182,2.787,44,19,20],[73,50,76,.717,31,20,21],[84,94,140,2.238,68,18,22],[93,77,104,1.165,53,7,23],[99,130,227,3.97,55,15,24],[146,84,139,1.094,40,17,25],[113,108,137,1.481,48,15,26],[81,48,62,1.619,26,3,27],[56,48,68,1.336,37,9,28],[82,92,174,3.29,0,13,29],[106,116,188,3.628,101,16,30],[118,50,0,1.383,76,11,31]],c=[[91,45,125,.82,34,23,1],[65,27,78,.86,45,29,2],[83,60,84,1.09,73,27,3],[109,81,121,1.28,68,51,4],[106,77,114,1.07,55,51,5],[109,81,121,1.28,68,51,6],[106,77,114,1.07,55,51,7],[89,65,78,.86,51,26,8],[53,33,47,.64,50,17,9],[80,55,80,1.01,75,24,10],[117,81,124,1.03,45,24,11],[99,71,142,1.1,62,42,12],[95,69,130,1.28,74,50,13],[116,87,131,1.47,84,40,14],[108,80,121,1.3,85,37,15],[134,83,167,1.16,57,43,16],[79,43,107,1.05,59,37,17],[71,46,89,.86,64,25,18],[97,71,113,1.17,88,31,19],[84,57,91,.85,55,31,20],[87,63,101,.9,56,41,21],[104,77,119,1.09,73,48,22],[87,62,100,1,72,28,23],[168,128,172,1.49,97,56,24],[65,45,51,.74,39,17,25],[39,24,38,.61,47,17,26],[39,24,39,.59,50,19,27],[93,68,96,1.05,79,29,28],[188,143,197,1.66,99,51,29],[174,131,174,1.55,108,50,30],[187,143,201,1.39,89,53,31]],m={normal:{width:1,opacity:.5}},d=echarts.init(document.getElementById("echarts_test4")),u={backgroundColor:"#161627",title:{text:"",left:"center",textStyle:{color:"#eee"}},legend:{bottom:5,data:["北京","上海","广州"],itemGap:20,textStyle:{color:"#fff",fontSize:14},selectedMode:"single"},radar:{indicator:[{name:"AQI",max:300},{name:"PM2.5",max:250},{name:"PM10",max:300},{name:"CO",max:5},{name:"NO2",max:200},{name:"SO2",max:100}],shape:"circle",splitNumber:5,name:{textStyle:{color:"rgb(238, 197, 102)"}},splitLine:{lineStyle:{color:["rgba(238, 197, 102, 0.1)","rgba(238, 197, 102, 0.2)","rgba(238, 197, 102, 0.4)","rgba(238, 197, 102, 0.6)","rgba(238, 197, 102, 0.8)","rgba(238, 197, 102, 1)"].reverse()}},splitArea:{show:!1},axisLine:{lineStyle:{color:"rgba(238, 197, 102, 0.5)"}}},series:[{name:"北京",type:"radar",lineStyle:m,data:r,symbol:"none",itemStyle:{normal:{color:"#F9713C"}},areaStyle:{normal:{opacity:.1}}},{name:"上海",type:"radar",lineStyle:m,data:c,symbol:"none",itemStyle:{normal:{color:"#B3E4A1"}},areaStyle:{normal:{opacity:.05}}},{name:"广州",type:"radar",lineStyle:m,data:l,symbol:"none",itemStyle:{normal:{color:"rgb(238, 197, 102)"}},areaStyle:{normal:{opacity:.05}}}]};d.setOption(u);for(var _=[],h=+new Date,p=[],f=[],g=0;g<20;g++){var b=new Date(h+=864e5);_.push([b.getFullYear(),b.getMonth()+1,b.getDate()].join("-"));var y=200*Math.random(),w=200*Math.random();f.push(y),p.push(w+y)}var v=echarts.init(document.getElementById("echarts_test5")),x={backgroundColor:"#0f375f",tooltip:{trigger:"axis",axisPointer:{type:"shadow"}},legend:{data:["line","bar"],textStyle:{color:"#ccc"}},xAxis:{data:_,axisLine:{lineStyle:{color:"#ccc"}}},yAxis:{splitLine:{show:!1},axisLine:{lineStyle:{color:"#ccc"}}},series:[{name:"line",type:"line",smooth:!0,showAllSymbol:!0,symbol:"emptyCircle",symbolSize:15,data:p},{name:"bar",type:"bar",barWidth:10,itemStyle:{normal:{barBorderRadius:5,color:new echarts.graphic.LinearGradient(0,0,0,1,[{offset:0,color:"#14c8d4"},{offset:1,color:"#43eec6"}])}},data:f},{name:"line",type:"bar",barGap:"-100%",barWidth:10,itemStyle:{normal:{color:new echarts.graphic.LinearGradient(0,0,0,1,[{offset:0,color:"rgba(20,200,212,0.5)"},{offset:.2,color:"rgba(20,200,212,0.2)"},{offset:1,color:"rgba(20,200,212,0)"}])}},z:-12,data:p},{name:"dotted",type:"pictorialBar",symbol:"rect",itemStyle:{normal:{color:"#0f375f"}},symbolRepeat:!0,symbolSize:[12,4],symbolMargin:1,z:-10,data:p}]};v.setOption(x);var S=echarts.init(document.getElementById("echarts_test6")),C={series:[{type:"liquidFill",data:[.6,{value:.5,direction:"left"},.4,{value:.3,direction:"left"}],radius:"70%",outline:{show:!1}}]};S.setOption(C)}]),app.controller("tabUserInformationSettingsCtrl",["$scope","$ionicModal",function(e,t){e.contacts=[{name:"Gordon Freeman"},{name:"Barney Calhoun"},{name:"Lamarr the Headcrab"}],t.fromTemplateUrl("html/tab_user_information_settings_setName_modal.html",{scope:e,animation:"slide-in-up"}).then(function(t){e.set_name_modal=t}),e.createContact=function(t){e.contacts.push({name:t.firstName+" "+t.lastName}),e.set_name_modal.hide()},e.open_set_name_modal=function(){e.set_name_modal.show()},e.close_set_name_modal=function(){e.set_name_modal.hide()},e.$on("$destroy",function(){e.set_name_modal.remove()}),e.$on("set_name_modal.hidden",function(){}),e.$on("set_name_modal.removed",function(){}),t.fromTemplateUrl("html/tab_user_information_settings_setGender_modal.html",{scope:e,animation:"slide-in-up"}).then(function(t){e.set_gender_modal=t}),e.createContact=function(t){e.contacts.push({name:t.firstName+" "+t.lastName}),e.set_gender_modal.hide()},e.open_set_gender_modal=function(){e.set_gender_modal.show()},e.close_set_gender_modal=function(){e.set_gender_modal.hide()},e.$on("$destroy",function(){e.set_gender_modal.remove()}),e.$on("set_gender_modal.hidden",function(){}),e.$on("set_gender_modal.removed",function(){}),e.clientSideList=[{text:"Backbone",value:"bb"},{text:"Angular",value:"ng"},{text:"Ember",value:"em"},{text:"Knockout",value:"ko"}],e.serverSideList=[{text:"Go",value:"go"},{text:"Python",value:"py"},{text:"Ruby",value:"rb"},{text:"Java",value:"jv"}],e.data={clientSide:"ng"},e.serverSideChange=function(e){console.log("Selected Serverside, text:",e.text,"value:",e.value)},t.fromTemplateUrl("html/tab_user_information_settings_setRegion_modal.html",{scope:e,animation:"slide-in-up"}).then(function(t){e.set_region_modal=t}),e.createContact=function(t){e.contacts.push({name:t.firstName+" "+t.lastName}),e.set_region_modal.hide()},e.open_set_region_modal=function(){e.set_region_modal.show()},e.close_set_region_modal=function(){e.set_region_modal.hide()},e.$on("$destroy",function(){e.set_region_modal.remove()}),e.$on("set_region_modal.hidden",function(){}),e.$on("set_region_modal.removed",function(){}),t.fromTemplateUrl("html/tab_user_information_settings_setSignature_modal.html",{scope:e,animation:"slide-in-up"}).then(function(t){e.set_signature_modal=t}),e.createContact=function(t){e.contacts.push({name:t.firstName+" "+t.lastName}),e.set_signature_modal.hide()},e.open_set_signature_modal=function(){e.set_signature_modal.show()},e.close_set_signature_modal=function(){e.set_signature_modal.hide()},e.$on("$destroy",function(){e.set_signature_modal.remove()}),e.$on("set_signature_modal.hidden",function(){}),e.$on("set_signature_modal.removed",function(){})}]),app.controller("setHeadPictureCtrl",["$scope","$ionicActionSheet","$timeout",function(e,t,o){e.show_action_sheet=function(){t.show({buttons:[{text:"拍 照"},{text:"从相册选择"}],cssClass:"color:#53565a;",cancelText:"取 消",cancelOnStateChange:!0,cancel:function(){},buttonClicked:function(e){return!0},destructiveButtonClicked:function(e){return!0}})}}]),app.controller("tabUserMessagesCtrl",["$scope","$timeout",function(e,t){e.show_question_windows=!1,t(function(){e.user_messages=[{img:"http://img.zcool.cn/community/01786557e4a6fa0000018c1bf080ca.png",name:"小张",content:"你好啊！"},{img:"http://img.zcool.cn/community/01460b57e4a6fa0000012e7ed75e83.png@1280w_1l_2o_100sh.webp",name:"小李",content:"你在哪里？"},{img:"http://img.zcool.cn/community/01786557e4a6fa0000018c1bf080ca.png",name:"小黄",content:"评论666"},{img:"http://img.zcool.cn/community/01460b57e4a6fa0000012e7ed75e83.png@1280w_1l_2o_100sh.webp",name:"小机",content:"键盘侠！"},{img:"http://img.zcool.cn/community/01786557e4a6fa0000018c1bf080ca.png",name:"小乐",content:"我起飞了！"},{img:"http://img.zcool.cn/community/01460b57e4a6fa0000012e7ed75e83.png@1280w_1l_2o_100sh.webp",name:"小机",content:"键盘侠！"},{img:"http://img.zcool.cn/community/01786557e4a6fa0000018c1bf080ca.png",name:"小机",content:"键盘侠！"},{img:"http://img.zcool.cn/community/01650e57e4a6fa0000012e7e6eab80.png",name:"小机",content:"键盘侠！"},{img:"http://img.zcool.cn/community/01460b57e4a6fa0000012e7ed75e83.png@1280w_1l_2o_100sh.webp",name:"小机",content:"键盘侠！"},{img:"http://img.zcool.cn/community/01650e57e4a6fa0000012e7e6eab80.png",name:"小机",content:"键盘侠！"},{img:"http://img.zcool.cn/community/01460b57e4a6fa0000012e7ed75e83.png@1280w_1l_2o_100sh.webp",name:"小机",content:"键盘侠！"},{img:"http://img.zcool.cn/community/01650e57e4a6fa0000012e7e6eab80.png",name:"小机",content:"键盘侠！"}]},1e3)}]),app.service("ajax_service",function(){var e="CMHSP";this.set_=function(t){return e=t,this},this.get_=function(){return e};var t="http://192.168.1.39:8090/CMHSP",o=t+"/sysconfig/questionsdetail";this.get_questions=function(){return o};var n=t+"/";this.imgupload_absoluteurl=function(){return n};var a=t+"/sysconfig/updateApp";this.updateApp=function(){return a};var i=t+"/login";this.login=function(){return i};var s=t+"/main/factoryzone";this.factoryzone=function(){return s};var r=t+"/sysconfig/factoryzonedetail";this.factoryzonedetail=function(){return r};var l=t+"/sysconfig/addfactoryzone";this.addfactoryzone=function(){return l};var c=t+"/sysconfig/updatefactoryzone";this.updatefactoryzone=function(){return c};var m=t+"/sysconfig/deletefactoryzone";this.deletefactoryzone=function(){return m};var d=t+"/sysconfig/queryfactoryzone";this.queryfactoryzone=function(){return d};var u=t+"/usermgr/userinfodetail",_=t+"/usermgr/adduserinfo",h=t+"/usermgr/updateuserinfo",p=t+"/usermgr/deleteuserinfo";this.getUser=function(){return u},this.addUser=function(){return _},this.alterUser=function(){return h},this.delUser=function(){return p}});