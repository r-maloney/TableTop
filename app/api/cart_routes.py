from flask import Blueprint, jsonify, request
from flask_login import login_required
from app.models import db, Order

cart_routes = Blueprint('cart', __name__)


@cart_routes.route('/<int:id>')
def cart(id):
    order = Order.query.filter_by(user_id=id, in_progress=True).first()
    if order:
        return jsonify({"cart": order.to_dict()})
    else:
        return {"cart": {}}


@cart_routes.route('/<int:id>', methods=['POST'])
def new_cart(id):
    data = request.get_json()
    in_progress = data['in_progress']
    user_id = data['user_id']
    new_order = Order(user_id=user_id, in_progress=in_progress)
    db.session.add(new_order)
    db.session.commit()
    return(data)
