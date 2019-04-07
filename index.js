const a = (a)=>{
    return  new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve({
                data: a
            })
        }, 2000);
    });
}

(async ()=>{
    const k = await a(78)
    console.log(k);
    
})()