<!doctype html>
<html>
<head>
    <title>ASU React Unity Components</title>

    <script crossorigin src="https://unpkg.com/react@16/umd/react.development.js"></script>
    <script crossorigin src="https://unpkg.com/react-dom@16/umd/react-dom.development.js"></script>
    <!-- Import the bundled component JS -->

</head>
<body>

<!-- Include bundles -->
<script type="text/javascript" src="/path/to/unity/bundle/core.production.js"></script>
<link type="text/css" rel="stylesheet" media="all" href="/path/to/css/bundle/core.production.css"/>

<!-- Include the pre-rendered template -->
<?php echo file_get_contents('/path/to/header/template.html'); ?>

<script>
    // Initialize configuration object
    const ASUHeader = {};
    ASUHeader.siteTitle = {
        title: "ASU Custom Site Title",
        parentOrg: "ASU Custom Parent Org"
    };

    // Hydrate the pre-rendered header with above configs
    ReactDOM.hydrate(React.createElement(ASUBrandHeader, {headerObj: ASUHeader}),
        document.getElementById("asu-header-container"));
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

