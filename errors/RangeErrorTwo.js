//non-numeric values
function checkTwo(value)
{
    if(["apple", "banana", "carrot"].includes(value) === false)
    {
        throw new RangeError('The argument must be an "apple", "banana", or "carrot".')
    }
}
try
{
    check("cabbage")
}
catch(error)
{
    if(error instanceof RangeError)
    {
        //Handle the error
    }
}

module.exports = {
    checkTwo,
}