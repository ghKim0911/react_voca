import { Link } from "react-router-dom";
import dummy from "../../db/data.json";

export default function DayList(){
    // React에서 key가 필요한 이유? 인덱스는 왜 안씀?
    // 리액트는 key값이랑 안의 값이 바뀌면 다 바뀐줄 앎, 여기서 인덱스로 관리할 시 하나만 바뀌어도 다 바뀔 수 있음
    // 한마디로 화면의 1부분만 바뀌어도 되는걸 다 바꾸게 됨
    console.log(dummy);
    return  <>
                <ul className="list_day">
                    {dummy.days.map(day => (
                    <li key={day.id}>
                        <Link to="/day">Day {day.day}</Link>
                    </li>
                    ))}
                </ul>
            </>
};