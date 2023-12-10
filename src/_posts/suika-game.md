---
title: "TypeScript + Matter.js로 수박게임 만들기"
excerpt: "유튜브로 코딩관련 영상을 보던 중 '빵형의 개발도상국'이라는 채널에서 얼마전 유행했던 수박게임을 간단하게 클론코딩한 영상을 발견했다. JavaScript 2D물리엔진을 간단하게 다뤄볼 수 있는 재미있는 예제인 것 같아서 따라해보았다."
coverImage: "/images/post/suika-game/cover.png"
date: "2023-12-11 00:56:54"
author: "Minseok Seo"
ogImage: "/images/post/suika-game/cover.png"
tags: ["수박게임", "물리엔진", "matter.js"]
---

유튜브로 코딩관련 영상을 보던 중 "빵형의 개발도상국"이라는 채널에서 얼마전 유행했던 수박게임을 간단하게 클론코딩한 영상을 발견했다.

JavaScript 2D물리엔진을 간단하게 다뤄볼 수 있는 재미있는 예제인 것 같아서 따라해보았다.

들어가기에 앞서, 수박게임은 하위단계의 과일을을 합쳐서 최종단계 과일인 수박을 만드는 것에 목표를 둔 귀여운 게임이다.

아래는 스트리머 **우주하마**님의 플레이 영상이다

<iframe width="320" height="215" src="https://www.youtube.com/embed/gCN4b4LoNn4?si=MJ8b9n7vMN2wlS2w" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen style="margin:0 auto;"></iframe>

본 예제에서는 적절한 이미지를 구하는 것이 번거롭기도 하고 로직구현에 의의를 두었기 때문에, 기본적인 원에 색깔만 다르게 입히는 형태로 구현했다.

아래는 결과물이다.

<img src="/images/post/suika-game/result.gif" alt="결과물" width="320px" style="margin:0 auto;"/>

## 프로젝트 세팅하기

### vite 프로젝트 생성

본 예제에서는 `vite`를 사용한다.

```bash
npm create vite@latest
```

위 명령어를 실행하여 `VanillaJS` 기반의 `vite` 프로젝트를 생성했다.

### matter-js 설치

```bash
npm install matter-js @types/matter-js
```

위 명령어를 실행하여 2D물리엔진 라이브러리인 `matter-js`와 `TypeScript` 지원을 위한 `@types/matter-js` 패키지를 설치해준다.

