# render

화면을 렌더해주는 함수

# props

외부에서 전달받는 객체
외부에서 전달받은 객체를 바꾸는것은 금지됨
render를 호출하게됨

vue의 props와 같음

# state

내부에서 사용하는 객체
render를 호출하게됨
vue의 data와 같음

## |props|state|

|read only|비동기식 변경|
|수정될 수 없음|setState를 통해서 수정할 수 있음|

## setState

constructor외에서 state를 변경할때 setState를 사용해서 바꾸어주어야함, 그렇지않으면 react가 state가 바뀌었다는것을 감지할 수 없음

# js

## bind

this의 범위가 다름, 일반적으로 컴포넌트 내에서 쓰면은 this는 컴포넌트를 지칭하지만, function() {} 과같은 함수를 쓰게되면 this는 undefined가 됨
때문에 function() {}.bind(this) 를 사용해서 함수내의 this를 컴포넌트 this로 바인딩시켜주어야함
bind함수의 두번째 매개변수 부터는 bind를 붙인 함수의 매개변수로 들어가게 된다 예를들어

```javascript
function(id, num, event) {
    event.preventDefault();
}.bind(this, "1", 10)
```

이러한 bind함수에선 "1"과 10이 바인딩된 함수의 첫번째 id, 두번째 num 매개변수로 들어가게 된다. event 매개변수는 추가된 매개변수만큼 뒤로 밀린다

## redux

상위 컨텐츠는 하위 컨텐츠를 props를 통해서 직접적으로 바꿀 수 있지만
하위 컨텐츠는 상위 컨텐츠를 직접적으로 바꿀 수 없음 event를 대신 사용하여서 바꿈

이러한 리액트 구조는
상위컴포넌트가 데이터를 관리하는 구조를 가지게되는데
이는 직관적일 수 있지만 컴포넌트 수가 많아지게 된다면
코드의 복잡도는 올라간다.
또한 컴포넌트 depth가 깊어질 수록 건너건너 데이터를 주고 받게된다.
redux구조를 쓰면 상태 관리는 컴포넌트 바깥에서 하게 된다.
store라는 곳에서 모든 데이터가 관리되고
이곳의 데이터가 바뀐다면 리스너들에게 알려줘 상태가 업데이트가 되는것이다.

## shouldComponentUpdate

부모 컴포넌트가 변경이되면
자식 컴포넌트 모두가 랜더링이 되는데
이러면 비용의 문제가 커진다
때문에 그러한 필요없는 비용문제를 해결하기 위해 사용한다.

- render 이전에 호출된다

- 두개의 매개변수를 받을 수 있다 newProps와 newState

- return값이 true면 render가 호출되고
