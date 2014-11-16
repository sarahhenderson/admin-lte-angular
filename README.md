admin-lte-angular
=================

AngularJS port of the Admin LTE Twitter Bootstrap theme.   

This is very much a work in progress.  It includes the CSS styles from Admin LTE, but not the JavaScript.  
I am writing AngularJS components to replace all of the dynamic elements of Admin LTE.

Currently implemented are directives for sidebar menu, top menu dropdown lists and highcharts charts.

***

### Install

`bower install git://github.com/sarahhendeson/admin-lte-angular.git --save`

Include the following files in your HTML:

* admin-lte-angular.min.js
* admin-lte-angular.min.css

Add `admin-lte-angular` as a dependency in your AngularJS app.

I have included the LESS sources as well if you want to compile from those as part of your build process.  
By default admin-lte-angular.less includes all the less files in Admin LTE, but you can be more selective if you prefer.

### Dependencies

The only hard dependencies are AngularJS (tested with version 1.3.2) and Twitter Bootstrap (tested with 3.3).

However, a number of features (charts, toast messages) require additional dependencies that are documented in those sections below.


# Side Menu

You can either code your sidebar menu items directly the same way they do in Admin LTE (Angularized version):


Or if you are using ui-router and routing based on states, you can include a single directive in your HTML and 
define your menu items in your controller.   You can also optionally include badges and icons in your menu items.

In HTML:

In Controller:

   $scope.menuItems = [
      title: 'Dashboard'
      state: 'dashboard'
      iconClass: 'fa fa-dashboard'
   ,
      title: 'Widgets'
      state: 'widgets'
      iconClass: 'fa fa-th'
      badge: 'new'
      badgeClass: 'bg-green'
   ,
      title: 'Charts'
      iconClass: 'fa fa-bar-chart-o'
      submenu: [
         title: 'Morris'
         state: 'charts.morris'
      ,
         title: 'HighCharts'
         state: 'charts.highcharts'
      ,
         title: 'Inline'
         state: 'charts.inline'
      ]
   ]


### Highcharts

`bower install highcharts-release --save`

### Ionicons

`bower install ionicons --save`

### Font Awesome

`bower install font-awesome --save`
