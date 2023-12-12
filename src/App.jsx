import "./App.css";
import {useState, useEffect} from "react";
import Demo from "./Demo.jsx";

const App = () => {
    const [box, setBox] = useState({
        box1: true,
        box2: true,
        box3: true
    });
    // const [data, setData] = useState([]);
    //
    // useEffect(() => {
    //   const fetchData = async () => {
    //     const response = await fetch("https://jsonplaceholder.typicode.com/posts");
    //     const json = await response.json();
    //     setData(json);
    //   };
    //   fetchData();
    // }, []);

    const handleOnChange = (event) => {
        setBox(prev => {
            return {
                ...prev,
                [event.target.name]: !event.target.checked
            }
        })
    }

    console.log("box", box);

    return (
        <>
            <input type="checkbox" id="box1" name="box1" value={box.box1} onChange={handleOnChange}/>
            <label htmlFor="box1"> Box-1</label><br/>
            <input type="checkbox" name="box2" value={box.box1} onChange={handleOnChange}/>
            <label htmlFor="box2"> Box-2</label><br/>
            <input type="checkbox" name="box3" value={box.box1} onChange={handleOnChange}/>
            <label htmlFor="box3"> Box-3</label><br/>


            <div className="root">
                {/*<Demo data={data}/>*/}
                {box.box1 && <div className="flex">BOX 1</div>}
                {box.box2 && <div className="flex">BOX 2</div>}
                {box.box3 && <div className="flex">BOX 3</div>}
            </div>
        </>

    );
};

export default App;
