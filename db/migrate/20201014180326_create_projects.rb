class CreateProjects < ActiveRecord::Migration[5.2]
  def change
    create_table :projects do |t|
      t.string :title, null: false 
      t.text :description, null: false 
      t.date :end_date, null: false 
      t.integer :funding_goal, null: false
      t.integer :funding_amount, null: false, :default => 0
      t.integer :owner_id, null: false 
      t.timestamps
    end
    add_index :projects, :owner_id
  end
end
