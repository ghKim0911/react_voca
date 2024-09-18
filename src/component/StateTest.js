import { useState } from "react";
import UserName from "./UserName"

// state가 바뀌어야 react에서 화면을 다시 뿌려줌
// 그렇다면 state를 바꾸어줘야함 
// 그때 쓰이는 것이 hook의 useState

export default function StateTest(props){
    // let name = 'Mike';
    // 이거는 구조 분해 할당 구분
    // 배열이나 객체의 속성ㅇ을 분해해서 그 값을 변수에 담을 수 있게 하는 표현식
    // name이라는 상태 변수를 정의하고, 이를 업데이트하는 setName함수를 설정
    const [name, setName] = useState("Mike");
    const [age, setAge] = useState(props.age);

    function changeName(){
        const newName = name==='Mike'?'Jane':'Mike';
        // 이걸 보면 값은 변하는 걸 알 수 있지만 화면에서 그냥 저건 변수이므로 바뀐다고 캐치하지 않음
        console.log(name);
        // 그래서 hook중에 useState을 사용함
        setName(newName);
        setAge(age+1);
    }
    return  <div>
                <h1>State</h1>
                <h2>{name}/{age}</h2>
                <UserName name={name} />
                <button onClick={changeName}>ChangeName</button>
            </div>;
};