# render

화면을 렌더해주는 함수

# props

외부에서 전달받는 객체

# state

내부에서 사용하는 객체

## setState

constructor외에서 state를 변경할때 setState를 사용해서 바꾸어주어야함, 그렇지않으면 react가 state가 바뀌었다는것을 감지할 수 없음

# js

## bind

this의 범위가 다름, 일반적으로 컴포넌트 내에서 쓰면은 this는 컴포넌트를 지칭하지만, function() {} 과같은 함수를 쓰게되면 this는 undefined가 됨
때문에 function() {}.bind(this) 를 사용해서 함수내의 this를 컴포넌트 this로 바인딩시켜주어야함
