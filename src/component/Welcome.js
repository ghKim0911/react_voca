import World from "./World";

export default function Welcome(){
    // JSX는 하나의 태그만 반환할 수 잇어서 크게!!! 감싸줘야함
    return  <div>
                <h2>Welcome Component</h2>
                <World/>
            </div>;
};