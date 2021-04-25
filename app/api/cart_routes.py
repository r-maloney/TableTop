from flask import Blueprint, jsonify, request
from flask_login import login_required
from app.models import db, Order, Item, Order_Items

cart_routes = Blueprint('cart', __name__)


@cart_routes.route('/<int:id>')
def cart(id):
    order = Order.query.filter_by(user_id=id, in_progress=True).first()
    if order:
        return jsonify(order.to_dict())
    else:
        new_order = Order(user_id=id, in_progress=True)
        db.session.add(new_order)
        db.session.commit()
        return jsonify(new_order.to_dict())


@cart_routes.route('/<int:id>', methods=['POST'])
def add_to_cart(id):
    item = request.get_json()
    new_order_item = Order_Items(order_id=id, item_id=item['id'])
    db.session.add(new_order_item)
    db.session.commit()
    return item


@cart_routes.route('/<int:id>', methods=['DELETE'])
def remove_from_cart(id):
    item = request.get_json()
    order_item = Order_Items.query.filter_by(
        order_id=id, item_id=item["id"]).first()
    db.session.delete(order_item)
    db.session.commit()
    return item
