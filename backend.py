from flask import request, jsonify, Flask, url_for, redirect, render_template
from flask_sqlalchemy import SQLAlchemy
from flask_cors import CORS

#pip install Flask-SQLAlchemy
#pip install ruamel-yaml


#The __name__ argument is a special variable that Flask uses to determine the root path of the application.
app = Flask(__name__)
CORS(app)
app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///ideas.db'

db = SQLAlchemy(app)
# db.init_app(app)


class Idea(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    title = db.Column(db.String(100), nullable=False)
    category = db.Column(db.String(50), nullable=False)
    description = db.Column(db.String(500), nullable=False)
    likes = db.Column(db.Integer, default=0)
    dislikes = db.Column(db.Integer, default=0)
    # comments = db.relationship('Comment', backref='idea', lazy=True)

    def __repr__(self):
        return f"Idea('{self.title}', '{self.category}', '{self.description}')"

with app.app_context():
    db.create_all()


#Define a route for the root URL ("/")
@app.route('/home', methods=['GET'])
def home():
    # retrieve the list of all ideas from your database
    ideas = Idea.query.all()

    # convert the list of ideas to a list of dictionaries
    idea_list = []
    for idea in ideas:
        idea_dict = {
            'id': idea.id,
            'title': idea.title,
            'category': idea.category,
            'description': idea.description,
        }
        idea_list.append(idea_dict)

    # return the list of ideas as a JSON object
    return jsonify(idea_list)



@app.route('/submit_idea', methods=['POST'])
def submit_idea():
    # retrieve the data from the POST request
    data = request.json

    # create a new idea with the data
    idea = Idea(title=data['title'], category=data['category'], description=data['description'], likes=0, dislikes=0)

    # add the idea to the database
    db.session.add(idea)
    db.session.commit()

    # return the ID of the new idea
    return jsonify({'id': idea.id})

@app.route('/idea_details', methods=['GET', 'POST'])
def idea_details():
    # Handle GET request
    if request.method == 'GET':
        # Retrieve idea details from the database
        idea_id = request.args.get('id')  # Assuming the idea ID is passed in as a query parameter
        idea = Idea.query.get(idea_id)

        # Render the idea details template and pass the idea object to it
        return render_template('idea_details.html', idea=idea)

    # Handle POST request
    if request.method == 'POST':
        # Retrieve the idea ID and the new rating value from the submitted form data
        idea_id = request.form.get('id')
        rating = request.form.get('rating')

        # Update the rating value in the database
        idea = Idea.query.get(idea_id)
        if rating == 'like':
            idea.likes += 1
        elif rating == 'dislike':
            idea.dislikes += 1
        db.session.commit()

        # Redirect the user back to the idea details page
        return redirect(url_for('idea_details', id=idea_id))

 
if __name__ == "__main__":
    app.run(debug = True, host = "http://localhost", port = 5000)