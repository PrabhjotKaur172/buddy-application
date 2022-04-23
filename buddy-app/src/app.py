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
    isbuddy = db.Column(db.String)
    studentassignedname = db.Column(db.String)
    studentassignedid = db.Column(db.Integer)

    def __init__(self,studentid,bio,module,startdate,enddate,country,hobby,name,isbuddy,studentassignedname,studentassignedid):
        self.studentid = studentid
        self.bio = bio
        self.module = module
        self.startdate = startdate
        self.enddate = enddate
        self.country = country
        self.hobby = hobby
        self.name = name
        self.isbuddy = isbuddy
        self.studentassignedname = studentassignedname
        self.studentassignedid = studentassignedid
    
 

    def to_json(self):
        return {
            'studentid': self.studentid,
            'bio': self.bio,
            'module': self.module,
            'startdate': self.startdate.strftime("%Y-%m-%d"),
            'enddate': self.enddate.strftime("%Y-%m-%d"),
            'country': self.country,
            'hobby': self.hobby,
            'name' : self.name,
            'isbuddy' : self.isbuddy,
            'studentassignedname' : self.studentassignedname,
            'studentassignedid' : self.studentassignedid
        }
     
class college_news(db.Model):
    __tablename__ = 'college_news'
    news_id = db.Column(db.Integer, primary_key=True, autoincrement=True)
    heading = db.Column(db.String)
    content = db.Column(db.String)
    author = db.Column(db.String)
    dateofnews = db.Column(db.Date)

    def __init__(self,heading,content,author,dateofnews):
        self.heading = heading
        self.content = content
        self.author = author
        self.dateofnews = dateofnews
    
    def to_json(self):
        return {
            'heading': self.heading,
            'content': self.content,
            'author': self.author,
            'dateofnews': self.dateofnews.strftime("%Y-%m-%d")
        }

@app.route('/')
def root():
  return send_from_directory('./', 'index.html')

@app.route('/saveProfile', methods=['POST'])
def saveProfile():
    if request.method == 'POST':
        studentids = request.json['studentid'],
        bios = request.json['bio'],
        modules = request.json['module'],
        startdates = request.json['startdate'],
        enddates = request.json['enddate'],
        countrys = request.json['country'],
        hobbys = request.json['hobby'],
        names = request.json['name'],
        isbuddys = request.json['isbuddy'],
        studentassignednames = request.json['studentassignedname'],
        studentassignedids = request.json['studentassignedid']

        if studentids == '' or names == '' or modules == '' or countrys == '':
            return jsonify('Please enter the required fields.')
        else:
            saveProfile = userprofile(studentid=studentids,bio=bios,module=modules,startdate=startdates,enddate=enddates,country=countrys,hobby=hobbys,name=names,isbuddy=isbuddys,studentassignedname=studentassignednames,studentassignedid=studentassignedids)
            db.session.add(saveProfile)
            db.session.commit()
            return jsonify(**request.json)

@app.route('/getProfile', methods=['GET'])
def getProfile():
    if request.method == 'GET':
        studentids = request.args['id']
        getProfile = userprofile.query.filter_by(studentid=studentids).first()
        if getProfile:
               return getProfile.to_json()
        return jsonify('Profile not found.')

@app.route('/updateProfile', methods=['PUT'])
def updateProfile():
    if request.method == 'PUT':
        studentids = request.args['id']
        getProfile = userprofile.query.filter_by(studentid=studentids).first()

        if 'bio' in request.json:
             getProfile.bio = request.json['bio']

        if 'module' in request.json:
             getProfile.module = request.json['module']

        if 'startdate' in request.json:
             getProfile.startdate = request.json['startdate']

        if 'enddate' in request.json:
             getProfile.enddate = request.json['enddate']

        if 'country' in request.json:
             getProfile.country = request.json['country']

        if 'hobby' in request.json:
             getProfile.hobby = request.json['hobby']
          
        if 'name' in request.json:
             getProfile.name = request.json['name']

        if 'isbuddy' in request.json:
             getProfile.isbuddy = request.json['isbuddy']

        if 'studentassignedname' in request.json:
             getProfile.studentassignedname = request.json['studentassignedname']
          
        if 'studentassignedid' in request.json:
             getProfile.studentassignedid = request.json['studentassignedid']
        
        db.session.commit()
        return getProfile.to_json()

@app.route('/getUnassignedBuddys', methods=['GET'])
def getUnassignedBuddys():
    if request.method == 'GET':
        getUnassignedBuddys = userprofile.query.filter_by(isbuddy='True' , studentassignedid = None).all()
        return jsonify([i.to_json() for i in getUnassignedBuddys])  
    return jsonify('No Buddy found.')

@app.route('/getYourAssignedBuddy', methods=['GET'])
def getYourAssignedBuddy():
    if request.method == 'GET':
        studentids = request.args['id']
        getYourAssignedBuddy = userprofile.query.filter_by(studentassignedid=studentids).first()
        if getYourAssignedBuddy:
               return getYourAssignedBuddy.to_json()
        return jsonify('Profile not found.')

@app.route('/getConnections', methods=['GET'])
def getConnections():
    if request.method == 'GET':
        modules = request.args['module']
        startdates = request.args['startdate']
        getConnections = userprofile.query.filter_by(module=modules , startdate = startdates).all()
        return jsonify([i.to_json() for i in getConnections])  
    return jsonify('No Buddy found.')

@app.route('/getCollegeNews', methods=['GET'])
def getCollegeNews():
    if request.method == 'GET':
        getCollegeNews = college_news.query.filter_by().all()
        return jsonify([i.to_json() for i in getCollegeNews])  
    return jsonify('No college news found.')


@app.route('/postCollegeNews', methods=['POST'])
def postCollegeNews():
    if request.method == 'POST':
        headings = request.json['heading'],
        contents = request.json['content'],
        authors = request.json['author'],
        newsdates = request.json['dateofnews']

        if headings == '' or contents == '' or authors == '' or newsdates == '':
            return jsonify('Please enter the required fields.')
        else:
            postCollegeNews = college_news(heading=headings,content=contents,author=authors,dateofnews=newsdates)
            db.session.add(postCollegeNews)
            db.session.commit()
            return jsonify(**request.json)

@app.route('/<path:path>')
def static_proxy(path):
  return send_from_directory('./', path)

if __name__ == '__main__':
     app.run(debug=True)
