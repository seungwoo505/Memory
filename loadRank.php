<?php
 
header("Content-Type: text/html; charset=UTF-8");
$bodys = file_get_contents("php://input");
$body = (array) json_decode($bodys);

$Rank = $body[Rank];
 
//MySQL DB에 접속하기
$conn=mysqli_connect("seungwoo.i234.me","seungwoo","Seungwoo50500.*.*","project", "3300");
 
//한긓깨짐 방지
mysqli_query($conn,"set names utf8");
 
//DB에서 데이터를 읽어오는 쿼리문
$sql="SELECT * FROM Memory WHERE Rank == '$Rank'";
$result=mysqli_query($conn, $sql);

$rowCount= mysqli_num_rows($result);
$arr_db = array();

for($i=0; $i < $rowCount; $i++){
    $row= mysqli_fetch_array($result, MYSQLI_ASSOC);
    array_push($arr_db, $row);
}

echo json_encode($arr_db);
mysqli_close($conn);
 
?>