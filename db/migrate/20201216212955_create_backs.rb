class CreateBacks < ActiveRecord::Migration[5.2]
  def change
    create_table :backs do |t|
      t.integer :backer_id, null: false
      t.integer :reward_id
      t.integer :backing_amount, null: false
    end
    add_index :backs, :backer_id
    add_index :backs, :reward_id
  end
end
