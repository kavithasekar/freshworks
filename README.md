Freshworks data store- Backend assignment 
1.	Install nodejs for running this assignment 
2.	Npm install require packages 
3.	Node server.js(starting the server)
4.	Open postman for executing create, read and delete a data in and from a JSON file.
5.	 POST method(http:localhost:5000/create)
6.	GET method(http:localhost:5000/read/key) eg:key=key1(string)
7.	GET method(http:localhost:5000/delete/key)
8. you can set property called time to leave for a key and write into a json file and this property is an optional. If ttl(in seconds) is given then the key will not be accessed for further read or delete operations after that time duration reached .
It should be post in this way :
Use postman and pass the key value pair in body.
http:localhost:5000/create

{
"key1" : {"name":"kavitha","age":21}
"Ttl":120
}

For the above key its time to live duration is 120sec(2mins) after that key1 will be expired.If ttl is not given then it can be accessed everytime!
