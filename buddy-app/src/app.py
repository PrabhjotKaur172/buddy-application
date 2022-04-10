from flask import Flask ,send_from_directory
from flask_sqlalchemy import SQLAlchemy
from flask import jsonify
from flask import request
from flask_cors import CORS

app = Flask(__name__)
# app = Flask(__name__, static_url_path='', static_folder='dist/buddy-app')
CORS(app)

app.config['SQLALCHEMY_DATABASE_URI'] = 'postgres://umbioacu:1j9KWmSadiqqKZdi9pP0qcW2rqSTBREm@manny.db.elephantsql.com/umbioacu'

app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False

db = SQLAlchemy(app)

class userprofile(db.Model):
    __tablename__ = 'userprofile'
    studentId = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String, nullable = False)
    bio = db.Column(db.String)
    module = db.Column(db.String, nullable  = False)
    startDate = db.Column(db.Date, nullable = False)
    endDate = db.Column(db.String, nullable = False)
    country = db.Column(db.String, nullable = False)
    hobby = db.Column(db.String)

    def __init__(self,studentId,name,bio,module,startDate,endDate,country,hobby):
        self.studentId = studentId
        self.name = name
        self.bio = bio
        self.module = module
        self.startDate = startDate
        self.endDate = endDate
        self.country = country
        self.hobby = hobby

    def to_json(self):
        return {
            'studentId': self.studentId,
            'name' : self.name,
            'bio': self.bio,
            'module': self.module,
            'startDate': self.startDate,
            'endDate': self.endDate,
            'country': self.country,
            'hobby': self.hobby
        }
  
# @app.route('/')
# def index(): 
#     return "Hello world"
#     # return app.send_static_file('index.html')

@app.route('/')
def root():
  return send_from_directory('./', 'index.html')

@app.route('/myProfile', methods=['POST'])
def myProfile():
    if request.method == 'POST':
        studentId = request.json['studentId'],
        name = request.json['name'],
        bio = request.json['bio']
        module = request.json['module'],
        startDate = request.json['startDate']
        endDate = request.json['endDate'],
        country = request.json['country']
        hobby = request.json['hobby'],

        if studentId == '' or name == '' or module == '' or startDate == '' or endDate == '' or country == '':
            return jsonify('Please enter the required fields.')
        else:
            myProfile = userprofile.query.filter_by(studentId=studentId,name=name,bio=bio,module=module,startDate=startDate,endDate=endDate,country=country,hobby=hobby).first()
            db.session.add(myProfile)
            db.session.commit()
            return jsonify('Your profile is saved successfully.')
#     return send_from_directory('register.html')

#     if request.method == 'GET':
#         studentId = request.json['studentId'],
#         name = request.json['name'],
#         bio = request.json['bio']
#         module = request.json['module'],
#         startDate = request.json['startDate']
#         endDate = request.json['endDate'],
#         country = request.json['country']
#         hobby = request.json['hobby'],

       
#         myProfile = userprofile.query.filter_by(studentId=studentId,name=name,bio=bio,module=module,startDate=startDate,endDate=endDate,country=country,hobby=hobby).first()
#         if myProfile:
#                return myProfile.to_json()
#         return jsonify('My profile not found.')


# @app.route('/<path:path>')
# def static_proxy(path):
#     # send_static_file will guess the correct MIME type
#     return app.send_static_file(path)
# if __name__ == '__main__':
#      app.run(debug=False)

@app.route('/<path:path>')
def static_proxy(path):
  return send_from_directory('./', path)

if __name__ == '__main__':
     app.run(debug=False)
