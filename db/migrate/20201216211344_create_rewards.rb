class CreateRewards < ActiveRecord::Migration[5.2]
  def change
    create_table :rewards do |t|
      t.integer :min_amount, null: false
      t.string :title, null: false
      t.string :description, null: false
      t.date :deliver_date, null: false
      t.integer :backer_count, null: false, :default => 0
      t.integer :project_id, null: false
    end
    add_index :rewards, :project_id
  end
end
