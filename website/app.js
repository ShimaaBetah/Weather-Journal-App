/* Global Variables */
const apiKey = '&appid=07cb458e25d3d53d4fe14b756e3f5683&units=imperial';
const baseUrl = "https://api.openweathermap.org/data/2.5/weather?zip=";
const generate = document.querySelector("#generate");

// Create a new date instance dynamically with JS
let d = new Date();
let newDate = d.getMonth()+1+'.'+ d.getDate()+'.'+ d.getFullYear();

//events
generate.addEventListener('click',()=>{
    const zip = document.getElementById('zip').value;
    const feeling = document.getElementById('feelings').value;
    console.log(feeling);
    if(zip ===""){
        alert("Enter a Valid Zip Code");
    }
    else{
      getData(baseUrl,zip,apiKey).then((data)=>{
          postData('/addData',{temp:data.main.temp, date: newDate, content: feeling})
          
      }).then(updateUI)
       
    }
    
    
});



//async functions
//get data from api 
const getData = async (baseUrl,zip,apiKey)=>{
    
    const finalurl = baseUrl+zip+apiKey;
    const request = await fetch(finalurl);
    try{
        const data = request.json();
        console.log(data);
        return data;
    }
    catch(error){
        console.log(error);
    }
}
//postData function
const postData = async ( url = '', data = {})=>{

    const response = await fetch(url, {
    method: 'POST', 
    credentials: 'same-origin', 
    headers: {
        'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),    
  });

    try {
      const newData = await response.json();
             return newData
    }catch(error) {
    console.log("error", error);
    }
};

//function to get data from server and update UI
const updateUI = async()=>{
    const response = await fetch ('/all');
    try{
        const data = await response.json();
        document.getElementById('temp').innerHTML = data.temp;
        document.getElementById('date').innerHTML = data.date;
        document.getElementById('content').innerHTML = data.userResponse;
    }
    catch(error){
        console.log(error);
    }
    
}



