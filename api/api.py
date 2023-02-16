from flask import Flask, jsonify,request
from funcs import Database

app=Flask(__name__)

@app.route('/adduser')
def AddUser():
    username=request.args.get('username',None)
    email=request.args.get('email',None)
    password=request.args.get('password',None)
    if Database.AddUser(username=username,email=email,password=password):
        return 'Succsesfully added user to database',200
    else:
        return 'Error. user already exists',400

@app.route('/userinfo')    
def GetUserInfo():
    username=request.args.get('username',None)
    if Database.ShowSpecifcUserData(username=username)!=None:
        return Database.ShowSpecifcUserData(username=username),200
    else:
        return 'Error. user does not exist',400

# work on validating login and hosting
app.run(debug=True)  