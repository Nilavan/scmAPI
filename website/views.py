from flask import Blueprint, render_template, request
from flask_login import login_required, current_user
from . import db

views = Blueprint('views', __name__)


@views.route('/', methods=['GET', 'POST'])
def home():
    return render_template("home.html", user=current_user)


@views.route('/pricing.html', methods=['GET', 'POST'])
def pricing():
    return render_template("pricing.html", user=current_user)


@views.route('/apidoc.html', methods=['GET', 'POST'])
@login_required
def apidoc():
    return render_template("apidoc.html", user=current_user)
