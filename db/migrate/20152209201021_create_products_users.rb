class CreateProductsUsers < ActiveRecord::Migration
  def up
    create_table :products_users, id: false do |t|
      t.belongs_to :product
      t.belongs_to :user
    end
  end

  def down
    drop_table :products_users
  end
end
