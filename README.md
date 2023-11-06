# React-1

## 설치와 환경 설정
### 설치
- `npm install -g create-react-app`
- `yarn global add create-react-app`

### 새 프로젝트 생성
- `npx create-react-app my-app`

## 기본 문법과 주석 처리
### 기본 문법
- JSX 문법을 사용해서 UI를 작성함.
- JSX는 JavaScript의 확장 문법으로, JavaScript 코드 안에 HTML 코드를 작성할 수 있다.

### 주석 처리 방법
- JSX 내에서 주석은 중괄호 {/* */}와 같이 작성할 수 있다.

## 데이터 타입
- JavaScript의 기본 데이터 타입과 동일하다.
- React는 JavaScript의 확장이며, 모든 기능과 데이터 타입을 그대로 사용할 수 있다.
- 따라서, JavaScript에 익숙하다면 React의 데이터를 다루는 데에도 걱정 없이 작업을 진행할 수 있을 것으로 예상된다.
### 문자열
### 숫자
### 불리언
### 배열
### 객체
### 함수

## React 컴포넌트의 기본 구조
- 함수 컴포넌트
- 클래스 컴포넌트

| 관련개념

    생명 주기: 애플리케이션이나 컴포넌트가 생성되고 업데이트 되며, 제거될 때까지 일어나는 일련의 이벤트와 상태 변화.

| 주요 메서드
  - componentDidMount()
  - componentDidUpdate(prevProps, prevState)
  - componentWillUnmount()
  
## React의 장점과 단점/유의점
| 장점

- 컴포넌트 기반 구조: UI를 컴포넌트로 나누어 개발하므로 재사용성이 높고, 유지보수가 쉽다.
- 가상 DOM: 가상 DOM을 사용해서 효율적인 렌더링이 가능하다.

| 단점/유의점

- 초기 학습: JSX 문법과 컴포넌트 기반의 접근 방식이 익숙지 않을 수 있다.
- 상태 관리: 복잡한 상태관리가 필요할 경우에는 상태 관리하는 라이브러리(Redux)를 사용해야 할 수도 있다.
- SEO: CSR 방식은 초기 로딩 속도를 향상시키지만, 검색 엔진 최적화는 서버 사이드 렌더링을 선호한다. 따라서, React에서 SSR 방식을 구현하려면 추가적인 설정과 작업이 필요해서 개발 과정이 복잡해질 수도 있다.