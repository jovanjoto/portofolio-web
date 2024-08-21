from flask import Flask
from flask_mail import Mail
from mailbox import Message
import os
from dotenv import load_dotenv
import ssl

load_dotenv()
app = Flask(__name__)
app.config["MAIL_SERVER"]=os.getenv('MAIL_SERVER')
app.config['MAIL_PORT'] = int(os.getenv('MAIL_PORT'))
app.config['MAIL_USERNAME'] = os.getenv('MAIL_USERNAME')
app.config['MAIL_PASSWORD'] = os.getenv('MAIL_PASSWORD')
app.config['MAIL_USE_TLS'] = True
app.config['MAIL_USE_SSL'] = False
mail = Mail(app)

context = ssl.create_default_context()
app.config['MAIL_SSL_CONTEXT'] = context
  
  