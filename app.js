$/**
 * JSDoc 주석을 사용하여 함수를 설명한다.
 *
 * @param {string} elementNode - HTML 요소의 이름을 나타내는 문자열
 * @param {object} attributes - HTML 요소의 속성을 나타내는 객체
 * @param {array} children - 자식 엘리먼트로 구성된 배열
 * @returns {string} - 구성된 HTML 문자열
 *
 * @example
 * component(
 *   "div",
 *   { style: "color: blue;" },
 *   [component("hi", {}, ["This is Page 1"])]
 * );
 */

function component(elementNode, attributes, children) {
  // HTML Element 문자열로 '조립(assemble)'하는 패턴
  let elementStr = `<${elementNode}`;
  for (let key in attributes) {
    // 객체의 키(key)를 배열처럼 순회한다.
    // 매개변수 attributes는 객체여야 for in문을 사용할 수 있다.
    // 대표적으로 Python에서는 해당 문법 접근이 기본 반복문이다.
    elementStr += `${key} = "${attributes[key]}"`;
  }
  elementStr += ">";
  // 만약 children이라는 값이 '있다면' true 판정이 이루어진다.
  // 조건식에서 "존재유무"로도 사용하기도 한다.
  if (children) {
    children.forEach((child) => {
      // children 매개변수는 배열이어야 한다.
      // 배열의 각 요소를 순회하는 forEach()를 사용했다.
      // 절차형으로 for문을 사용해도 되지만, 자바스크립트 다운 방식으로 작성했다.
      if (typeof child === 'string') {
        elementStr += child;
      } else {
        elementStr += component(child.elementNode, child.attributes, child.children);
      }
    });
  }
  elementStr += `</${elementNode}>`; // 맨 위 변수에 덧붙여서 반환한다.
  
  return elementStr; // 함수가 호출되는 순간 문자열이 반환된다.
}
