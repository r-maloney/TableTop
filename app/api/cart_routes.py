from flask import Blueprint, jsonify, request
from flask_login import login_required
from app.models import db, Order, Item, Order_Items

cart_routes = Blueprint('cart', __name__)


@cart_routes.route('/<int:id>')
def cart(id):
    order = Order.query.filter_by(user_id=id, in_progress=True).first()
    order_items = Order_Items.query.filter_by(order_id=order.id).all()
    itemsList = [Item.query.filter(
        Item.id == item.item_id).first().to_dict() for item in order_items]
    if order:
        result = order.to_dict()
        result["items"] = itemsList
        return jsonify(result)
    else:
        new_order = Order(user_id=id, in_progress=True)
        db.session.add(new_order)
        db.session.commit()
        result = new_order.to_dict()
        result["items"] = itemsList
        return jsonify(result)


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
    print(order_item, "*******************************")
    db.session.delete(order_item)
    db.session.commit()
    return item


# @cart_routes.route('/<int:id>', methods=['PUT'])
# def update_cart(id):
#     print("*******************", id)
#     data = request.get_json()

#     # items = [[item['item']
#     #           for x in range(1, item['count'])] for item in data]
#     items = []
#     itemsList = []
#     for item in data:
#         for x in range(0, item['count']):
#             itemsList.append(Item.query.filter(
#                 Item.id == item['item']['id']).first())
#             # items.append(item['item']['id'])

#     # itemList = Item.query.filter(Item.id.in_(items)).all()
#     print("*******************", itemsList)
#     order = Order.query.get(id)

#     # for item in items:
#     #     order.items.append(item)
#     order.items.extend(itemsList)
#     print('item_count', order.items)
#     db.session.commit()
#     return order.to_dict()
