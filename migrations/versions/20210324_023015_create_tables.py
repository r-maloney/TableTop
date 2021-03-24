"""create-tables

Revision ID: cba7f27c8333
Revises: ffdc0a98111c
Create Date: 2021-03-24 02:30:15.153271

"""
from alembic import op
import sqlalchemy as sa


# revision identifiers, used by Alembic.
revision = 'cba7f27c8333'
down_revision = 'ffdc0a98111c'
branch_labels = None
depends_on = None


def upgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.create_table('businesses',
    sa.Column('id', sa.Integer(), nullable=False),
    sa.Column('name', sa.String(length=100), nullable=False),
    sa.Column('description', sa.String(length=2000), nullable=False),
    sa.Column('img_url', sa.String(length=255), nullable=False),
    sa.Column('rating', sa.Float(), nullable=True),
    sa.Column('type', sa.String(length=20), nullable=True),
    sa.Column('address', sa.String(length=100), nullable=False),
    sa.Column('city', sa.String(length=50), nullable=False),
    sa.Column('state', sa.String(length=2), nullable=False),
    sa.Column('zip', sa.Integer(), nullable=False),
    sa.Column('longitude', sa.Float(), nullable=False),
    sa.Column('latitude', sa.Float(), nullable=False),
    sa.Column('date_created', sa.DateTime(), nullable=True),
    sa.Column('date_modified', sa.DateTime(), nullable=True),
    sa.PrimaryKeyConstraint('id')
    )
    op.create_table('charities',
    sa.Column('id', sa.Integer(), nullable=False),
    sa.Column('name', sa.String(length=100), nullable=False),
    sa.Column('description', sa.String(length=2000), nullable=False),
    sa.Column('img_url', sa.String(length=255), nullable=False),
    sa.Column('address', sa.String(length=100), nullable=True),
    sa.Column('city', sa.String(length=50), nullable=True),
    sa.Column('state', sa.String(length=2), nullable=True),
    sa.Column('zip', sa.Integer(), nullable=True),
    sa.Column('longitude', sa.Float(), nullable=True),
    sa.Column('latitude', sa.Float(), nullable=True),
    sa.Column('date_created', sa.DateTime(), nullable=True),
    sa.Column('date_modified', sa.DateTime(), nullable=True),
    sa.PrimaryKeyConstraint('id')
    )
    op.create_table('items',
    sa.Column('id', sa.Integer(), nullable=False),
    sa.Column('name', sa.String(length=100), nullable=False),
    sa.Column('description', sa.String(length=2000), nullable=False),
    sa.Column('img_url', sa.String(length=255), nullable=True),
    sa.Column('price', sa.Float(), nullable=False),
    sa.Column('donation_percentage', sa.Float(), nullable=False),
    sa.Column('business_id', sa.Integer(), nullable=False),
    sa.Column('date_created', sa.DateTime(), nullable=True),
    sa.Column('date_modified', sa.DateTime(), nullable=True),
    sa.ForeignKeyConstraint(['business_id'], ['businesses.id'], ),
    sa.PrimaryKeyConstraint('id')
    )
    op.create_table('orders',
    sa.Column('id', sa.Integer(), nullable=False),
    sa.Column('in_progress', sa.Boolean(), nullable=False),
    sa.Column('user_id', sa.Integer(), nullable=False),
    sa.Column('date_created', sa.DateTime(), nullable=True),
    sa.Column('date_modified', sa.DateTime(), nullable=True),
    sa.ForeignKeyConstraint(['user_id'], ['users.id'], ),
    sa.PrimaryKeyConstraint('id')
    )
    op.create_table('order_items',
    sa.Column('id', sa.Integer(), nullable=False),
    sa.Column('order_id', sa.Integer(), nullable=True),
    sa.Column('item_id', sa.Integer(), nullable=True),
    sa.Column('date_created', sa.DateTime(), nullable=True),
    sa.Column('date_modified', sa.DateTime(), nullable=True),
    sa.ForeignKeyConstraint(['item_id'], ['items.id'], ),
    sa.ForeignKeyConstraint(['order_id'], ['orders.id'], ),
    sa.PrimaryKeyConstraint('id')
    )
    op.create_table('user_orders',
    sa.Column('user_id', sa.Integer(), nullable=False),
    sa.Column('order_id', sa.Integer(), nullable=False),
    sa.ForeignKeyConstraint(['order_id'], ['orders.id'], ),
    sa.ForeignKeyConstraint(['user_id'], ['users.id'], ),
    sa.PrimaryKeyConstraint('user_id', 'order_id')
    )
    op.add_column('users', sa.Column('charity_id', sa.Integer(), nullable=True))
    op.add_column('users', sa.Column('date_created', sa.DateTime(), nullable=True))
    op.add_column('users', sa.Column('date_modified', sa.DateTime(), nullable=True))
    op.add_column('users', sa.Column('first_name', sa.String(length=50), nullable=False))
    op.add_column('users', sa.Column('last_name', sa.String(length=50), nullable=False))
    op.drop_constraint('users_username_key', 'users', type_='unique')
    op.create_foreign_key(None, 'users', 'charities', ['charity_id'], ['id'])
    op.drop_column('users', 'username')
    # ### end Alembic commands ###


def downgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.add_column('users', sa.Column('username', sa.VARCHAR(length=40), autoincrement=False, nullable=False))
    op.drop_constraint(None, 'users', type_='foreignkey')
    op.create_unique_constraint('users_username_key', 'users', ['username'])
    op.drop_column('users', 'last_name')
    op.drop_column('users', 'first_name')
    op.drop_column('users', 'date_modified')
    op.drop_column('users', 'date_created')
    op.drop_column('users', 'charity_id')
    op.drop_table('user_orders')
    op.drop_table('order_items')
    op.drop_table('orders')
    op.drop_table('items')
    op.drop_table('charities')
    op.drop_table('businesses')
    # ### end Alembic commands ###