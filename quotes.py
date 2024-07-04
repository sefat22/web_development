from flask import Flask, render_template, request,redirect, url_for
from flask_sqlalchemy import SQLAlchemy

#create an instante of the Flask class
app = Flask(__name__)

#connecting from FORM to postgresql (database)
app.config['SQLALCHEMY_DATABASE_URI'] = 'postgresql+psycopg2://postgres:Summer@2024@locahost/quotes'
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False

#create an instance of SQlAlchemy to pass data from the FORM to the database
db= SQLAlchemy(app)

#also need to create a class to represent the table in the database
#Model is the table in database and giving specifications of the columns
class Favquotes(db.Model):
      id = db.Column(db.Integer, primary_key=True)
      author = db.Column(db.String(30))
      quote = db.Column(db.String(1000))
      

#use a root decorator to create a root for the application
@app.route('/')  # the forward slash will bring it back to the home page.

def index():
      listcolors = ['magenta','babyblue', 'olive']
      return render_template('index.html', quote1 = "I cannot teach anybody anything, I can only make them think. - Socrates", colors = listcolors)
# We have to set up variables in the render template function to pass the data to the HTML file.


@app.route('/quotes')  #app.route links to the file named here
def quotes():
      return render_template('quotes.html')

@app.route('/process', methods = ['POST'])
def process():
      author = request.form['author']
      quote = request.form['quote']
      quotedata = Favquotes(author = author, quote = quote)
      db.session.add(quotedata)
      db.session.commit()
      return redirect(url_for('index'))

if __name__ == '__main__':
      with app.app_context():
            db.create_all()
      app.run()