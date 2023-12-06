from flask import *

app = Flask(__name__)

@app.route('/login',methods=['POST'])
def login():
    username=request.form['username']
    password=request.form['password']
    if username=="bhuvan" and password=='bhuvan':
       return "Welcome %s" %username
    else:
       return "Invalid Credentials"


  
if __name__=='__main__':
  app.run()