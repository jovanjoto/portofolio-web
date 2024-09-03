import os
from flask import Flask , request
from config import app, mail
from flask_mail import Message

# flask --app app.py --debug run 
# app = Flask(__name__)
# app.config.from_object(Config)
# mail = Mail(app)
# email_schema = EmailSchema()

@app.route('/api/test')
def test():
    return(
      {"message": "Hello from the server!"}
    )
  
  
@app.route('/api/send-email', methods=['POST'])
def send_email():
  print(request.json)
  data = request.json
  name = data['name']
  email = data['email']
  message = data['message']

  print('data received')
  msg = Message(subject="Hello",
                sender=app.config.get("MAIL_USERNAME"),
                recipients=[email])
  msg.body = f"""
    Hello {name},

    Thank you for reaching out to me! I'm always excited to connect with new people and explore potential opportunities. I appreciate you taking the time to get in touch.

    I will review your message and get back to you as soon as possible. In the meantime, feel free to check out my portfolio and recent projects on my website.

    Looking forward to our conversation!

    Best regards,
    Jovan Njotohardjo
    """
  try:
    print("sending email")
    with app.app_context():
      mail.send(msg)
    print("email sent")
    return{"message" : "Email sent"}, 200
  except Exception as e:
    print(e) 
    return{"message" : "Failed to send email", "error" : str(e)}, 500
                 
if __name__ == "__main__":
  port = int(os.environ.get("PORT", 5000))
  app.run(host='0.0.0.0', port=port, debug=True)
  
  2