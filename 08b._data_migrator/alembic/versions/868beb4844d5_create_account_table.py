"""create account table

Revision ID: 868beb4844d5
Revises: 
Create Date: 2024-04-24 12:44:18.256208

"""
from typing import Sequence, Union

from alembic import op
import sqlalchemy as sa



# revision identifiers, used by Alembic.
revision: str = '868beb4844d5'
down_revision: Union[str, None] = None
branch_labels: Union[str, Sequence[str], None] = None
depends_on: Union[str, Sequence[str], None] = None


def upgrade() -> None:
    print("Creating accounts table")
    accounts_table = op.create_table(
        'accounts',
        sa.Column('id', sa.Integer, primary_key=True),
        sa.Column('name', sa.String(50), nullable=False),
        sa.Column('description', sa.Unicode(200)),
    )
    
    print("Inserting data into accounts table")
    op.bulk_insert(accounts_table, [
        {'id': 1, 'name': 'John Smith', 'description': 'CEO'},
        {'id': 2, 'name': 'Ed Williams', 'description': 'CTO'},
        {'id': 3, 'name': 'Wendy Jones', 'description': 'CFO'},
    ])
 
def downgrade() -> None:
    op.drop_table('accounts')
