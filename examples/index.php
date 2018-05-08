<!doctype html>
<html>
<head>
    <style>
        #main-content {
            height: 1200px;
        }
    </style>
    <title>ASU React Unity Components</title>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">

    <script crossorigin src="https://unpkg.com/react@16/umd/react.development.js"></script>
    <script crossorigin src="https://unpkg.com/react-dom@16/umd/react-dom.development.js"></script>
    <!-- Import the bundled component JS -->
    <script type="text/javascript" src="http://localhost:3000/core/core.production.js"></script>
    <link type="text/css" rel="stylesheet" media="all" href="http://localhost:3000/core/core.production.css"/>
</head>
<body>
<?php echo file_get_contents('http://dstack_node_1:3000/header'); ?>

<script>
    var ASUHeader = {};

    ASUHeader.site_menu = {
        json: [
            {
                title:"Home",
                path:"http://www.asu.edu/absolute_path"
            },
            {
                title:"Degree Programs",
                path:"/absolute_path/page",
                children: [
                    {
                        title:"Admissions",
                        path:"/?url=variable",
                        children: [
                            {
                                title:"Student Life",
                                path:"/#hash"
                            }
                        ]
                    },
                    {
                        title:"Ross",
                        path:"https://www.asu.edu/"
                    }
                ]
            },
        ]
    };

    ASUHeader.site_title = {title: "ASU Custom Site Title", parent_org: "ASU Custom Parent Org", site_url: "https://asu.edu", parent_org_url: "https://uto.asu.edu"};

    //setTimeout(function(){
    ReactDOM.hydrate(React.createElement(ASUnity.core.ASUHeaderContainer, {headerObj: ASUHeader}), document.getElementById("asu-header-container"));
    //}, 5000);


</script>

<div id="main-content">
</div>

</body>
<footer>
    <div id="asu-footer"></div>
    <!--<script>
        ReactDOM.render(React.createElement(ASUnity.core.ASUFooter), document.getElementById("asu-footer"));
    </script>-->
  <?php echo file_get_contents('http://dstack_node_1:3000/footer'); ?>
</footer>
</html>

