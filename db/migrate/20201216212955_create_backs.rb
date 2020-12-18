class CreateBacks < ActiveRecord::Migration[5.2]
  def change
    create_table :backs do |t|
      t.integer :backer_id, null: false
      t.integer :reward_id, null: false
      t.integer :backing_amount, null: false
    end
  end
end
