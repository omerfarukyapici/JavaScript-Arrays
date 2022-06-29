(async () => {
    async function helloFunction(){
        return "Hello World";
    }
    const text = await helloFunction();
    console.log(text)

    const deneme = async () => {
        return "Ben denemeyim";
    }
    const text2 = await deneme();
    console.log(text2);


})()