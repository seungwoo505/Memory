# 기억력 테스트 게임

## 개요
1인 개발입니다.

제작 기간 : 2023.09 ~ 2023.11

## UI/UX
<img src="https://github.com/seungwoo505/Memory/blob/main/testGame.gif"/>

<https://github.com/seungwoo505/Memory/blob/main/testGame.mov>

깔끔한 영상을 보고 싶으시면 위의 링크를 통해 확인해주시면 됩니다.

## 설명
(stage + 1)^2에 맞춰 박스가 나오며 박스에 숫자가 일정시간 동안 나옵니다.

일정시간이 흐른 후 순서에 맞춰 박스를 클릭하여 맞추면 다음 스테이지로 넘어가게됩니다.

랭킹모드 같은 경우 15분의 시간이 주어져 이 시간 안에 몇 스테이지까지 도달이 가능한가에 대한 경쟁입니다.

## 개발 고민
스테이지가 증가하면 개수가 제곱으로 증가하게됩니다.

그래서 난이도가 급격하게 상승되는 현상이 발생되는데 
이것을 완화하기 위해 일정 시간 동안 숫자가 나오는 시간을 개당으로 설정해 개수가 증가하면서 외워야하는 시간이 급격하게 감소되는 현상을 완화했습니다.

하지만 이러면 스테이지가 증가하면서 생기는 난이도는 외워야하는 개수가 증가하는 것외엔 없습니다.

그래서 추가한 시스템이 개당 외워야하는 시간을 조금씩 감소되게 바꾸는 것입니다.

다만 완화했다해도 스테이지가 급격하게 상승하는 것은 있기 때문에 시간이 너무 감소되는 현상은 막아야했기때문에 전 스테이지의 개당 시간의 일부가 감소되도록 설정했습니다.

초반에는 감소되는 크기가 크지만 스테이지가 증가하면 난이도가 점점 커지므로 감소되는 크기가 작아지게 설계했습니다.

## 사용된 개념
- ReactNative
- PHP
- MariaDB
- ...
