/* Sarah Henderson - admin-lte-angular 0.0.1 */
angular.module('admin-lte-angular.templates', []).run(['$templateCache', function($templateCache) {
  $templateCache.put("dropdown-menu/dropdown-messages.tpl.html",
    "<li class=\"dropdown messages-menu\">\n" +
    "    <a href=\"#\" class=\"dropdown-toggle\" data-toggle=\"dropdown\">\n" +
    "        <i class=\"fa fa-envelope\"></i>\n" +
    "        <span class=\"label label-success\">4</span>\n" +
    "    </a>\n" +
    "    <ul class=\"dropdown-menu\">\n" +
    "        <li class=\"header\">You have 4 messages</li>\n" +
    "        <li>\n" +
    "            <!-- inner menu: contains the actual data -->\n" +
    "            <ul class=\"menu\">\n" +
    "                <li><!-- start message -->\n" +
    "                    <a href=\"#\">\n" +
    "                        <div class=\"pull-left\">\n" +
    "                            <img src=\"http://placekitten.com/g/215/215\" class=\"img-circle\" alt=\"User Image\"/>\n" +
    "                        </div>\n" +
    "                        <h4>\n" +
    "                            Support Team\n" +
    "                            <small><i class=\"fa fa-clock-o\"></i> 5 mins</small>\n" +
    "                        </h4>\n" +
    "                        <p>Why not buy a new awesome theme?</p>\n" +
    "                    </a>\n" +
    "                </li><!-- end message -->\n" +
    "                <li>\n" +
    "                    <a href=\"#\">\n" +
    "                        <div class=\"pull-left\">\n" +
    "                            <img src=\"http://placekitten.com/g/215/215\" class=\"img-circle\" alt=\"user image\"/>\n" +
    "                        </div>\n" +
    "                        <h4>\n" +
    "                            AdminLTE Design Team\n" +
    "                            <small><i class=\"fa fa-clock-o\"></i> 2 hours</small>\n" +
    "                        </h4>\n" +
    "                        <p>Why not buy a new awesome theme?</p>\n" +
    "                    </a>\n" +
    "                </li>\n" +
    "                <li>\n" +
    "                    <a href=\"#\">\n" +
    "                        <div class=\"pull-left\">\n" +
    "                            <img src=\"http://placekitten.com/g/215/215\" class=\"img-circle\" alt=\"user image\"/>\n" +
    "                        </div>\n" +
    "                        <h4>\n" +
    "                            Developers\n" +
    "                            <small><i class=\"fa fa-clock-o\"></i> Today</small>\n" +
    "                        </h4>\n" +
    "                        <p>Why not buy a new awesome theme?</p>\n" +
    "                    </a>\n" +
    "                </li>\n" +
    "                <li>\n" +
    "                    <a href=\"#\">\n" +
    "                        <div class=\"pull-left\">\n" +
    "                            <img src=\"http://placekitten.com/g/215/215\" class=\"img-circle\" alt=\"user image\"/>\n" +
    "                        </div>\n" +
    "                        <h4>\n" +
    "                            Sales Department\n" +
    "                            <small><i class=\"fa fa-clock-o\"></i> Yesterday</small>\n" +
    "                        </h4>\n" +
    "                        <p>Why not buy a new awesome theme?</p>\n" +
    "                    </a>\n" +
    "                </li>\n" +
    "                <li>\n" +
    "                    <a href=\"#\">\n" +
    "                        <div class=\"pull-left\">\n" +
    "                            <img src=\"http://placekitten.com/g/215/215\" class=\"img-circle\" alt=\"user image\"/>\n" +
    "                        </div>\n" +
    "                        <h4>\n" +
    "                            Reviewers\n" +
    "                            <small><i class=\"fa fa-clock-o\"></i> 2 days</small>\n" +
    "                        </h4>\n" +
    "                        <p>Why not buy a new awesome theme?</p>\n" +
    "                    </a>\n" +
    "                </li>\n" +
    "            </ul>\n" +
    "        </li>\n" +
    "        <li class=\"footer\"><a href=\"#\">See All Messages</a></li>\n" +
    "    </ul>\n" +
    "</li>\n" +
    "");
  $templateCache.put("dropdown-menu/dropdown-notifications.tpl.html",
    "<li class=\"dropdown notifications-menu\">\n" +
    "    <a href=\"#\" class=\"dropdown-toggle\" data-toggle=\"dropdown\">\n" +
    "        <i class=\"fa fa-warning\"></i>\n" +
    "        <span class=\"label label-warning\">10</span>\n" +
    "    </a>\n" +
    "    <ul class=\"dropdown-menu\">\n" +
    "        <li class=\"header\">You have 10 notifications</li>\n" +
    "        <li>\n" +
    "            <!-- inner menu: contains the actual data -->\n" +
    "            <ul class=\"menu\">\n" +
    "                <li>\n" +
    "                    <a href=\"#\">\n" +
    "                        <i class=\"ion ion-ios7-people info\"></i> 5 new members joined today\n" +
    "                    </a>\n" +
    "                </li>\n" +
    "                <li>\n" +
    "                    <a href=\"#\">\n" +
    "                        <i class=\"fa fa-warning danger\"></i> Very long description here that may not fit into the page and may cause design problems\n" +
    "                    </a>\n" +
    "                </li>\n" +
    "                <li>\n" +
    "                    <a href=\"#\">\n" +
    "                        <i class=\"fa fa-users warning\"></i> 5 new members joined\n" +
    "                    </a>\n" +
    "                </li>\n" +
    "\n" +
    "                <li>\n" +
    "                    <a href=\"#\">\n" +
    "                        <i class=\"ion ion-ios7-cart success\"></i> 25 sales made\n" +
    "                    </a>\n" +
    "                </li>\n" +
    "                <li>\n" +
    "                    <a href=\"#\">\n" +
    "                        <i class=\"ion ion-ios7-person danger\"></i> You changed your username\n" +
    "                    </a>\n" +
    "                </li>\n" +
    "            </ul>\n" +
    "        </li>\n" +
    "        <li class=\"footer\"><a href=\"#\">View all</a></li>\n" +
    "    </ul>\n" +
    "</li>\n" +
    "");
  $templateCache.put("dropdown-menu/dropdown-tasks.tpl.html",
    "<li class=\"dropdown tasks-menu\">\n" +
    "    <a href=\"#\" class=\"dropdown-toggle\" data-toggle=\"dropdown\">\n" +
    "        <i class=\"fa fa-tasks\"></i>\n" +
    "        <span class=\"label label-danger\">9</span>\n" +
    "    </a>\n" +
    "    <ul class=\"dropdown-menu\">\n" +
    "        <li class=\"header\">You have 9 tasks</li>\n" +
    "        <li>\n" +
    "            <!-- inner menu: contains the actual data -->\n" +
    "            <ul class=\"menu\">\n" +
    "                <li><!-- Task item -->\n" +
    "                    <a href=\"#\">\n" +
    "                        <h3>\n" +
    "                            Design some buttons\n" +
    "                            <small class=\"pull-right\">20%</small>\n" +
    "                        </h3>\n" +
    "                        <div class=\"progress xs\">\n" +
    "                            <div class=\"progress-bar progress-bar-aqua\" style=\"width: 20%\" role=\"progressbar\" aria-valuenow=\"20\" aria-valuemin=\"0\" aria-valuemax=\"100\">\n" +
    "                                <span class=\"sr-only\">20% Complete</span>\n" +
    "                            </div>\n" +
    "                        </div>\n" +
    "                    </a>\n" +
    "                </li><!-- end task item -->\n" +
    "                <li><!-- Task item -->\n" +
    "                    <a href=\"#\">\n" +
    "                        <h3>\n" +
    "                            Create a nice theme\n" +
    "                            <small class=\"pull-right\">40%</small>\n" +
    "                        </h3>\n" +
    "                        <div class=\"progress xs\">\n" +
    "                            <div class=\"progress-bar progress-bar-green\" style=\"width: 40%\" role=\"progressbar\" aria-valuenow=\"20\" aria-valuemin=\"0\" aria-valuemax=\"100\">\n" +
    "                                <span class=\"sr-only\">40% Complete</span>\n" +
    "                            </div>\n" +
    "                        </div>\n" +
    "                    </a>\n" +
    "                </li><!-- end task item -->\n" +
    "                <li><!-- Task item -->\n" +
    "                    <a href=\"#\">\n" +
    "                        <h3>\n" +
    "                            Some task I need to do\n" +
    "                            <small class=\"pull-right\">60%</small>\n" +
    "                        </h3>\n" +
    "                        <div class=\"progress xs\">\n" +
    "                            <div class=\"progress-bar progress-bar-red\" style=\"width: 60%\" role=\"progressbar\" aria-valuenow=\"20\" aria-valuemin=\"0\" aria-valuemax=\"100\">\n" +
    "                                <span class=\"sr-only\">60% Complete</span>\n" +
    "                            </div>\n" +
    "                        </div>\n" +
    "                    </a>\n" +
    "                </li><!-- end task item -->\n" +
    "                <li><!-- Task item -->\n" +
    "                    <a href=\"#\">\n" +
    "                        <h3>\n" +
    "                            Make beautiful transitions\n" +
    "                            <small class=\"pull-right\">80%</small>\n" +
    "                        </h3>\n" +
    "                        <div class=\"progress xs\">\n" +
    "                            <div class=\"progress-bar progress-bar-yellow\" style=\"width: 80%\" role=\"progressbar\" aria-valuenow=\"20\" aria-valuemin=\"0\" aria-valuemax=\"100\">\n" +
    "                                <span class=\"sr-only\">80% Complete</span>\n" +
    "                            </div>\n" +
    "                        </div>\n" +
    "                    </a>\n" +
    "                </li><!-- end task item -->\n" +
    "            </ul>\n" +
    "        </li>\n" +
    "        <li class=\"footer\">\n" +
    "            <a href=\"#\">View all tasks</a>\n" +
    "        </li>\n" +
    "    </ul>\n" +
    "</li>\n" +
    "");
  $templateCache.put("dropdown-menu/dropdown-user.tpl.html",
    "<li class=\"dropdown user user-menu\">\n" +
    "    <a href=\"#\" class=\"dropdown-toggle\" data-toggle=\"dropdown\">\n" +
    "        <i class=\"glyphicon glyphicon-user\"></i>\n" +
    "        <span>Jane Doe <i class=\"caret\"></i></span>\n" +
    "    </a>\n" +
    "    <ul class=\"dropdown-menu\">\n" +
    "        <!-- User image -->\n" +
    "        <li class=\"user-header bg-light-blue\">\n" +
    "            <img src=\"http://placekitten.com/g/215/215\" class=\"img-circle\" alt=\"User Image\" />\n" +
    "            <p>\n" +
    "                Jane Doe - Web Developer\n" +
    "                <small>Member since Nov. 2012</small>\n" +
    "            </p>\n" +
    "        </li>\n" +
    "        <!-- Menu Body -->\n" +
    "        <li class=\"user-body\">\n" +
    "            <div class=\"col-xs-4 text-center\">\n" +
    "                <a href=\"#\">Followers</a>\n" +
    "            </div>\n" +
    "            <div class=\"col-xs-4 text-center\">\n" +
    "                <a href=\"#\">Sales</a>\n" +
    "            </div>\n" +
    "            <div class=\"col-xs-4 text-center\">\n" +
    "                <a href=\"#\">Friends</a>\n" +
    "            </div>\n" +
    "        </li>\n" +
    "        <!-- Menu Footer-->\n" +
    "        <li class=\"user-footer\">\n" +
    "            <div class=\"pull-left\">\n" +
    "                <a href=\"#\" class=\"btn btn-default btn-flat\">Profile</a>\n" +
    "            </div>\n" +
    "            <div class=\"pull-right\">\n" +
    "                <a href=\"#\" class=\"btn btn-default btn-flat\">Sign out</a>\n" +
    "            </div>\n" +
    "        </li>\n" +
    "    </ul>\n" +
    "</li>\n" +
    "");
  $templateCache.put("highcharts/template.tpl.html",
    "<div>Highchart</div>");
  $templateCache.put("sidebar-menu/template.tpl.html",
    "<ul class=\"sidebar-menu\">\n" +
    "    <li ng-repeat=\"item in menuItems\" ng-switch=\"item.hasSubmenu\" ng-class=\"{'treeview': !item.hasSubmenu}\"  >\n" +
    "        <a ng-switch-when=\"false\" ui-sref=\"{{::item.state}}\">\n" +
    "            <i ng-class=\"item.iconClass\"></i>\n" +
    "            <span>{{::item.title}}</span>\n" +
    "            <small class=\"badge pull-right\" ng-class=\"item.badgeClass\" ng-show=\"item.hasBadge\">{{item.badge}}</small>\n" +
    "        </a>\n" +
    "        <a ng-switch-when=\"true\" ng-click=\"item.expanded = !item.expanded\">\n" +
    "            <i ng-class=\"item.iconClass\"></i>\n" +
    "            <span>{{::item.title}}</span>\n" +
    "            <i class=\"fa pull-right\" ng-class=\"{ 'fa-angle-left': item.expanded, 'fa-angle-down': !item.expanded }\"></i>\n" +
    "            <ul class=\"treeview-menu\" ng-show=\"item.expanded\">\n" +
    "                <li ng-repeat=\"subitem in item.submenu\" ui-sref-active=\"active\">\n" +
    "                    <a ui-sref=\"{{::subitem.state}}\"><i class=\"fa fa-angle-double-right\"></i> {{::subitem.title}}</a>\n" +
    "                </li>\n" +
    "            </ul>\n" +
    "        </a>\n" +
    "    </li>\n" +
    "</ul>\n" +
    "");
}]);

