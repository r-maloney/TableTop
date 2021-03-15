from flask import Blueprint, jsonify
from flask_login import login_required
from app.models import Charity

charity_routes = Blueprint('charities', __name__)


@charity_routes.route('/')
def charities():
    charities = Charity.query.all()
    return {"charities": [charity.to_dict() for charity in charities]}


@charity_routes.route('/<int:id>')
def charity(id):
    charity = Charity.query.filter_by(id=id).first()
    return jsonify(charity.to_dict())
