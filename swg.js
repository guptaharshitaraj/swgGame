let user=prompt("enter s,w,g")
let cpuI=Math.floor(Math.random()*3);
let cpu=["S","W","G"][cpuI]

const match =(cpu,user)=>

{
    if(cpu===user){
        return "Nobody. Match is tied"
    }
    else if(cpu==="S"&& user==="W")
        {return "cpu"
    }
    else if(cpu==="S" && user==="G")
       { return "user"
    }
    else if(cpu==="G" && user==="W")
    {
        return "user"
    }
}