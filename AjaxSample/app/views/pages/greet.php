<?php

$rs = array(
  "message" => htmlspecialchars("hi!" . $_GET['name'], ENT_QUOTES, "utf-8"),
  "length" => strlen($_GET['name'])
);

header('COntent-Type: application/json; character=utf-8');
echoi json_encode($rs);