### index.html / main.ts 초기화

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <link rel="icon" type="image/svg+xml" href="/vite.svg" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>수박게임</title>
  </head>
  <body>
    <!-- 아래 div(#app)을 게임이 들어갈 공간으로 사용한다.  -->
    <div id="app"></div>
    <!-- 게임의 모든 로직이 들어갈 main.ts 파일을 module 형태로 불러와준다 -->
    <script type="module" src="/src/main.ts"></script>
  </body>
</html>
```

`index.html`은 위처럼 수정해주고, `main.ts`는 모든 코드를 지워준다.

### fruits.ts

생성할 과일들의 정보를 담고 있는 파일이다.

```typescript
// color: 원의 색깔
// radius: 원의 반지름 (지름 / 2)
const fruits = [
  { color: "#1f77b4", radius: 33 / 2 },
  { color: "#ff7f0e", radius: 58 / 2 },
  { color: "#2ca02c", radius: 83 / 2 },
  { color: "#d62728", radius: 108 / 2 },
  { color: "#9467bd", radius: 133 / 2 },
  { color: "#8c564b", radius: 158 / 2 },
  { color: "#e377c2", radius: 183 / 2 },
  { color: "#7f7f7f", radius: 208 / 2 },
  { color: "#bcbd22", radius: 233 / 2 },
  { color: "#17becf", radius: 259 / 2 },
];

export default fruits;
```

## Matter.js 개념 정리

`Matter.js`는 `JavaScript`로 작성된 2D 물리 엔진으로, 웹 기반 게임과 인터랙티브 컨텐츠를 만들기 위한 강력한 물리 시뮬레이션 기능을 제공한다.

아래는 본 예제에서 사용하는 `matter.js`의 몇 가지 `class`에 대한 간단한 설명이다.

1. **`World` (월드)**: 엔진에 의해 시뮬레이션이 수행되는 컨테이너이다. 월드는 모든 물리적 객체들(바디, 제약조건, 복합체 등)을 포함하고 관리한다. 월드는 엔진의 인스턴스에 할당되며, 이를 통해 객체들 간의 상호 작용이 이루어진다.
2. **`Engine` (엔진)**: `Matter.js`의 핵심이며, 물리 엔진의 상태를 나타낸다. 엔진은 `World와` 모든 물리적 상호 작용을 관리하며, 시간에 따라 시뮬레이션을 진행한다. 엔진은 생성 시 여러 설정을 받을 수 있으며, 이를 통해 물리 법칙이 어떻게 적용될지 정의할 수 있다.
3. **`Runner` (러너)**: `Matter.js`에서의 `Runner`는 엔진을 특정 시간 간격으로 업데이트하는 유틸리티이다. 러너는 엔진의 시뮬레이션 루프를 관리하며, 이를 통해 물리 시뮬레이션이 실시간으로 진행될 수 있다. 개발자는 러너를 사용하여 엔진 업데이트의 주기를 제어할 수 있다.
4. **`Render` (렌더)**: `Render`는 `Matter.js`에서 물리 시뮬레이션의 시각적 표현을 담당하는 컴포넌트이다. 이것은 월드 내의 모든 객체들(바디, 제약조건 등)을 캔버스 위에 그리는 역할을 한다. `Render`는 엔진의 상태를 기반으로 하여 현재 월드의 시각적 상태를 표시하며, 개발자는 이를 통해 시뮬레이션을 시각적으로 관찰하고 디버깅할 수 있다.
5. **`Body` (바디)**: `Body`는 `Matter.js`에서 물리적 형태와 속성을 가진 객체를 의미한다. 이들은 월드 내에서 상호 작용하며, 여기에는 다양한 형태와 크기의 사각형, 원, 다각형 등이 포함될 수 있다.

이번 예제를 진행함에 있어서 위 내용을 완벽하게 이해할 필요는 없다. 그냥 슥 읽고 넘어가자.

## 코드

아래 설명할 모든 코드는 `main.ts`에 작성하였다.

전체코드는 목차 또는 문서 하단에서 확인할 수 있다.

### 벽 만들기

```typescript
import { Bodies, Body, Engine, Events, Render, Runner, World } from "matter-js";
import "./style.css";
import fruits from "./fruits";

const engine = Engine.create();
const render = Render.create({
  engine,
  // id가 app인 element를 컨테이너로 사용
  element: document.getElementById("app") as HTMLElement,
  options: {
    background: "white",
    // false로 설정하지 않으면 화면에 wireframe(debug mode) 형태로 표시된다.
    wireframes: false,
    width: 620,
    height: 850,
  },
});

const world = engine.world;

// 벽을 정의해준다
const walls = [
  // matter-js에서는 x,y 좌표를 설정할 때 꼭짓점이 아닌 Body의 중앙을 기준으로 설정해야 한다.
  { x: 15, y: 395, width: 30, height: 790 },
  { x: 605, y: 395, width: 30, height: 790 },
  { x: 310, y: 820, width: 620, height: 60 },
].map((wall) =>
  Bodies.rectangle(wall.x, wall.y, wall.width, wall.height, {
    // 벽은 중력의 영향을 받지 않고 고정되어 있어야 하므로, isStatic을 true로 설정
    isStatic: true,
    render: { fillStyle: "black" },
  })
);

// 한계선을 만들어준다. 과일이 여기에 닿으면 game over.
const limitLine = Bodies.rectangle(310, 150, 620, 2, {
  isStatic: true,
  isSensor: true,
  render: { fillStyle: "black" },
  label: "limitLine",
});

// 만든 Body들을 World에 추가한다.
World.add(world, [...walls, limitLine]);

// 중력을 기본값으로 사용할 경우, 너무 느린 감이 있어 2배로 설정해주었다.
engine.gravity.y = 2;

Runner.run(engine);
Render.run(render);
```

위 코드의 결과물은 아래와 같다.

<img src="/images/post/suika-game/make_wall.png" alt="벽 생성" width="320px" style="margin:0 auto;"/>

### 과일 생성 함수

```typescript
// 현재 과일 객체 저장
let currentBody: Body | null = null;
let currentFruit: (typeof fruits)[number] | null = null;

// 방향키를 통한 조작 가능 여부
let isDisableAction: boolean = false;

// 방향키를 통해 과일을 이동할 때, 부드럽게 이동하게 만들기 위한 interval
let interval: number | null = null;

// 현재 눌린 키
let currentKey: string | null = null;

function addFruit() {
  // 0 ~ 4 사이의 과일중 랜덤으로 생성하기 위해 index를 랜덤으로 생성
  const index = Math.floor(Math.random() * 5);

  // 랜덤과일의 color, radius(반지름)를 가져옴
  const fruit = fruits[index];

  // 과일 Body 생성
  const body = Bodies.circle(310, 75, fruit.radius, {
    label: index.toString(),
    // 과일이 생성되자마자 아래로 떨어지는것을 방지
    // 방향키로 이동시킨 후 플레이어가 직접 떨어뜨려야 하기 때문
    isSleeping: true,
    // 모든 크기의 과일이 같은 무게를 갖도록 하는 설정값
    // 과일이 커질수록 밀도가 낮아지고, 작아질수록 밀도가 높아지도록 설정
    density: 1 / (Math.PI * fruit.radius * fruit.radius),
    render: { fillStyle: fruit.color },
    // 과일이 다른 물체(벽/과일)에 부딪혔을 때 튕기는 정도
    restitution: 0.2,
  });

  // 현재 과일의 객체와 정보를 저장
  currentBody = body;
  currentFruit = fruit;

  // World에 과일을 추가
  World.add(world, body);
}
```

위처럼 `addFruit` 함수를 작성 한 후, 함수를 실행시켜보면 아래와 같이 상단 중앙에 고정된 Circle(과일)을 볼 수 있다.

<img src="/images/post/suika-game/add_fruit.png" alt="과일 생성" width="320px" style="margin:0 auto;"/>

현재는 `isSleeping: true` 상태이므로, 반투명 상태로 고정되어 있다.

상단에 `let`으로 선언한 변수들은 이벤트 처리과정에서 사용할 것이다.

### 키보드 이벤트 처리

방향키를 통해 과일의 위치를 조종하고, 원하는 위치에서 스페이스바를 눌러 과일을 떨어뜨릴 수 있도록 키보드 이벤트를 처리한다.

```typescript
window.onkeydown = (event) => {
  if (!currentBody || !currentFruit || isDisableAction) return;

  // 방향키가 눌려있는 상태에서 반대 방향키를 누르면 해당 방향으로 방향을 전환하기 위해 interval을 초기화한다.
  if (interval && event.code !== currentKey) {
    clearInterval(interval);
    interval = null;
  }
  currentKey = event.code;

  switch (currentKey) {
    // 오른쪽 방향키
    case "ArrowRight":
      if (interval) return;

      // 부드러운 이동을 위해 interval을 사용하였다.
      // 방향키가 눌려있는 상태에서는 interval이 계속해서 실행되며 2픽셀씩 과일을 이동시킨다.
      interval = setInterval(() => {
        if (!currentBody || !currentFruit) return;
        // 벽을 넘어가지 않도록 분기처리
        if (currentBody.position.x + currentFruit.radius < 590)
          Body.setPosition(currentBody, {
            x: currentBody.position.x + 2,
            y: currentBody.position.y,
          });
      }, 5);

      break;

    // 왼쪽 방향키
    case "ArrowLeft":
      if (interval) return;

      interval = setInterval(() => {
        if (!currentBody || !currentFruit) return;
        if (currentBody.position.x - currentFruit.radius > 30)
          Body.setPosition(currentBody, {
            x: currentBody.position.x - 2,
            y: currentBody.position.y,
          });
      }, 5);
      break;

    // 스페이스바
    case "Space":
      // isSleeping 상태를 해제하여 과일을 떨어뜨린다.
      currentBody.isSleeping = false;

      // 과일이 떨어지는동안 방향키를 통한 과일 이동이 불가능하도록 flag 설정
      isDisableAction = true;

      // 과일을 떨어뜨린 후 1초후 새 과일을 생성하며, 다시 방향키 조작이 가능하도록 해준다
      setTimeout(() => {
        addFruit();
        isDisableAction = false;
      }, 1000);
      break;
  }
};

window.onkeyup = (event) => {
  // 방향키에서 손가락을 뗏을 때, 반대편 방향키가 눌려있으면 과일을 멈추지 않도록 분기처리
  if (currentKey !== event.code) return;
  switch (event.code) {
    case "ArrowRight":
    case "ArrowLeft":
      // 유저가 방향키에서 손가락을 떼면 interval을 초기화시켜 과일을 멈춘다.
      if (interval) {
        clearInterval(interval);
        interval = null;
      }
  }
};
```

과일을 이동시킬 때, `setInterval`을 사용하지 않고 좌표에 `10px`씩 더해주는 식으로도 구현이 가능하지만, 그렇게 할 경우 과일이 매우 뻣뻣하게 이동하는 현상이 있다.

`setInterval`의 `timeout`값 또는 좌표의 변화값을 변경해주면 속도를 조절할 수 있다.

아래는 결과물이다.

<img src="/images/post/suika-game/keyboard_events.gif" alt="키보드 이벤트 처리" width="320px" style="margin:0 auto;"/>

### 다른 과일, 한계선과의 충돌처리

충돌처리의 경우 `matter-js`의 `Events` 클래스를 사용한다.

```typescript
// 충돌이 시작될 때(collisionStart) 이벤트 발생
Events.on(engine, "collisionStart", (event) => {
  event.pairs.forEach((collision) => {
    // 충돌한 과일들이 같은 종류의 과일일 경우, 충돌한 과일들을 삭제하고 상위단계의 과일을 생성
    if (collision.bodyA.label === collision.bodyB.label) {
      const label = collision.bodyA.label;

      // 최상위단계의 과일일 경우, 이벤트를 처리하지 않음.
      // 여기서 승리처리를 할 수 있다.
      if (Number(label) === fruits.length - 1) {
        return;
      }

      // 충돌한 두 과일 삭제
      World.remove(world, [collision.bodyA, collision.bodyB]);

      // 상위단계의 과일 정보를 가져옴
      const newFruit = fruits[Number(label) + 1];

      // 가져온 정보로 과일 생성
      const newBody = Bodies.circle(
        collision.collision.supports[0].x,
        collision.collision.supports[0].y,
        newFruit.radius,
        {
          label: (Number(label) + 1).toString(),
          density: 1 / (Math.PI * newFruit.radius * newFruit.radius),
          render: { fillStyle: newFruit.color },
          restitution: 0.2,
        }
      );

      // 월드에 과일 추가
      World.add(world, newBody);
    }

    // 한계선에 과일이 닿을 경우 game over
    if (
      // 과일이 떨어질 때 한계선에 닿으면 game over이 되면 안되기에, isDisableAction 조건을 추가해준다
      !isDisableAction &&
      (collision.bodyA.label === "limitLine" ||
        collision.bodyB.label === "limitLine")
    ) {
      alert("game over");
    }
  });
});
```

아래는 결과물이다.

<img src="/images/post/suika-game/collision.gif" alt="키보드 이벤트 처리" width="320px" style="margin:0 auto;"/>

## 마치며

이렇게 간단하게 닌텐도 수박게임을 흉내내어 보았다.

`JavaScript` 기반의 물리엔진 사용이 생각보다 간편하다고 느낀 예제였다.

자바스크립트를 사용한 물리 시뮬레이션이나 게임제작에 관심이 있는 분이라면 겁먹지 말고 따라해보는 것을 추천한다.

> 참고한 영상 : https://www.youtube.com/watch?v=LZvEDigv0Ww&list=PLvqo575pLkloPLsIQF5nNdDUPdT15oaF1&index=28

## main.ts 전체 코드

```typescript
import { Bodies, Body, Engine, Events, Render, Runner, World } from "matter-js";
import "./style.css";
import fruits from "./fruits";

const engine = Engine.create();
const render = Render.create({
  engine,
  // id가 app인 element를 컨테이너로 사용
  element: document.getElementById("app") as HTMLElement,
  options: {
    background: "white",
    // false로 설정하지 않으면 화면에 wireframe(debug mode) 형태로 표시된다.
    wireframes: false,
    width: 620,
    height: 850,
  },
});

const world = engine.world;

// 벽을 정의해준다
const walls = [
  // matter-js에서는 x,y 좌표를 설정할 때 꼭짓점이 아닌 Body의 중앙을 기준으로 설정해야 한다.
  { x: 15, y: 395, width: 30, height: 790 },
  { x: 605, y: 395, width: 30, height: 790 },
  { x: 310, y: 820, width: 620, height: 60 },
].map((wall) =>
  Bodies.rectangle(wall.x, wall.y, wall.width, wall.height, {
    // 벽은 중력의 영향을 받지 않고 고정되어 있어야 하므로, isStatic을 true로 설정
    isStatic: true,
    render: { fillStyle: "black" },
  })
);

// 한계선을 만들어준다. 과일이 여기에 닿으면 game over.
const limitLine = Bodies.rectangle(310, 150, 620, 2, {
  isStatic: true,
  isSensor: true,
  render: { fillStyle: "black" },
  label: "limitLine",
});

// 만든 Body들을 World에 추가한다.
World.add(world, [...walls, limitLine]);

engine.gravity.y = 2;

Runner.run(engine);
Render.run(render);

let currentBody: Body | null = null;
let currentFruit: (typeof fruits)[number] | null = null;
let isDisableAction: boolean = false;
let interval: number | null = null;
let currentKey: string | null = null;

function addFruit() {
  const index = Math.floor(Math.random() * 5);
  const fruit = fruits[index];

  const body = Bodies.circle(310, 75, fruit.radius, {
    label: index.toString(),
    isSleeping: true,
    density: 1 / (Math.PI * fruit.radius * fruit.radius),
    render: { fillStyle: fruit.color },
    restitution: 0.2,
  });

  currentBody = body;
  currentFruit = fruit;

  World.add(world, body);
}

window.onkeydown = (event) => {
  if (!currentBody || !currentFruit || isDisableAction) return;

  if (interval && event.code !== currentKey) {
    clearInterval(interval);
    interval = null;
  }
  currentKey = event.code;

  switch (currentKey) {
    case "ArrowRight":
      if (interval) return;

      interval = setInterval(() => {
        if (!currentBody || !currentFruit) return;
        if (currentBody.position.x + currentFruit.radius < 590)
          Body.setPosition(currentBody, {
            x: currentBody.position.x + 2,
            y: currentBody.position.y,
          });
      }, 5);

      break;

    case "ArrowLeft":
      if (interval) return;

      interval = setInterval(() => {
        if (!currentBody || !currentFruit) return;
        if (currentBody.position.x - currentFruit.radius > 30)
          Body.setPosition(currentBody, {
            x: currentBody.position.x - 2,
            y: currentBody.position.y,
          });
      }, 5);
      break;

    case "Space":
      currentBody.isSleeping = false;
      isDisableAction = true;

      setTimeout(() => {
        addFruit();
        isDisableAction = false;
      }, 1000);
      break;
  }
};

window.onkeyup = (event) => {
  if (currentKey !== event.code) return;
  switch (event.code) {
    case "ArrowRight":
    case "ArrowLeft":
      if (interval) {
        clearInterval(interval);
        interval = null;
      }
  }
};

Events.on(engine, "collisionStart", (event) => {
  event.pairs.forEach((collision) => {
    if (collision.bodyA.label === collision.bodyB.label) {
      const label = collision.bodyA.label;

      if (Number(label) === fruits.length - 1) {
        return;
      }

      World.remove(world, [collision.bodyA, collision.bodyB]);

      const newFruit = fruits[Number(label) + 1];

      const newBody = Bodies.circle(
        collision.collision.supports[0].x,
        collision.collision.supports[0].y,
        newFruit.radius,
        {
          label: (Number(label) + 1).toString(),
          density: 1 / (Math.PI * newFruit.radius * newFruit.radius),
          render: { fillStyle: newFruit.color },
          restitution: 0.2,
        }
      );

      World.add(world, newBody);
    }

    if (
      !isDisableAction &&
      (collision.bodyA.label === "limitLine" ||
        collision.bodyB.label === "limitLine")
    ) {
      alert("game over");
    }
  });
});

addFruit();
```
