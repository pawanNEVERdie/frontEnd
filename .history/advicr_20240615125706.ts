const url :string ='https://quotes-inspirational-quotes-motivational-quotes.p.rapidapi.com/quote?token=ipworld.info';
const options:RequestInit ={
    method:'GET',
    headers:{
        'x-rapidapi-key': 'e44519d7dcmsh58546a138b3d6abp199d1ejsn70b82094198a',
		'x-rapidapi-host': 'quotes-inspirational-quotes-motivational-quotes.p.rapidapi.com'
    }
}
async function fetchQuiote() : Promise<void>{
try{
    const response = await  fetch(url,options);
    const data :{
        text:string,
        author:string
    } = await response.json()
    document.getElementById("quote").innerHTML= data.text
    document.getElementById("author")?.innerHTML=data.author
}
catch(error){
    alert(error.message);
}
}
fetchQuiote()