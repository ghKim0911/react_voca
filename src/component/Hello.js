import styles from "./Hello.module.css";

// const Hello = function(){
//     <p>Hello</p>;
// };
// export default Hello;

export default function Hello(){
    function showName() {
        console.log("Mike");
      }
      function showAge(age) {
        console.log(age);
      }
      function showText(txt) {
        console.log(txt);
      }

    return  <div>
                <h1 className={styles.box}>Hello Component</h1>
                <button onClick={showName}>Show name</button>
                <button
                    onClick={() => {
                    showAge(10);
                    }}
                >
                    Show age
                </button>
                <input
                    type="text"
                    onChange={e => {
                    const txt = e.target.value;
                    showText(txt);
                    }}
                />
            </div>;
};