(function() {
  angular.module("admin-lte-angular", ['admin-lte-angular.templates']);

  angular.module("admin-lte-angular").directive("altaDropdownMenu", function() {
    return {
      restrict: "E",
      replace: true,
      scope: {
        type: "@",
        items: "="
      },
      templateUrl: function(elem, scope) {
        return "dropdown-menu/dropdown-" + scope.type + ".tpl.html";
      },
      controller: ["$scope", function($scope) {
        return console.log('Dropdown Menu');
      }]
    };
  });

  angular.module("admin-lte-angular").directive("highchart", function() {
    return {
      restrict: "A",
      scope: {
        data: "=",
        type: "@",
        title: "@",
        xAxisTitle: "@",
        yAxisTitle: "@",
        showLegend: "=",
        showCredits: "=",
        width: "=",
        height: "=",
        options: "="
      },
      link: function(scope, elements, attrs) {
        var chartDefaults, chartSettings, chartTypeSettings, easySettings, element, _ref;
        element = elements[0];
        if (!((_ref = element.id) != null ? _ref.length : void 0)) {
          element.id = _.uniqueId('highchart_');
        }
        console.log("Creating chart of type " + scope.type + " with id " + element.id);
        easySettings = {
          chart: {
            type: scope.type,
            renderTo: element.id,
            width: scope.width,
            height: scope.height
          },
          title: {
            text: scope.title
          },
          xAxis: {
            title: {
              text: scope.xAxisTitle
            }
          },
          yAxis: {
            title: {
              text: scope.yAxisTitle
            }
          },
          legend: {
            enabled: scope.showLegend
          },
          credits: {
            enabled: scope.showCredits
          },
          series: scope.data
        };
        chartSettings = {
          chart: {
            type: 'line'
          },
          exporting: {
            enabled: false
          }
        };
        chartDefaults = {
          line: {},
          bar: {},
          column: {},
          area: {}
        };
        chartTypeSettings = chartDefaults[scope.type];
        _.merge(chartSettings, chartTypeSettings, easySettings, scope.options);
        window.setTimeout(function() {
          var chart;
          return chart = new Highcharts.Chart(chartSettings);
        }, 10);
        return console.log('Highcharts Link function');
      }
    };
  });

  angular.module("admin-lte-angular").directive("altaSidebarMenu", function() {
    return {
      restrict: "E",
      replace: true,
      scope: {
        menuItems: "="
      },
      templateUrl: function(elem, scope) {
        return 'sidebar-menu/template.tpl.html';
      },
      controller: ["$scope", function($scope) {
        var item, _i, _len, _ref, _ref1;
        _ref = $scope.menuItems;
        for (_i = 0, _len = _ref.length; _i < _len; _i++) {
          item = _ref[_i];
          item.hasSubmenu = (item.submenu != null) && ((_ref1 = item.submenu) != null ? _ref1.length : void 0) > 0;
          item.expanded = false;
          item.hasBadge = !(item.badge == null);
        }
        return console.log($scope.menuItems);
      }]
    };
  });

}).call(this);
