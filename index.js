var http=require('http');
var url ='https://api.openweathermap.org/data/2.5/weather?q=London,us&appid=909a095095f8ef7f523c6f0500876940&units=metric';
var server=http.createServer(function(request,response,next){
   var request=require('request');
   request(url,function(err,res,body){
        // console.log(body);
        var data=JSON.parse(body);//i took the whole response body as a variable "data" in jason format
      response.write("<html><body><div id='container'>");
      response.write("<h1>"+'city-name - :'+ data['name']+'<br>'+"<h1>");
      response.write("<h2>"+'Temperature - :'+ data.main['temp']+'<br>'+"<h1>");
      response.write("<h2>"+'SunSet-Time - :'+ new Date(data.sys['sunset']*1000)+'<br>'+"<h1>");
      response.write("</div></body></body></html>");
      response.end();
   });
});



server.listen(3000,'localhost',function(){
    console.log('server is working');
});
