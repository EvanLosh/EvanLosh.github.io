from config import app
from flask import make_response, request
from flask_restful import Api, Resource

from models import db, MakeupItem, Store, StoreHasItem


# @app.route("/makeup_items", methods = ["GET"])
# def makeup_items():
#     makeup_items_dict = [item.to_dict(rules = ('-store_item',)) for item in MakeupItem.query.all()]

#     response = make_response(
#         makeup_items_dict,
#         200
#     )

#     return response


if __name__ == '__main__':
    app.run(port = '5555', debug = True)