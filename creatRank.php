<?php
 
    header("Content-Type: text/html; charset=UTF-8");
    $bodys = file_get_contents("php://input");
    $body = (array) json_decode($bodys);

    $Id = $body[Id];
    $Stage = $body[Stage];
    $Rank = $body[Rank];
    $ClearTime = $body[ClearTime];

    //Database에 업로드 된 데이터 저장
    //Database를 제어해주는 프로그램(DBMS : MySQL) 사용

    //php에서 Database서버와 연동하기
    //MySQL DB에 접속하기!!
    $conn=mysqli_connect("seungwoo.i234.me","id","password","project", "3300"); //DB 서버 주소, DB 접속 아이디, DB접속 비번, DB명 (파일명)
 
    //한글 깨짐 방지
    mysqli_query($conn,"set names utf8");
 
    //SQL 쿼리문 작성
    $sql="INSERT INTO Memory(Id, Stage, ClearTime, Rank) VALUES('$Id', '$Stage', '$ClearTime', '$Rank')";
    $result=mysqli_query($conn,$sql);

    if($result){
        echo json_encode("insert success");    
    } else{
        echo json_encode("insert fail");
    }

    mysqli_close($conn);
 
?>
