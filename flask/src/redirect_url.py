from flask import *

app = Flask(__name__)

@app.route('/error')
def error():
  return "Error..No such page"

@app.route('/admin')
def admin():
  return "I am admin"

@app.route('/student')
def student():
  return "I am student"

@app.route('/staff1')
def staff():
  return "I am staff"

@app.route('/user/<name>')
def user(name):
  if name == 'admin':
    # Here adim neans route not function name
    return redirect(url_for('admin'))
  elif name == 'student':
    return redirect(url_for('student'))
  elif name == 'staff':
    return redirect(url_for('staff1'))
  else:
    return redirect(url_for('error'))


if __name__=='__main__':
  app.run(debug=True)