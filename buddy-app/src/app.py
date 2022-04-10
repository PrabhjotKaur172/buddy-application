from flask import Flask ,send_from_directory
from flask_sqlalchemy import SQLAlchemy
from flask import jsonify
from flask import request
from flask_cors import CORS

# app = Flask(__name__)
app = Flask(__name__, static_url_path='', static_folder='dist/buddy-app')
CORS(app)

app.config['SQLALCHEMY_DATABASE_URI'] = 'postgresql://umbioacu:1j9KWmSadiqqKZdi9pP0qcW2rqSTBREm@manny.db.elephantsql.com/umbioacu'

app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False

db = SQLAlchemy(app)

class userprofile(db.Model):
    __tablename__ = 'userprofile'
    studentid = db.Column(db.Integer, primary_key=True)
    bio = db.Column(db.String)
    module = db.Column(db.String, nullable  = False)
    startdate = db.Column(db.Date)
    enddate = db.Column(db.String)
    country = db.Column(db.String, nullable = False)
    hobby = db.Column(db.String)
    name = db.Column(db.String, nullable = False)

    def __init__(self,studentid,bio,module,startdate,enddate,country,hobby,name):
        self.studentid = studentid
        self.bio = bio
        self.module = module
        self.startdate = startdate
        self.enddate = enddate
        self.country = country
        self.hobby = hobby
        self.name = name

    def to_json(self):
        return {
            'studentid': self.studentid,
            'bio': self.bio,
            'module': self.module,
            'startdate': self.startdate,
            'enddate': self.enddate,
            'country': self.country,
            'hobby': self.hobby,
            'name' : self.name,
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
        studentids = request.json['studentid'],
        bios = request.json['bio'],
        modules = request.json['module'],
        startdates = request.json['startdate'],
        enddates = request.json['enddate'],
        countrys = request.json['country'],
        hobbys = request.json['hobby'],
        names = request.json['name']

        if studentids == '' or names == '' or modules == '' or countrys == '':
            return jsonify('Please enter the required fields.')
        else:
            myProfile = userprofile(studentid=studentids,bio=bios,module=modules,startdate=startdates,enddate=enddates,country=countrys,hobby=hobbys,name=names)
            db.session.add(myProfile)
            db.session.commit()
            return jsonify(**request.json)

@app.route('/getProfile', methods=['GET'])
def getProfile():
    if request.method == 'GET':
        studentids = request.args['id']
        getProfile = userprofile.query.filter_by(studentid=studentids).first()
        if getProfile:
               return getProfile.to_json()
        return jsonify('Profile not found. You need to fill your details.')


@app.route('/<path:path>')
def static_proxy(path):
  return send_from_directory('./', path)

if __name__ == '__main__':
     app.run(debug=True)
