const users = [
    { fName: "sama", lName: "bb", age: 25 },
    { fName: "sle", lName: "ew", age: 30 },
    { fName: "wee", lName: "fr", age: 25 },
];


//get all the firstname
const fname = users.map((user) => user.fName)
console.log(fname)


//get list of users where age < 30

const ageLessThan30 = users.filter((user) => user.age < 30)
console.log(ageLessThan30)


// get list of fistNames where ages < 30

const listOfFnameAgeLessThan30 = users.filter((user) => user.age < 30).map((user)=>user.fName);
console.log("usinf filter & map: ",listOfFnameAgeLessThan30)

        //the same can be done using reduce
        const listOfFnameAgeLessThan30WithReduce = users.reduce((result, currentUser) =>{
            if(currentUser.age < 30){
                result.push(currentUser.fName)
            }
            return result;
        }, [])
        console.log("using reduce: ",listOfFnameAgeLessThan30)


//get {25:2,30:1} where 25 is age and 2 is how many people of age 25

const peopleOfAge = users.reduce((acc, cur)=>{
    if(acc[cur.age]){
        acc[cur.age] = ++ acc[cur.age];
    }else{
        acc[cur.age] = 1;
    }
return acc;
}, {})

console.log("{25:2,30:1} : ",peopleOfAge)



const user_url = "https://dummyjson.com/users"

// fetch(user_url).then((res)=>{
//    return res.json()
// }).then((res)=>{
//     console.log(res)
// })

async function getUserList(){
    const users = await fetch(user_url);
    const jsonData = await users.json();
    console.log(jsonData)
}

getUserList();