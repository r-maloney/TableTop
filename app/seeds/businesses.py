from app.models import db, Business
from faker import Faker

fake = Faker()


def seed_businesses():

    first = Business(name="Alt 2"	,	address="202 Massachusetts Ave NE"	,	city="Washington"	,	state="DC"	,	zip=20003	,	latitude=38.8944235	,	longitude=-77.002345	,
                     img_url="https://images.unsplash.com/photo-1533777324565-a040eb52facd?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1321&q=80"	,	rating=3.5	,	type="restaurant"	,	description="Italian, fine-dining"	,	)
    second = Business(name="El Tamare"	,	address="2471 18th St NW"	,	city="Washington"	,	state="DC"	,	zip=20009	,	latitude=38.9231818	,	longitude=-77.042032	,
                      img_url="https://images.unsplash.com/photo-1582169296194-e4d644c48063?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1203&q=80"	,	rating=3.2	,	type="restaurant"	,	description="Salvadoran & Mexican"	,	)
    third = Business(name="Mena Ristorante"	,	address="3111 K St NW"	,	city="Washington"	,	state="DC"	,	zip=20007	,	latitude=38.9026633	,	longitude=-77.061209	,
                     img_url="https://images.unsplash.com/photo-1551183053-bf91a1d81141?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1103&q=80"	,	rating=4.8	,	type="restaurant"	,	description="Italian, fine-dining"	,	)
    fourth = Business(name="Georges' Cupcakes"	,	address="3255 Prospect St NW"	,	city="Washington"	,	state="DC"	,	zip=20010	,	latitude=38.9060781	,	longitude=-77.064503	,
                      img_url="https://images.unsplash.com/photo-1607478900766-efe13248b125?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=892&q=80"	,	rating=3.8	,	type="restaurant"	,	description="Cupcake Shop"	,	)
    fifth = Business(name="Bungalow & Bergen"	,	address="1356 4th St NE"	,	city="Washington"	,	state="DC"	,	zip=20001	,	latitude=38.9103326	,	longitude=-76.998237	,
                     img_url="https://images.unsplash.com/photo-1588418353073-3acf1c412326?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=675&q=80"	,	rating=4.6	,	type="restaurant"	,	description="NY style bagels and sandwiches"	,	)
    sixth = Business(name="Phaleo"	,	address="821 F St NW"	,	city="Washington"	,	state="DC"	,	zip=20004	,	latitude=38.8973514	,	longitude=-77.023178	,
                     img_url="https://images.unsplash.com/photo-1515443961218-a51367888e4b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1050&q=80"	,	rating=4.3	,	type="restaurant"	,	description="Spanish tapas"	,	)
    seventh = Business(name="Tomcat Co."	,	address="1126 Florida Ave NE"	,	city="Washington"	,	state="DC"	,	zip=20002	,	latitude=38.9028604	,	longitude=-76.990554	,
                       img_url="https://images.pexels.com/photos/3054690/pexels-photo-3054690.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260"	,	rating=4.7	,	type="restaurant"	,	description="Chinese street food"	,	)
    eigth = Business(name="Osteria Murin"	,	address="1220 New Jersey Ave SE"	,	city="Washington"	,	state="DC"	,	zip=20003	,	latitude=38.8763564	,	longitude=-77.003676	,
                     img_url="https://images.unsplash.com/photo-1516685018646-549198525c1b?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80"	,	rating=4.5	,	type="restaurant"	,	description="Italian, fine-dining"	,	)
    ninth = Business(name="Atlantic Joe's Subs"	,	address="1920 5th St NE"	,	city="Washington"	,	state="DC"	,	zip=20018	,	latitude=38.9165632	,	longitude=-76.999508	,
                     img_url="https://images.unsplash.com/photo-1509722747041-616f39b57569?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80"	,	rating=3.3	,	type="restaurant"	,	description="Quick-service sandwiches"	,	)
    tenth = Business(name="ABC Matto"	,	address="1340 G St NE"	,	city="Washington"	,	state="DC"	,	zip=20002	,	latitude=38.89852	,	longitude=-76.995182	,
                     img_url="https://images.unsplash.com/photo-1498654896293-37aacf113fd9?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80"	,	rating=4.4	,	type="restaurant"	,	description="Cambodian & Taiwanese"	,	)
    eleventh = Business(name="The Rowling House"	,	address="2630 Calvert St NW"	,	city="Washington"	,	state="DC"	,	zip=20009	,	latitude=38.9256441	,	longitude=-77.050764	,
                        img_url="https://images.unsplash.com/photo-1500353391678-d7b57979d6d2?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80"	,	rating=4	,	type="restaurant"	,	description="Coffee Shop"	,	)
    twelfth = Business(name="The Beastern"	,	address="380 7th St SE"	,	city="Washington"	,	state="DC"	,	zip=20009	,	latitude=38.88514486	,	longitude=-76.995783	,
                       img_url="https://images.unsplash.com/photo-1568213816046-0ee1c42bd559?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1052&q=80"	,	rating=4.9	,	type="restaurant"	,	description="Wine Bar, charcuterie & cheese"	,	)

    db.session.add(first)
    db.session.add(second)
    db.session.add(third)
    db.session.add(fourth)
    db.session.add(fifth)
    db.session.add(sixth)
    db.session.add(seventh)
    db.session.add(eigth)
    db.session.add(ninth)
    db.session.add(tenth)
    db.session.add(eleventh)
    db.session.add(twelfth)

    db.session.commit()

# Uses a raw SQL query to TRUNCATE the businesses table.
# SQLAlchemy doesn't have a built in function to do this
# TRUNCATE Removes all the data from the table, and resets
# the auto incrementing primary key


def undo_businesses():
    db.session.execute('TRUNCATE businesses CASCADE;')
    db.session.execute('ALTER SEQUENCE businesses_id_seq RESTART WITH 1;')
    db.session.commit()
