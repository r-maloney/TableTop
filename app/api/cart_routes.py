from flask import Blueprint, jsonify
from flask_login import login_required
from app.models import Order

cart_routes = Blueprint('cart', __name__)


@cart_routes.route('/<int:id>')
def cart(id):
    order = Order.query.filter_by(user_id=id, in_progress=True).first()
    print("*****************************", order)
    if order:
        return jsonify({"cart": order.to_dict()})
    else:
        return {"cart": {}}
