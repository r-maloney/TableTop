from flask import Blueprint, jsonify
from flask_login import login_required
from app.models import Business

business_routes = Blueprint('businesses', __name__)


@user_routes.route('/')
@login_required
def businesses():
    businesses = Business.query.all()
    return {"businesses": [business.to_dict() for business in businesses]}
