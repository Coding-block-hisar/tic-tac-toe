import React, { useState } from 'react'
import './Tic.css';

function Tictactoe() {

    const [turn,setturn]=useState('x');
    const [cells,setcells]=useState(Array(9).fill(''))
    const [winner,setwinner]=useState()

    const reset =()=>
    {
        setwinner(null);
        setcells(Array(9).fill(''))
    }


    const checkforwinner=(square)=>{

        let combos={
            horizontal:[
                [0,1,2],
                [3,4,5],
                [6,7,8]
            ],
            vertical:[
                [0,3,6],
                [1,4,7],
                [2,5,8]
            ],
            diagnol:[
                [0,4,8],
                [2,4,6]
            ]
        };

        for (let combo in combos){
           
        combos[combo].forEach(pattern => {
            //console.log(pattern)
            if(square[pattern[0]]===square[pattern[1]]&& 
                square[pattern[1]]===square[pattern[2]] )
            {
                setwinner(square[pattern[0]]);
            }
        });
    }

    }

const handleclick=(num)=>
{
    //alert(num)
    const square=[...cells];
    if(cells[num]!=='')
    {
        alert("already clicked!!")
        return;
    }
    if(turn==='x')
    {
        square[num]='x';
        setturn('o')
    }
    else{
        square[num]='o';
        setturn('x')
    }
    setcells(square);
    checkforwinner(square);
    console.log(square);
}    

//destructuring the object 
const Col=({num})=>
{
    return <td onClick={()=>handleclick(num)}>{cells[num]}</td>
}

  return (
    <div>
       Player: {turn}
        <table>
            <tbody>
                <tr>
                   
                <Col num={0}/>
                <Col num={1}/>
                
                <Col num={2}/>
                </tr>
                <tr>
                <Col num={3}/>
                <Col num={4}/>
                <Col num={5}/>
                </tr>
                <tr>
                <Col num={6}/>
                <Col num={7}/>
                <Col num={8}/>
                </tr>
            </tbody>
        </table>
        {winner &&(
            <>
            <p>{winner} is the winner</p>
           </>
        )}
        <button onClick={()=>{reset()}}>play again</button>
    </div>
  )
}

export default Tictactoe;
