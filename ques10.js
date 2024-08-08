




// Product of multipleof three and five 

const numbers = [7, 13, 21, 34, 55, 89, 144, 233, 377, 610, 987, 1597];

const res = numbers.filter((x)=>
    {
        if (x%3==0 || x%5==0)
            {
                return x;

            }
    }).reduce((acc,curr)=>
        {
            return acc+curr;
        },0);

    console.log(res)


// palindrome of a strings 

const words = [
    "racecar",
    "hello",
    "deified",
    "world",
    "level",
    "programming",
    "radar",
    "civic",
    "javascript",
  ];

function reversestring(strr)
{
    let newstr="";
    for (let i =strr.length-1;i>=0;i--)
        {
            newstr+=strr[i]
        }
        return strr==newstr;

}

let result = words.map(function reversestring(strr)
{
    let newstr="";
    for (let i =strr.length-1;i>=0;i--)
        {
            newstr+=strr[i]
        }
        if(strr==newstr)
            {
                return strr;
            }

}
)
.filter((x)=>
    {
        if (x)
            {
                return x;

            }

    });
 console.log(result)




// first and last character swap of a string 

const strings = [
    "Hello",
    "world",
    "this",
    "is",
    "an",
    "example",
    "array",
    "of",
    "strings",
  ];
  
  let ress = strings.map((x)=>
    {
        let n =x.length
      x[0],x[n-1]=x[n-1],x[0]
      return x;
      

    })
    console.log(ress)