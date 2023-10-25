type Button = {
    color: string,
    size?: Size,
    title:string
}

type Size = {
    width: number,
    height: number,
}



function Calc(data:Button){

    console.log(data.size?.width);
    
}


