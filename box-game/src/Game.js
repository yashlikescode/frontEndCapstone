import React,{useState,useEffect} from 'react'

export const Game = () => {
    const styles = {
      t11: "#000000",
      t11: "#000000",
      t11: "#000000",
      t11: "#000000",
      t11: "#000000",
      t11: "#000000",
      t11: "#000000",
      t11: "#000000",
      t11: "#000000",
      t11: "#000000",
      t11: "#000000",
      t11: "#000000",
      t11: "#000000",
      t11: "#000000",
      t11: "#000000",
      t11: "#000000",
      t11: "#000000",
      t11: "#000000",
      t11: "#000000",
      t11: "#000000",
      t11: "#000000",
      t11: "#000000",
      t45: "#000000",
      t51: "#000000",
      t52: "#000000",
      t53: "#000000",
      t54: "#000000",
      t55: "#ffffff",
    };
    const [status,setStatus]=useState([0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]);
    const [curinterval, setcurInterval] = useState(5);
    const [interval,setInterval]=useState(5);
    const [startTime, setStartTime] = useState(Date.now());
        function startGame() {
          let tim = Date.now();
          setStartTime(Math.round(tim / 1000));
        }
    function updateStatus(){
        console.log('called');
        let n = Math.round(Math.random()*24);
        let newStatus = status.map((s,i)=>{
            if(i===n){
                return 1;
            }
            else
                return 0;
        });
        setStatus(newStatus);
    }
    function makeRed(){
        let f = Math.round(Math.random()/5*20) + 1;
        let s = Math.round(Math.random()/5 * 20) + 1;
        styles[0] = "#ff0000";
    }
    
    
    function updateInterval(){
        setInterval(curinterval);
        setInterval(curinterval);
        console.log("Interval is now: ", interval);
    }
    function updatecurInterval(e) {
      setcurInterval(e);
    }

    useEffect(() => {
      const inter = setInterval(updateStatus,5000);
      console.log('now');
    }, []);

    const [counter, setCounter] = useState(0);
    useEffect(() => {
      const interval = setInterval(()=>{
        console.log(1)
        setCounter((prevCounter)=>prevCounter+1);
      },10000);
    
      return () => {
        clearInterval(interval);
      }
    }, [])

  return (
    <div>
        {counter}
      <div className="controls">
        <button className="start">Start</button>
        <button className="pause">Pause</button>
        <button className="reset">Reset</button>
        <input
          className="interval"
          type="text"
          onChange={(e) => updatecurInterval(e.target.value)}
          value={curinterval}
        ></input>
        <button onClick={makeRed}>Set Time</button>
      </div>
      <div className="screen">
        <table>
          <tr>
            <td
              className="t51"
              style={
                status[0] === 0
                  ? { backgroundColor: "#000000" }
                  : { backgroundColor: "#ff0000" }
              }
            ></td>
            <td
              className="t51"
              style={
                status[1] === 0
                  ? { backgroundColor: "#000000" }
                  : { backgroundColor: "#ff0000" }
              }
            ></td>
            <td
              className="t51"
              style={
                status[2] === 0
                  ? { backgroundColor: "#000000" }
                  : { backgroundColor: "#ff0000" }
              }
            ></td>
            <td
              className="t51"
              style={
                status[3] === 0
                  ? { backgroundColor: "#000000" }
                  : { backgroundColor: "#ff0000" }
              }
            ></td>
            <td
              className="t51"
              style={
                status[4] === 0
                  ? { backgroundColor: "#000000" }
                  : { backgroundColor: "#ff0000" }
              }
            ></td>
          </tr>
          <tr>
            <td
              className="t51"
              style={
                status[5] === 0
                  ? { backgroundColor: "#000000" }
                  : { backgroundColor: "#ff0000" }
              }
            ></td>
            <td
              className="t51"
              style={
                status[6] === 0
                  ? { backgroundColor: "#000000" }
                  : { backgroundColor: "#ff0000" }
              }
            ></td>
            <td
              className="t51"
              style={
                status[7] === 0
                  ? { backgroundColor: "#000000" }
                  : { backgroundColor: "#ff0000" }
              }
            ></td>
            <td
              className="t51"
              style={
                status[8] === 0
                  ? { backgroundColor: "#000000" }
                  : { backgroundColor: "#ff0000" }
              }
            ></td>
            <td
              className="t51"
              style={
                status[9] === 0
                  ? { backgroundColor: "#000000" }
                  : { backgroundColor: "#ff0000" }
              }
            ></td>
          </tr>
          <tr>
            <td
              className="t51"
              style={
                status[10] === 0
                  ? { backgroundColor: "#000000" }
                  : { backgroundColor: "#ff0000" }
              }
            ></td>
            <td
              className="t51"
              style={
                status[11] === 0
                  ? { backgroundColor: "#000000" }
                  : { backgroundColor: "#ff0000" }
              }
            ></td>
            <td
              className="t51"
              style={
                status[12] === 0
                  ? { backgroundColor: "#000000" }
                  : { backgroundColor: "#ff0000" }
              }
            ></td>
            <td
              className="t51"
              style={
                status[13] === 0
                  ? { backgroundColor: "#000000" }
                  : { backgroundColor: "#ff0000" }
              }
            ></td>
            <td
              className="t51"
              style={
                status[14] === 0
                  ? { backgroundColor: "#000000" }
                  : { backgroundColor: "#ff0000" }
              }
            ></td>
          </tr>
          <tr>
            <td
              className="t51"
              style={
                status[15] === 0
                  ? { backgroundColor: "#000000" }
                  : { backgroundColor: "#ff0000" }
              }
            ></td>
            <td
              className="t51"
              style={
                status[15] === 0
                  ? { backgroundColor: "#000000" }
                  : { backgroundColor: "#ff0000" }
              }
            ></td>
            <td
              className="t51"
              style={
                status[17] === 0
                  ? { backgroundColor: "#000000" }
                  : { backgroundColor: "#ff0000" }
              }
            ></td>
            <td
              className="t51"
              style={
                status[18] === 0
                  ? { backgroundColor: "#000000" }
                  : { backgroundColor: "#ff0000" }
              }
            ></td>
            <td
              className="t51"
              style={
                status[19] === 0
                  ? { backgroundColor: "#000000" }
                  : { backgroundColor: "#ff0000" }
              }
            ></td>
          </tr>
          <tr>
            <td
              className="t51"
              style={
                status[20] === 0
                  ? { backgroundColor: "#000000" }
                  : { backgroundColor: "#ff0000" }
              }
            ></td>
            <td
              className="t51"
              style={
                status[21] === 0
                  ? { backgroundColor: "#000000" }
                  : { backgroundColor: "#ff0000" }
              }
            ></td>
            <td
              className="t51"
              style={
                status[22] === 0
                  ? { backgroundColor: "#000000" }
                  : { backgroundColor: "#ff0000" }
              }
            ></td>
            <td
              className="t51"
              style={
                status[23] === 0
                  ? { backgroundColor: "#000000" }
                  : { backgroundColor: "#ff0000" }
              }
            ></td>
            <td
              className="t51"
              style={
                status[24] === 0
                  ? { backgroundColor: "#000000" }
                  : { backgroundColor: "#ff0000" }
              }
            ></td>
          </tr>
        </table>
      </div>
      <div className="scores"></div>
    </div>
  );
}
