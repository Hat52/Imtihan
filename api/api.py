import ast
import redis
from creds import REDIS_HOST, REDIS_PASSWORD, REDIS_PORT

redis_client = redis.Redis(
    host=REDIS_HOST, port=REDIS_PORT, password=REDIS_PASSWORD)

class Database():
    def __init__(self,username):
        self.username=username
    def CheckIfUserExists(user_id):
        for key in redis_client.scan_iter():
            if str(key)[2:-1] == str(user_id):
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
        initial_user_data = {
            'username': username,
            'categories': list(),
            'password': password,
            'email': email
        }
        redis_client.set(name=str(username), value=str(initial_user_data))


    def ShowSpecifcUserData(user_id):
        return ast.literal_eval(str(redis_client.get(name=str(user_id)))[2:-1])

print(Database.ShowAllUsers())
