class CreateProjects < ActiveRecord::Migration[5.2]
  def change
    create_table :projects do |t|
      t.string :title
      t.string :category, null: false
      t.boolean :launched, :default => false
      t.text :story
      t.text :description, null: false
      t.string :location, null: false
      t.date :end_date
      t.integer :funding_goal
      t.integer :funding_amount, :default => 0
      t.string :image_url
      t.integer :owner_id, null: false
      t.timestamps
    end
    add_index :projects, :owner_id
  end
end
