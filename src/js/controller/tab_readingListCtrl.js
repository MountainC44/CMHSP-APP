app.controller('tabReadingListCtrl', ['$scope', '$state', '$ionicLoading', 'ajax_service', '$http', '$timeout', '$rootScope', '$stateParams',
    function ($scope, $state, $ionicLoading, ajax_service, $http, $timeout, $rootScope, $stateParams) {

        $scope.var_search_keyWords = '';
        $scope.arr_readList = [];
        $scope.arr_0 = [
            {
                "readType": 0,
                "readId": "6",
                "readTitle": "乌合之众",
                "readAuthor": "古斯塔夫·勒庞",
                "readImage": "imgs/乌合之众.jpg"
            },
            {
                "readType": 0,
                "readId": "8",
                "readTitle": "性格心理学",
                "readAuthor": "邹宏明",
                "readImage": "imgs/性格心理学.jpg"
            },
            {
                "readType": 0,
                "readId": "9",
                "readTitle": "社会性动物",
                "readAuthor": "艾略特·阿伦森",
                "readImage": "imgs/社会性动物.jpg"
            },
            {
                "readType": 0,
                "readId": "10",
                "readTitle": "自控力",
                "readAuthor": "凯利·麦格尼格尔",
                "readImage": "imgs/自控力.jpg"
            },
            {
                "readType": 0,
                "readId": "11",
                "readTitle": "行为心理学",
                "readAuthor": " 约翰·华生 ",
                "readImage": "imgs/行为心理学.jpg"
            },
            {
                "readType": 0,
                "readId": "7",
                "readTitle": "心理学与生活",
                "readAuthor": "理查德·格里格 和 菲利普·津巴多",
                "readImage": "imgs/心理学与生活.jpg"
            }

        ];
        $scope.arr_1 = [
            {
                "readType": 1,
                "readId": "5",
                "readTitle": "《你不知道的抑郁症》",
                "readAuthor": "杨波",
                "readImage": "imgs/文章3.jpg"
            },
            {
                "readType": 1,
                "readId": "6",
                "readTitle": "《心理健康的保健方法》",
                "readAuthor": "杨波",
                "readImage": "imgs/文章4.jpg"
            },
            {
                "readType": 1,
                "readId": "7",
                "readTitle": "《不用怕！这些方法教你避免抑郁症》",
                "readAuthor": "杨波",
                "readImage": "imgs/文章5.jpg"
            },
            {
                "readType": 1,
                "readId": "3",
                "readTitle": "《心理疾病真的不用怕，我们来帮你!》",
                "readAuthor": "杨波",
                "readImage": "imgs/文章1.jpg"
            },
            {
                "readType": 1,
                "readId": "4",
                "readTitle": "《心理咨询的正确方式》",
                "readAuthor": "杨波",
                "readImage": "imgs/文章2.jpg"
            }

        ];

        $scope.$on('$ionicView.beforeEnter', function () {

            console.log($stateParams.readType);
            //获取readType参数
            $scope.arr_readType = $stateParams.readType;
            $scope.fn_get_readList($scope.arr_readType);

        });

        //获取阅读列表 根据readType 0/1 来判断获取书(0)还是文章(1)
        $scope.fn_get_readList = function (value) {
            $http({
                method: "post",
                url: ajax_service.get_readList(),
                // url:"http://localhost:8080/ti/1",
                data: JSON.stringify({readType: value}),
                headers: {
                    'Content-Type': 'application/json'
                }
            })
                .success(function (response) {

                    if (response.error_code == 0) {
                        $scope.arr_readList = response.data;
                        console.log($scope.arr_readList);
                    }

                })
                .error(function (response) {
                    //$rootScope.fn_common_showAlertTxt($rootScope.var_common_notAllowString, 1);

                    if (value == 0) {
                        $scope.arr_readList = $scope.arr_0;
                    } else {
                        $scope.arr_readList = $scope.arr_1;
                    }
                });
        };


        //搜索读物
        $scope.fn_readSearch = function (keywords) {

            $http({
                method: "post",
                url: ajax_service.read_search(),
                // url:"http://localhost:8080/ti/1",
                data: JSON.stringify({readType: $stateParams.readType, searchKeyword: keywords}),
                headers: {
                    'Content-Type': 'application/json'
                }
            })
                .success(function (response) {

                    if (response.error_code == 0) {

                        $scope.arr_readList = response.data;
                        console.log($scope.arr_readList);
                    }

                })
                .error(function (response) {
                    console.log(keywords);
                    //$rootScope.fn_common_showAlertTxt($rootScope.var_common_notAllowString, 1);

                });
        };


        //传递每个阅读信息 给readDetail页面进行展示
        $scope.fn_readDetail = function (read, readTpye) {
            console.log(read);
            console.log(angular.toJson(read));
            $state.go('tabs.readingDetail', {
                'read': angular.toJson(read),
                'fromPage': 'readingList',
                'readType': readTpye
            })
        };


    }]);