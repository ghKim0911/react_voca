import StateTest from "./StateTest";

export default function PropsTest(){
    // props는 properties의 약자
    return  <div>
                <h1>Props : properties</h1>
                <StateTest age={10} />
                <StateTest age={20} />
                <StateTest age={30} />
            </div>;
};