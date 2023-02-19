import ast
import redis
from creds import REDIS_HOST, REDIS_PASSWORD, REDIS_PORT

redis_client = redis.Redis(
    host=REDIS_HOST, port=REDIS_PORT, password=REDIS_PASSWORD)

class Database():
    def __init__(self,username):
        self.username=username
    def CheckIfUserExists(username):
        for key in redis_client.scan_iter():
            if str(key)[2:-1] == str(username):
                return True

    def DeleteAllUsers():
        for key in redis_client.scan_iter():
            redis_client.delete(key)

    def ShowAllUsers():
        users = list()
        for user in redis_client.keys():
            users.append(str(user)[2:-1])
        return users

    def AddUser(username,email,password):
        if not Database.CheckIfUserExists(username):
            initial_user_data = {
                'username': username,
                'categories': list(),
                'password': password,
                'email': email
            }
            redis_client.set(name=str(username), value=str(initial_user_data))
            return True
        else:
            return False

    def ShowSpecifcUserData(username):
        if Database.CheckIfUserExists(username=username):
            return ast.literal_eval(str(redis_client.get(name=str(username)))[2:-1])
        else:
            return None
    
    def ValidateLogin(username,password):
        if Database.CheckIfUserExists(username=username):
            if Database.ShowSpecifcUserData(username=username)['password']==password:
                print(Database.ShowSpecifcUserData(username=username)['password'])
                return True
        else:
            return False

#print(Database.ShowAllUsers())
print(Database.AddUser('realhardik','r','123'))
#print(Database.ShowSpecifcUserData('wwww'))
#Database.DeleteAllUsers()
#WORK ON Validating login