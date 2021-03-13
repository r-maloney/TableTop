from flask import Blueprint, jsonify
from flask_login import login_required
from app.models import Item

item_routes = Blueprint('items', __name__)


@item_routes.route('/')
def items():
    items = Item.query.all()
    return {"items": [item.to_dict() for item in items]}
