//Nullish Coalescing


//ES11, 2020

//null or undefined

//syntax:

    const x = {}
    const y = 20

   const resultT = x.length ? x : y
    const resultN = x.length ?? y

    console.log(resultT, resultN)