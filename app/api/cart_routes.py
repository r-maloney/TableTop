from flask import Blueprint, jsonify, request
from flask_login import login_required
from app.models import db, Order, Item

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
    return new_order.to_dict()


@cart_routes.route('/<int:id>', methods=['PUT'])
def update_cart(id):
    print("*******************", id)
    data = request.get_json()

    # items = [[item['item']
    #           for x in range(1, item['count'])] for item in data]
    items = []
    itemsList = []
    for item in data:
        for x in range(0, item['count']):
            itemsList.append(Item.query.filter(
                Item.id == item['item']['id']).first())
            # items.append(item['item']['id'])

    # itemList = Item.query.filter(Item.id.in_(items)).all()
    print("*******************", itemsList)
    order = Order.query.get(id)

    # for item in items:
    #     order.items.append(item)
    order.items.extend(itemsList)
    print('item_count', order.items)
    db.session.commit()
    return order.to_dict()
