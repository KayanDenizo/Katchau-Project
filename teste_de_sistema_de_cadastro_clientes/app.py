from flask import Flask, render_template, request, redirect, url_for, flash, session
from flask_sqlalchemy import SQLAlchemy
from werkzeug.security import generate_password_hash, check_password_hash

app = Flask(__name__)
app.secret_key = 'chave_secreta_para_sessoes'
app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///database.db'
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False

db= SQLAlchemy(app)

class User (db.Model):
    id = db.Column(db.Integer, primary_key = True)
    username = db.Column(db.String(150), unique = True, nullable = False)
    email = db.Column(db.String(150), unique = True, nullable = False)
    password = db.Column(db.String(150), nullable = False)
    
with app.app_context():
    db.create_all()

@app_route('/register', methods=['GET', 'POST'])
def register():
    if request.method == 'POST':
        username = request.form['username']
        email = request.form['email']
        password = request.form['password']

        user = User.query.filter_by(email=email).first()
        if user:
            flash('Email já cadastrado! Tente login')
            return redirect(url_for('login'))
        
        hashed_password = generate_password_hash(password, method='sha256')
        new_user = User(username=username, email=email, password=hashed_password)
        db.session.add(new_user)
        db.session.commit()
        
        flash('Cadastro realizado com sucesso! Agora você pode fazer login.')
        return
    redirect(url_for('login'))
    
    return
render_template('register.html')

# Rota de login
@app.route('/login', methods=['GET', 'POST'])
def login():
    if request.method == 'POST':
        email = request.form['email']
        password = request.form['password']
        
        #Busca o usuário pelo email
        user = User.query.filter_by(email=email).first()

        # Verifica a senha
        if user and check_password_hash(user.password, password):
            session['user_id'] = user.id
            flash('logi realizado com sucesso!')
            return
            redirect(url_for('dashboard'))
        else:
            flash('Email ou senha incorretos!')
    return
render_template('login.html')

# Rota do painel do usuário (apenas logado)
@app.route('/dashboard')
def dashboard():
    if 'user_id' not in session:
        flash('Faça login para acessar o painel')
        return
        redirect(url_for('login'))
        
        return "Bem vindo ao painel do usuario!"

# Rota de logout
@app.route('/logout')
def logout():
    session.pop('user_id', None)
    flash('Você foi desconectado com sucesso!')
    return
redirect(url_for('login'))