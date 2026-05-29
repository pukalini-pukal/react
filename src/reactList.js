import React from "react";


function ReactList(){
    const fruits = ["Apple" ,"Banana","Cherry","Pineapple","Orange"];
     const users =[
        {id:1,name:'Geeks' ,age:30},
        {id:2,name:'for' ,age:25},
        {id:3,name:'Geeks' ,age:20},
     ];
    return(
        <div>
            <h1>Fruits List</h1>
            <ul>
                {fruits.map((f,index) =>(
                    <li key={index}>{f}</li>
                ))}
            </ul>

           
            <ul>
                {users.map((user) =>(
                    <li key={user.id}>
                        {user.name} is {user.age} years old.
                    </li>
                ))}
            </ul>
             <table>
           <tr>
            <th>Fruits</th>
            <th>Price</th>
            </tr>
            <tr>
                <td>Apple</td>
                <td>100</td>
            </tr>
            <tr>
                <td>Banana</td>
                <td>50</td>
            </tr>
            <tr>
                <td>Orange</td>
                <td>120</td>
            </tr>
            <tr>
                <td>Cherry</td>
                <td>200</td>
            </tr>
            </table>

            <ul>
                {users.map((user) =>(
                    user.age > 30 ?(
                        <li key = {user.id}> {user.name} is over 30 years old</li>
                    ) : (
                        <li key = {user.id}>{user.name} is under 30 years old</li>
                    )
                ))}
            </ul>

        </div>
    );

   
}
export default ReactList;