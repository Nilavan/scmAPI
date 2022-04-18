from flask import Blueprint, render_template, request, flash, redirect, url_for, g
from .models import User
from . import db, address
from flask_login import login_user, login_required, logout_user, current_user

auth = Blueprint('auth', __name__)


@auth.route('/login', methods=['GET', 'POST'])
def login():
    # test_addr = '0xC5f94a6D002819ddCeb7AaA0D968Ad8Fe205301B'
    if request.method == 'POST':
        addr = address
        print(addr)
        user = User.query.filter_by(addr=addr).first()
        if user:
            flash('Logged in successfully!', category='success')
            login_user(user, remember=True)
            return redirect(url_for('views.home'))
        else:
            flash('Address does not exist. Check pricing', category='error')
            return redirect(url_for('views.pricing'))

    return render_template("login.html", user=current_user)


@auth.route('/logout')
@login_required
def logout():
    logout_user()
    return redirect(url_for('auth.login'))


@auth.route('/sign-up', methods=['GET', 'POST'])
def sign_up():
    if request.method == 'POST':
        addr = address
        user = User.query.filter_by(addr=addr).first()
        if user:
            flash('Address already exists. Please login', category='error')
            return redirect(url_for('auth.login'))
        else:
            new_user = User(addr=addr)
            db.session.add(new_user)
            db.session.commit()
            login_user(new_user, remember=True)
            flash('Account created!', category='success')
            return redirect(url_for('views.home'))

    return render_template("signup.html", user=current_user)
