import { useEffect ,useState } from "react";
import styled from "styled-components";

   function Clock() {
      const [time, setTime] = useState();
      
      function getTime (){
      const date = new Date();
   
    const hours = String(date.getHours()).padStart(2, "0");
    const minutes = String(date.getMinutes()).padStart(2, "0");
    const seconds = String(date.getSeconds()).padStart(2, "0");

    let nowTime =`${hours}:${minutes}:${seconds}`;
    setTime(nowTime);
      }

      useEffect(()=>{
         setInterval(getTime, 1000);
         return () => {
            setInterval(getTime, 1000)
        }

      },[]);
      
   const Clock = styled.h1
   `text-align: center`
   ;
    
    
   return <Clock>{time}</Clock>;
     
};
 

export default Clock;